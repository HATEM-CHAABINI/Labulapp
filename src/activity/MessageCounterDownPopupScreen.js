import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { em, HEIGHT, hm } from '../constants'
import CommonButton from '../Components/button/CommonButton';
import CommonText from '../text/CommonText';
import Modal from 'react-native-modal';
import { Clock } from '../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
const MessageCounterDownPopupScreen = (props) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (props.visible) {
      if (seconds < 0) {
        clearInterval(intervalId);
      }
      const intervalId = setInterval(() => {
        //assign interval to a variable to clear it.
        setSeconds(seconds - 1);
      }, 1000);
      if (seconds <= 0) {
        return clearInterval(intervalId);
      }
      return () => clearInterval(intervalId); //This is important
    } else {
      setSeconds(30);
    }
  }, [props.visible, seconds, setSeconds]);
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.9}
      style={styles.modalView}
      backdropColor="#1E2D60"
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View style={styles.container}>
        <View style={{ flex: 0.44, flexDirection: 'column-reverse', alignSelf: 'center' }}>
          {/* <CommonText text={30 + 's'} color="rgba(249, 84, 123, 1)" style={styles.secondsTxt} /> */}
          <Clock width={184 * hm} height={120 * hm} />
        </View>

        <View style={styles.bottomView}>
          <CommonText
            text={
              'Pour favoriser les échanges réels le temps alloué à la rédaction des messages est limité à 30s.\n\n A toi de jouer !'
            }
            style={styles.notice}
            color={'#ffffff'}
          />
          <CommonButton
            text={'D’accord, répondre maintenant'}
            onPress={() => {
              props.onPress();
              props.onAccept();
            }}
          />
          <CommonButton
            text={'Répondre plus tard'}
            style={styles.laterBtn}
            onPress={() => {
              props.onPress();
              Actions.main({ tabNav: 'Activity', activityType: 'needs', noEmpty: true });
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalView: {
    marginTop: 0 * hm,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: { flex: 1, backgroundColor: 'transparent', opacity: 0.9, flexDirection: 'column', postion: 'absolute' },
  topView: { flex: 0.44, alignItems: 'center', justifyContent: 'flex-end' },
  bottomView: {
    flex: 0.56,
    alignItems: 'center',
  },
  // canvas: {
  //   backgroundColor: '#FEDDE4',
  //   width: 121 * em,
  //   height: 52 * hm,
  //   borderRadius: 26 * em,
  //   alignItems: 'center',

  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // secondsTxt: {
  //   fontFamily: 'Lato-Bold',
  //   fontSize: 27 * em,
  //   lineHeight: 38 * em,
  //   zIndex: 1,
  //   position: 'absolute',
  //   left: 50 * em,
  //   bottom: 9 * hm,
  // },
  // textBox: {
  //   marginTop: 58 * hm,
  //   alignItems: 'center',
  //   marginBottom: 0.064 * HEIGHT,
  // },
  notice: {
    marginTop: 58 * hm,
    alignItems: 'center',
    marginBottom: 43 * hm,
    paddingHorizontal: 50 * em,
    textAlign: 'center',
    lineHeight: 20 * hm,
  },
  // circle: {
  //   width: 40.95 * em,
  //   height: 40.95 * em,
  //   borderRadius: 20.475 * em,
  //   marginRight: 5.58 * em,
  //   backgroundColor: '#F9547B',
  // },
  // circle1: {
  //   width: 9.5 * em,
  //   height: 9.5 * em,
  //   borderRadius: (9.5 / 2) * em,
  //   left: 117.5 * em,
  //   top: (179.31 / 667) * HEIGHT,
  //   backgroundColor: '#F9547B',
  // },
  // circle2: {
  //   width: 9.5 * em,
  //   height: 9.5 * em,
  //   borderRadius: (9.5 / 2) * em,
  //   left: 270.44 * em,
  //   top: (257.31 / 667) * HEIGHT,
  //   backgroundColor: '#F9547B',
  // },
  // circle3: {
  //   width: 2.05 * em,
  //   height: 2.05 * em,
  //   borderRadius: 1.025 * em,
  //   left: 202.84 * em,
  //   top: (222.4 / 667) * HEIGHT,
  //   backgroundColor: '#F9547B',
  // },
  // circle4: {
  //   width: 2.05 * em,
  //   height: 2.05 * em,
  //   borderRadius: 1.025 * em,
  //   left: 254.865 * em,
  //   top: (201.425 / 667) * HEIGHT,
  //   backgroundColor: '#F9547B',
  // },
  // circle5: {
  //   width: 2.05 * em,
  //   height: 2.05 * em,
  //   borderRadius: 1.025 * em,
  //   left: 98.925 * em,
  //   top: (266.425 / 667) * HEIGHT,
  //   backgroundColor: '#F9547B',
  // },
  laterBtn: { marginTop: 15 * hm, backgroundColor: 'transparent' },
};

export default MessageCounterDownPopupScreen;
