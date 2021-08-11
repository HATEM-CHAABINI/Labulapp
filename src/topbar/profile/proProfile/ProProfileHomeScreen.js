import React, { useState } from 'react';
import { View, TouchableOpacity, Platform, Text, Image, ImageBackground } from 'react-native';
import CommentText from '../../../text/CommentText';
import SmallText from '../../../text/SmallText';
import { em, WIDTH, HEIGHT, hm } from '../../../constants/consts';
import { Actions } from 'react-native-router-flux';
import ProfileCommonAvatar from '../../../Components/view/ProfileCommonAvatar';
import ProfileCommonCard from '../../../adapter/ProfileCommonCard';
import ProfileCommonListItem from '../../../adapter/ProfileCommonListItem';
import AccountChangeMenu from '../AccountChangeMenu';
import {
  ProNeeds,
  Information,
  Setting,
  PurchasedPremium,
  AssociationInformation,
  EnterpriseInformation,
  InstitutionInformation,
  Editprofile,
  MesOffresPro,
  MesAbonnesPro,
} from '../../../assets/svg/icons';
import { feedbackIcons } from '../../../constants/icons';
import AccountType from '../../../model/user/AccountType';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { LogoLabul } from '../../../assets/svg/svg/icons';

const iconSize = { width: 38 * em, height: 38 * em };

const originalProProfile = {
  avatar: '',
  name: 'Curology',
  type: 'Professional',
  publications: { tips: 0, promotions: 0, events: 0 },
};
const updateProPrfile = {
  avatar: require('../../../assets/images/avatar_curology.png'),
  cover: require('../../../assets/images/img_curology.png'),
  name: 'Curology',
  type: 'Professional',
  publications: { tips: 3, promotions: 2, events: 1 },
  services: ['Beauté', 'Soins'],
  badges: feedbackIcons,
  presentation:
    'Des soins de la peau personnalisés pour les besoins uniques de votre peau. Maintenant disponible dans un ensemble avec nettoyant et hydratant!',
};
const informationIcon = {
  enterprise: EnterpriseInformation(iconSize),
  association: AssociationInformation(iconSize),
  institution: InstitutionInformation(iconSize),
};

