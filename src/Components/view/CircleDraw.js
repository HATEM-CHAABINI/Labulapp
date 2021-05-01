import React from 'react';
import { View } from 'react-native';

const CircleDraw = (props) => {
  return (
    <View
      style={[
        {
          width: props.radius,
          height: props.radius,
          borderRadius: props.radius / 2,
          backgroundColor: props.color,
        },
        props.style,
      ]}
    />
  );
};

export default CircleDraw;
