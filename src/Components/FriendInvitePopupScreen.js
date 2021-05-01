import React, { useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonText from '../text/CommonText';
import TitleText from '../text/TitleText';
import SearchBox from '../textInput/SearchBox';
import SearchCommonListItem from '../adapter/SearchCommonListItem';
import Modal from 'react-native-modal';
import User from '../model/user/User';
import RelationshipType from '../model/user/RelationshipType';
const users = [
  new User(
    'Amandine Bernard',
    require('../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
  new User('Amélie Petit', require('../assets/images/avatar.png'), [RelationshipType.NEIGHBOR], 'user@labul.com'),
  new User('Antoine Durand', require('../assets/images/avatar.png'), [RelationshipType.NEIGHBOR], 'user@labul.com'),
  new User('Robert Dupont', require('../assets/images/avatar.png'), '', 'user@labul.com'),
  new User('Julien Girar', require('../assets/images/avatar.png'), '', 'user@labul.com'),
];
const FriendInvitePopupScreen = (props) => {
  const [searchedUsers, getSearchResult] = useState([
    {
      id: 0,
      userName: 'Amandine Bernard',
      avatar: require('../assets/images/avatar.png'),
      invited: true,
    },
    {
      id: 1,
      userName: 'Amélie Petit',
      avatar: require('../assets/images/avatar.png'),
      invited: false,
    },
    {
      id: 2,
      userName: 'Antoine Durand',
      avatar: require('../assets/images/avatar.png'),
      invited: true,
    },
    {
      id: 3,
      userName: 'Robert Dupont',
      avatar: require('../assets/images/avatar.png'),
      invited: true,
    },
    {
      id: 4,
      userName: 'Julien Girard',
      avatar: require('../assets/images/avatar.png'),
      invited: true,
    },
  ]);
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem
      text={item.userName}
      // subText={item.relationship}
      icon={item.avatar}
      style={styles.listItem}
      inviteBtn
      invited={item.invited}
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
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View>
        <CommonText text="Fermer" style={styles.header} onPress={() => props.onPress()} />
        <View style={styles.body}>
          <TitleText text="Inviter" style={styles.title} />
          <SearchBox style={styles.searchbox} onChangeText={() => {}} />
          <FlatList data={searchedUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
        </View>
      </View>
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 38 * hm,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: { marginRight: 30 * em, marginBottom: 18 * hm, marginTop: 25 * hm, alignSelf: 'flex-end' },
  body: { marginLeft: 30 * em, marginRight: 30 * em },
  title: { marginBottom: 17 * hm, alignSelf: 'flex-start' },
  searchbox: { marginBottom: 29 * hm, height: 52 * hm },
  listItem: { marginBottom: 35 * hm },
};
export default FriendInvitePopupScreen;
