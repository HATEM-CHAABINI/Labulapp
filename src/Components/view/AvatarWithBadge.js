import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { em } from '../../constants/consts';

const AvatarWithBadge = (props) => {
  const BadgeIcon =
    typeof props.badge === 'number' ? (
      <Image
        source={props.badge}
        style={{
          width: props.badgeDiameter,
          height: props.badgeDiameter,
          borderRadius: props.badgeDiameter / 2,
        }}
      />
    ) : (
      props.badge
    );

  const additionalBadgeStyle = {
    width: props.badgeDiameter + 4 * em,
    height: props.badgeDiameter + 4 * em,
    borderRadius: (props.badgeDiameter + 4 * em) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  };

  if (props.onPress) {
    return (
      <TouchableOpacity style={[{ width: props.avatarDiameter }, props.style]} onPress={() => props.onPress()}>
        <Image source={props.avatar} style={{ width: props.avatarDiameter, height: props.avatarDiameter }} />
        {props.badge && <View style={[styles.badge, additionalBadgeStyle]}>{BadgeIcon}</View>}
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[{ width: props.avatarDiameter }, props.style]}>
        <Image source={props.avatar} style={{ width: props.avatarDiameter, height: props.avatarDiameter }} />
        {props.badge && <View style={[styles.badge, additionalBadgeStyle]}>{BadgeIcon}</View>}
      </View>
    );
  }
};

const styles = {
  badge: {
    position: 'absolute',
    right: -8 * em,
    bottom: -3 * em,
    borderColor: '#ffffff',
    zIndex: 1,
  },
};

export default AvatarWithBadge;
