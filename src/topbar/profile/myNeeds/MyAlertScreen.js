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
import { LocationPink, Alert, InviterModif } from '../../../assets/svg/icons/index.js';
import CommonListItem from '../../../adapter/CommonListItem';
import CommonBackButton from '../../../Components/button/CommonBackButton';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import { deleteUserAlerts, fetchAlerts, getUserProfile } from '../../../services/firebase'
import { DateSchema } from 'yup';
import SmallText from '../../../text/SmallText';
import Moment from 'moment';
import 'moment/locale/fr'; 
import ModalSupprimerAlerte from '../../../ServiceScrenns/ModalSupprimerAlerte';
import MyAlertScreenView from './MyAlertScreenView';
import FriendAlertScreen from './FriendAlertScreen';

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
  const [cancelUpdatePopupVisible, setcancelUpdatePopupVisible] = useState(false);
  const usercon = user.uid == auth().currentUser.uid

  useEffect(() => {
    setAlertData(props.alertData)
  }, [props.alertData])

  useEffect(() => {

    if (props.created == undefined) {
      firestore().collection('userAlerts').doc(auth().currentUser.uid).collection(alertData.serviceType.name).doc(props.docId).onSnapshot(async (sanp) => {
        if (sanp.data() !== undefined) {
          setAlertData(
            sanp.data()
          )
        }
      })
    }

  }, [])
  return (
    <View style={styles.container}>
      {console.log("usercon11111  ",usercon)}
      {usercon ?

        <MyAlertScreenView alertData={alertData}  user={user} created={props.created} docId={props.docId} />

        :
        <FriendAlertScreen alertData={alertData}  user={user} created={props.created} docId={props.docId} />
      }
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
    backgroundColor: '#FC3867',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingTop: 40,
    paddingHorizontal: 30 * em,
    marginTop: -41 * em,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    //paddingBottom: '100%',
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
  quizBtn: {
    paddingVertical: 0 * hm,
    width: 112 * em, height: 45 * hm, marginTop: 25 * hm, backgroundColor: "#40CDDE"
  },
  inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent' },
};
export default MyAlertScreen;



