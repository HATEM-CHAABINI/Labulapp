import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import ProfileCommonLabel from '../../Components/other/ProfileCommonLabel';
import CommonBackButton from '../../Components/button/CommonBackButton';
import ProfileCommonSpecView from '../../Components/view/ProfileCommonSpecView';

import ProfileCommonAvatar from '../../Components/view/ProfileCommonAvatar';
import CommentText from '../../text/CommentText';
import CommonButton from '../../Components/button/CommonButton';
import { Family, Friend, Neighbor } from '../../assets/svg/icons';
import { feedbackIcons } from '../../constants/icons';

const sampleProfile = {
  avatar: require('../../assets/images/tab_profile_off.png'),
  fullName: 'Amandine Bernard',
  availability: 'Je suis disponible le soir et le week-end',
  presentation:
    'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
  specs: ['Bricoleur', 'Jardinier'],
  circles: { neighbours: 17, friends: 23, families: 56 },
  needs: { helps: 24, donations: 6, events: 2 },
  badges: feedbackIcons,
};
const UserProfileScreen = (props) => {
  const [userProfile] = useState(props.userProfile || sampleProfile);
  const badgeView = userProfile.badges && (
    <ScrollView horizontal={true} style={{ paddingTop: 20 * hm, paddingLeft: 30 * em, height: 80 * hm }}>
      {userProfile.badges.map((badge, index) => (
        <View style={styles.badgeIcon}>{badge.icon}</View>
      ))}
    </ScrollView>
  );
  return (
    <View style={styles.container}>
      <CommonBackButton dark={true} style={styles.backBtn} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            borderWidth={0}
            icon={require('../../assets/images/avatar.png')}
            style={styles.avatar}
            logoVisible={false}
          />
          <TitleText text={userProfile.fullName} style={styles.fullNameText} />
          <CommentText text={userProfile.availability} color="#1E2D60" style={{ marginBottom: 20 * hm }} />
          <CommentText
            text={'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage'}
            color="#6A8596"
            style={{ lineHeight: 24 * em }}
          />
          <View style={{ flexDirection: 'row' }}>
            <CommentText text={'et dans tout le type de petits tr…'} color="#6A8596" style={{ lineHeight: 24 * em }} />
            <CommentText
              text={' Continuer à lire'}
              color="#40CDDE"
              style={{ lineHeight: 24 * em, fontFamily: 'Lato-Bold' }}
            />
          </View>
          {userProfile.specs && (
            <View style={{ flexDirection: 'row', marginTop: 15 * hm }}>
              {userProfile.specs.map((spec) => (
                <ProfileCommonSpecView text={spec} />
              ))}
            </View>
          )}
          <CommonButton
            text="Ajouter à mon cercle"
            style={styles.addBtn}
            textStyle={{ fontSize: 12 * em, fontFamily: 'Lato-Black' }}
          />
          <TitleText text={'Mes cercles'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Neighbor({ width: 48 * em, height: 48 * em })}
                number={userProfile.circles.families}
                name={'Mes voisins'}
              />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Friend({ width: 48 * em, height: 48 * em })}
                number={userProfile.circles.friends}
                name={'Mes amis'}
              />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Family({ width: 48 * em, height: 48 * em })}
                number={userProfile.circles.neighbours}
                name={'Ma famille'}
              />
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
          <TitleText text={'Mes badges'} style={[styles.title, { marginBottom: 0 }]} />
          {badgeView}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  backBtn: {
    shadowColor: '#B3C6CF33',
    shadowOffset: {
      width: 0,
      height: 20 * hm,
    },
    shadowRadius: 40 * em,
    elevation: 10,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#ffffff',
    top: 27 * hm,
    left: 15 * em,
  },
  scrollView: { backgroundColor: '#40CDDE', paddingBottom: 16 * hm },
  header: { marginTop: 27 * hm },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    marginTop: 98 * hm,
    paddingHorizontal: 30 * em,
    paddingBottom: 35 * hm,
  },
  avatar: { marginTop: -17 * hm, width: 108 * hm, height: 108 * hm },
  fullNameText: { marginTop: 15 * hm, marginBottom: 10 * hm },
  title: { marginTop: 35 * hm, marginBottom: 11 * hm, fontSize: 21 * em },
  circlesView: { flexDirection: 'row', marginLeft: 0.072 * WIDTH, marginRight: 0.072 * WIDTH },
  labelView: { width: WIDTH * 0.285 },
  secondPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20 * em,
    borderTopRightRadius: 20 * em,
    marginTop: 15 * hm,
    height: 321 * hm,
    // paddingBottom: 40 * hm,
  },
  noticeText: { marginBottom: 60 * hm },
  keywordTab: {
    paddingVertical: 5 * hm,
    paddingHorizontal: 10 * em,
    fontSize: 12 * em,
    lineHeight: 14 * em,
    backgroundColor: '#F0F5F7',
    borderRadius: 19 * em,
    color: '#6A8596',
  },
  keywordTabView: { paddingVertical: 5 * em, paddingHorizontal: 10 * em },
  addBtn: {
    marginTop: 20 * hm,
    paddingVertical: 10 * hm,
    paddingHorizontal: 20 * em,
    width: 'auto',
    fontSize: 12 * em,
    lineHeight: 15 * em,
    borderRadius: 12 * em,
  },
  badgeIcon: {
    shadowColor: '#A7A7A733', shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8 * em,
    },
    shadowRadius: 20 * em,
    width: 60 * em,
    height: 60 * em,
    borderRadius: 30 * em,
    elevation: 3,
    marginRight: 18 * em,
    alignItems: 'center',
    justifyContent: 'center', backgroundColor: '#fff',
  },
};

export default UserProfileScreen;
