import React from 'react';
import { View, StatusBar } from 'react-native';
import { em, hm } from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
import TitleText from '../../../text/TitleText';
import Modal from 'react-native-modal';
import CommonBackButton from '../../../Components/button/CommonBackButton';
import CommonTextInput from '../../../textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import Reinput from "reinput"

const FriendBadgeNoticePopupScreen = (props) => {
  const [text, onChangeText] = React.useState("");

  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <View style={styles.body}>
        <StatusBar opa backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
        <CommonBackButton dark style={{ marginLeft: -30 * em }} />
        <View style={styles.iconView}>
          <View style={styles.circleContainer}>{props.selected[0].icon}</View>
          <View style={[styles.circleContainer, { marginTop: -18 * em }]}>{props.selected[1].icon}</View>
          <View style={styles.circleContainer}>{props.selected[2].icon}</View>
        </View>
        <TitleText text="Super !" style={styles.title} />
        <CommonText text="Tu veux laisser un commentaire ?" color="#1E2D60" style={styles.comment} />
        {/* <CommonTextInput text={''} isPasswordInput={false} style={styles.input} onChangeText={onChangeText} value={text} /> */}
        <Reinput
              label='Écrit ici'
              autoCorrect={false}
              underlineColor="#BFCDDB"
              underlineActiveColor="#41D0E2"
              labelActiveColor="#BFCDDB"
              labelColor="#BFCDDB"
              paddingBottom={12 * hm}
              clearButtonMode="while-editing"
              color='#1E2D60'
              fontFamily='Lato-Bold'
              fontSize={16 * em}
              keyboardType="email-address"
              selectionColor={'#41D0E2'}
              onChangeText={onChangeText} value={text}
            />
     
      </View>
      {text!=""? 
   <CommonButton
   style={styles.btn}
   textStyle={{ color: '#40CDDE' }}
   text="Laisser ce commentaire"
   onPress={() => {
     props.onPress();
     Actions.myNeedsHome({ tabNav: 'participations' });
    //  console.log(text);
   }}
 />
   :
   <CommonButton
   style={styles.btn}
   textStyle={{ color: '#40CDDE' }}
   text="Continuer sans commentaire"
   onPress={() => {
     props.onPress();
     Actions.myNeedsHome({ tabNav: 'participations' });
    //  console.log(text);
   }}
 />
      }
      
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 38 * em,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: { paddingHorizontal: 30 * em, paddingTop: 15 * em },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 * em,
    borderColor: '#F0F5F7',
    backgroundColor: '#ffffff',
    width: 66 * em,
    height: 67 * em,
    borderRadius: 40.5 * em,
  },

  btn: { backgroundColor: '#ffffff', borderWidth: 1 * em, borderColor: '#40CDDE', marginBottom: 31 * em },
  iconView: {
    marginTop: 47 * em,
    marginBottom: 35 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 43 * em,
  },
  input: { height: 52 * em },
  title: { marginBottom: 10 * em, alignSelf: 'center' },
  comment: { marginBottom: 16 * em, alignSelf: 'center' },
  listItem: { marginBottom: 35 * em },
};
export default FriendBadgeNoticePopupScreen;
