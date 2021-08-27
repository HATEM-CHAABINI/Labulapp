import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState, useRef} from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CommonListItem from '../../../adapter/CommonListItem';
import {Cancel} from '../../../assets/svg/icons';
import CommonButton from '../../../Components/button/CommonButton';
import CheckBox from '../../../Components/checkbox/CheckBox';
import SearchBox from '../../../Components/other/SearchBox';
import {em, hm} from '../../../constants/consts';
import RelationshipType from '../../../model/user/RelationshipType';
import CommentText from '../../../text/CommentText';
import CommonText from '../../../text/CommonText';
import TitleText from '../../../text/TitleText';
const usersData = [
  {
    sort: 'families',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../../../assets/images/avatar.png'),
  },

  {
    sort: 'families',
    userName: 'Robert Richard',
    relationship: 'Ma famille',
    avatar: require('../../../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../../../assets/images/avatar.png'),
  },

  {
    sort: 'friends',
    userName: 'Amélie Petit',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('../../../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amélie Petit',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('../../../assets/images/avatar.png'),
  },

  {
    sort: 'neighbours',
    userName: 'Amélie',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('../../../assets/images/avatar.png'),
  },

  {
    sort: 'neighbours',
    userName: 'Antoine Durand',
    relationship: 'Mon voisin',
    avatar: require('../../../assets/images/avatar.png'),
  },
];
const selectedList = [
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../../../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../../../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../../../assets/images/avatar.png'),
  },
];

const userArray = [];
const CreateGroupScreen = props => {
  const [checked, setChecked] = useState([]);
  const [allUser, setallUser] = useState([]);
  const [usersList, setusersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [disabled, setDisabled] = useState(false)
  const searchedText = useRef('');
  useEffect(() => {
    userArray.splice(0, userArray.length);
    // setSelectedUser([]);
    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        var data = querySnapshot.docs.map(doc => ({data: doc.data()}));
        setusersList(querySnapshot.docs.map(doc => ({data: doc.data()})));
        setallUser(querySnapshot.docs.map(doc => ({data: doc.data()})));

        setChecked(new Array(data.length).fill(false));
      });
  }, [props]);
  const renderSelectedList = ({item}) => (
    <SelectedAvatarView
      avatar={
        item.data.profilePic !== undefined && item.data.profilePic !== ' '
          ? {uri: item.data.profilePic}
          : {
              uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg',
            }
      }
      userName={`${item.data.firstName} ${item.data.lastName}`}
      Email={item.data.email}
      id={item.data.uid}
    />
  );
  const clearSingleUser = (id, Email) => {
    const filteredUser = selectedUser.filter(user => {
      return user.data.uid !== id;
    });
    setSelectedUser(filteredUser);

    // setselectedUser(filteredUser);
  };
  const SelectedAvatarView = ({avatar, userName, id, Email}) => (
    <View
      style={{
        width: 60 * em,
        flexGrow: 1,
        alignSelf: 'baseline',
        marginRight: 10 * em,
      }}>
      <ImageBackground
        source={avatar}
        style={{
          marginBottom: 5 * hm,
          width: 54 * em,
          height: 54 * em,
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            borderWidth: 2 * em,
            width: 20 * em,
            height: 20 * em,
            borderRadius: 10 * em,
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
          }}>
          <Cancel
            width={16 * em}
            height={16 * em}
            onPress={() => clearSingleUser(id, Email)}
          />
        </View>
      </ImageBackground>
      <CommentText text={userName} style={styles.selectedFullName} />
    </View>
  );
  const onSearch = async search => {
    let condition = new RegExp(search.toLocaleUpperCase());
    var result = await Promise.all(
      allUser.filter(function (item, i) {
        if (item.data.firstName && item.data.lastName) {
          return (
            condition.test(item.data.firstName.toLocaleUpperCase()) ||
            condition.test(item.data.lastName.toLocaleUpperCase())
          );
        }
      }),
    );
    searchedText.current = search;
    setusersList(result);

    if (search.length === 0) {
      setusersList(allUser);
    }
  };
  const onClear = () => {
    setusersList(allUser);
  };
  const handleRemove = value => {
    let filteredUsers = selectedUser.filter(user => {
      return user.data.uid !== value.data.uid;
    });
    setSelectedUser(filteredUsers);
  };
  const handleChange = value => {
    let newArray = [...selectedUser];
    newArray.push(value);
    setSelectedUser(newArray);
    if (selectedUser.length === 10) {
      setDisabled(true)
    }
  };
  const renderCircleList = ({item, index}) => {
    const selectedIds = selectedUser.map(user => user.data.uid);
    return (
      <CommonListItem
        icon={
          <Image
            source={
              item.data.profilePic !== undefined && item.data.profilePic !== ' '
                ? {uri: item.data.profilePic}
                : {
                    uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg',
                  }
            }
            style={{width: 40 * em, height: 40 * em, marginRight: 15 * em}}
          />
        }
        title={`${item.data.firstName} ${item.data.lastName}`}
        titleStyle={{color: '#1E2D60', fontFamily: 'Lato-Black'}}
        rightView={
          <CheckBox
            oval
            // disabled={true}
        
            red={props.sort === RelationshipType.FAMILIY ? true : false}
            orange={props.sort === RelationshipType.FRIEND ? true : false}
            bgColor={props.themeColor}
            // isChecked={checked[index]}
            isChecked={selectedIds.includes(item.data.uid)}
            onClick={
              selectedIds.includes(item.data.uid)
                ? () => handleRemove(item)
                : () => handleChange(item)
              // userArray.push(item);
              // const arr = [...checked];
              // arr[index] = !arr[index];
              // setChecked(arr);
              // setSelectedUser(userArray);
            }
          />
        }
        style={styles.listItem}
      />
    );
  };
  return (
    <View style={styles.container}>
      <CommonText
        style={styles.header}
        text="Annuler"
        color="#6A8596"
        onPress={() => Actions.pop()}
      />
      <TitleText text="Nouveau groupe" style={styles.title} />
      <SearchBox
        comment="Rechercher un contact"
        style={{height: 52 * em}}
        onSearch={onSearch}
        onClear={onClear}
      />
      {selectedUser.length > 0 ? (
        <View
          style={{height: 90 * em, marginTop: 15 * em, marginBottom: 25 * em}}>
          <FlatList
            horizontal={true}
            data={selectedUser}
            renderItem={renderSelectedList}
            keyExtractor={i => i.id}
          />
        </View>
      ) : null}
      <FlatList
        data={usersList}
        renderItem={renderCircleList}
        keyExtractor={i => i.id}
      />

      <CommonButton
        text="Continuer"
        style={{
          backgroundColor: props.themeColor,
          bottom: 30 * hm,
          position: 'absolute',
          alignSelf: 'center',
        }}
        onPress={() => {
          Actions.nameGroup({
            themeColor: props.themeColor,
            sort: props.sort,
            selectedUser: selectedUser,
          });
        }}
      />
    </View>
  );
};

const styles = {
  container: {flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20 * em},
  title: {textAlign: 'left', marginTop: 23 * em, marginBottom: 17 * em},
  header: {marginTop: 39 * hm, alignSelf: 'flex-end'},
  selectedFullName: {
    fontSize: 12 * em,
    height: 30 * em,
    color: '#1E2D60',
    marginBottom: 0,
    fontFamily: 'Lato-Bold',
  },
  listItem: {marginBottom: 35 * em, marginTop: 2 * hm},
};

export default CreateGroupScreen;
