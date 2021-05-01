import React from 'react';
import { View, Image } from 'react-native';
import { em, HEIGHT, WIDTH,hm } from '../constants';

const CommonBlueHeader = (props) => {
  let logoIcon = require('../assets/images/txt_logo.png');

  return (
    <View style={[styles.container, props.style]}>
      <Image style={styles.icon} source={logoIcon} />
    </View>
  );
};

const styles = {
  container: {
    marginTop: 18 * em,
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 56 * em,
    height: 19 * em,
    resizeMode: 'contain',
    marginTop: 10 * em,
  },
};

export default CommonBlueHeader;
