
import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { em } from '../constants/consts';
import CommonListItem from './CommonListItem';
import UserType from '../model/user/UserType';
import { Friend, Family, Neighbor, OptionGray } from '../assets/svg/icons';
import RelationshipType from '../model/user/RelationshipType';
const CirclesCommonListItem = (props) => {
  var optionBtn = (
    <View style={styles.optionBtn}>
      <OptionGray width={30 * em} height={30 * em} />
    </View>
  );
  var icon = <Image source={props.icon} style={styles.icon} />;
  if (props.iconSize) {
    icon = (
      <Image source={[props.icon, { width: props.iconSize * em, height: props.iconSize * em }]} style={styles.icon} />
    );
  }
  if (props.type === UserType.GROUP) {
    let groupIcon;
    switch (props.sort) {
      case RelationshipType.FRIEND:
        groupIcon = (
          <View style={{ marginRight: 15 * em }}>
            <Friend width={40 * em} height={40 * em} />
          </View>
        );
        break;
      case RelationshipType.FAMILIY:
        groupIcon = (
          <View style={{ marginRight: 15 * em }}>
            <Family width={40 * em} height={40 * em} />
          </View>
        );
        break;
      default:
        groupIcon = (
          <View style={{ marginRight: 15 * em }}>
            <Neighbor width={40 * em} height={40 * em} />
          </View>
        );
        break;
    }
    return (
      <View style={[styles.container, props.style]}>
        <CommonListItem
          title={props.name}
          subTitle={props.subName}
          titleStyle={styles.userNameStyle}
          icon={groupIcon}
          subTitleStyle={styles.number}
          style={{ flex: 1 }}
          onPress={props.onLeftPress}
        />
        <TouchableOpacity onPress={() => props.onRightPress()}>{optionBtn}</TouchableOpacity>
      </View>
    );
  }
  return (
    <CommonListItem
      title={props.name}
      subTitle={props.subName}
      titleStyle={styles.userNameStyle}
      icon={icon}
      subTitleStyle={styles.relationshipStyle}
      rightView={optionBtn}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export default CirclesCommonListItem;
const styles = {
  icon: {
    width: 40 * em,
    height: 40 * em,
    resizeMode: 'contain',
    marginRight: 15 * em,
  },
  userNameStyle: {
    // fontFamily: 'Lato-Black',
    color: '#1E2D60', textAlign: 'left'
  },
  relationshipStyle: {
    fontSize: 16 * em,
    color: '#A0AEB8',
    textAlign: 'left',
    height: 18 * em,
  },
  optionBtn: {
    backgroundColor: 'transparent',
    tintColor: '#84848442',
    width: 30 * em,
    height: 30 * em,
    marginTop: 5 * em,
  },
  container: { flexDirection: 'row', justifyContent: 'space-between' },
};
