import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em, hm } from '../constants/consts';
const TitleText = (props) => {
  let color = '#1E2D60';
  if (props.color) {
    color = props.color;
  }
  let textAlign = 'center';
  if (props.textAlign) {
    textAlign = props.textAlign;
  }
  const propsTextStyle = { color: color, textAlign: textAlign };
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text style={[styles.textStyle, propsTextStyle, props.style]}>{props.text}</Text>
      </TouchableOpacity>
    );
  }
  return <Text style={[styles.textStyle, propsTextStyle, props.style]}>{props.text}</Text>;
};

const styles = {
  textStyle: { fontSize: 28 * em, 
    // fontFamily: 'Lato-Black' 
  },
};

export default TitleText;
