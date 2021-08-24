import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { em, hm } from '../constants/consts';
import CommonListItem from './CommonListItem';
import { RightArrow } from '../assets/svg/icons';
const MabulCommonListItem = (props) => {
  return (
    <>
      <CommonListItem
        onPress={props.onPress}
        style={props.style}
        icon={<View style={{ marginRight: 10 * em }}>{props.icon}</View>}
        title={props.text}
        subTitle={props.subText}
        titleStyle={styles.textTitle}
        subTitleStyle={styles.textSubTitle}
        rightView={
          <View
            style={[
              styles.rightView,
              { marginTop: props.icon ? 10 * em : 0 * em, justifyContent: props.icon ? 'flex-start' : 'center' },
            ]}>
            <RightArrow width={11 * em} height={18 * em} />
          </View>
        }
      />
      <View style={styles.line} />
    </>
  );
};
export default MabulCommonListItem;
const styles = {
  rightView: {
    marginRight: 30 * em,
    borderBottomWidth: 0.5 * em,
    borderBottomColor: '#B3C6CF33',
    alignItems: 'center',
  },
  textTitle: {
    marginRight: 20 * em,
    fontFamily: 'Lato-Regular',
    fontSize: 18 * em,
    lineHeight: 23 * em,
    color: '#1E2D60',
  },
  textSubTitle: { fontFamily: 'Lato-Regular',marginRight: 50 * em, color: '#A0AEB8', lineHeight: 16 * em, width: 205 * em ,marginTop:7*hm},
  line: { marginTop: 25 * em, marginLeft: 53 * em, backgroundColor: '#B3C6CF33', height: 1 * em },
};
