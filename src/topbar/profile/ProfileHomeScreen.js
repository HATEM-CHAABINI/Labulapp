import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Text, Image, ActionSheetIOS, StatusBar, ActivityIndicator } from 'react-native';
import { em, WIDTH, HEIGHT, hm } from '../../constants/consts';
import TitleText from '../../text/TitleText';
import CommentText from '../../text/CommentText';
import SmallText from '../../text/SmallText';
import { Actions } from 'react-native-router-flux';
import ProfileCommonAvatar from '../../Components/view/ProfileCommonAvatar';
import ProfileCommonCard from '../../adapter/ProfileCommonCard';
import ProfileCommonListItem from '../../adapter/ProfileCommonListItem';
import CommonButton from '../../Components/button/CommonButton';
import AccountChangeMenu from './AccountChangeMenu';
import {Editprofile, MyNeeds, Circles, Information, Setting, PurchasedPremium, Alert, Labullogo } from '../../assets/svg/icons';
import User from '../../model/user/User';
import firestore from '@react-native-firebase/firestore';
import AccountType from '../../model/user/AccountType';
import { feedbackIcons } from '../../constants/icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { useSelector } from 'react-redux';
import { LogoLabul } from '../../assets/svg/svg/icons';
const originalMyProfile = new User(
  'Mathieu Torin',
  null,
  null,
  null,
  'mathieu@labul.com',
  null,
  null,
  null,
  0,
  0,
  0,
  0,
  0,
  0,
  null,
  '+590 6 90 874 258',
  'ABYMES 97139 Guadeloupe'
);

const updatedMyProfile = new User(
  'Mathieu Torin',
  require('../../assets/images/tab_profile_off.png'),
  null,
  null,
  'mathieu@labul.com',
  'Je suis disponible le soir et le week-end',
  'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
  ['Bricoleur', 'Jardinier'],
  4,
  7,
  17,
  24,
  6,
  2,
  feedbackIcons,
  '+590 6 90 874 258',
  'ABYMES 97139 Guadeloupe'
);
const iconSize = { width: 38 * em, height: 38 * em };

