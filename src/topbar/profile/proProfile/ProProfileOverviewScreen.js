import React, { useState } from 'react';
import { View, ScrollView, Image, ImageBackground } from 'react-native';
import TitleText from '../../../text/TitleText';
import { em, WIDTH, hm } from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
import ProfileCommonLabel from '../../../Components/other/ProfileCommonLabel';
import CommonHeader from '../../../Components/header/CommonHeader';
import ProfileCommonAvatar from '../../../Components/view/ProfileCommonAvatar';
import { Actions } from 'react-native-router-flux';
import CommentText from '../../../text/CommentText';
import ProfileCommonSpecView from '../../../Components/view/ProfileCommonSpecView';
import { Events, Promotion, Tips } from '../../../assets/svg/icons';
import AccountType from '../../../model/user/AccountType';

const ProProfileOverviewScreen = (props) => {
  const iconSize = { width: 33 * em, height: 33 * em };
  const [userProfile] = useState(props.userProfile);
  const servicesView = userProfile.services ? (
    userProfile.services && (
      <View style={{ flexDirection: 'row' }}>
        {userProfile.services.map((service) => (
          <ProfileCommonSpecView text={service} />
        ))}
      </View>
    )
  ) : (
    <>
      <CommonText text={'Ajoute tes services'} style={styles.noticeText} />
      <CommonText text={'Aide les utilisateurs à mieux comprendre ton établissement.'} style={styles.requestText} />
    </>
  );
  const badgesView = userProfile.badges ? (
    <ScrollView horizontal={true} style={{ paddingTop: 20 * hm, paddingBottom: 20 * hm, paddingLeft: 30 * em }}>
      {userProfile.badges.map((badge, index) => (
        <View style={styles.badgeIcon}>{badge.icon}</View>
      ))}
    </ScrollView>
  ) : (
    <>
      <CommonText text={'Tu n’as pas de badges'} style={styles.noticeText} />
      <CommonText text={'Crée des demandes pour avoir des badges'} style={styles.requestText} />
    </>
  );
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CommonHeader
          rightTxt={'Modifier mon profil'}
          style={styles.header}
          onLeftPress={() =>
            Actions.home({
              tabNav: 'ProProfile',
              purchased: userProfile.cover ? AccountType.PRO : null,
            })
          }
          onRightPress={() => Actions.editProProfile({ userProfile: userProfile })}
        />
        {userProfile.cover && (
          <ImageBackground source={userProfile.cover} style={styles.cover} blurRadius={8}>
            <View style={{ backgroundColor: 'rgba(30, 45, 96, 0.64)', flex: 1 }} />
          </ImageBackground>
        )}
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            icon={require('../../../assets/images/avatar_curology.png')}
            style={styles.avatar}
            logoVisible={false}
            pro
            borderWidth={3 * em}
          />
          <TitleText text={userProfile.name} style={styles.fullNameText} />
          <CommentText text={userProfile.type} color="#1E2D60" />

          {userProfile.presentation && <CommentText text={userProfile.presentation} color="#6A8596" />}

          <TitleText text={'Mes publications'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Tips(iconSize)}
                number={userProfile.publications.tips}
                name={'Bons plans'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Promotion(iconSize)}
                number={userProfile.publications.promotions}
                name={'Promotions'}
              />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Events(iconSize)}
                number={userProfile.publications.events}
                name={'Évènements'}
              />
            </View>
          </View>
          <TitleText text={'Mes services'} style={styles.title} />
          {servicesView}
        </View>
        <View style={styles.secondPopView}>
          <TitleText text={'Mes badges'} style={[styles.title, { marginBottom: 20 * hm , fontFamily: 'Montserrat-Bold'}]} />
          {badgesView}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollView: {
    backgroundColor: '#7398FD',
    paddingBottom: 16 * em,
  },
  cover: { zIndex: -1, resizeMode: 'contain', width: '100%', height: 200 * em, position: 'absolute' },
  header: { marginTop: 27 * hm },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    marginTop: 76 * hm,
    paddingHorizontal: 30 * em,
    paddingBottom: 35 * hm,
  },
  avatar: { marginTop: -54 * em, width: 108 * em, height: 108 * em },
  fullNameText: { marginTop: 15 * hm, marginBottom: 10 * hm, fontFamily: 'Lato-Black' },
  title: {
    marginTop: 17 * hm,
    marginBottom: 20 * hm,
    fontSize: 21 * em,
    fontFamily: 'Lato-Black',
  },
  circlesView: {
    flexDirection: 'row',
    marginLeft: 0.072 * WIDTH,
    marginRight: 0.072 * WIDTH,
  },
  labelView: {
    width: WIDTH * 0.285,
  },
  secondPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20 * em,
    borderTopRightRadius: 20 * em,
    marginTop: 15 * hm,
    paddingBottom: 80 * hm,
  },
  noticeText: { fontFamily: 'Lato-Black', marginBottom: 10 * hm, textAlign: 'center' },
  requestText: {
    fontSize: 14 * em,
    textAlign: 'center',
  },
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

export default ProProfileOverviewScreen;
