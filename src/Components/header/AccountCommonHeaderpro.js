import React from 'react';
import { View, Image } from 'react-native';
import { hm, em } from '../../constants/consts';
import CommonHeader from './CommonHeader';
import CommonHeaderpro from './CommonHeaderpro';

const AccountCommonHeaderpro = (props) => {
  var centerIcon = require('../../assets/images/txt_logo_white.png');
  if (props.blueLogo) {
    centerIcon = require('../../assets/images/txt_logo.png');
  }
  var logoVisible = 'flex';
  if (!props.logo) {
    logoVisible = 'none';
  }

  return (
    <View style={[styles.container, props.style]}>
      <CommonHeaderpro
        dark={false}
        logo
        style={{ marginBottom: 0 * hm, }}
        rightView={<View style={{ width: 44 * em, height: 44 * em }} />}
        rightTxt={props.rightTxt}
        rightTxtStyle={props.rightTxtStyle}
        centerView={
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Image source={centerIcon} style={styles.icon} />
          </View>
        }
      />
    </View>
  );
};

const styles = {
  container: { marginTop: 36 * hm, marginLeft:5*em},
  icon: { width: 69 * em, height: 20 * em, resizeMode: 'contain', marginBottom: 25 * em },
};

export default AccountCommonHeaderpro;