const ProfileHomeScreen = (props) => {
  const [userProfile] = useState(
    
    props.route.params.purchased !== AccountType.LIGHT ? originalMyProfile : updatedMyProfile
  );
  const [assets, setassets] = useState([])

  const [userData, setuserData] = useState(null)
  const { profileData } = useSelector((state) => state.profileReducer);
  const [loading, setloading] = useState(true)
  useEffect(() => {
    if (profileData.firstName !== undefined) {
      setloading(false)
    }

  }, [profileData])

  useEffect(() => {

    firestore().collection('assets').doc("123").get().then((res) => {

      setassets(() => res.data().assets)

    }).catch(e => { console.log(e) })

  }, [])
  return (
    <ParallaxScrollView
      // onScroll={onScroll}
      backgroundColor="#ffffff"
      stickyHeaderHeight={95 * hm}
      parallaxHeaderHeight={HEIGHT * 0.45}
      backgroundSpeed={10}
      renderForeground={() => (
        <View style={
        styles.topView
        }>
          {loading ? <ActivityIndicator size='small' color='#1E2D60' style={styles.avatar} /> : <ProfileCommonAvatar
            style={styles.avatar}
            fullName={profileData.firstName + " " + profileData.lastName}
            icon={profileData.profilePic === undefined || profileData.profilePic === null ? '' : { uri: profileData.profilePic }}
            borderWidth={3 * em}
          />}
          <TouchableOpacity onPress={() => Actions.profileOverview({ userProfile: userProfile })}>
            {loading ? <ActivityIndicator size='small' color='#1E2D60' style={styles.avatar} /> : 
            <TitleText style={styles.txtFullName} text={profileData.firstName + " " + profileData.lastName} />}
            <CommentText style={styles.txtGoToProfile} text="Aller sur mon profil" />
          </TouchableOpacity>
        </View>
      )}
      renderFixedHeader={() => (
        <View key="fixed-header" style={styles.dropDown}>
          <AccountChangeMenu
            // style={styles.dropDown}
            type="my"
            visible={props.route.params.purchased || props.userProfile ? true : false}
          />
        </View>
      )}
      renderStickyHeader={() => (
        <View key="sticky-header" style={{ marginTop: 38 * hm, alignItems: 'center' }}>
          <ProfileCommonAvatar
            style={{ width: 30 * em, height: 30 * em }}
            icon={profileData.profilePic === undefined || profileData.profilePic === null ? '' : { uri: profileData.profilePic }}
            fullName={profileData.firstName + ' ' + profileData.lastName}
            borderWidth={3 * em}
          />
          <SmallText text={profileData.firstName + " " + profileData.lastName} color="#1E2D60" style={{}} />
        </View>
      )}
      >
      <View style={styles.bottomView}>
        <View style={styles.cardContainer}>
          <ProfileCommonCard
            caption={'Mes demandes'}
            style={styles.cardStyle}
            icon={MyNeeds(iconSize)}
            onPress={() => {
              Actions.myNeedsHome();
            }}
          />
          <ProfileCommonCard
            caption={'Mes cercles'}
            style={styles.cardStyle}
            icon={Circles(iconSize)}
            onPress={() => {
              Actions.myCirclesHome();
            }}
          />
        </View>
        <View style={styles.listBox}>
          <CommentText text={'Mon compte'} style={styles.caption} color={'#A0AEB8'} />
          <ProfileCommonListItem
          titleStyle={{fontFamily:'Lato-Medium'}}
            text={'Editer mon profil'}
            style={styles.listItem}
            icon={Editprofile(iconSize)}
            onPress={() => {
              Actions.editProfile({ assest: assets })            }}
          />
                    <View style={styles.line1} />

           <ProfileCommonListItem
                     titleStyle={{fontFamily:'Lato-Medium'}}

            text={'Mes informations'}
            style={styles.listItem}
            icon={Information(iconSize)}
            onPress={() => {
              Actions.myInformation({ userProfile: userProfile, firbaseInfo: profileData });
            }}
          />
          <View style={styles.line1} />
          <ProfileCommonListItem
                    titleStyle={{fontFamily:'Lato-Medium'}}

            text={'Mes réglages'}
            style={styles.listItem}
            icon={Setting(iconSize)}
            onPress={() => {
              Actions.mySetting();
            }}
          />
        </View>
        {!props.route.params.purchased && <View style={styles.line2} />}
        <View style={styles.listBox}>
          <CommentText text={'Mon abonnement'} style={styles.caption} color={'#A0AEB8'} />
          <ProfileCommonListItem
            text={'Abonnement Premim'}
            subText={'En savoir plus'}
            icon={PurchasedPremium(iconSize)}
            style={styles.listItem}
            onPress={() => {
              props.route.params.purchased
                ? Actions.premiumPurchased({ profileType: 'my' })
                : Actions.premiumSubscription({ profileType: 'my' });
            }}
          />
        </View>
        {!props.route.params.purchased && (
          <View style={styles.rowContainer}>
            <View style={styles.imgBg}>
              <TitleText text={'Créer un compte'} style={styles.imageTextMain} />
              <TitleText text={'Pro/ Association/ institutionnel'} style={styles.imageTextSub} />
              <CommonButton
                style={styles.proBtn}
                textStyle={{ fontSize: 12 * em }}
                text={'C’est gratuit, créer maintenant'}
                onPress={() => Actions.createAccountMenu()}
              />
            </View>
            <View>
              <Image style={styles.imgBga} source={require('../../assets/images/profie_banner.png')} />
            </View>
          </View>
        )}


        <View style={styles.listBox}>
          <CommentText text={'À propos'} style={styles.caption} color={'#A0AEB8'} />
          <ProfileCommonListItem
            text={'Politique de confidentialité'}
            style={styles.listItem}
            onPress={() => {
              Actions.privacyPolicy();
            }}
          />
          <View style={styles.line3} />

          <ProfileCommonListItem
            text={'Conditions générales d’utilisation'}
            style={styles.listItem}
            onPress={() => {
              Actions.termsOfService();
            }}
          />
        </View>
        <View style={styles.imgContainer}>
          {/* <Image source={require('../../assets/svg/icons/Alert.svg')} /> */}
<LogoLabul style={styles.imgLogo}/>
          {/* <Image source={require('../../assets/images/txt_logo.png')} style={styles.txtLogo} /> */}
        </View>
        <CommentText text={'Version 1.0'} style={styles.txtVersion} color={'#BFCDDB'} />
        <View style={styles.emptyView} />
      </View>
    </ParallaxScrollView>
  );
};

