import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  CreateGroupFamily,
  CreateGroupFriend,
  CreateGroupNeighbor,
  CreateGroupPro
} from '../../../assets/svg/icons';
import CommonButton from '../../../Components/button/CommonButton';
import CommonHeader from '../../../Components/header/CommonHeader';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import { em, hexToRGB } from '../../../constants/consts';
import RelationshipType from '../../../model/user/RelationshipType';
import UserType from '../../../model/user/UserType';
import TitleText from '../../../text/TitleText';
const addIconSize = {width: 42 * em, height: 30 * em};

const themeButtons = [
  {
    id: RelationshipType.FAMILIY,
    icon: CreateGroupFamily(addIconSize),
    color: '#EF88B9',
  },
  {
    id: RelationshipType.FRIEND,
    icon: CreateGroupFriend(addIconSize),
    color: '#6784DA',
  },
  {
    id: RelationshipType.NEIGHBOR,
    icon: CreateGroupNeighbor(addIconSize),
    color: '#40CDDE',
  },
  {
    id: RelationshipType.PRO,
    icon: CreateGroupPro(addIconSize),
    color: '#1E2D60',
  },
];
const NameGroupScreen = props => {

  const [userGroup, setUserGroup] = useState([]);
  const [groupName, setGroupName] = useState('');
  const themeBtn = themeButtons.find(item => item.id === props.sort);

  const textChange = text => {
    setGroupName(text);
  };
  const updateGroupMaFamille = () => {
    var groupMaFamille = {
      users: props.selectedUser,
      groupName: groupName,
      id: Math.floor(100000 + Math.random() * 900000),
      RelationshipType: RelationshipType.FAMILIY,
      type: UserType.GROUP,
    };

    firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.FAMILIY)
      .add(groupMaFamille)
      .then(async res => {
        await firestore().collection('myGroups')
          .doc(auth().currentUser.uid).collection(RelationshipType.FAMILIY)
          .doc(res.id).update({'groupId':res.id})
         Actions.myCirclesHome()

      })
  };
  const updateGroupMonAmi = () => {
    var groupMaFamille = {
      users: props.selectedUser,
      groupName: groupName,
      id: Math.floor(100000 + Math.random() * 900000),
      RelationshipType: RelationshipType.FRIEND,
      type: UserType.GROUP,
    };

    firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.FRIEND)
      .add(groupMaFamille)
      .then(async res => {
        await firestore().collection('myGroups')
          .doc(auth().currentUser.uid).collection(RelationshipType.FRIEND)
          .doc(res.id).update({'groupId':res.id})
          Actions.myCirclesHome()
      })
  };
  const updateGroupMonVoisin = () => {
    var groupMaFamille = {
      users: props.selectedUser,
      groupName: groupName,
      id: Math.floor(100000 + Math.random() * 900000),
      RelationshipType: RelationshipType.NEIGHBOR,
      type: UserType.GROUP,
    };

    firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.NEIGHBOR)
      .add(groupMaFamille)
      .then(async res => {
        await firestore().collection('myGroups')
          .doc(auth().currentUser.uid).collection(RelationshipType.NEIGHBOR)
          .doc(res.id).update({'groupId':res.id})
          Actions.myCirclesHome()
      })
  };
  const updateGroupProfessionnel = () => {
    var groupMaFamille = {
      users: props.selectedUser,
      groupName: groupName,
      id: Math.floor(100000 + Math.random() * 900000),
      RelationshipType: RelationshipType.FRIEND,
      type: UserType.GROUP,
    };

    firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(RelationshipType.PRO)
      .add(groupMaFamille)
      .then(async res => {
        await firestore().collection('myGroups')
          .doc(auth().currentUser.uid).collection(RelationshipType.PRO)
          .doc(res.id).update({'groupId':res.id})
          Actions.mesAboonespro()
      })
  };
  return (
    <View style={[styles.container, {backgroundColor: props.themeColor}]}>
      <CommonHeader
        dark={false}
        rightTxt={'Annuler'}
        style={styles.header}
        onRightPress={() =>
          props.sort === 'Professionnel'
            ? Actions.mesAboonespro()
            : Actions.myCirclesHome()
        }
      />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View style={styles.icon}>{themeBtn.icon}</View>
          <TitleText text={'Nom du groupe'} style={styles.titleText} />
          <CommonTextInput
            text={'Donne un nom à ton groupe'}
            isPasswordInput={false}
            style={styles.commonInput}
            onChangeText={text => textChange(text)}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Créer groupe'}
            style={[
              styles.btnNext,
              {backgroundColor: hexToRGB(props.themeColor, 0.5)},
            ]}
            onPress={() => {
              props.sort === RelationshipType.FAMILIY
                ? updateGroupMaFamille()
                : props.sort === RelationshipType.FRIEND
                ? updateGroupMonAmi()
                : props.sort === RelationshipType.NEIGHBOR
                ? updateGroupMonVoisin()
                : props.sort === RelationshipType.PRO
                ? updateGroupProfessionnel()
                : null;
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FD',
    alignItems: 'center',
  },
  header: {marginBottom: 10 * em, marginTop: 27 * em},
  icon: {
    width: 30 * em,
    height: 27 * em,
    marginTop: 40 * em,
    marginBottom: 13 * em,
  },
  popupView: {
    flex: 1,
    height: '88%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: {
    alignItems: 'center',
    width: '80%',
  },
  titleText: {
    marginBottom: 35 * em,
  },
  btnNext: {backgroundColor: '#7398FD', marginBottom: 30 * em},
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default NameGroupScreen;
