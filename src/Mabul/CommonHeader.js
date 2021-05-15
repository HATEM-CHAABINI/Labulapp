import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { em, hm, WIDTH } from '../constants/consts';
import CommentText from '../text/CommentText';
import CommonBackButton from '../Components/button/CommonBackButton';
import CommonText from '../text/CommonText';
import { Actions } from 'react-native-router-flux';

const CommonHeader = (props) => {
  var leftButton = props.leftTxt ? (
    <TouchableOpacity onPress={props.onLeftPress ? props.onLeftPress : () => Actions.pop()}>
      <CommentText text={props.leftTxt} color={'#FFFFFF'} style={[styles.leftTxt, props.leftTxtStyle]} />
    </TouchableOpacity>
  ) : (
    props.leftView || (
      <CommonBackButton dark={props.dark} onPress={props.onLeftPress ? props.onLeftPress : () => Actions.pop()} />
    )
  );

  var centerView = props.centerTxt ? (
    <CommonText text={props.centerTxt} color={'#1E2D60'} style={[styles.centerTxt, props.centerTxtStyle]} />
  ) : (
    props.centerView
  );
  var rightButton = props.rightTxt ? (
    <TouchableOpacity onPress={props.onRightPress ? props.onRightPress : () => Actions.pop()}>
      <CommonText text={props.rightTxt} color={'#FFFFFF'} style={[styles.rightTxt, props.rightTxtStyle]} />
    </TouchableOpacity>
  ) : (
    props.rightView
  );

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.left}>{leftButton}</View>
      <View style={styles.center}>{centerView}</View>
      <View style={styles.right}>{rightButton}</View>
    </View>
  );
};

const styles = {
  container: {
    justifyContent: 'space-between',
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15 * em,
  },
  left: { justifyContent: 'center',height:54*hm },
  leftTxt: { marginLeft: 15 * em, fontSize: 16 * em, color: '#6A8596', lineHeight: 18 * hm, textAlign: 'left' },
  center: { flex: 1, justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' },
  centerTxt: { lineHeight: 18 * hm, textAlign: 'center', alignSelf: 'center' },
  right: { justifyContent: 'center', alignSelf: 'center' },
  rightTxt: { marginRight: 15 * em, lineHeight: 17 * hm, textAlign: 'right' },
};

export default CommonHeader;
