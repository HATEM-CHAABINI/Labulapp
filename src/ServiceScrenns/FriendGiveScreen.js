import React, { useState } from 'react';
import { View,Image } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonButton from '../Components/button/CommonButton';
import FriendParticipatePopupScreen from '../Components/FriendParticipatePopupScreen';
import FriendInvitePopupScreen from '../Components/FriendInvitePopupScreen';
import OrganizeServiceType from '../model/service/OrganizeServiceType';
import OrganizeService from '../model/service/OrganizeService';
import User from '../model/user/User';
import MabulDetailView from '../Components/view/MabulDetailView';
import { ScrollView } from 'react-native';
import CommentText from '../text/CommentText';
import TitleText from '../text/TitleText';
import ReadMore from 'react-native-read-more-text';
import { Text } from 'react-native';
import CommonBackButton from '../Components/button/CommonBackButton';
import Up from '../assets/icons/message/Up';
import { Intero, Inviter } from '../assets/svg/icons';

const organizeData = Object.assign(
  new OrganizeService(
    new User('Philippe Durand', require('../assets/images/sample_user_2.png'), 'anton@gmail.com'),
    'J’organise Atelier',
    'Photographie vintage',
    new Date(),
    require('../assets/images/sample_cover_1.png'),
    1,
    OrganizeServiceType.WORKSHOP
  ),
  { relationship: 'Mon ami/ma famille' }
);
const FriendDetailScreen = () => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [participatePopupVisible, setParticipatePopupVisible] = useState(false);
  const [data] = useState(organizeData);
  return (
    <View style={styles.container}>

    <ScrollView style={{}} >
    <Image source={require('../assets/images/sample_cover_2_big.png')} style={styles.cover} />

        <View style={styles.body}>
          <Image source={data.photo} style={styles.icon} />
          <CommentText style={styles.itemName} text="Arbre de vie" color={'#1E2D60'} />
          <CommentText style={styles.comment} text="Je vends Objet Entretien de la maison" color={'#1E2D60'} />
          <TitleText text={'Spray cuisine 100% Bio'} style={styles.title} />
          <View style={styles.btnBox}>
       
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
          <CommonButton leftIcon={<Up width={20* em} height={18 * hm} />} text={'Participer'} onPress={() => setParticipatePopupVisible(true)} style={{width:185*em,height:50*hm,paddingVertical: 0 * hm}} textStyle={{marginLeft:10*em}} />
         
          
          <CommonButton
      style={{paddingVertical: 0 * hm, width:50*em,height:50*em,  backgroundColor: "white",borderColor:'#D2E2EC',    borderWidth: 1,borderRadius:100}}
     
      
      leftIcon={<Intero width={14* em} height={20 * hm} />}
      // iconStyle={{marginLeft:5*em}}
      onPress={() => setInvitePopupVisible(true)}
    />
          <CommonButton
      style={{paddingVertical: 0 * hm, width:50*em,height:50*em,  backgroundColor: "white",borderColor:'#D2E2EC',    borderWidth: 1,borderRadius:100}}
      textStyle={{color:"#FC3867",fontFamily:'Lato-Medium',fontSize:16*em}}
      
      leftIcon={<Inviter width={24* em} height={24 * hm} />}
      iconStyle={{marginLeft:5*em}}
      onPress={() => setInvitePopupVisible(true)}
    />
          </View>

      </View>
          <ReadMore


            numberOfLines={3}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}
          // onReady={this._handleTextReady}
          >


            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, ssed diam voluptua. At vero eos dsfsdfwefwef
        </Text>
          </ReadMore>
      
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
      <FriendParticipatePopupScreen
        visible={participatePopupVisible}
        onPress={() => setParticipatePopupVisible(false)}
      />
    </View>
    </ScrollView>
    <CommonBackButton dark style={styles.backBtnView} />
    </View>
  );
};

const styles = {
  container: { flex: 1,backgroundColor:'white' },
  backBtnView: {
    shadowColor: '#B3C6CF33',
    shadowOffset: {
      width: 0,
      height: 20 * em,
    },
    shadowOpacity: 1,
    shadowRadius: 40 * em,
    elevation: 3,
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: 15 * em,
    top: 27 * hm,
  },

  backBtn: { width: 44 * em, height: 44 * em, resizeMode: 'contain', zIndex: 1 },
  cover: {
    position:'absolute',
    width: '100%',
    height: 312 * hm,
  },
  body: {
    marginTop: 290 * hm,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 30 * em,
  },
  icon: {
    width: 61 * em,
    height: 61 * em,
    marginTop: -30.5 * hm,
    alignSelf: 'center',
  },
  itemName: {
    marginTop: 5 * hm,
    fontSize: 18 * em,
    lineHeight: 23 * em,
    textAlign: 'left',
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontFamily: 'Lato-Black',
  },
  avatarBox: { width: 42 * em, flexDirection: 'row' },
  avatar: { width: 35.82 * em, height: 35.82 * em },
  badge: {
    backgroundColor: '#FFF4D9',
    borderRadius: 20 * em,
    width: 21 * em,
    height: 21 * em,
    marginLeft: -14.82 * em,
    alignSelf: 'flex-end',
    borderWidth: 2 * em,
    borderColor: '#ffffff',
  },
  comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginTop: 21 * hm },
  title: {
    height: 28 * em,
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginTop: 5 * hm,
    fontFamily: 'Lato-Black',
    marginBottom: 10 * hm,
  },
  price: { fontSize: 18 * em, lineHeight: 21 * em, height: 21 * em, textAlign: 'left', textAlignVertical: 'center' },
  contentBox: { flexDirection: 'row', justifyContent: 'flex-start' },
  content: {
    fontSize: 16 * em,
    color: '#6A8596',
    lineHeight: 25 * em,
    textAlign: 'left',
    marginTop: 3 * hm,
    // fontFamily: 'Lato-Regular',
  },
  quizBtn: { color: '#41D0E2', marginTop: 25 * hm },
  inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent', color: '#41D0E2' },

  
  btnBox: {
    // paddingLeft: 26 * em,
    // paddingRight: 26 * em,
    paddingTop: 15 * hm,
    paddingBottom: 22 * hm,
    backgroundColor:'white'
  },
};

export default FriendGiveScreen;
