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
} from '../../../assets/svg/icons';
import { feedbackIcons } from '../../../constants/icons';
import AccountType from '../../../model/user/AccountType';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

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
      stickyHeaderHeight={85 * hm}
      parallaxHeaderHeight={HEIGHT * 0.45}
      backgroundSpeed={10}
      renderForeground={() => (
        <ImageBackground style={styles.topView} source={userProfile.cover} blurRadius={8}>
          <View
            style={{
              backgroundColor: userProfile.cover ? 'rgba(30, 45, 96, 0.64)' : '#7398FD',
              flex: 1,
              width: '100%',
              alignItems: 'center',
            }}>
            <ProfileCommonAvatar
              style={styles.avatar}
              borderWidth={3 * em}
              fullName={userProfile.name}
              icon={userProfile.avatar}
              pro
            />
            <TouchableOpacity onPress={() => Actions.proProfileOverview({ userProfile: originalProProfile })}>
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
        <View key="sticky-header" style={{ marginTop: 18 * em, alignItems: 'center' }}>
          <ProfileCommonAvatar
            style={{ width: 30 * em, height: 30 * em }}
            fullName={userProfile.name}
            borderWidth={3 * em}
            icon={userProfile.avatar}
            pro
          />

          <SmallText text={userProfile.name} color="#1E2D60" />
        </View>
      )}>
      <View style={styles.bottomView}>
        <View style={styles.cardContainer}>
          <ProfileCommonCard
            caption={'Mes demandes'}
            style={styles.cardStyle}
            icon={ProNeeds(iconSize)}
            onPress={() => {
              Actions.proNeedsHome();
            }}
          />
        </View>
        <View style={styles.listBox}>
          <CommentText text={'Mon compte'} style={styles.caption} />
          <ProfileCommonListItem
            text={'Mes informations'}
            style={styles.listItem}
            icon={informationIcon[props.route.params.accountType] || informationIcon.enterprise}
            onPress={() => {
              Actions.proInformation();
            }}
          />
          <View style={styles.line1} />
          <ProfileCommonListItem
            text={'Mes réglages'}
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
            subText={'En savoir plus'}
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

        {props.route.params.purchased === AccountType.PRO ? (
          <View style={{ alignSelf: 'center', marginTop: 50 * hm, marginBottom: 15 * hm }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../../../assets/images/img_logo.png')} style={styles.imgLogo} />
              <Image source={require('../../../assets/images/txt_logo.png')} style={styles.txtLogo} />
            </View>
            <SmallText style={{ alignSelf: 'flex-end' }} text="PRO" color={'#7398FD'} />
          </View>
        ) : (
          <View style={styles.imgContainer}>
            <Image source={require('../../../assets/images/img_logo.png')} style={styles.imgLogo} />
            <Image source={require('../../../assets/images/txt_logo.png')} style={styles.txtLogo} />
            <SmallText style={styles.proText} text="Pro" color={'#7398FD'} />
          </View>
        )}

        <CommentText text={'Version 1.0'} style={styles.txtVersion} color={'#BFCDDB'} />
        <View style={styles.emptyView} />
      </View>
    </ParallaxScrollView>
  );
};

const styles = {
  rowContainer: { flexDirection: 'row' },
  topView: { height: 300 * hm, alignItems: 'center' },
  avatar: { marginTop: 89 * hm, height: 70 * hm, width: 70 * hm },
  txtFullName: { marginTop: 15 * hm, fontSize: 20 * em, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' },
  txtGoToProfile: { marginTop: 5 * hm, fontSize: 14 * em, color: '#FFFFFF', textAlign: 'center' },
  scrollView: { width: WIDTH, backgroundColor: '#ffffff' },
  dropDown: { right: 30 * em, top: 33 * hm, position: 'absolute', zIndex: 1 },
  bottomView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#254D5612',
    shadowOffset: { width: 0, height: 12 * hm },
    shadowRadius: 25 * em,
    paddingHorizontal: 30 * em,
  },
  cardContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: -46 * em, marginBottom: 30 * hm },
  cardStyle: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 12 * em,
        }, shadowOpacity: 1,
        shadowRadius: 25 * em,
      },
      android: {
        elevation: 10,
      },
    }),
    width: 150 * em,
    flexGrow: 1,
  },
  listBox: { marginTop: 15 * hm },
  caption: { width: '100%', textAlign: 'left', fontWeight: '300', marginBottom: 20 * em },
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
  imgLogo: { height: 26 * em, width: 20 * em, resizeMode: 'contain', marginRight: 10 * em, tintColor: '#7398FD' },
  txtLogo: { height: 23 * em, width: 80 * em, resizeMode: 'contain', tintColor: '#7398FD' },
  proText: { lineHeight: 15 * em, alignSelf: 'flex-start', color: '#7398FD' },
  txtVersion: { marginBottom: 110 * hm },
};

export default ProProfileHomeScreen;
