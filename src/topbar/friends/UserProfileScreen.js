import React, { useState } from 'react';
import { View, ScrollView,Text } from 'react-native';
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
// import ReadMore from 'react-native-read-more-text';
import ReadMore from '@fawazahmed/react-native-read-more';

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
  const [Cercle,setCercle]=useState(false)

  const ajoutcercle = (
    <CommonButton
    onPress={() => {setCercle(true)}}
    text="Ajouter à mon cercle"
    style={styles.addBtn}
    textStyle={{ fontSize: 12 * em, fontFamily: 'Lato-Bold',height:14*hm,width:110*em }}
  />
    );


const cercleamis=(
  <CommonButton
  text="Mon ami(e)/mon voisin(e) "
  style={{paddingVertical: 10 * hm,
    paddingHorizontal: 20 * em,
    width: 'auto',
    fontSize: 12 * em,
    lineHeight: 15 * em,
    borderRadius: 12 * em,
    marginBottom:25*hm,backgroundColor:'transparent',borderColor:'#F0F5F7',borderWidth:1}}
  textStyle={{color:'#6A8596', fontSize: 12 * em, fontFamily: 'Lato-Regular',height:14*hm,width:176*em }}
/>
)
var mainButton;
  switch (Cercle) {
    case false:
      mainButton = ajoutcercle;
      break;
    case true:
      mainButton = cercleamis;
      break;
  }

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
          <CommentText text={userProfile.availability} color="#1E2D60" style={{ marginBottom: 15 * hm }} />
        {mainButton}
          
         <ReadMore
            numberOfLines={2}
            seeMoreText={'Continuer à lire'}
            seeLessText={'Lire Moins'}
            seeLessStyle={styles.semo}
            seeMoreStyle={styles.semo}
        style={styles.content}
        >
            {
            "En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits "
          } 
          </ReadMore>
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
  semo:{color:'#40CDDE',fontSize:14*em,fontFamily:'Lato-Medium'},
  content:{  
    fontSize: 16 * em,
    color: '#6A8596',
    lineHeight: 25 * em,
    // textAlign: 'left',
    marginTop: 3 * hm,
    // textAlign:'center'
  },
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
    paddingVertical: 10 * hm,
    paddingHorizontal: 20 * em,
    width: 'auto',
    fontSize: 12 * em,
    lineHeight: 15 * em,
    borderRadius: 12 * em,
    marginBottom:25*hm
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
