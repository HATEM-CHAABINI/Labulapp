import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em, hm } from '../constants/consts';

const renderText = (props) => {
  let color = '#1E2D60';
  if (props.color) {
    color = props.color;
  }
  let textAlignProp = 'left';
  if (props.align) {
    textAlignProp = props.align;
  }
  const textStyle = { fontSize: 12 * em, color: color, textAlign: textAlignProp };
  return <Text style={[textStyle, props.style]}>{props.text}</Text>;
};

const SmallText = (props) => {
  if (props.onPress) {
    return <TouchableOpacity onPress={props.onPress}>{renderText(props)}</TouchableOpacity>;
  }
  return renderText(props);
};

export default SmallText;
