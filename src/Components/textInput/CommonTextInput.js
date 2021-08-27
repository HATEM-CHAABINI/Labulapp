import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { CrossCircle, Invisible } from '../../assets/svg/icons';
import { em, hm } from '../../constants/consts';
import SmallText from '../../text/SmallText';
const CommonTextInput = (props) => {
  const [value, setValue] = useState('');
  const [onFocus, setOnFocus] = useState(false);
  const [passwd, setPasswd] = useState(props.isPasswordInput);
  const input = useRef();
  var PasswordButton;
  if (props.isPasswordInput) {
    PasswordButton = (
      <TouchableOpacity style={{ justifyContent: 'flex-end', marginBottom: 20 * hm }} onPress={() => _visible()}>
        <Invisible width={20 * em} height={17 * em} />
      </TouchableOpacity>
    );
  }
  const DeleteButton = (
    <TouchableOpacity style={{ justifyContent: 'flex-end', marginBottom: 20 * hm }} onPress={() => _delete()}>
      <CrossCircle width={17 * em} height={17 * em} />
    </TouchableOpacity>
  );
  const _delete = () => {
    setValue('');
  };
  const _visible = () => {
    setPasswd(!passwd);
  };
  return (
    <TouchableOpacity onPress={() => input.current.focus()} activeOpacity={1}
      style={[
        styles.container,
        {
          paddingTop: onFocus ? 0 : 9 * em,
          borderBottomWidth: onFocus ? 2 * em : 1 * em,
          borderBottomColor: onFocus ? '#41D0E2' : '#BFCDDB',
        },
        props.style,
      ]}>
      <View style={styles.textBox}>
        <SmallText text={props.text} style={{ fontSize: onFocus ? 12 * em : 16 * em }} color="#A0AEB8" />
        <TextInput
          ref={input}
          autoFocus={true}
          autoCorrect={false}

          secureTextEntry={passwd}
          value={value}
          onChangeText={(t) => {
            setValue(t)
            props.onChangeText(t)
          }}
          style={styles.textInput}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          selectionColor="#40CDDE"
        />
      </View>
      {PasswordButton}
      {onFocus ? DeleteButton : <></>}
    </TouchableOpacity>
  );
};

export default CommonTextInput;
const styles = {
  container: { flexDirection: 'row' },
  textBox: { justifyContent: 'flex-end', flex: 1 },
  textInput: {
    fontFamily: 'Lato-Regular',
    color: '#1E2D60',
    fontSize: 18 * em,
    lineHeight: 20 * em,
    paddingVertical: 0 * em,
    paddingHorizontal: 0,
    flex: 1,
    fontFamily: 'Lato-Regular',
  },
};
