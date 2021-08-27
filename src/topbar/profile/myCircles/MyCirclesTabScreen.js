import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CirclesCommonListItem from '../../../adapter/CirclesCommonListItem';
import {AddFamily, AddFriend, AddNeighbor} from '../../../assets/svg/icons';
import {em, hm, WIDTH} from '../../../constants/consts';
import Group from '../../../model/user/Group';
import RelationshipType from '../../../model/user/RelationshipType';
import User from '../../../model/user/User';
import UserType from '../../../model/user/UserType';
import GroupOptionPopupScreen from './GroupOptionPopupScreen';
import UserOptionPopupScreen from './UserOptionPopupScreen';
const myContacts = [
  new User('Amandine Bernard', require('../../../assets/images/avatar.png'), [
    RelationshipType.FRIEND,
    RelationshipType.FAMILIY,
  ]),
  new User('Robert Richard', require('../../../assets/images/avatar.png'), [
    RelationshipType.FAMILIY,
  ]),
  new User('Antoine Durand', require('../../../assets/images/avatar.png'), [
    RelationshipType.NEIGHBOR,
  ]),
  new User('Amélie Petit', require('../../../assets/images/avatar.png'), [
    RelationshipType.NEIGHBOR,
    RelationshipType.FAMILIY,
  ]),
  new User(
    'Mathieu Thomas',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [1, 2],
  ),
  new User(
    'Michel Roux',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FAMILIY],
    [0, 1],
  ),
  new User(
    'Florine Girard',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [0, 2],
  ),
  new User(
    'David Bonnet',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.NEIGHBOR, RelationshipType.FAMILIY],
    [3, 1],
  ),
  new User(
    'Zoé Joly',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [1],
  ),
  new User(
    'Chloé Robert',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FAMILIY],
    [0, 1],
  ),
  new User(
    'Marine Lucas',
    require('../../../assets/images/avatar.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [2],
  ),
  new User('Morgane Sanchez', require('../../../assets/images/avatar.png'), [
    RelationshipType.NEIGHBOR,
  ]),
];
const myGroups = [
  new Group(
    UserType.GROUP,
    'Aide aux travaux de Robert',
    RelationshipType.NEIGHBOR,
    3,
  ),
  new Group(UserType.GROUP, 'Cousins', RelationshipType.FAMILIY, 0),
  new Group(UserType.GROUP, 'Repas de Dimanche', RelationshipType.FAMILIY, 1),
  new Group(
    UserType.GROUP,
    'Aide aux travaux de Robert',
    RelationshipType.FRIEND,
    2,
  ),
];
export {myContacts};

