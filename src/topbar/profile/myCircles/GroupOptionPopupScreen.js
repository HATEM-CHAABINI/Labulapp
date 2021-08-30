import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React from 'react';
import {Alert, StatusBar, View} from 'react-native';
import Modal from 'react-native-modal';
import CommonListItem from '../../../adapter/CommonListItem';
import {
  Amis,
  DeleteRed,
  Famille,
  ProGroupe,
  SortirGroupe,
  Voisins,
} from '../../../assets/svg/icons';
import CommonButton from '../../../Components/button/CommonButton';
import {em, hm} from '../../../constants/consts';
import RelationshipType from '../../../model/user/RelationshipType';
import {deleteUserGroup} from '../../../services/firebase';
import CommonText from '../../../text/CommonText';
const GroupOptionPopupScreen = props => {
  let groupIcon;
  switch (props.data && props.data.RelationshipType) {
    case RelationshipType.FAMILIY:
      groupIcon = <Famille width={40 * em} height={40 * em} />;
      break;
    case RelationshipType.FRIEND:
      groupIcon = <Amis width={40 * em} height={40 * em} />;
      break;
    case RelationshipType.PRO:
      groupIcon = <ProGroupe width={40 * em} height={40 * em} />;
      break;
    default:
      groupIcon = <Voisins width={40 * em} height={40 * em} />;
      break;
  }
  const deleteGroup = () => {
    Alert.alert('Supprimer', 'Es-tu sûr?', [
      {
        text: 'Annuler',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteUserGroup(
            auth().currentUser.uid,
            props.data.RelationshipType,
            props.data.groupId,
          )
            .then(item => {
              props.onPress();
            })
            .catch(error => {
              console.log(error);
            });
        },
      },
    ]);
  };

  const exitGroup = async () => {
    var users = props.data.users.filter(
      user => user.data.uid !== auth().currentUser.uid,
    );

    await firestore()
      .collection('myGroups')
      .doc(auth().currentUser.uid)
      .collection(props.data.RelationshipType)
      .doc(props.data.groupId)
      .update({users: users})
      .then(e => props.onPress())
      .catch(e => console.log(e));
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
        <View style={styles.avatar}>{groupIcon}</View>
        <CommonText
          text={props.data != null ? props.data.groupName : 'Groupe'}
          style={styles.userName}
        />
        <CommonText
          text={props.data && props.data.users.length}
          style={{marginBottom: 25 * hm}}
          color="#A0AEB8"
        />

        <CommonListItem
          onPress={() => exitGroup()}
          style={styles.listItem}
          title="Sortir du groupe"
          titleStyle={{color: '#6A8596'}}
          rightView={<SortirGroupe width={18 * em} height={20 * em} />}
        />

        <CommonListItem
          onPress={() => {
            deleteGroup();
          }}
          style={styles.listItem}
          title="Supprimer groupe"
          titleStyle={{color: '#F9547B'}}
          rightView={<DeleteRed width={18 * em} height={20 * em} />}
        />
      </View>
      <CommonButton
        text="Annuler"
        style={styles.cancelBtn}
        textStyle={{color: '#1E2D60'}}
        onPress={() => props.onPress()}
      />
    </Modal>
  );
};
const styles = {
  container: {margin: 0, flex: 1, justifyContent: 'flex-end'},
  avatar: {marginTop: 29 * hm},
  userName: {
    color: '#1E2D60',
    marginBottom: 5 * hm,
    marginTop: 5 * hm,
    fontFamily: 'Lato-Black',
  },
  body: {
    paddingHorizontal: 25 * em,
    paddingBotom: 12 * hm,
    alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
  },
  listItem: {
    height: 70 * hm,
    justifyContent: 'center',
    borderTopWidth: 1 * em,
    borderColor: '#B3C6CF33',
    width: '100%',
  },
  cancelBtn: {
    marginTop: 35 * hm,
    backgroundColor: '#ffffff',
    color: '#1E2D60',
    alignSelf: 'center',
    width: 315 * em,
    marginBottom: 23 * hm,
  },
};
export default GroupOptionPopupScreen;
