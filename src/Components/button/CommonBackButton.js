import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { em, hm } from '../../constants/consts';
import { Actions } from 'react-native-router-flux';
import { BackArrowBlack, BackArrowWhite } from '../../assets/svg/icons';
const CommonBackButton = (props) => {
  let BackButton = BackArrowWhite(styles.backButton);
  if (props.dark) {
    BackButton = BackArrowBlack(styles.backButton);
  }
  let onPress = () => {
    Actions.pop();
  };
  if (props.onPress) {
    onPress = props.onPress;
  }
  return (
    <TouchableOpacity style={[styles.backBtnWrapper, props.style]} onPress={() => onPress()}>
      {BackButton}
    </TouchableOpacity>
  );
};

const styles = {
  backBtnWrapper: {
    paddingBottom: 12 * hm,
    width: 44 * em,
    height: 44 * em,
    borderRadius: 14 * em,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // elevation: 3,
    // shadowColor: '#B3C6CF33',
    // shadowOffset: {
    //   width: 0,
    //   height: 20 * em,
    // },
    // shadowRadius: 40 * em,
  },
  backButton: {
    width: 23 * em,
    height: 21 * hm,
  },
};

export default CommonBackButton;
