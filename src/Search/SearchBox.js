import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { em, hm } from '../constants/consts';
import { Magnifier, CrossCircle } from '../assets/svg/icons';
import SmallText from '../text/SmallText';
const SearchBox = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState('');

  const _delete = () => {
    setValue('');
    props.onChangeText && props.onChangeText('');
  };
  const _handleText = (text) => {
    props.onChangeText && props.onChangeText(text);
    setValue(text);
  };
  return (
    <View
      style={[
        styles.containerFocusOff,
        { borderBottomWidth: onFocus ? 2 * em : 1 * em, borderBottomColor: onFocus ? '#41D0E2' : '#BFCDDB' },
        props.style,
      ]}>
      <View style={{ flex: 1, flexDirection: onFocus ? 'column' : 'row', marginBottom: onFocus ? 0 : 15 * em }}>
        {!onFocus && (
          <View style={styles.imgBtnSearch}>
            <Magnifier width={20 * em} height={20 * em} />
          </View>
        )}
        {onFocus && <SmallText text="Saisissez un contact" color="rgba(160, 174, 184, 1)" />}
        <TextInput
          value={value}
          onChangeText={_handleText}
          onFocus={() => {
            setOnFocus(true);
            // props.onFocus(true);
          }}
          onBlur={() => {
            setOnFocus(false);
            // props.onFocus(true);
          }}
          placeholder={onFocus ? '' : props.comment || 'Rechercher un contact'}
          placeholderTextColor="#A0AEB8"
          selectionColor="#40CDDE"
          style={styles.textInput}
        />
      </View>
      {onFocus && (
        <TouchableOpacity style={{paddingBottom:10*em}} onPress={() => _delete()}>
          <CrossCircle width={17 * em} height={17 * em} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBox;
const styles = {
  containerFocusOff: { alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-start' },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16 * em,
    fontFamily: 'Lato-Regular',
    color: '#1E2D60',
    paddingHorizontal: 0,
  },

  imgBtnSearch: { marginRight: 15 * em },
};
