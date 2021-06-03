import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hexToRGB, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import CommentText from '../../text/CommentText';
import CommonButton from '../button/CommonButton';
import CommonBackButton from '../button/CommonBackButton';
import SeeMore from 'react-native-see-more-inline';
import { Actions } from 'react-native-router-flux';
import AvatarWithBadge from './AvatarWithBadge';
import FriendInvitePopupScreen from '../../topbar/friends/popup/FriendInvitePopupScreen';
import { getUserBadge } from '../../constants/icons';
import CommonListItem from '../../adapter/CommonListItem';
import NeedStatusType from '../../model/service/NeedStatusType';
import Message from '../../model/message/Message';
import ReadMore from 'react-native-read-more-text';
import Moment from 'moment';
const MabulDetailView = (props) => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [data] = useState(props.data);
  const [data2] = useState(props.data2);
  const [user] = useState(props.user);

  const userBadge = getUserBadge(data2.serviceType.code, data2.serviceType.subCode);
  const colorStyles = { button: { color: '#41D0E2' }, label: { color: '#A0AEB8' } };

  const InviteButton = (
    <CommonButton
      style={styles.inviteBtn}
      text="Inviter à participer"
      textStyle={colorStyles.button}
      onPress={() => setInvitePopupVisible(true)}
    />
  );
  const ModifyButton = (
    <CommonButton
      style={styles.quizBtn}
      textStyle={colorStyles.button}
      text="Modifier"
      onPress={() => Actions.editNeed({ data2: data2, docId: props.docId })}
    />
  );
  const AskButton = (
    <CommonButton
      // onPress={() => Actions.activityMessage({ message: new Message(data.user, data.title, data.coverImage) })}
      style={styles.quizBtn}
      textStyle={{ color: '#41D0E2' }}
      text="Poser une question"
    />
  );
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Image
          // source={typeof data.coverImage === 'number' ? data.coverImage : require('../../assets/images/sample_cover_2.png')}
          source={data2.images !== undefined ? { uri: data2.images[0].uri } : require('../../assets/images/sample_cover_2.png')}
          style={styles.cover}
        />
        <View style={styles.body}>
          <View style={styles.ViewtimeTxt}>
            <CommonText
              // text={data.status === NeedStatusType.CANCELED ? 'Terminé' : '04 Fév · 08h00'}.seconds * 1000
              text={data.status === NeedStatusType.CANCELED ? 'Terminé' : data2.demandStartDate !== undefined ? data2.demandStartDate.seconds !== undefined ? Moment(data2.demandStartDate.seconds * 1000).format('DD MMMM YYYY-HH:MM') : Moment(data2.demandStartDate).format('DD MMMM YYYY-HH:MM') : ' '}
              style={styles.timeTxt}
              color="#6A8596"
            />
          </View>
          <CommonListItem
            style={styles.userInfo}
            icon={
              <AvatarWithBadge
                style={{ marginRight: 21 * em }}
                avatar={user.profilePic !== undefined ? { uri: user.profilePic } : data.user.photo}
                badge={userBadge}
                avatarDiameter={35 * em}
                badgeDiameter={21 * em}
              />
            }
            // title={data.user.name}
            title={user.firstName + " " + user.lastName}
            titleStyle={styles.userName}
            subTitle={data.relationship || data2.category !== undefined ? data2.category.name : ' '}
            subTitleStyle={colorStyles.label}
          />
          <CommentText style={styles.comment} text={data2.type !== undefined ? data2.type.itemName : data.organName} color={'#1E2D60'} />
          <TitleText text={data2.data !== undefined ? data2.data.title : data.title} style={styles.title} />
          <ReadMore


            numberOfLines={3}
          // renderTruncatedFooter={this._renderTruncatedFooter}
          // renderRevealedFooter={this._renderRevealedFooter}
          // onReady={this._handleTextReady}
          >


            <Text style={styles.content}>
              {data2.data !== undefined ? data2.data.description : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ssed diam voluptua. At vero eos dsfsdfwefwef"}
            </Text>
          </ReadMore>
          {data.status === NeedStatusType.CANCELED ? <></> : data.relationship ? AskButton : ModifyButton}
          {data.status !== NeedStatusType.CANCELED && InviteButton}
        </View>
      </ScrollView>
      <CommonBackButton dark style={styles.backBtnView} onPress={() => Actions.pop()} />
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
    </>
  );
};
_renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{ color: '#40CDDE', fontSize: 14 * em }} onPress={handlePress}>
      Continuer à lire
    </Text>
  );
}

