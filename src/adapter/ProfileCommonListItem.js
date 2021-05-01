import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { em } from '../constants/consts';
import TitleText from '../text/TitleText';
import CommentText from '../text/CommentText';
import CommonListItem from './CommonListItem';
import { RightArrow } from '../assets/svg/icons';
const ProfileCommonListItem = (props) => {
  var subTextDisplay = 'flex';
  if (props.subText == null || props.subText === undefined || props.subText === '') {
    subTextDisplay = 'none';
  }
  var icon = props.iconColor ? (
    <View style={[styles.icon, { backgroundColor: props.iconColor }]}>
      <Image source={props.icon} style={{ width: 18 * em, height: 16 * em, resizeMode: 'contain' }} />
    </View>
  ) : (
    <Image source={props.icon} style={styles.icon} />
  );

  return (
    <CommonListItem
      style={props.style}
      icon={props.icon && <View style={{ marginRight: 15 * em }}>{props.icon}</View>}
      title={props.text}
      titleStyle={styles.textTitle}
      subTitle={props.subText}
      rightView={
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <RightArrow width={11 * em} height={18 * em} />
        </View>
      }
      onPress={props.onPress}
    />
  );
};
export default ProfileCommonListItem;
const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
  },
  icon: {
    width: 38 * em,
    height: 38 * em,
    borderRadius: 20 * em,
    resizeMode: 'contain',
    marginRight: 15 * em,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  txtContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textTitle: { fontFamily: 'Lato-Bold', textAlignVertical: 'center', lineHeight: 19 * em, color: '#1E2D60' },
  arrowIcon: {
    backgroundColor: 'white',
    width: 11 * em,
    height: 18 * em,
  },
};
