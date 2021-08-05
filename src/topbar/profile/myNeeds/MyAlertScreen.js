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
import ModalSupprimerAlerte from '../../../ServiceScrenns/ModalSupprimerAlerte';

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
      style={{ paddingVertical: 0 * hm, width: 50 * em, height: 50 * em, marginTop: 25 * hm, backgroundColor: "white", borderColor: '#D2E2EC', borderWidth: 1, borderRadius: 100 }}
      textStyle={{ color: "#FC3867", fontFamily: 'Lato-Medium', fontSize: 16 * em }}

      leftIcon={<InviterModif width={24 * em} height={24 * hm} />}
      iconStyle={{ marginLeft: 5 * em }}
      onPress={() => Actions.alertShare({ process: 94 })}
    />
  );
  const ModifyButton = (
    <CommonButton
      style={styles.quizBtn}
      textStyle={{ color: "#FFFFFF", fontFamily: 'Lato-Medium', fontSize: 16 * em }}
      text="Modifier"
      onPress={() =>
        Actions.editAlert({ alertData: alertData, user: user, docId: props.docId })
      } />
  );
  const DeleteButton = (
    <CommonButton
      style={{
        paddingVertical: 0 * hm, width: 112 * em, height: 45 * hm, marginTop: 25 * hm, backgroundColor: "white", borderColor: 'red', borderWidth: 1,
      }}
      textStyle={{ color: "#FC3867", fontFamily: 'Lato-Medium', fontSize: 16 * em }}
      text="Supprimer"
      // onPress={() => Actions.editNeed({ data2: data2, docId: props.docId })}
      onPress={() => setcancelUpdatePopupVisible(true)
      }

    />
  );
  const AskButton = <CommonButton textStyle={{ color: '#F9547B' }} style={styles.quizBtn} text="Poser une question" />;
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Alert width={160 * em} height={140.25 * hm} />
      </View>
      <View style={{
     marginTop:253 * hm,
     marginLeft:30*em,
zIndex:999
     ,justifyContent:'center',
     alignContent:'center',alignItems:'center',
    position:'absolute',backgroundColor:'white',borderRadius:21*em,width:113*em,height:33*hm}}>
       <SmallText

text={Moment(alertData.demandStartDate.seconds * 1000).format('DD MMMM YYYY') }
color="#6A8596"
style={{fontSize:14*em,fontFamily:'Lato-Medium'}}
/>
        {console.log(alertData)}
      </View>
      <ScrollView style={styles.body}>
        <CommonListItem
          icon={
            <AvatarWithBadge
              // avatar={user.profilePic !== undefined && user.profilePic !== null ? { uri: user.profilePic } : require('../../../assets/images/tab_profile_off.png')}
              avatar={user.profilePic !== undefined ? { uri: user.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }}
              // badge={require('../../../assets/images/ic_sample_5.png')}
              // badge={userBadge}
              avatarDiameter={35 * em}
              badgeDiameter={21 * em}
            />
          }
          title={user.firstName + " " + user.lastName}
          titleStyle={{ color: '#1E2D60', marginLeft: 21 * em, fontFamily: 'Lato-Black', fontSize: 16 * em }}
        />
        <TitleText text={alertData.type.id != 3 ?
         alertData.type.title : alertData.alertType.alertDescription} 
        style={styles.title} />

        <CommonListItem
          icon={
            <View style={{ marginRight: 10 * em }}>
              <LocationPink width={16 * em} height={19 * em} />
            </View>
          }
          title={alertData.address !== undefined ? alertData.address : 'Alert Address undefine'}
          titleStyle={{ color: '#6A8596', textAlignVertical: 'top', fontFamily: 'Lato-Regular', fontSize: 16 * em }}
        />
          <ModalSupprimerAlerte
            visible={cancelUpdatePopupVisible}
           
            onPressS={() => {
              setcancelUpdatePopupVisible(false)
              deleteUserAlerts(auth().currentUser.uid, alertData.serviceType.name, props.docId).then((item) => {
                Actions.home()
              }).catch((error) => {
                console.log(error);
              })
              // , Actions.editNeed({ data2: data2, docId: props.docId })
            }}
            onPressT={() => {
              setcancelUpdatePopupVisible(false)
              // , Actions.editNeed({ data2: data2, docId: props.docId })
            }}
          />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {ModifyButton}
          {DeleteButton}
          {InviteButton}
        </View>
        <View style={{ height: 130 * em }} />
      </ScrollView>
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



