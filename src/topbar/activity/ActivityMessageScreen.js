import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import CommentText from '../../text/CommentText';
import { FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CommonBackButton from '../../Components/button/CommonBackButton';
import CommonButton from '../../Components/button/CommonButton';
import MessageCounterDownPopupScreen from './MessageCounterDownPopupScreen';
import MessageProfilePopupScreen from './MessageProfilePopupScreen';
import { TelephoneWhite } from '../../assets/svg/icons';
import ClockDraw from '../../Components/view/ClockDraw';
import MessageView from '../../Components/view/MessageView';
import { CheckedBlue } from '../../assets/svg/icons';
import CommonHeader from '../../Components/header/CommonHeader';
import CommonListItem from '../../adapter/CommonListItem';

const OTHERSIDE = 1;
const OURSIDE = 2;

const messageLists = [
  { id: 1, date: '22:00', side: OURSIDE, messages: ['Bien sur, voici :\n ABYMES 97139\n Guadeloupe'] },
  {
    id: 0,
    date: '21:59',
    side: OTHERSIDE,
    messages: [
      'Je vous remercie d’avance',
      'Mathieu, pouvez-vous me donner l’adresse de l’endroit à récolter des figues ?',
    ],
  },
];
var requestMessage = [
  {
    id: 0,
    date: '21:59',
    side: OTHERSIDE,
    messages: ['Bonjour Mathieu, je souhaite participer pour Récolter des figues.'],
  },
];

const ActivityMessageScreen = ({ message, activityType }) => {
  const [messageCounterVisible, setMessageCounterVisible] = useState(false);
  const [messageProfileVisible, setMessageProfileVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [refused, setRefused] = useState(false);

  const [isAccepted, setIsAccepted] = useState();
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      setSeconds(seconds - 1);
    }, 1000);
  }, []);
  const popupHeader = (
    <CommonListItem
      style={styles.popupHeader}
      icon={<Image source={message.service.coverImage} style={styles.titleIcon} />}
      title={message.service.title}
      titleStyle={{ fontFamily: 'Lato-Bold', color: '#1E2D60', fontSize: 14 * em }}
      rightView={isAccepted && <View style={{ width: 20 * em, height: 30 * em, backgroundColor: 'blue' }} />}
    />
  );
  const AcceptButton = accepted ? (
    <CommonButton
      style={styles.optionBtnClicked}
      leftIcon={<CheckedBlue width={12 * em} height={8.79 * em} />}
      text="Accepter"
      textStyle={{ fontSize: 12 * em, color: '#40CDDE', marginLeft: 5 * em }}
    />
  ) : (
    <CommonButton
      style={styles.optionBtn}
      // rightIcon={}
      text="Accepter"
      textStyle={{ fontSize: 14 * em }}
      onPress={() => {
        activityType === 'invitation' ? setAccepted(true) : setMessageCounterVisible(true);
      }}
    />
  );
  const RefuseButton = refused ? (
    <CommonButton
      style={styles.optionBtnClicked}
      leftIcon={<CheckedBlue width={12 * em} height={8.79 * em} />}
      text="Je participe"
      textStyle={{ fontSize: 12 * em, color: '#40CDDE', marginLeft: 5 * em }}
    />
  ) : (
    <CommonButton
      style={[styles.optionBtn, { backgroundColor: '#F9547B' }]}
      // rightIcon={}
      text="Refuser"
      textStyle={{ fontSize: 14 * em }}
      onPress={() => {
        setRefused(true);
      }}
    />
  );
  const optionView = (
    <View style={styles.optionView}>
      {AcceptButton}
      {RefuseButton}
    </View>
  );
  const SuccessToast = (
    <View style={styles.toast}>
      <View style={{ flexDirection: 'row', marginBottom: 15 * hm }}>
        <Image source={require('../../assets/images/avatar.png')} style={styles.toastAvatar} />
        <View style={styles.avatarCheck}>
          <CheckedBlue wdith={16.67 * em} height={12.2 * em} />
        </View>
      </View>
      <CommentText
        text="Mathieu viens d’accepter la participation d’Amandine"
        color="#1E2D60"
        style={{ fontFamily: 'Lato-Bold' }}
      />
    </View>
  );
  const renderMessageList = ({ item, index }) => {
    const { date, messages, side } = item;
    return <MessageView date={date} messages={messages} side={side} />;
  };

  if (activityType === 'invitation') {
    requestMessage = [
      {
        id: 0,
        date: '21:59',
        side: OTHERSIDE,
        messages: ['Bonjour Mathieu, je souhaite participer pour Récolter des figues.'],
      },
    ];
  }
  return (
    <View style={styles.container}>
      {/* <CommonHeader
        style={styles.header}
        rightView={
          <TouchableOpacity style={styles.dialIcon} onPress={() => Actions.activityDial()}>
            <TelephoneWhite width={20 * em} height={20 * em} />
          </TouchableOpacity>
        }
        centerView={
          <CommonListItem
            onPress={() => setMessageProfileVisible(!messageProfileVisible)}
            style={{ flex: 1 }}
            icon={<Image source={message.user.photo} style={styles.avatarIcon} />}
            title={message.user.name}
            titleStyle={{ fontFamily: 'Lato-Bold', color: '#ffffff' }}
          />
        }
      /> */}

      {/* <View style={styles.header}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <CommonBackButton />
          <TouchableOpacity
            style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
            onPress={() => setMessageProfileVisible(!messageProfileVisible)}>
            <Image source={require('assets/images/avatar.png')} style={styles.avatarIcon} />
            <CommonText text="Amandine Bernard" color="#ffffff" style={{ fontFamily: 'Lato-Bold' }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Actions.activityDial()}>
          <View style={styles.dialIcon}>
            <TelephoneWhite width={20 * em} height={20 * em} />
          </View>
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.popup}>
        {popupHeader}
        {isAccepted && SuccessToast}
        <View style={styles.popupBody}>
          <View style={styles.popupFooter}>
            <Image source={require('../../assets/images/ic_image.png')} style={styles.imageIcon} />
            <View style={styles.inputView}>
              <TextInput placeholder="Écrit ici ton message …" style={styles.inputText} />
            </View>
          </View>
          {!isAccepted && optionView}
          <View style={{ flex: 1 }}>
            <FlatList
              data={isAccepted ? messageLists : requestMessage}
              inverted={1}
              renderItem={renderMessageList}
              keyExtractor={(i) => i.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View> */}
      {/* <MessageCounterDownPopupScreen
        onAccept={() => setIsAccepted(true)}
        visible={messageCounterVisible}
        onPress={() => setMessageCounterVisible(false)}
      />
      <MessageProfilePopupScreen
        onAccept={(val) => setIsAccepted(val)}
        visible={messageProfileVisible}
        onPress={() => setMessageProfileVisible(false)}
      /> */}
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#40CDDE' },
  header: { marginBottom: 10 * hm, marginTop: 27 * hm },
  toast: {
    alignItems: 'center',
    marginLeft: -30 * em,
    width: 375 * em,
    backgroundColor: 'rgba(64, 205, 222, 0.15)',
    paddingHorizontal: 30 * em,
    paddingBottom: 21 * em,
  },
  avatarCheck: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34 * em,
    width: 34 * em,
    borderRadius: 24 * em,
    backgroundColor: '#ffffff',
    marginLeft: -32 * em,
    marginTop: -10 * hm,
  },
  avatarIcon: { width: 28 * em, height: 28 * em, marginLeft: 10 * em, marginRight: 10 * em },
  dialIcon: { marginRight: 15 * em, alignSelf: 'center' },
  popup: {
    width: '100%',
    flex: 1,
    borderTopRightRadius: 20 * em,
    borderTopLeftRadius: 20 * em,
    backgroundColor: '#ffffff',
    paddingHorizontal: 29 * em,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  popupHeader: { paddingVertical: 15 * hm },
  titleView: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  titleIcon: { width: 28 * em, height: 28 * em, borderRadius: 14 * em, marginRight: 10 * em },
  popupBody: { flexDirection: 'column-reverse', alignItems: 'center', flex: 1 },
  popupFooter: { flexDirection: 'row', alignItems: 'center', marginTop: 25 * hm, marginBottom: 15 * hm },
  inputView: {
    flex: 1,
    backgroundColor: '#F0F5F7',
    borderRadius: 37 * em,
    paddingVertical: 17 * em,
    paddingHorizontal: 17 * em,
  },
  inputText: { fontFamily: 'Lato-Medium', fontSize: 14 * em, lineHeight: 16 * em, color: '#9093A3', padding: 0 },
  imageIcon: { width: 40 * em, height: 40 * em, marginRight: 15 * em },
  optionBtn: {
    paddingVertical: 14 * em,
    paddingHorizontal: 22 * em,
    backgroundColor: '#40CDDE',
    borderRadius: 21 * em,
    alignSelf: 'baseline',
    width: 125 * em,
    elevation: 2,
    shadowColor: '#0000001A',
    shadowOffset: {
      width: -3 * em,
      height: 6 * hm,
    },
    shadowOpacity: 1,
    shadowRadius: 10 * em,
  },
  optionBtnClicked: {
    paddingVertical: 9 * em,
    paddingHorizontal: 15 * em,
    backgroundColor: 'rgba(64, 205, 222, 0.2) ',
    borderRadius: 21 * em,
    width: 125 * em,
  },
  optionView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 29 * em,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10 * hm,
  },
};

export default ActivityMessageScreen;
