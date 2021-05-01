import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import { Facebook, Google } from '../../assets/svg/icons';
const SocialButton = (props) => {
  let image = Facebook({ width: 18 * em, height: 18 * em });
  if (props.type === 'google') {
    image = Google({ width: 18 * em, height: 18 * em });
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.buttonStyle, props.style]}>
        <View style={styles.imageStyle}>{image}</View>
        <CommentText text={props.text} style={styles.textStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flexDirection: 'row',
    backgroundColor: '#F0F5F7',
    paddingVertical: 21 * hm,
    paddingHorizontal: 15 * em,
    width: 315 * em,
    borderRadius: 20 * em,
    alignItems: 'center',
  },
  textStyle: { color: '#1E2D60', fontFamily: 'Lato-Bold' },
  imageStyle: { marginRight: 15 * em },
};

export default SocialButton;
