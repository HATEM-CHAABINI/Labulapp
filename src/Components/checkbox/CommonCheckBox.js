import React, { useState } from 'react';
import { View } from 'react-native';
import CommonText from '../../text/CommonText';
import { em } from '../../constants/consts';
import { hm } from '../../constants/consts';
import CheckBox from './CheckBox';

const CommonCheckBox = (props) => {
  const [checked, setChecked] = useState(props.isChecked);
  // console.log(props)
  return (
    <View style={[styles.container, props.style]}>
      <CommonText text={props.text} style={[styles.title, props.textStyle]} color={props.color || '#1E2D60'} />
      <CheckBox
        isChecked={checked}
        onClick={() => {
          setChecked(!checked);
          props.onClick && props.onClick(!checked);
        }}
        oval={props.oval}
      />
    </View>
  );
};

const styles = {
  container: {
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontFamily: 'Lato-Bold', fontSize: 18 * em, lineHeight: 23 * hm, textAlign: 'left' },
};

export default CommonCheckBox;
