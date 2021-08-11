import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { em, hm } from '../../../constants/consts';
import CirclesCommonListItem from '../../../adapter/CirclesCommonListItem';
import { FlatList } from 'react-native-gesture-handler';
import CommonCircularButton from '../../../Components/button/CommonCircularButton';
import { Actions } from 'react-native-router-flux';
import UserType from '../../../model/user/UserType';
import UserOptionPopupScreen from '../myCircles/UserOptionPopupScreen';
import GroupOptionPopupScreen from '../myCircles/GroupOptionPopupScreen';
import { AddFamily, AddFriend, AddNeighbor, AddProAbonne } from '../../../assets/svg/icons';
import User from '../../../model/user/User';
import RelationshipType from '../../../model/user/RelationshipType';
import Group from '../../../model/user/Group';

const myContacts = [
  new User('Amandine Bernard', require('../../../assets/images/avatar.png'), [
    RelationshipType.PRO,
  ]),
  new User('Robert Richard', require('../../../assets/images/avatar.png'), [RelationshipType.PRO]),
  new User('Antoine Durand', require('../../../assets/images/avatar.png'), [RelationshipType.NEIGHBOR]),
  new User('Amélie Petit', require('../../../assets/images/avatar.png'), [RelationshipType.NEIGHBOR, RelationshipType.PRO]),
  new User(
    'Mathieu Thomas',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.PRO],
    [1, 2]
  ),
  new User('Michel Roux', require('../../../assets/images/avatar.png'), [RelationshipType.PRO], [0, 1]),
  new User(
    'Florine Girard',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.PRO],
    [0, 2]
  ),
  new User(
    'David Bonnet',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.NEIGHBOR, RelationshipType.PRO],
    [3, 1]
  ),
  new User('Zoé Joly', require('../../../assets/images/avatar.png'), [RelationshipType.FRIEND, RelationshipType.PRO], [1]),
  new User('Chloé Robert', require('../../../assets/images/avatar.png'), [RelationshipType.PRO], [0, 1]),
  new User(
    'Marine Lucas',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.PRO],
    [2]
  ),
  new User('Morgane Sanchez', require('../../../assets/images/avatar.png'), [RelationshipType.NEIGHBOR]),
];
const myGroups = [
  new Group(UserType.GROUP, 'Aide aux travaux de Robert', RelationshipType.NEIGHBOR, 3,5),
  new Group(UserType.GROUP, 'Clients fidèles', RelationshipType.PRO, 1,5),
  new Group(UserType.GROUP, 'Aide aux travaux de Robert', RelationshipType.FRIEND, 2),
];
export { myContacts };

const addIconSize = { width: 59 * em, height: 59 * em };
const themeButtons = [
  { id: RelationshipType.PRO, icon: AddProAbonne(addIconSize), color: '#1E2D60' },
  { id: RelationshipType.FRIEND, icon: AddFriend(addIconSize), color: '#1E2D60' },
  { id: RelationshipType.NEIGHBOR, icon: AddNeighbor(addIconSize), color: '#1E2D60' },
];
const MesAbonnesListScreen = (props) => {
  const sort = props.sort;
  console.log('sorrttttt', sort);
  const [groupOptionVisible, setGroupOptionVisible] = useState();
  const [userOptionVisible, setUserOptionVisible] = useState(null);
  const themeBtn = themeButtons.find((item) => item.id === sort);
  const renderFlatList = ({ item }) => {
    if (item.relationship === sort) {
      if (item.type === UserType.GROUP) {
        return (
          <CirclesCommonListItem
            sort={item.relationship}
            type={item.type}
            name={item.name}
            members={item.members}
            subName={item.number}
            style={styles.listItem}
            onLeftPress={() => {
              Actions.groupDetail({ data: item });
            }}
            onRightPress={() => setGroupOptionVisible(item)}
          />
        );
      }
    }
    if (item.relationship.includes(sort)) {
      const group = myGroups.filter((g) => g.relationship === sort).map((g) => g.id);
      const hasGroup = item.groupID ? !group.every((id) => !item.groupID.includes(id)) : undefined;
      if (!hasGroup) {
        return (
          <CirclesCommonListItem
            name={item.name}
            subName={item.relationship.join('/')}
            icon={item.photo}
            style={styles.listItem}
            onPress={() => setUserOptionVisible(item)}
          />
        );
      } else {
        return <></>;
      }
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={myGroups.concat(myContacts)}
        renderItem={renderFlatList}
        style={{
          backgroundColor: '#ffffff',
          flex: 1,
          width: '100%',
          paddingTop: 25 * em,
          paddingHorizontal: 30 * em,
          // backgroundColor: '#ffffff',
        }}
        keyExtractor={(i) => i.id}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30 * em,
          right: 30 * em,
          shadowColor: '#254D56',
          shadowOffset: {
            width: 0,
            height: 12 * em,
          },
          shadowOpacity: 0.16,
          shadowRadius: 25 * em,
          elevation: 3 * em,
        }}
        onPress={() => Actions.createGroup({ themeColor: themeBtn.color, sort: sort })}>
        {themeBtn.icon}
      </TouchableOpacity>
      <UserOptionPopupScreen data={userOptionVisible} onPress={() => setUserOptionVisible(null)} />
      <GroupOptionPopupScreen data={groupOptionVisible} onPress={() => setGroupOptionVisible(null)} />
    </View>
  );
};
export default MesAbonnesListScreen;
const styles = {
  container: { flex: 1, backgroundColor: '#F0F5F7', paddingTop: 10 * hm },
  listItem: {
    height: 42 * hm,
    marginBottom: 35 * hm,

    width: 315 * em,
  },
  icon: { width: 25 * em, height: 18 * em, tintColor: '#ffffff' },
};