_renderRevealedFooter = (handlePress) => {
  return (
    <Text style={{ color: '#40CDDE', fontSize: 14 * em }} onPress={handlePress}>
      Voir moins
    </Text>
  );
}
const styles = {
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
    top: 30 * em,
  },
  cover: {
    width: '100%',
    height: 312 * hm,
  },
  body: {
    paddingHorizontal: 30 * em,
    marginTop: -41 * em,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    //paddingBottom: '100%',
  },
  ViewtimeTxt: {

    lineHeight: 19 * hm,
    paddingHorizontal: 30 * em,
    marginLeft: -30 * em,
    paddingTop: 11 * em,
    paddingBottom: 11 * em,
    marginTop: -17 * hm,
    backgroundColor: '#ffffff',
    alignSelf: 'baseline',
    borderTopRightRadius: 15 * em,


  },
  timeTxt: {
    fontFamily: 'Lato-Medium',
    lineHeight: 19 * hm,
    paddingHorizontal: 30 * em,
    marginLeft: -30 * em,
    paddingTop: 17 * em,
    paddingBottom: 11 * em,
    marginTop: -17 * hm,
    alignSelf: 'baseline',

  },
  userInfo: {
    fontFamily: 'Lato-Medium',
    marginTop: 14 * em,
    height: 39 * em,
  },
  userName: { fontFamily: 'Lato-Medium', fontFamily: 'Lato-Black', fontSize: 16 * em, textAlign: 'left', textAlignVertical: 'center', color: '#1E2D60' },
  comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginTop: 21 * hm },
  title: {
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginTop: 5 * hm,
    marginBottom: 15 * hm,
    fontFamily: 'Lato-Black',
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  content: {
    fontSize: 14 * em,
    // backgroundColor: 'red',
    color: '#6A8596',
    lineHeight: 25 * em,
    textAlign: 'left',
    marginTop: 3 * hm,
    fontFamily: 'Lato-Medium',
  },
  quizBtn: { marginTop: 25 * hm, backgroundColor: hexToRGB('#41D0E2', 0.2) },
  inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent' },
};

export default MabulDetailView;

