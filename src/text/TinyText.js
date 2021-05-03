import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em, hm } from '../constants/consts';

const renderText = (props) => {
  let color = '#6A8596';
  if (props.color) {
    color = props.color;
  }
  if (props.fontSize){
    fontSize = props.fontSize
  }else{
    fontSize = 10
  }
  let textAlignProp = 'left';
  if (props.align) {
    textAlignProp = props.align;
  }
  const textStyle = { fontSize: fontSize * em, color: color,  textAlign: textAlignProp };
  return <Text style={[textStyle, props.style]}>{props.text}</Text>;
};

const TinyText = (props) => {
  if (props.onPress) {
    return <TouchableOpacity onPress={props.onPress}>{renderText(props)}</TouchableOpacity>;
  }
  return renderText(props);
};

export default TinyText;
