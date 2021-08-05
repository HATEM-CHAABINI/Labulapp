import React, { useEffect, useState } from 'react';
import { View,Image, TouchableOpacity } from 'react-native';
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
import { CheckBlue, CheckedBlue, Intero, Inviter, Option } from '../assets/svg/icons';
import { getUserBadge } from '../constants/icons';
import CommonListItem from '../adapter/CommonListItem';
import AvatarWithBadge from '../Components/view/AvatarWithBadge';
import { renderimggive, renderimgneed, renderimgorganize, renderimgSell } from '../constants/renderBange';
import NeedStatusType from '../model/service/NeedStatusType';
import { Actions } from 'react-native-router-flux';
import FriendCancelParticipatePopupScreen from './FriendCancelParticipatePopupScreen';
import WaitingScreen from './WaitingScreen'
import { Pouce } from '../assets/svg/svg/icons';
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

const FriendDetailScreen = (props) => {

  const [cancelParticipatePopupVisible, setcancelParticipatePopupVisible] = useState(false);
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [participatePopupVisible, setParticipatePopupVisible] = useState(false);
  const [data] = useState(props.data);
  const [data2, setdata2] = useState(props.data2);
  const [status, setStatus] = useState();
  const [user] = useState(props.user);
  const colorStyles = { button: { color: '#41D0E2' }, label: { color: '#A0AEB8' } };
  const RequestButton = (
    <CommonButton leftIcon={<Up width={20* em} height={18 * hm} />} text={'Participer'} onPress={() => props.servicetype=="organize"? setParticipatePopupVisible(true):participer()
  } style={{width:185*em,height:50*hm,paddingVertical: 0 * hm}} 
  textStyle={{marginLeft:10*em}} />

  //   <CommonButton text={'Participer'} style={styles.partBtn} 
  //  onPress={() => setStatus(NeedStatusType.WAITING)}
  //    />
  );
  const ParticipationButton = (



<View>   
    <CommonButton
      leftIcon={<CheckedBlue width={20* em} height={18 * hm} />} 
      text={'Je participe'}
      // rightIcon={Option({ width: 4 * em, height: 18 * em })}
      style={{width:185*em,height:50*hm,paddingVertical: 0 * hm,backgroundColor:'rgba(197, 240, 245, 0.36)'}} 
     
      textStyle={{marginLeft:10*em, color: '#40CDDE',fontFamily:'Lato-Medium',fontSize:16*em }}
      // style={[styles.partBtn, { backgroundColor: '#D0F5EA', justifyContent: 'space-between' }]}
    />
        <TouchableOpacity
            // style={[styles.controlBtn, { backgroundColor: '#F83D39' }]}
            onPress={() =>  setStatus(NeedStatusType.PARTICIPATED)}>
            <Text style={{fontFamily:'Lato-Medium',fontSize:12*em,color:'#FC3867',marginTop:4*hm,alignSelf:'center'}}>Annuler ma participation</Text>
          </TouchableOpacity>
    </View> 
  );
  const OpinionButton = (
    <CommonButton style={styles.partBtn} text="Donner mon avis" onPress={() => Actions.friendGiveBadge()} />
  );
  const WaitingButton = (
  
    <CommonButton
      onPress={() => {}}
      // leftIcon={Send({ width: 13 * em, height: 13 * em })}
      // iconStyle={{ marginRight: 10 * hm }}
      text={'Demande de participation envoyée'}
      textStyle={{ color: '#22D39A' }}
      style={[styles.partBtn, { backgroundColor: '#F0F5F7' }]}
    />
  );
  var mainButton;
  switch (status) {
    case NeedStatusType.INPROGRESS:
      mainButton = ParticipationButton;
      break;  
    case NeedStatusType.CANCELED:
      mainButton = OpinionButton;
      break;
    case NeedStatusType.WAITING:
      mainButton = WaitingButton;
      break;
    default:
      mainButton = RequestButton;
      break;
  }

  const participer = () => {
    setStatus(NeedStatusType.INPROGRESS)
    Actions.waitscreen()

    
  }

  useEffect(() => {
    setdata2(props.data2)
    console.log('djdjdjdjdjdjuuommamammmmmm',data2.images[0].uri );
    setStatus(props.data2.status.code)
  }, [props.data2])

  return (
    <View style={styles.container}>

    <ScrollView style={{}} >
   
      {status== NeedStatusType.CANCELED ?
<View>
<Image
          source={data2.images !== undefined ? { uri: data2.images[0].uri } : require('../assets/images/sample_cover_2.png')}
          style={styles.cover}
        />
  <View style={{backgroundColor:'rgba(100, 228, 244, 0.5)',  position:'absolute',
    width: '100%',
    height: 312 * hm,}}/>

        
<View style={{ marginTop: 150 * hm,
height:'100%',
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 30 * em,}}>

<CommonListItem

  style={styles.userInfo}
  icon={
    <AvatarWithBadge
      style={{ marginRight: 21 * em }}
      avatar={user.profilePic !== undefined ? { uri: user.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }}
     
      avatarDiameter={35 * em}
      badgeDiameter={21 * em}
    />
  }
  // title={data.user.name}
  title={user.firstName + " " + user.lastName}
  titleStyle={styles.userName}

  subTitle={ data2.category !== undefined ? data2.category.name : ' '}
  subTitleStyle={colorStyles.label}
/>
<CommentText style={styles.comment} text={data2.type !== undefined ? data2.type.itemName :""} color={'#1E2D60'} />
<TitleText text={data2.data !== undefined ? data2.data.title : data.title} style={styles.title} />
<View style={{marginTop:40*hm,backgroundColor:'rgba(197, 240, 245, 0.43)',height:250*hm,width:315*em,borderRadius:16*em,alignItems: 'center', }}>
<Pouce style={{marginTop:25*hm,marginBottom:10*hm}}/>
<Text style={{fontFamily:'Lato-Bold',fontSize:24*em,color:'#1E2D60'}}>Offre un badge</Text>
<Text style={{fontFamily:'Lato-Regular',fontSize:12*em,color:'#6A8596',marginTop:10*hm,textAlign:'center',paddingHorizontal:30*em}}>{'Attribuer un badge va permettre aux autres de savoir comment s’est passé votre échange et quels sont ses domaines de compétences. '}</Text>
<CommonButton style={ {width:209*em,height:50*hm,paddingVertical: 0 * hm,marginTop:15*hm}} text="Offrir maintenant" onPress={() => Actions.friendGiveBadge()} />

</View>
<Text style={{fontFamily:'Lato-Italic',fontSize:11*em,color:'#A0AEB8',marginTop:10*hm,textAlign:'center',paddingHorizontal:50*em}}>Tu as 15 jours pour offrir un badge à {user.firstName} après tu auras plus accès à cette option.</Text>

 </View>
 </View>
      :
  
  
<View>
<Image
          source={data2.images !== undefined ? { uri: data2.images[0].uri } : require('../assets/images/sample_cover_2.png')}
          style={styles.cover}
        />
        <View style={styles.body}>

          {/* <Image source={data.photo} style={styles.icon} /> */}
          {/* <CommentText style={styles.itemName} text="Arbre de vie" color={'#1E2D60'} /> */}
          {/* <CommentText style={styles.comment} text="Je vends Objet Entretien de la maison" color={'#1E2D60'} /> */}
          {/* <TitleText text={'Spray cuisine 100% Bio'} style={styles.title} /> */}
          <CommonListItem
          
            style={styles.userInfo}
            icon={
              <AvatarWithBadge
                style={{ marginRight: 21 * em }}
                avatar={user.profilePic !== undefined ? { uri: user.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }}
                badge={
                  data2.serviceType.code === 0 ?
                    renderimgorganize(data2.category.id) :
                    data2.serviceType.code === 1 ?
                      renderimggive(data2.category.id)
                      : data2.serviceType.code === 2 ?
                        renderimgSell(data2.belongsTo.id, data2.category.id) :
                        renderimgneed(data2.belongsTo.id, data2.category.id)
                }
                avatarDiameter={35 * em}
                badgeDiameter={21 * em}
              />
            }
            // title={data.user.name}
            title={user.firstName + " " + user.lastName}
            titleStyle={styles.userName}
       
            subTitle={ data2.category !== undefined ? data2.category.name : ' '}
            subTitleStyle={colorStyles.label}
          />
          <CommentText style={styles.comment} text={data2.type !== undefined ? data2.type.itemName :""} color={'#1E2D60'} />
          <TitleText text={data2.data !== undefined ? data2.data.title : data.title} style={styles.title} />
          
         
          <View style={styles.btnBox}>
       
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
          {/*
           */}

                {mainButton}
                {/* <FriendCancelParticipatePopupScreen
        visible={cancelParticipatePopupVisible}
        onPress={() => setcancelParticipatePopupVisible(false)}
        onStatus={(v) => setStatus(v)}
      /> */}
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
          >
            <Text style={styles.content}>
              {data2.data !== undefined ? data2.data.description : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ssed diam voluptua. At vero eos dsfsdfwefwef"}
            </Text>
          </ReadMore>
      
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
      <FriendParticipatePopupScreen
        visible={participatePopupVisible}
        onPress={() => setParticipatePopupVisible(false)}
      />
 </View>

    </View>}
    </ScrollView>
    <CommonBackButton dark style={styles.backBtnView} />
    </View>
    
  );
};

const styles = {
  userInfo: {
    fontFamily: 'Lato-Medium',
    marginTop: 34 * hm,
    height: 39 * em,
  },
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
  partBtn:{
    width:185*em,height:50*hm,paddingVertical: 0 * hm
  }
};

export default FriendDetailScreen;
