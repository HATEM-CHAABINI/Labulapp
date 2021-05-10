import React from 'react';
import { Text, Image } from 'react-native';
import { em } from '../../constants/consts';
import { TouchableOpacity } from 'react-native';
import CommonMediumButton from './CommonButton';
import { ArrowRightWhite } from '../../assets/svg/icons';
const MabulNextButton = (props) => {
  return (
    <CommonMediumButton
      rightIcon={<ArrowRightWhite width={10 * em} height={17 * em} />}
      textStyle={styles.txt}
      text="Suivant"
      onPress={props.onPress}
      style={[styles.container, props.style, { backgroundColor: props.color }]}
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
    fontFamily: 'Lato-Medium',
    lineHeight: 19 * em,
    color: '#FFFFFF',
    textAlign: 'center',
    marginRight: 13 * em,
  },
};

export default MabulNextButton;
