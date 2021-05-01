import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { em, hm } from '../constants/consts';
import CommonListItem from './CommonListItem';
import { RightArrow } from '../assets/svg/icons';

const FriendsFilterListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <CommonListItem
        style={props.style}
        title={props.title}
        titleStyle={styles.textTitle}
        subTitleStyle={[styles.defaultSetting, { color: props.defaultSetting !== 'Tous' ? '#40CDDE' : '#A0AEB8' }]}
        subTitle={props.defaultSetting}
        icon={<View style={{ marginRight: 17 * em }}>{props.icon}</View>}
        onPress={props.onPress}
        rightView={
          <View style={{ justifyContent: 'flex-end', marginBottom: 30 * em }}>
            <RightArrow width={11 * em} height={18 * hm} />
          </View>
        }
      />
    </TouchableOpacity>
  );
};
export default FriendsFilterListItem;
const styles = {
  container: { flexDirection: 'row', justifyContent: 'space-between' },
  leftView: { flexDirection: 'row', flex: 1 },
  txtView: { flex: 1, flexDirection: 'column', justifyContent: 'space-between' },
  icon: { width: 20 * em, height: 20 * em, resizeMode: 'contain', marginRight: 15 * em },
  textTitle: {
    // fontFamily: 'Lato-Black',
    fontSize: 18 * em,
    color: '#1E2D60',
    lineHeight: 22 * em,
    textAlignVertical: 'center',
    textAlign: 'left',
    marginBottom: 10 * em,
  },
  defaultSetting: { fontSize: 16 * em, color: '#A0AEB8', textAlign: 'left' },
  arrowIcon: { backgroundColor: 'white', width: 11 * em, height: 18 * em, marginTop: 2 * em },
};
