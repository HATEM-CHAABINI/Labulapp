import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommonBackButton from '../button/CommonBackButton';

const PopupHeader = (props) => {
  let icon = require('../../assets/images/ic_profile.png');
  if (props.icon) {
    icon = props.icon;
  }
  return (
    <View style={[styles.container, props.style]}>
      <CommonBackButton dark />
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.backBtnWrapper} />
    </View>
  );
};

const styles = {
  container: {
    marginTop: 20 * hm,
    paddingHorizontal: 15 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backBtnWrapper: {
    width: 44 * em,
    height: 44 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  icon: { width: 20 * em, height: 25 * em, resizeMode: 'contain' },
};

export default PopupHeader;
