import React from 'react';
import { em } from '../../constants/consts';
import CommonHeader from './CommonHeader';

const ProfileModalHeader = (props) => {
  return (
    <CommonHeader
      style={[styles.container, props.style]}
      leftTxt={'Annuler'}
      centerTxt={props.title}
      centerTxtStyle={styles.centerTxt}
      rightTxt={'Terminer'}
      onLeftPress={() => props.onCancelPress()}
      onRightPress={() => 
        // props.onFinishPress()
        props.onCancelPress()
      }
      rightTxtStyle={styles.rightTxt}
      loading={props.loading}
    />
  );
};

const styles = {
  container: { marginHorizontal: -30 * em },
  btn: {
    lineHeight: 18 * em,
  },
  title: { fontFamily: 'Lato-Bold' },
  rightTxt: { color: '#40CDDE', fontSize: 16 * em, marginRight: 12 * em },
  centerTxt: { fontFamily: 'Lato-Bold', fontSize: 16 * em, },
};

export default ProfileModalHeader;
