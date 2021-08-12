import React from 'react';
import { Text, Image,KeyboardAvoidingView } from 'react-native';
import { em, hm } from '../../constants/consts';
import { TouchableOpacity } from 'react-native';
import CommonBigButton from './CommonBigButton';
import { ArrowRightWhite } from '../../assets/svg/icons';
const MabulPubButton = (props) => {
  return (
    <KeyboardAvoidingView

    keyboardVerticalOffset = {Platform.OS === "ios" ? 0:0} // adjust the value here if you need more padding
    // style = {{ flex: 1 }}
    behavior={Platform.OS === "ios" ?"padding":null}
    >
  
    <CommonBigButton
      textStyle={styles.txt}
      text={props.text?props.text:"Suivant"}
      loading={props.loading}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.container, { backgroundColor: props.color }, props.style]}
    />
    </KeyboardAvoidingView>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    borderRadius: 20 * em,
    paddingVertical: 20 * em,
    width: "80%",
    height:58*hm,
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

export default MabulPubButton;
