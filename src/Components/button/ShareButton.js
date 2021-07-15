import React from 'react';
import { Text, Image,View } from 'react-native';
import { em, hm } from '../../constants/consts';
import { TouchableOpacity } from 'react-native';
import CommonBigButton from './CommonBigButton';
import { ArrowRightWhite } from '../../assets/svg/icons';
import CommonText from '../../text/CommonText';
const ShareButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, props.style]}>
    {props.leftIcon && 
    <View style={[styles.iconStyle, props.iconStyle]}>
        {props.leftIcon}
    </View>}
   
     <CommonText text={props.text} style={[styles.textStyle, props.textStyle]} color={props.color} />
     
    {props.rightIcon && <View style={[styles.righticonStyle]}>{props.rightIcon}</View>}
  </TouchableOpacity>
  );
};

const styles = {
    righticonStyle:{
position:'absolute', 
marginLeft:270*em
   },
    iconStyle:{
        marginRight:20*em,
        marginLeft:15*em
    },
    buttonStyle: {
        backgroundColor: '#40CDDE',
        paddingVertical: 20 * hm,
        //height: 59 * hm,
        width: 315 * em,
        borderRadius: 20 * em,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      textStyle: { textAlign: 'center', color: '#1E2D60', fontFamily: 'lato-Medium', fontSize: 18 * em, lineHeight: 19 * em },
    
  container: {
    flexDirection: 'row',
    borderRadius: 20 * em,
    paddingVertical: 20 * em,
    width: "80%",
    height:47*hm,
    backgroundColor: '#40CDDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18 * em,
    fontFamily:"Lato-Medium",
    lineHeight: 19 * em,
    color: '#1E2D60',
    textAlign: 'center',
    marginRight: 13 * em,
  },
};

export default ShareButton;
