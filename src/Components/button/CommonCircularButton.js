import React from 'react';
import { Image } from 'react-native';
import { em, WIDTH } from '../../constants/consts';
import { TouchableOpacity } from 'react-native';

const CommonCircularButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        props.style,
        {
          width: props.radius * 2,
          height: props.radius * 2,
          borderRadius: props.radius,
          backgroundColor: props.bgColor,
        },
      ]}>
      <Image source={props.src} style={props.iconStyle} />
    </TouchableOpacity>
  );
};

const styles = {
  container: { alignItems: 'center', justifyContent: 'center' },
};

export default CommonCircularButton;
