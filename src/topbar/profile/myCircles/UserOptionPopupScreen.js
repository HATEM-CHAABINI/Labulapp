import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Image, StatusBar, View} from 'react-native';
import Modal from 'react-native-modal';
import CommonListItem from '../../../adapter/CommonListItem';
import {AddGroup, CrossCircle} from '../../../assets/svg/icons';
import CommonButton from '../../../Components/button/CommonButton';
import {em} from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
import RelationshipType from '../../../model/user/RelationshipType';
const UserOptionPopupScreen = props => {
  const [family, setFamily] = useState(true);
  const [friend, setFriend] = useState(true);
  const [neighbor, setNeighbor] = useState(true);
  const [isPresentRelation, setIsPresentRelation] = useState([]);
  const [Update, setUpdate] = useState(false);
  useEffect(async () => {
    await firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection('MyGroupUsers')
      .doc(props.data.uid)
      .get()
      .then(async res => {
        if (res.data() !== undefined) {
          if (res.data().RelationshipType.length == 0) {
              firestore()
                .collection('myGroups')
                .doc(auth().currentUser.uid)
                .collection('MyGroupUsers')
                .doc(res.id)
                .delete()
                
            }
          await setIsPresentRelation(res.data().RelationshipType);
        
          setFamily(
            !res.data().RelationshipType.includes(RelationshipType.FAMILIY),
          );
          setFriend(
            !res.data().RelationshipType.includes(RelationshipType.FRIEND),
          );
          setNeighbor(
            !res.data().RelationshipType.includes(RelationshipType.NEIGHBOR),
          );
        } else {
          // setFamily(
          //   !res.data().RelationshipType.includes(RelationshipType.FAMILIY)
          // )
          // setFriend(
          //   !res.data().RelationshipType.includes(RelationshipType.FRIEND)
          // )
          // setNeighbor(
          //   !res.data().RelationshipType.includes(RelationshipType.NEIGHBOR)
          // )
          // if (res.data().RelationshipType.length == 0) {
          //   console.log('res', res.data().RelationshipType.length,"redData",res.data().RelationshipType);
          //   firestore()
          //     .collection('myGroups')
          //     .doc(auth().currentUser.uid)
          //     .collection('MyGroupUsers')
          //     .doc(res.id)
          //     .delete()
          //     .then(r => {
          //       console.log('object', r);
          //     }).catch((e) => console.log("fgnfn", e))
          // }
          // {
          //   !res.data().RelationshipType.includes(RelationshipType.FAMILIY) ? console.log("if",!res.data().RelationshipType.includes(RelationshipType.FAMILIY)):console.log("else",res.data().RelationshipType.includes(RelationshipType.FAMILIY))
          // }
        }
      });
  }, [props, family, friend,neighbor]);
  const addUserToMyCircle = async (user, RelationshipTypes) => {
    {
      RelationshipType.FAMILIY === RelationshipTypes
        ? setFamily(false)
        :null
    }
    {
      RelationshipType.FRIEND === RelationshipTypes
        ? setFriend(false)
        :null
    }
    {
      RelationshipType.NEIGHBOR === RelationshipTypes
        ? setNeighbor(false)
        :null
    }
    // setFamily(false)
    // setFriend(false);
    var userData = {
      data: null,
      RelationshipType: [],
    };
    userData.data = user;
    userData.RelationshipType.push(RelationshipTypes);
    await firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection('MyGroupUsers')
      .doc(user.uid)
      .get()
      .then(async res => {
        if (res.data() === undefined) {
          await firestore()
            .collection('myGroups')
            .doc(auth().currentUser.uid)
            .collection('MyGroupUsers')
            .doc(props.data.uid)
            .set(userData)
            .then(async e => {
              await setUpdate(!Update);
            });
        } else {
          var relationship = [];
          relationship = res.data().RelationshipType;
          relationship = relationship.concat(RelationshipTypes);
          firestore()
            .collection('myGroups')
            .doc(auth().currentUser.uid)
            .collection('MyGroupUsers')
            .doc(user.uid)
            .update({RelationshipType: relationship})
            .then(async e => {
              await setUpdate(!Update);
            });
        }
      });
  };

  const removeUserToMyCircle = async RelationshipTypes => {
    {
      RelationshipType.FAMILIY === RelationshipTypes
        ? setFamily(true)
        : null
    }
    {
      RelationshipType.FRIEND === RelationshipTypes
        ? setFriend(true)
        : null
    }{
      RelationshipType.NEIGHBOR === RelationshipTypes
        ? setNeighbor(true)
        : null
    }
    // setFamily(true)
    // setFriend(true);
    var array = isPresentRelation;
    const index = isPresentRelation.indexOf(RelationshipTypes);

    if (index > -1) {
      array.splice(index, 1);
    }
    firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection('MyGroupUsers')
      .doc(props.data.uid)
      .update({RelationshipType: array})
      .then(async e => {

        await setUpdate(!Update);
      });
  };
  return (
    <Modal
      isVisible={props.data ? true : false}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar
        backgroundColor="rgba(30, 45, 96, 0.8)"
        barStyle="light-content"
      />
      <View style={styles.body}>
        <Image
          source={
            props.data?.profilePic !== undefined &&
            props.data?.profilePic !== ' '
              ? {uri: props.data?.profilePic}
              : {
                  uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg',
                }
          }
          style={styles.avatar}
        />
        <CommonText
          text={props.data?.firstName + ' ' + props.data?.lastName}
          style={styles.userName}
        />
        <CommonListItem
          style={styles.listItem}
          // title={"Ajouter à ma famille"}
          title={family ? 'Ajouter à ma famille' : 'Retirer de ma famille'}
          titleStyle={{
            color: family ? '#EF88B9' : '#6A8596',
          }}
          rightView={
            family ? (
              <AddGroup width={29.5 * em} height={32.06 * em} />
            ) : (
              <CrossCircle width={22 * em} height={22 * em} />
            )
          }
          onPress={() => {
            family
              ? addUserToMyCircle(props.data, RelationshipType.FAMILIY)
              : removeUserToMyCircle(RelationshipType.FAMILIY);
          }}
        />
        <CommonListItem
          style={styles.listItem}
          title={friend ? 'Ajouter à mes amis' : 'Retirer de mes amis'}
          // titleStyle={{ color: '#6A8596' }}
          titleStyle={{
            color: friend ? '#EF88B9' : '#6A8596',
          }}
          rightView={
            friend ? (
              <AddGroup width={29.5 * em} height={32.06 * em} />
            ) : (
              <CrossCircle width={22 * em} height={22 * em} />
            )
          }
          onPress={() => {
            friend
              ? addUserToMyCircle(props.data, RelationshipType.FRIEND)
              : removeUserToMyCircle(RelationshipType.FRIEND);
          }}
        />
        <CommonListItem
          style={styles.listItem}
          // title="Retirer de mes voisins"
          title={
            neighbor
              ? 'Ajouter à mes voisins'
              : 'Retirer de mes voisins'
          }
          titleStyle={{
            color: neighbor
              ? '#EF88B9'
              : '#6A8596',
          }}
          rightView={
            neighbor ? (
              <AddGroup width={29.5 * em} height={32.06 * em} />
            ) : (
              <CrossCircle width={22 * em} height={22 * em} />
            )
          }
          onPress={() => {
            neighbor
              ? addUserToMyCircle(props.data, RelationshipType.NEIGHBOR)
              : removeUserToMyCircle(RelationshipType.NEIGHBOR);
          }}
        />
      </View>
      <CommonButton
        text="Annuler"
        style={styles.cancelBtn}
        textStyle={{color: '#1E2D60'}}
        onPress={() => {
          props.onPress(), setIsPresentRelation([]),setFamily(true),setFriend(true),setNeighbor(true)
        }}
      />
    </Modal>
  );
};
const styles = {
  container: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 54 * em,
    height: 54 * em,
    marginTop: 29 * em,
  },
  userName: {
    fontFamily: 'Lato-Black',
    color: '#1E2D60',
    marginBottom: 23 * em,
    marginTop: 10 * em,
  },

  body: {
    paddingHorizontal: 25 * em,
    alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
  },
  listItem: {
    height: 70 * em,
    justifyContent: 'center',
    borderTopWidth: 1 * em,
    borderColor: '#B3C6CF33',
    width: '100%',
  },
  cancelBtn: {
    marginTop: 35 * em,
    backgroundColor: '#ffffff',
    color: '#1E2D60',
    alignSelf: 'center',
    width: 315 * em,
    marginBottom: 23 * em,
  },
};
export default UserOptionPopupScreen;
