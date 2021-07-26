import React from 'react';
import { em, hm } from '../../constants/consts';
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';
import CommonText from '../../text/CommentText';

const CommonBigButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, props.style]}>
      {props.leftIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.leftIcon}</View>}
      {props.loading ? <ActivityIndicator size={'small'} color={"#fcfcfc"} style={[styles.textStyle, props.textStyle]} /> : <CommonText text={props.text} style={[styles.textStyle, props.textStyle]} color={props.color} />}
      {props.rightIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.rightIcon}</View>}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#40CDDE',
    paddingVertical: 20 * hm,
    //height: 59 * hm,
    width: 315 * em,
    borderRadius: 20 * em,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: { textAlign: 'center', color: '#FFFFFF', fontFamily: 'lato-SemiBold', fontSize: 16 * em, lineHeight: 19 * em, fontWeight: 'bold' },
};

export default CommonBigButton;