import React from 'react';
import { Image, View } from 'react-native';
import { em, hm } from '../../constants/consts';
import { AvatarBg, ProAvatarBg } from '../../assets/svg/icons';
import TitleText from '../../text/TitleText';

var getInitials = function (string) {
  var names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
const ProfileCommonAvatar = (props) => {
  const borderWidth = props.borderWidth;

  if (!props.icon) {
    return (
      <View
        style={[
          props.style,
          styles.imgWrapper,
          {
            width: props.style.width + borderWidth,
            height: props.style.width + borderWidth,
            borderRadius: (props.style.width + borderWidth) / 2,
            backgroundColor: '#ffffff',
          },
        ]}>
        {props.pro
          ? ProAvatarBg({
            width: props.style.width + 16 * hm,
            height: props.style.width + 16 * hm,
          })
          : AvatarBg({
            width: props.style.width + 16 * hm,
            height: props.style.width + 16 * hm,
          })}
        <TitleText
          style={[
            styles.txtInitial,
            { color: !props.pro ? '#40CDDE' : '#6784DA', fontSize: (props.style.width / 5) * 2 || 28 * hm },
          ]}
          text={getInitials(props.fullName)}
        />
      </View>
    );
  } else {
    return (
      <View
        style={[
          props.style,
          styles.imgWrapper,
          {
            width: props.style.width + borderWidth,
            height: props.style.width + borderWidth,
            borderRadius: (props.style.width + borderWidth) / 2,
            overflow:'hidden'
            // borderWidth: props.borderWidth,
          },
        ]}>
        <Image style={{ width: props.style.width, height: props.style.width }} source={props.icon} />
      </View>
    );
  }
};
const styles = {
  bgImage: {
    height: 70 * em,
    width: 70 * em,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  avatarImg: {
    resizeMode: 'contain',
  },
  txtInitial: {
    opacity: 0.8,
    fontSize: 28 * em,
    position: 'absolute',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'HelveticaNeue'
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ffffff33',
    borderColor: 'red',
  },
};
export default ProfileCommonAvatar;
