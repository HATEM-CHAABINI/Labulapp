
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import TitleText from '../../../text/TitleText';
import { em, hm } from '../../../constants/consts';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import NeedService from '../../../model/service/NeedService';
import NeedServiceType from '../../../model/service/NeedServiceType';
import User from '../../../model/user/User';
import AvatarWithBadge from '../../../Components/view/AvatarWithBadge';
import FriendInvitePopupScreen from '../../friends/popup/FriendInvitePopupScreen';
import { LocationPink, Alert } from '../../../assets/svg/icons/index.js';
import CommonListItem from '../../../adapter/CommonListItem';
import CommonBackButton from '../../../Components/button/CommonBackButton';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import { fetchAlerts, getUserProfile } from '../../../services/firebase'
import { DateSchema } from 'yup';

const needData = new NeedService(
  new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
  'J’ai besoin coup de main bricolage',
  'Récolter des figues',
  new Date(),
  require('../../../assets/images/sample_cover_9.png'),
  3,
  NeedServiceType.REPAIR
);

const MyAlertScreen = (props) => {
  const [] = useState(false);
  const [user, setuser] = useState(props.user);
  const [alertData, setAlertData] = useState(props.alertData);
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [data] = useState(needData);

  useEffect(() => {
    setAlertData(props.alertData)
  }, [props.alertData])

  useEffect(() => {
    if (props.created == undefined) {
    }

    if (props.created == undefined) {
      firestore().collection('userAlerts').doc(auth().currentUser.uid).collection(alertData.serviceType.name).doc(props.docId).onSnapshot(async (sanp) => {
        if (sanp.data() !== undefined) {
          setAlertData(
            sanp.data()
          )
        }
      })
    }
    getUserProfile(auth().currentUser.uid).then(async (item) => {
      setuser(() => item)
    })
  }, [])

  const InviteButton = (
    <CommonButton
      textStyle={{ color: '#F9547B' }}
      style={styles.inviteBtn}
      text="Partager"
      onPress={() => Actions.alertShare({ process: 94 })}
    />
  );

  const ModifyButton = (
    <CommonButton
      textStyle={{ color: '#F9547B' }}
      style={styles.quizBtn}
      text="Modifier"
      onPress={() => Actions.editAlert({ alertData: alertData, user: user, docId: props.docId })}
    />
  );

  const AskButton = <CommonButton textStyle={{ color: '#F9547B' }} style={styles.quizBtn} text="Poser une question" />;

  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Alert width={80.59 * em} height={65.25 * em} />
      </View>
      <View style={styles.body}>
        <CommonListItem
          icon={
            <AvatarWithBadge
              // avatar={user.profilePic !== undefined && user.profilePic !== null ? { uri: user.profilePic } : require('../../../assets/images/tab_profile_off.png')}
              avatar={user.profilePic !== undefined ? { uri: user.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }}
              badge={require('../../../assets/images/ic_sample_5.png')}
              // badge={userBadge}
              avatarDiameter={35 * em}
              badgeDiameter={21 * em}
            />
          }
          title={user.firstName + " " + user.lastName}
          titleStyle={{ color: '#1E2D60', marginLeft: 21 * em, fontFamily: 'Lato-Black', fontSize: 16 * em }}
        />
        <TitleText text={alertData.type !== undefined ? alertData.type.title : 'Alert Title'} style={styles.title} />

        <CommonListItem
          icon={
            <View style={{ marginRight: 10 * em }}>
              <LocationPink width={16 * em} height={19 * em} />
            </View>
          }
          title={alertData.address !== undefined ? alertData.address.address : 'Alert Address undefine'}
          titleStyle={{ color: '#6A8596', textAlignVertical: 'top', fontFamily: 'Lato-Regular', fontSize: 16 * em }}
        />
        {data.status === 'canceled' ? <></> : data.relationship ? AskButton : ModifyButton}
        {data.status !== 'canceled' && InviteButton}
        <View style={{ height: 130 * em }} />
      </View>
      <CommonBackButton dark style={styles.backBtn} />
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
    </View>
  );
};


const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backBtn: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    left: 15 * em,
    marginTop: 30 * hm
  },
  cover: {
    width: '100%',
    height: 312 * hm,
    backgroundColor: '#FEE0E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 30 * em,
    paddingTop: 38 * hm,
  },

  title: {
    height: 28 * em,
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginTop: 24 * hm,
    marginBottom: 14 * hm,
    fontFamily: 'Lato-Black',
  },
  quizBtn: { marginTop: 25 * hm, backgroundColor: '#FEE0E7' },
  inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent', color: '#F9547B' },

};
export default MyAlertScreen;



