import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from '../constants/consts';

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
    marginTop: 18 * hm,
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 69 * em,
    height: 20 * hm,
    resizeMode: 'contain',
    //marginTop: 10 * em,
  },
};

export default CommonBlueHeader;
