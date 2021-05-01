import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { em, WIDTH, hm } from 'view/common/const';
import CommonBackButton from 'view/components/button/CommonBackButton';
import CommentText from 'view/components/text/CommentText';
import { FlatList } from 'react-native-gesture-handler';
import CommonButton from 'view/components/button/CommonButton';
import CommonCheckBox from 'view/components/checkbox/CommonCheckBox';

import Modal from 'react-native-modal';
import CommonText from 'view/components/text/CommonText';
import { Actions } from 'react-native-router-flux';

const options = [
  { key: '0', option: 'J’ai besoin', selected: false },
  { key: '1', option: 'Je donne', selected: false },
  { key: '2', option: 'J’organise', selected: false },
  { key: '3', option: 'Je cherche', selected: false },
  { key: '4', option: 'Je vends', selected: false },
];
const FriendsFilterRequestModalScreen = (props) => {
  const [selectedOptions, getSelectedOptions] = useState(options);
  const renderFlatList = ({ item, index }) => (
    <CommonCheckBox
      onClick={(result) => {
        const arr = [...selectedOptions];
        arr[index].selected = result;
        getSelectedOptions(arr);
      }}
      text={item.option}
      style={styles.listItem}
      index={item.key}
    />
  );
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View style={styles.line} />
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <CommonBackButton
            dark={true}
            onPress={() => {
              props.onPress();
              const selectedResult = selectedOptions.filter((option) => option.selected);
              console.log(selectedOptions);
              props.onSelected && props.onSelected(selectedResult);
            }}
          />
          <CommonText text="Type de demande" style={styles.title} color="#1E2D60" />
        </View>
        <CommentText text="Réinitialiser" style={styles.resetBtn} />
      </View>
      <FlatList data={options} renderItem={renderFlatList} keyExtractor={(i) => i.key} />
      <CommonButton
        text="Voir demandes"
        onPress={() => {
          props.onPress();
          Actions.pop();
        }}
      />
    </Modal>
  );
};

const styles = {
  container: {
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    paddingBottom: 30 * hm,
    marginTop: 131.5 * hm,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  line: {
    width: 55 * em,
    height: 5 * hm,
    marginTop: 15 * hm,
    borderRadius: 3 * em,
    backgroundColor: '#BFCDDB',
    opacity: 0.36,
  },
  header: {
    width: WIDTH,
    marginTop: 15 * hm,
    paddingLeft: 15 * em,
    paddingRight: 15 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lato-Black',
    fontSize: 18 * em,
    lineHeight: 23 * hm,
    textAlign: 'left',
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginLeft: 15 * em,
  },
  resetBtn: { marginRight: 15 * em, lineHeight: 16 * hm, textAlign: 'right' },
  listItem: { width: 295 * em, marginTop: 35 * hm },
};

export default FriendsFilterRequestModalScreen;
