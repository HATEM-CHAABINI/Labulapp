import React from 'react';
import { Text, Image } from 'react-native';
import { em } from '../../constants/consts';
import { TouchableOpacity } from 'react-native';
import CommonMediumButton from './CommonMediumButton';
import { ArrowRightWhite } from '../../assets/svg/icons';
const MabulNextButton = (props) => {
  return (
    <CommonMediumButton
      rightIcon={<ArrowRightWhite width={10 * em} height={17 * em} />}
      textStyle={styles.txt}
      text={props.text?props.text:"Suivant"}
      loading={props.loading}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.container, { backgroundColor: props.color }, props.style]}
    />
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    borderRadius: 20 * em,
    paddingVertical: 20 * em,
    width: 163 * em,
    backgroundColor: '#40CDDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16 * em,

    lineHeight: 19 * em,
    color: '#FFFFFF',
    textAlign: 'center',
    marginRight: 13 * em,
  },
};

export default MabulNextButton;
