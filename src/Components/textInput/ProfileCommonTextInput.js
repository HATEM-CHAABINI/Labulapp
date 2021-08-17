import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { hm } from '../../constants/consts';
import SmallText from '../../text/SmallText';

const ProfileCommonTextInput = (props) => {
  const [onFocus, setOnFocus] = useState(!props.onFocus);
  const [value, setValue] = useState(props.value);
  return (
    <View style={[onFocus ? styles.containerFocusOn : styles.containerFocusOff, props.style]}>
      <SmallText
        style={[onFocus ? styles.commentTextFocusOn : styles.commentTextFocusOff,props.placestyle]}
        text={props.text}
        color={'#A0AEB8'}
      />
      <TextInput
        autoFocus={true}
        style={[styles.textInput, { marginBottom: onFocus ? 7 * hm : 7 * hm },props.styletxt]}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        multiline={true}
        value={props.value}
        onChangeText={props.onChangeText}
        onChange={props.onChangeText}
        selectionColor="#40CDDE"
        keyboardType={props.keyboardType || 'default'}
      />
    </View>
  );

  // if (onFocus) {
  //   return (
  //     <View style={[styles.containerFocusOn, props.style]}>
  //       <Text style={styles.commentTextFocusOn}>{props.text}</Text>
  //       <TextInput
  //         style={styles.textInput}
  //         onFocus={() => setOnFocus(true)}
  //         onBlur={() => setOnFocus(false)}
  //         multiline={true}
  //         value={props.value}
  //         selectionColor="#40CDDE"
  //       />
  //     </View>
  //   );
  // } else {
  //   return (
  //     <View style={[styles.containerFocusOff, props.style]}>
  //       <Text style={styles.commentTextFocusOff}>{props.text}</Text>
  //       <TextInput
  //         textAlignVertical="top"
  //         multiline={true}
  //         onFocus={() => setOnFocus(true)}
  //         onBlur={() => setOnFocus(false)}
  //         value={props.value} style={styles.textInput}
  //       />
  //     </View>
  //   );
  // }
};

export default ProfileCommonTextInput;
const styles = {
  containerFocusOn: {
    borderBottomColor: '#41D0E280',
    borderBottomWidth: 2 * hm,
    justifyContent: 'flex-end',
  },
  containerFocusOff: { borderBottomColor: '#BFCDDB', borderBottomWidth: 1 * hm, justifyContent: 'flex-end' },
  textInput: {
    fontFamily: 'Lato-Bold',
    color: '#1E2D60',
    // lineHeight: 11 * hm,
    fontSize: 16 * hm,
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlignVertical: 'center',
  },
  commentTextFocusOn: { fontFamily: 'Lato-Medium', lineHeight: 14 * hm, marginBottom: 4 * hm },
  commentTextFocusOff: { fontFamily: 'Lato-Regular', fontSize: 16 * hm, lineHeight: 18 * hm, marginBottom: 4 * hm },
};