const addIconSize = {width: 59 * em, height: 59 * em};
const themeButtons = [
  {
    id: RelationshipType.FAMILIY,
    icon: AddFamily(addIconSize),
    color: '#FA5890',
  },
  {id: RelationshipType.FRIEND, icon: AddFriend(addIconSize), color: '#FF9417'},
  {
    id: RelationshipType.NEIGHBOR,
    icon: AddNeighbor(addIconSize),
    color: '#40CDDE',
  },
];
const MyCirclesTabScreen = props => {
  const sort = props.route.params.sort;
  const [groups, setGroups] = useState([]);
  const [groupOptionVisible, setGroupOptionVisible] = useState();
  const [userOptionVisible, setUserOptionVisible] = useState(null);
  const [loadingData, setloadingData] = useState(true);
  const themeBtn = themeButtons.find(item => item.id === sort);

  useEffect(() => {
    if (groups.length > 0) {
      setloadingData(false);
    }
  }, [groups]);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
  }
  useEffect(async () => {
    setloadingData(true);
    const groupType = {
      FAMILIY: null,
      FAMILIYUSERS: null,
      FRIEND: null,
      FRIENDUSERS: null,
      NEIGHBOR: null,
      NEIGHBORUSERS: null,
      PRO: null,
      PROUSERS: null,
    };
    await firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.FAMILIY)
      .get()
      .then(async querySnapshot => {
        var data = [];
        querySnapshot.docs.map(snap => {
          data.push(snap.data());
        });
        var userData = [];
        data.map(users => {
          users.users.map(e => {
            userData.push(e.data);
          });
        });
        let uniqueChars = getUniqueListBy(userData, 'uid');
  
        groupType.FAMILIY = data;
        groupType.FAMILIYUSERS = uniqueChars;
        // await setGroups(data)
      })
      .catch(e => {
        // console.log(e,"E")
      });
    await firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.FRIEND)
      .get()
      .then(async querySnapshot => {
        var data = [];
        querySnapshot.docs.map(snap => {
          data.push(snap.data());
        });
        var userData = [];
        data.map(users => {
          users.users.map(e => {
            userData.push(e.data);
          });
        });
        let uniqueChars = getUniqueListBy(userData, 'uid');
  
        groupType.FRIEND = data;
        groupType.FRIENDUSERS = uniqueChars;
        // await setGroups(data)
      })
      .catch(e => {
        // console.log(e,"E")
      });
    await firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.NEIGHBOR)
      .get()
      .then(async querySnapshot => {
        var data = [];
        querySnapshot.docs.map(snap => {
          data.push(snap.data());
        });
        var userData = [];
        data.map(users => {
          users.users.map(e => {
            userData.push(e.data);
          });
        });
        let uniqueChars = getUniqueListBy(userData, 'uid');
        
        groupType.NEIGHBOR = data;
        groupType.NEIGHBORUSERS = uniqueChars;
        // await setGroups(data)
      })
      .catch(e => {
        // console.log(e,"E")
      });
    await firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.PRO)
      .get()
      .then(async querySnapshot => {
        var data = [];
        querySnapshot.docs.map(snap => {
          data.push(snap.data());
        });
        var userData = [];
        data.map(users => {
          users.users.map(e => {
            userData.push(e.data);
          });
        });
        let uniqueChars = getUniqueListBy(userData, 'uid');
        groupType.PRO = data;
        groupType.PROUSERS = uniqueChars;
        // await setGroups(data)
      })
      .catch(e => {
        // console.log(e,"E")
      });
    await setGroups(groupType);
    setloadingData(false);
  }, [props, groupOptionVisible]);
  const RenderEmptyContainer = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          minWidth: WIDTH,
          // right: '6%'
        }}>
        <Text
          style={{
            alignItems: 'center',
            fontSize: 18,
            // marginTop: '3%',
          }}>
          No Data Found
        </Text>
      </View>
    );
  };
  const renderFlatList = ({item}) => {
    if (item.RelationshipType === sort) {
      if (item.type === UserType.GROUP) {
        return (
          <CirclesCommonListItem
            sort={item.RelationshipType}
            type={item.type}
            name={item.groupName}
            subName={item.groupName}
            style={styles.listItem}
            onLeftPress={() => {
              Actions.groupDetail({data: item});
            }}
            onRightPress={() => setGroupOptionVisible(item)}
          />
        );
      }
    } else {
      if (item.type !== UserType.GROUP) {
        console.log(item)
        return (
        
          <CirclesCommonListItem
            name={`${item.firstName} ${item.lastName}`}
            subName={item.email}
            icon={
              item.profilePic !== undefined && item.profilePic !== ' '
                ? {uri: item.profilePic}
                : {
                    uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg',
                  }
            }
            style={styles.listItem}
            onPress={() => setUserOptionVisible(item)}
          />
        );
      }
      
    }

 

    if (item.RelationshipType === sort) {
      // const group = groups.filter((g) => g.RelationshipType === sort).map((g) => g.id);
      // console.log("group")
      // const hasGroup = item.groupId ? !group.every((id) => !item.groupId.includes(id)) : undefined;
      // if (!hasGroup) {
      //   return (
      //     <CirclesCommonListItem
      //       name={item.firstName}
      //       subName={item.RelationshipType}
      //       icon={item.photo}
      //       style={styles.listItem}
      //       onPress={() => setUserOptionVisible(item)}
      //     />
      //   );
      // } else {
      //   return <></>;
      // }
    }
  };
  return (
    <View style={styles.container}>
      {loadingData ? (
        <ActivityIndicator
          size={'large'}
          color={'#41D0E2'}
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F0F5F7',
          }}
        />
      ) : groups.length < 1 ? (
        <RenderEmptyContainer />
      ) : (
        <FlatList
          // data={myGroups.concat(myContacts)}
          data={
            sort === RelationshipType.FAMILIY
              ? groups.FAMILIY.concat(groups.FAMILIYUSERS)
              : sort === RelationshipType.FRIEND
              ? groups.FRIEND.concat(groups.FRIENDUSERS)
              : sort === RelationshipType.NEIGHBOR
              ? groups.NEIGHBOR.concat(groups.NEIGHBORUSERS)
              : sort === RelationshipType.PRO
              ? groups.PRO.concat(groups.PROUSERS)
              : null
          }
          renderItem={renderFlatList}
          style={{
            backgroundColor: '#ffffff',
            flex: 1,
            width: '100%',
            paddingTop: 25 * em,
            paddingHorizontal: 30 * em,
            // backgroundColor: '#ffffff',
          }}
          keyExtractor={(i, index) => i?.id}
        />
      )}

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
        onPress={() =>
          Actions.createGroup({themeColor: themeBtn.color, sort: sort})
        }>
        {themeBtn.icon}
      </TouchableOpacity>
      <UserOptionPopupScreen
        data={userOptionVisible}
        onPress={() => setUserOptionVisible(null)}
      />
      <GroupOptionPopupScreen
        data={groupOptionVisible}
        onPress={() => setGroupOptionVisible(null)}
      />
    </View>
  );
};
export default MyCirclesTabScreen;
const styles = {
  container: {flex: 1, backgroundColor: '#F0F5F7', paddingTop: 10 * hm},
  listItem: {
    height: 42 * hm,
    marginBottom: 35 * hm,

    width: 315 * em,
  },
  icon: {width: 25 * em, height: 18 * em, tintColor: '#ffffff'},
};
