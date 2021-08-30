import React, {useEffect, useState, useRef} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  View,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import {em, hm} from '../constants/consts';
import CommonText from '../text/CommonText';
import TitleText from '../text/TitleText';
import CommonButton from '../Components/button/CommonButton';
import {Actions} from 'react-native-router-flux';
import User from '../model/user/User';
import SearchBox from '../Search/SearchBox';
import RelationshipType from '../model/user/RelationshipType';
import Modal from 'react-native-modal';
import SearchCommonListItem from '../adapter/SearchCommonListItem';
import ProfileCommonHeader from './header/ProfileCommonHeader';
import CircleHeader from './header/CircleHeader';
import UserOptionPopupScreen from '../topbar/profile/myCircles/UserOptionPopupScreen';

const users = [
  new User(
    'Amandine Bernard',
    require('../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    'user@labul.com',
  ),
  new User(
    'Amélie Petit',
    require('../assets/images/sample_user_2.png'),
    [RelationshipType.NEIGHBOR, RelationshipType.FRIEND],
    'user@labul.com',
  ),
];

const SearchContact = props => {
  const [userOptionVisible, setUserOptionVisible] = useState(null);
  const [searchedUsers, getSearchResult] = useState(true);
  const [allUser, setallUser] = useState([]);
  const [usersList, setusersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const searchedText = useRef('');
  useEffect(() => {
    // setSelectedUser([]);
    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        var data = querySnapshot.docs.map(doc => ({data: doc.data()}));
        setusersList(querySnapshot.docs.map(doc => ({data: doc.data()})));
        setallUser(querySnapshot.docs.map(doc => ({data: doc.data()})));
      });
  }, [props]);
  const onClear = () => {
    setusersList(allUser);
  };

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

  const renderFlatList = ({item}) => (
    <SearchCommonListItem
      text={item.data.firstName + ' ' + item.data.lastName}
      subText={item.relationship ? item.relationship.join('/') : undefined}
      icon={
        item.data.profilePic !== undefined && item.data.profilePic !== ' '
          ? {uri: item.data.profilePic}
          : {
              uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg',
            }
      }
      option={true}
      onPress={() => setUserOptionVisible(item.data)}
      style={styles.listItem}
    />
  );
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar
        opa
        backgroundColor="rgba(30, 45, 96, 0.8)"
        barStyle="light-content"
      />

      <CircleHeader
        title="Rechercher"
        onCancelPress={() => props.onPress()}
        style={styles.header}
      />
      <View
        style={{
          width: 349 * em,
          height: 20 * hm,
          marginTop: -10 * hm,
          alignSelf: 'center',
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20 * em,
          borderTopRightRadius: 20 * em,
        }}
        opacity={0.5}
      />
      <View style={styles.body}>
        <SearchBox
          style={styles.searchbox}
          onSearch={onSearch}
          onChangeText={text => {
            if (text) {
              onSearch(text);
            } else {
              setusersList(allUser);
            }
          }}
          onClear={onClear}
        />
        <FlatList
          data={usersList}
          renderItem={renderFlatList}
          keyExtractor={i => i.id}
        />
      </View>
      <UserOptionPopupScreen
        data={userOptionVisible}
        onPress={() => setUserOptionVisible(null)}
      />
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 20.5 * hm,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {marginLeft: 1 * em, marginBottom: 10 * hm, marginTop: 27 * hm},
  body: {paddingHorizontal: 30 * em, alignItems: 'center', flex: 1},
  title: {
    marginTop: 15 * hm,
    // , fontFamily: 'Lato-Black'
  },
  searchbox: {
    marginTop: 25 * hm,
    height: 44 * hm,
    width: 315 * em,
    marginLeft: 30 * em,
    marginRight: 30 * em,
  },
  listItem: {
    height: 42 * hm,
    marginTop: 15 * hm,
    paddingHorizontal: 3 * em,
    width: 315 * em,
  },
};
export default SearchContact;