const styles = {
  rowContainer: { flexDirection: 'row' },
  dropDown: { right: 30 * em, top: 33 * hm, position: 'absolute', zIndex: 1 },

  topView: { 
    flexDirection:'row',
    height: 275*hm, 
    backgroundColor: '#40CDDE' },
  avatar: { marginTop: 89 * hm, height: 70 * hm, width: 70 * hm ,marginLeft:30*em},
  txtFullName: {
    marginTop:100 * hm,
    marginLeft:25*em,
    fontSize: 20 * em,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Lato-Black'
  },
  txtGoToProfile: {
    marginTop: 5 * hm,
    fontSize: 14 * em,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Lato-Regular'
  },
  scrollView: { width: WIDTH, backgroundColor: '#ffffff', marginTop: 0 * em },
  bottomView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#254D5612',
    shadowOffset: { width: 0, height: 12 * hm },
    shadowRadius: 25 * em,
  },
  cardContainer: {
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: -66 * hm,
    marginBottom: 15 * hm,
  },
  cardStyle: {
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 12 * hm,
    },
    shadowRadius: 25 * em,
    width: 150 * em,
    elevation: 5,
  },
  listBox: { marginTop: 15 * hm },
  caption: {
    width: '100%',
    textAlign: 'left',
    marginLeft: 30 * em,
    //fontWeight: '300',
    marginBottom: 20 * hm,
    fontFamily: 'Lato-Medium'
  },
  listItem: { marginLeft: 30 * em, marginRight: 30 * em },
  line1: {
    marginLeft: 83 * em,
    marginBottom: 25 * hm,
    marginTop: 15 * hm,
    height: 1 * hm,
    // backgroundColor: '#B3C6CF33',
  },
  //marginBottom: 15 * hm,
  line2: { marginTop: 16 * hm, height: 1 * hm, backgroundColor: '#B3C6CF33' },
  imgBg: {
    height: 138 * hm,
    flex: 1,
    backgroundColor: '#40CDDE0C',
    marginTop: 35 * hm,
    marginBottom: 20 * hm,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  imgBga: {
    height: 138 * hm,
    width:230*em,
    flex: 1,
    backgroundColor: '#40CDDE0C',
    marginTop: 35 * hm,
    marginBottom: 20 * hm,
    // right:10*em,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  imageTextMain: {
    fontFamily: 'Montserrat-Bold' ,
    fontSize: 20 * em,
    marginTop: 29 * hm,
    marginLeft: 18 * em,
    marginRight: -58 * em,
    marginBottom: 10 * hm,
  },
  imageTextSub: {
    fontFamily: 'HelveticaNeue' ,
    fontSize: 15 * em,
    marginTop:2*hm,
    marginLeft: 18 * em,
    marginRight: -100 * em,
    marginBottom: 10 * hm,
  },
  proBtn: {
    borderRadius: 9 * em, width: 190 * em, paddingVertical: 9 * hm,
    marginLeft: 15 * em,
  },
  line3: {
    marginLeft: 30 * em,
    marginBottom: 25 * hm,
    marginTop: 25 * hm,
    height: 1 * hm,
    backgroundColor: '#B3C6CF33',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50 * hm,
    marginBottom: 15 * hm,
  },
  imgLogo: { marginLeft: 7 * em , resizeMode: 'stretch'},
  txtLogo: { height: 23 * em, width: 80 * em, resizeMode: 'contain' },
  txtVersion: { marginBottom: 110 * hm,fontFamily: 'HelveticaNeue' },
};

export default ProfileHomeScreen;
