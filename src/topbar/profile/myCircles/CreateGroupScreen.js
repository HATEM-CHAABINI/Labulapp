import React, { useState } from 'react';
import { View, Image, ImageBackground, FlatList } from 'react-native';
import TitleText from '../../../text/TitleText';
import { em, hm } from '../../../constants/consts';
import { Actions } from 'react-native-router-flux';
import CommonText from '../../../text/CommonText';
import SearchBox from '../../../Components/other/SearchBox';
import CommentText from '../../../text/CommentText';
import CommonListItem from '../../../adapter/CommonListItem';
import CheckBox from '../../../Components/checkbox/CheckBox';
import CommonButton from '../../../Components/button/CommonButton';
import { Cancel } from '../../../assets/svg/icons';
import RelationshipType from '../../../model/user/RelationshipType';
import { myContacts } from './MyCirclesTabScreen';
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
const SelectedAvatarView = ({ avatar, userName }) => (
  <View style={{ width: 60 * em, flexGrow: 1, alignSelf: 'baseline', marginRight: 10 * em }}>
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
        <Cancel width={16 * em} height={16 * em} />
      </View>
    </ImageBackground>
    <CommentText text={userName} style={styles.selectedFullName} />
  </View>
);

const CreateGroupScreen = (props) => {
  const [checked, setChecked] = useState(new Array(usersData.length).fill(false));
  const renderSelectedList = ({ item }) => <SelectedAvatarView avatar={item.avatar} userName={item.userName} />;
  const renderCircleList = ({ item, index }) => {
    return (
      <CommonListItem
        icon={<Image source={item.photo}
         style={{ width: 40 * em, height: 40 * em, marginRight: 15 * em }} 
         />}
        title={item.name}
        titleStyle={{ color: '#1E2D60', fontFamily: 'Lato-Black' }}
        rightView={
          <CheckBox
            oval
            red={props.sort === RelationshipType.FAMILIY ? true : false}
            orange={props.sort === RelationshipType.FRIEND ? true : false}
            bgColor={props.themeColor}
            isChecked={checked[index]}
            onClick={() => {
              const arr = [...checked];
              arr[index] = !arr[index];
              setChecked(arr);
            }}
          />
        }
        style={styles.listItem}
      />
    );
  };
  return (
    <View style={styles.container}>
      <CommonText style={styles.header} text="Annuler" color="#6A8596" onPress={() => Actions.pop()} />
      <TitleText text="Nouveau groupe" style={styles.title} />
      <SearchBox comment="Rechercher un contact" style={{ height: 52 * em }} />
      <View style={{ height: 90 * em, marginTop: 15 * em, marginBottom: 25 * em }}>
        <FlatList horizontal={true} data={selectedList} renderItem={renderSelectedList} keyExtractor={(i) => i.id} />
      </View>
      <FlatList data={myContacts} renderItem={renderCircleList} keyExtractor={(i) => i.id} />
  {  console.log(props.themeColor," njfjfjfjfjfjfjfj ",props.sort)}
      <CommonButton
        text="Continuer"
        style={{ backgroundColor: props.themeColor, bottom: 30 * hm, position: 'absolute', alignSelf: 'center' }}
       
        onPress={() => Actions.nameGroup({ themeColor: props.themeColor, sort: props.sort })}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20 * em },
  title: { textAlign: 'left', marginTop: 23 * em, marginBottom: 17 * em },
  header: { marginTop: 39 * hm, alignSelf: 'flex-end' },
  selectedFullName: { fontSize: 12 * em, height: 30 * em, color: '#1E2D60', marginBottom: 0, fontFamily: 'Lato-Bold' },
  listItem: { marginBottom: 35 * em,marginTop:2*hm },
};

export default CreateGroupScreen;
