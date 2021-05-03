import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em, hm } from '../constants/consts';

const CommonText = (props) => {
  let color = '#6A8596';
  if (props.color) {
    color = props.color;
  }
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text
          style={[
            { fontFamily: 'Lato-Medium', fontSize: 16 * em, color: color, textAlign: props.textAlign },
            props.style,
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <Text
      style={[
        { fontSize: 16 * em, color: color, textAlign: props.textAlign },
        props.style,
      ]}>
      {props.text}
    </Text>
  );
};

export default CommonText;
