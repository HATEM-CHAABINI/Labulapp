import React, { useState, useEffect } from 'react';
import { View, ScrollView,Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, WIDTH, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import ProfileCommonLabel from '../../Components/other/ProfileCommonLabel';
import CommonHeader from '../../Components/header/CommonHeader';
import ProfileCommonAvatar from '../../Components/view/ProfileCommonAvatar';
import { Actions } from 'react-native-router-flux';
import CommentText from '../../text/CommentText';
import ProfileCommonSpecView from '../../Components/view/ProfileCommonSpecView';
import { Family, Friend, Neighbor } from '../../assets/svg/icons';
import AccountType from '../../model/user/AccountType';
import firestore from '@react-native-firebase/firestore';
import SmallText from '../../text/SmallText';

import { useSelector } from 'react-redux';

let fireKey = firestore().collection("user");
const iconSize = { width: 48 * em, height: 48 * em };
const ProfileOverviewScreen = (props) => {
  const [userProfile] = useState(props.userProfile);
  const [assets, setassets] = useState([])
  const { profileData } = useSelector((state) => state.profileReducer);
  console.log("asdasd ", profileData)
  const badgesView = userProfile.feedback ? (
    <ScrollView horizontal={true} style={{ paddingTop: 20 * hm, paddingBottom: 20 * hm, paddingLeft: 30 * em }}>
      {userProfile.feedback.map((badge, index) => (
        <View style={styles.badgeIcon}>{badge.icon}</View>
      ))}
    </ScrollView>
  ) : (
    <>
      <CommonText text={'Tu n’as pas de badges'} style={styles.noticeText} />
      <CommonText text={'Ne t’inquiète pas, crée des demandes à ton entourage pour recevoir des badges'} style={styles.requestText} />
    </>
  );
  useEffect(() => {

    firestore().collection('assets').doc("123").get().then((res) => {

      setassets(() => res.data().assets)

    }).catch(e => { console.log(e) })

  }, [])
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CommonHeader
          rightTxt={  <View style={{backgroundColor:'white',height:25*hm,width:66*em,borderRadius:14*em,alignItems:'center',justifyContent: "center"}}>
          <Text Style={{ fontSize: 14 * em,color:'#1E2D60',fontFamily:'Lato-Black' }}>Fermer</Text>
          </View>}
          rightTxtStyle={{ fontSize: 14 * em,color:'#1E2D60',fontFamily:'Lato-Black' }}
          style={styles.header}
          onLeftPress={() =>
            Actions.home({
              tabNav: 'Profile',
              purchased: userProfile.photo ? AccountType.LIGHT : null,
            })
          }
          onRightPress={() => Actions.editProfile({ assest: assets })}
        />
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            icon={profileData.profilePic === undefined || profileData.profilePic === null ? '' : { uri: profileData.profilePic }}
            style={styles.avatar}
            fullName={profileData.firstName + ' ' + profileData.lastName}
            logoVisible={false}
            borderWidth={3 * em}
          />
          <TitleText text={profileData.firstName + " " + profileData.lastName} style={styles.fullNameText} />

          {profileData.availability && profileData.availability !== "" ? <CommentText text={profileData.availability} color="#1E2D60" /> : null}
          {profileData.presentation && profileData.presentation !== "" ? <CommentText text={profileData.presentation} color="#6A8596" /> : null}

          {profileData.skill && (
            <View style={{ flexDirection: 'row', marginTop: 15 * hm }}>
              {profileData.skill.map((spec) => (
                <View style={{

                  backgroundColor: '#F0F5F7',

                  paddingVertical: 5 * em,
                  paddingHorizontal: 10 * em,

                  borderRadius: 19 * em,
                  marginRight: 10 * em,
                }} >
                  <SmallText style={{
                    fontFamily: 'Lato-Italic',
                    lineHeight: 14 * em,
                    textAlign: 'center',
                  }} text={spec.name} color="#6A8596" />
                </View>
              ))}
            </View>
          )}
    <TitleText text={'Mes badges'} style={[styles.title]} />
          {badgesView}
        </View>
        <View style={styles.secondPopView}>
          <TitleText text={'Activité dans Labul'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={userProfile.needs.helps} name={'Coup de main'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={userProfile.needs.donations} name={'Dons'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={userProfile.needs.events} name={'Évènements'} />
            </View>
          </View>
         <Text style={{fontFamily: 'HelveticaNeue',fontSize:12*em,color:'#6A8596',marginTop:50*hm}}>Actif dans Labul depuis 10 jours</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  scrollView: { backgroundColor: '#40CDDE', paddingBottom: 16 * hm },
  header: {
    marginTop: 30 * hm
  },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    marginTop: 76 * hm,
    paddingHorizontal: 30 * em,
    paddingBottom: 35 * hm,
  },
  avatar: { marginTop: -57 * hm, width: 114 * em, height: 114 * em },
  fullNameText: {
    marginTop: 15 * hm,
    marginBottom: 10 * hm,
    fontFamily: 'Lato-Black'
  },
  title: {
    marginTop: 35 * hm,
    marginBottom: 20 * hm,
    fontSize: 21 * em,
    fontFamily: 'HelveticaNeue'
  },
  circlesView: { flexDirection: 'row', marginLeft: 0.072 * WIDTH, marginRight: 0.072 * WIDTH },
  labelView: { width: WIDTH * 0.285 },
  secondPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20 * em,
    borderTopRightRadius: 20 * em,
    marginTop: 15 * hm,
    paddingBottom: 54 * hm,
    height:'100%'
    
  },
  noticeText: { fontFamily: 'Lato-Black', marginBottom: 10 * hm },
  requestText: {textAlign:'center', fontFamily: 'Lato-Regular', fontSize: 14 * em },
  badgeIcon: {
    width: 60 * em,
    height: 60 * em,
    borderRadius: 30 * em,
    elevation: 1, shadowColor: '#A7A7A733', shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8 * em,
    },
    shadowRadius: 20 * em, backgroundColor: '#fff',
    marginRight: 18 * em,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ProfileOverviewScreen;