const ProProfileHomeScreen = (props) => {
  const [userProfile] = useState(
    props.route.params.purchased !== AccountType.PRO ? originalProProfile : updateProPrfile
  );
  return (
    <ParallaxScrollView
      // onScroll={onScroll}
      headerBackgroundColor="#333"
      backgroundColor="#ffffff"
      stickyHeaderHeight={95 * hm}
      parallaxHeaderHeight={HEIGHT * 0.45}
      backgroundSpeed={10}
      renderForeground={() => (
        <ImageBackground style={styles.topView} source={userProfile.cover} blurRadius={8}>
          <View
            style={{
              backgroundColor: userProfile.cover ? 'rgba(30, 45, 96, 0.64)' : '#1E2D60',
              flex: 1,
              
            }}>
            <ProfileCommonAvatar
              style={styles.avatar}
              borderWidth={3 * em}
              fullName={userProfile.name}
              icon={userProfile.avatar}
              txtInitial={{fontFamily:'Montserrat-Bold',fontSize:24*em}}
              pro
            />
            <TouchableOpacity style={{bottom:70*hm,marginLeft:141*em}} onPress={() => Actions.proProfileOverview({ userProfile: originalProProfile })}>
              <Text style={styles.txtFullName}>{userProfile.name}</Text>
              <Text style={styles.txtGoToProfile}>Aller sur mon profil</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
      renderFixedHeader={() => (
        <View key="fixed-header" style={styles.dropDown}>
          <AccountChangeMenu type="pro" visible={true} />
        </View>
      )}
      renderStickyHeader={() => (
        <View key="sticky-header" style={{ marginTop: 38 * hm, alignItems: 'center' }}>
          <ProfileCommonAvatar
            style={{ width: 30 * em, height: 30 * em }}
            fullName={userProfile.name}
            borderWidth={3 * em}
            icon={userProfile.avatar}
            pro
          />

          <SmallText text={userProfile.name} color="#1E2D60" />
        </View>
      )}
      >
      <View style={styles.bottomView}>
      <View style={styles.cardContainer}>
          <ProfileCommonCard
            caption={'Mes offres'}
            style={styles.cardStyle}
            icon={MesOffresPro(iconSize)}
            onPress={() => {
              Actions.proNeedsHome();
            }}
          />
          <ProfileCommonCard
            caption={'Mes abonnés'}
            style={styles.cardStyle}
            icon={MesAbonnesPro(iconSize)}
            onPress={() => {
              Actions.mesAboonespro();
            }}
          />
        </View>
        <View style={styles.listBox}>
          <CommentText text={'Mon compte'} style={styles.caption} />
          <ProfileCommonListItem
            text={'Editer mon profil'}
            titleStyle={{fontFamily:'Lato-Medium'}}
            style={styles.listItem}
            icon={Editprofile(iconSize)}
            onPress={() => {
              Actions.editProProfile({ userProfile: userProfile })            }}
          />
          <View style={styles.line1} />
          <ProfileCommonListItem
            text={'Mes informations'}
            titleStyle={{fontFamily:'Lato-Medium'}}
            style={styles.listItem}
            icon={Information(iconSize)}
            onPress={() => {
              Actions.proInformation();
            }}
          />
          <View style={styles.line1} />
          <ProfileCommonListItem
            text={'Mes réglages'}
            titleStyle={{fontFamily:'Lato-Medium'}}
            style={styles.listItem}
            icon={Setting(iconSize)}
            onPress={() => {
              Actions.proSetting();
            }}
          />
        </View>
        <View style={styles.line2} />

        <View style={styles.listBox}>
          <CommentText text={'Mon abonnement'} style={styles.caption} />
          <ProfileCommonListItem
            text={'Abonnement Premim'}
            subText={'Activé'}
            subTitleStyle={{color:'#40CDDE'}}
            icon={PurchasedPremium(iconSize)}
            style={styles.listItem}
            onPress={() => {
              props.route.params.purchased
                ? Actions.premiumPurchased({ profileType: 'pro' })
                : Actions.premiumSubscription({ profileType: 'pro' });
            }}
          />
        </View>
        <View style={styles.line2} />

        <View style={styles.listBox}>
          <CommentText text={'À propos'} style={styles.caption} />
          <ProfileCommonListItem
            titleStyle={{fontFamily:'Lato-Medium'}}
            text={'Politique de confidentialité'}
            style={styles.listItem}
            onPress={() => {
              Actions.privacyPolicy();
            }}
          />
          <View style={styles.line3} />
          <ProfileCommonListItem
            titleStyle={{fontFamily:'Lato-Medium'}}
            text={'Conditions générales d’utilisation'}
            style={styles.listItem}
            onPress={() => {
              Actions.termsOfService();
            }}
          />
        </View>

        <View style={styles.imgContainer}>
          <LogoLabul style={styles.imgLogo} />

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
  topView: { 
    flexDirection:'row',
    height: 275*hm, 
    backgroundColor: '#40CDDE' },  
    avatar: { marginTop: 89 * hm, height: 70 * hm, width: 70 * hm ,marginLeft:30*em},
    txtFullName: { marginTop: 15 * hm, fontSize: 20 * em, color: '#FFFFFF', fontWeight: 'bold'},
  txtGoToProfile: { marginTop: 5 * hm, fontSize: 14 * em, color: '#FFFFFF' },
  scrollView: { width: WIDTH, backgroundColor: '#ffffff' },
  dropDown: { right: 30 * em, top: 33 * hm, position: 'absolute', zIndex: 1 },
  bottomView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#254D5612',
    shadowOffset: { width: 0, height: 12 * hm },
    shadowRadius: 25 * em,
    paddingHorizontal: 30 * em,
  },
  cardContainer: {
    // paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: -66 * hm,
    marginBottom: 15 * hm,


    //  flexDirection: 'row',
    //   justifyContent: 'center',
    //    marginTop: -46 * em,
    //     marginBottom: 30 * hm
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
  caption: {fontFamily:'Lato-Medium',fontSize:14*em, width: '100%', textAlign: 'left', fontWeight: '300', marginBottom: 20 * em },
  listItem: {},
  line1: { marginLeft: 53 * em, marginBottom: 25 * hm, marginTop: 15 * hm, height: 1 * em, backgroundColor: '#F0F5F7' },
  line2: {
    marginBottom: 30 * hm,
    marginTop: 25 * hm,
    height: 1 * em,
    backgroundColor: '#F0F5F7',
    marginLeft: -30 * em,
    marginRight: -30 * em,
  },
  imgBg: {
    height: HEIGHT * 0.21,
    flex: 1,
    backgroundColor: '#40CDDE0C',
    marginTop: 35 * hm,
    marginBottom: 20 * hm,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  imageTextMain: { marginTop: 25 * hm, fontSize: 20 * em, marginLeft: 18 * em },
  imageTextSub: { fontSize: 15 * em, marginLeft: 18 * em, marginRight: -58 * em, marginBottom: 10 * hm },
  button: {
    fontSize: 12 * em,
    lineHeight: 15 * em,
    borderRadius: 9 * em,
    width: 126 * em,
    height: 33 * em,
    padding: 9 * em,
    borderWidth: 1 * em,
    borderColor: '#40CDDE',
    marginLeft: 15 * em,
  },
  line3: { marginBottom: 25 * em, marginTop: 25 * em, height: 1 * em, backgroundColor: '#F0F5F7' },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50 * hm,
    marginBottom: 15 * hm,
  },
  imgLogo: { height: 58 * hm, width: 80 * em, resizeMode: 'contain', marginLeft: 7 * em },
  txtLogo: { height: 23 * em, width: 80 * em, resizeMode: 'contain', tintColor: '#7398FD' },
  proText: { lineHeight: 15 * em, alignSelf: 'flex-start', color: '#7398FD' },
  txtVersion: { marginBottom: 110 * hm,fontFamily: 'HelveticaNeue' },
};

export default ProProfileHomeScreen;
