import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { em } from '../constants/consts';
import CommonText from '../text/CommonText';

const ProfileCommonCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      {props.icon}
      <CommonText text={props.caption} style={styles.caption} color={'#1E2D60'} />
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    borderRadius: 15 * em,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 15 * em, shadowColor: '#254D5612',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 12 * em,
        }, shadowOpacity: 1,
        shadowRadius: 25 * em,
      },
      android: {
        elevation: 5,
      },
    }),

  },
  caption: {
    marginTop: 5 * em,
    textAlign: 'center',
    fontFamily: 'Lato-Black'
  },
};
export default ProfileCommonCard;