{/*
import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hexToRGB, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import CommentText from '../../text/CommentText';
import CommonButton from '../button/CommonButton';
import CommonBackButton from '../button/CommonBackButton';
import SeeMore from 'react-native-see-more-inline';
import { Actions } from 'react-native-router-flux';
import AvatarWithBadge from './AvatarWithBadge';
import FriendInvitePopupScreen from '../../topbar/friends/popup/FriendInvitePopupScreen';
import { getUserBadge } from '../../constants/icons';
import CommonListItem from '../../adapter/CommonListItem';
import NeedStatusType from '../../model/service/NeedStatusType';
import Message from '../../model/message/Message';
import ReadMore from 'react-native-read-more-text';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux'
import Moment from 'moment';
// const needData = new NeedService(
//   new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
//   'J’ai besoin Coup de main bricolage',
//   'Récolter des figues',
//   new Date(),
//   require('../../../assets/images/sample_cover_9.png'),
//   3,
//   NeedServiceType.REPAIR
// );

const MabulDetailView = (props) => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const { profileData } = useSelector((state) => state.profileReducer);
  const [data] = useState(props.data);
  const [data2] = useState(props.data2);
  const userBadge = getUserBadge(data.type, data.subType);
  console.log("data2 ", data2)
  const colorStyles = { button: { color: '#41D0E2' }, label: { color: '#A0AEB8' } };
  const InviteButton = (
    <CommonButton
      style={styles.inviteBtn}
      text="Inviter à participer"
      textStyle={colorStyles.button}
      onPress={() => setInvitePopupVisible(true)}
    />
  );
  const ModifyButton = (
    <CommonButton
      style={styles.quizBtn}
      textStyle={colorStyles.button}
      text="Modifier"
      onPress={() => Actions.editNeed()}
    />
  );
  const AskButton = (
    <CommonButton
      // onPress={() => Actions.activityMessage({ message: new Message(data.user, data.title, data.coverImage) })}
      style={styles.quizBtn}
      textStyle={{ color: '#41D0E2' }}
      text="Poser une question"
    />
  );
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Image
          source={typeof data.coverImage === 'number' ? data2 === undefined || { uri: data2.images[0].uri } : require('../../assets/images/sample_cover_2.png')}
          style={styles.cover}
        />
        <View style={styles.body}>
          <View style={styles.ViewtimeTxt}>
            <CommonText
              text={data.status === NeedStatusType.CANCELED ? 'Terminé' : data2 === undefined || Moment(data2.demandStartDate).format('DD MMMM YYYY-hh:MM')}
              style={styles.timeTxt}
              color="#6A8596"
            />
          </View>
          <CommonListItem
            style={[styles.userInfo, { overflow: 'hidden' }]}
            icon={
              <AvatarWithBadge
                style={{ marginRight: 21 * em }}
                avatar={{ uri: profileData.profilePic }}
                badge={userBadge}
                avatarDiameter={35 * em}
                badgeDiameter={21 * em}
              />
            }
            title={profileData.firstName + ' ' + profileData.lastName}
            titleStyle={styles.userName}
            subTitle={data2 === undefined || data2.category.name || data.relationship || 'Mon ami/ ma famille'}
            subTitleStyle={colorStyles.label}
          />
          <CommentText style={styles.comment} text={data2 === undefined || data2.type.itemName || data.organName} color={'#1E2D60'} />
          <TitleText text={data2 === undefined || data2.data.title} style={styles.title} />
          <ReadMore
            numberOfLines={3}
          // renderTruncatedFooter={this._renderTruncatedFooter}
          // renderRevealedFooter={this._renderRevealedFooter}
          // onReady={this._handleTextReady}
          >
            <Text style={styles.content}>
              {data2 === undefined || data2.data.description}
              {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, ssed diam voluptua. At vero eos dsfsdfwefwef */}
    //           </Text>
    //           </ReadMore>
    //           {data.status === NeedStatusType.CANCELED ? <></> : data.relationship ? AskButton : ModifyButton}
    //           {data.status !== NeedStatusType.CANCELED && InviteButton}
    //         </View>
    //       </ScrollView>
    //       <CommonBackButton dark style={styles.backBtnView} onPress={() => Actions.pop()} />
    //       <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
    //     </>
    //   );
    // };
    // _renderTruncatedFooter = (handlePress) => {
    //   return (
    //     <Text style={{ color: '#40CDDE', fontSize: 14 * em }} onPress={handlePress}>
    //       Continuer à lire    </Text>
    //   );
    // }

    // _renderRevealedFooter = (handlePress) => {
    //   return (
    //     <Text style={{ color: '#40CDDE', fontSize: 14 * em }} onPress={handlePress}>
    //       Voir moins
    //     </Text>
    //   );
    // }
    // const styles = {
    //   backBtnView: {
    //     shadowColor: '#B3C6CF33',
    //     shadowOffset: {
    //       width: 0,
    //       height: 20 * em,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 40 * em,
    //     elevation: 3,
    //     backgroundColor: '#ffffff',
    //     position: 'absolute',
    //     left: 15 * em,
    //     top: 30 * em,
    //   },
    //   cover: {
    //     width: '100%',
    //     height: 312 * hm,
    //   },
    //   body: {
    //     paddingHorizontal: 30 * em,
    //     marginTop: -41 * em,
    //     borderTopRightRadius: 28 * em,
    //     borderTopLeftRadius: 28 * em,
    //     backgroundColor: '#ffffff',
    //     width: '100%',
    //     //paddingBottom: '100%',
    //   },
    //   ViewtimeTxt: {

    //     lineHeight: 19 * hm,
    //     paddingHorizontal: 30 * em,
    //     marginLeft: -30 * em,
    //     paddingTop: 11 * em,
    //     paddingBottom: 11 * em,
    //     marginTop: -17 * hm,
    //     backgroundColor: '#ffffff',
    //     alignSelf: 'baseline',
    //     borderTopRightRadius: 15 * em,


    //   },
    //   timeTxt: {
    //     fontFamily: 'Lato-Medium',
    //     lineHeight: 19 * hm,
    //     paddingHorizontal: 30 * em,
    //     marginLeft: -30 * em,
    //     paddingTop: 17 * em,
    //     paddingBottom: 11 * em,
    //     marginTop: -17 * hm,
    //     alignSelf: 'baseline',

    //   },
    //   userInfo: {
    //     fontFamily: 'Lato-Medium',
    //     marginTop: 14 * em,
    //     height: 39 * em,
    //   },
    //   userName: { fontFamily: 'Lato-Medium', fontFamily: 'Lato-Black', fontSize: 16 * em, textAlign: 'left', textAlignVertical: 'center', color: '#1E2D60' },
    //   comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginTop: 21 * hm },
    //   title: {
    //     lineHeight: 30 * em,
    //     fontSize: 24 * em,
    //     textAlign: 'left',
    //     marginTop: 5 * hm,
    //     marginBottom: 15 * hm,
    //     fontFamily: 'Lato-Black',
    //   },
    //   contentBox: {
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //   },
    //   content: {
    //     fontSize: 14 * em,
    //     // backgroundColor: 'red',
    //     color: '#6A8596',
    //     lineHeight: 25 * em,
    //     textAlign: 'left',
    //     marginTop: 3 * hm,
    //     fontFamily: 'Lato-Medium',
    //   },
    //   quizBtn: { marginTop: 25 * hm, backgroundColor: hexToRGB('#41D0E2', 0.2) },
    //   inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent' },
    // };

    // export default MabulDetailView;

