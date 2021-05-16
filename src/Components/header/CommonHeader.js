import React from 'react';
import { View, TouchableOpacity, Image,ActivityIndicator } from 'react-native';
import { em, WIDTH } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import CommonBackButton from '../button/CommonBackButton';
import CommonText from '../../text/CommonText';
import { Actions } from 'react-native-router-flux';
import TinyText from '../../text/TinyText';

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
    <TinyText text={props.centerTxt} color={'#1E2D60'} style={[styles.centerTxt, props.centerTxtStyle]} />
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
      {props.loading?<ActivityIndicator size='small' color='#1E2D60' style={styles.right} />:<View style={styles.right}>{rightButton}</View>}
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
  left: { justifyContent: 'center' },
  leftTxt: { marginLeft: 15 * em, fontSize: 16 * em, color: '#6A8596', lineHeight: 18 * em, textAlign: 'left' },
  center: { flex: 1, justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' },
  centerTxt: { fontFamily: 'Lato-Bold', fontSize: 16 * em, lineHeight: 18 * em, textAlign: 'center', alignSelf: 'center' },
  right: { justifyContent: 'center', alignSelf: 'center' },
  rightTxt: { marginRight: 15 * em, lineHeight: 17 * em, textAlign: 'right' },
};

export default CommonHeader;
