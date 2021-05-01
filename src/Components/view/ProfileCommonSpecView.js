import React from 'react';
import { em } from '../../constants/consts';
import SmallText from '../../text/SmallText';
import { View } from 'react-native';

const ProfileCommonSpecView = (props) => {
  return (<View style={[styles.view, props.style]} >
    <SmallText style={{
      fontFamily: 'Lato-Italic',
      lineHeight: 14 * em,
      textAlign: 'center',
    }} text={props.text} color="#6A8596" />
  </View>
  );
};

const styles = {
  view: {

    backgroundColor: '#F0F5F7',

    paddingVertical: 5 * em,
    paddingHorizontal: 10 * em,

    borderRadius: 19 * em,
    marginRight: 10 * em,
  },
};

export default ProfileCommonSpecView;
