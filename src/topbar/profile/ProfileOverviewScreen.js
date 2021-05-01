import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, WIDTH, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import ProfileCommonLabel from 'view/components/other/ProfileCommonLabel';
import CommonHeader from 'view/components/header/CommonHeader';
import ProfileCommonAvatar from 'view/components/view/ProfileCommonAvatar';
import { Actions } from 'react-native-router-flux';
import CommentText from 'view/components/text/CommentText';
import ProfileCommonSpecView from 'view/components/view/ProfileCommonSpecView';
import { Family, Friend, Neighbor } from 'assets/svg/icons';
import AccountType from 'model/user/AccountType';

const iconSize = { width: 48 * em, height: 48 * em };
const ProfileOverviewScreen = (props) => {
  const [userProfile] = useState(props.userProfile);
  const badgesView = userProfile.feedback ? (
    <ScrollView horizontal={true} style={{paddingTop:20*hm,paddingBottom:20*hm, paddingLeft: 30 * em }}>
      {userProfile.feedback.map((badge, index) => (
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
          rightTxtStyle={{ fontSize: 14 * em }}
          style={styles.header}
          onLeftPress={() =>
            Actions.main({
              tabNav: 'Profile',
              purchased: userProfile.photo ? AccountType.LIGHT : null,
            })
          }
          onRightPress={() => Actions.editProfile({ userProfile: userProfile })}
        />
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            icon={require('assets/images/tab_profile_off.png')}
            style={styles.avatar}
            logoVisible={false}
            borderWidth={3 * em}
          />
          <TitleText text={userProfile.name} style={styles.fullNameText} />
          {userProfile.availability && <CommentText text={userProfile.availability} color="#1E2D60" />}
          {userProfile.presentation && <CommentText text={userProfile.presentation} color="#6A8596" />}
          {userProfile.specs && (
            <View style={{ flexDirection: 'row', marginTop: 15 * hm }}>
              {userProfile.specs.map((spec) => (
                <ProfileCommonSpecView text={spec} />
              ))}
            </View>
          )}
          <TitleText text={'Mes cercles'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Neighbor(iconSize)}
                number={userProfile.circles.neighbors}
                name={'Mes voisins'}
              />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={Friend(iconSize)} number={userProfile.circles.friends} name={'Mes amis'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={Family(iconSize)} number={userProfile.circles.families} name={'Ma famille'} />
            </View>
          </View>
        </View>
        <View style={styles.secondPopView}>
          <TitleText text={'Mes demandes'} style={styles.title} />
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
          <TitleText text={'Mes badges'} style={[styles.title,{marginBottom:0}]} />
          {badgesView}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  scrollView: { backgroundColor: '#40CDDE', paddingBottom: 16 * hm },
  header: { marginTop: 27 * hm },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    marginTop: 76 * hm,
    paddingHorizontal: 30 * em,
    paddingBottom: 35 * hm,
  },
  avatar: { marginTop: -57 * hm, width: 114 * em, height: 114 * em },
  fullNameText: { marginTop: 15 * hm, marginBottom: 10 * hm, fontWeight: 'bold' },
  title: { marginTop: 35 * hm, marginBottom: 20 * hm, fontSize: 21 * em, fontWeight: 'bold' },
  circlesView: { flexDirection: 'row', marginLeft: 0.072 * WIDTH, marginRight: 0.072 * WIDTH },
  labelView: { width: WIDTH * 0.285 },
  secondPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20 * em,
    borderTopRightRadius: 20 * em,
    marginTop: 15 * hm,
    paddingBottom: 54 * hm,
  },
  noticeText: { fontFamily: 'Lato-Black', marginBottom: 10 * hm },
  requestText: { fontSize: 14 * em, marginBottom: 65 * hm },
  badgeIcon: {
    width: 60 * em,
    height: 60 * em,
    borderRadius: 30 * em,
    elevation: 1,shadowColor: '#A7A7A733',shadowOpacity:1,
    shadowOffset: {
      width: 0,
      height: 8 * em,
    },
    shadowRadius: 20 * em,backgroundColor:'#fff',
    marginRight: 18 * em,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ProfileOverviewScreen;
