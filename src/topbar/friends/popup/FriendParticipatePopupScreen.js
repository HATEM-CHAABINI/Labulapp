import React, { useState } from 'react';
import { View, FlatList, Image, StatusBar } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import CommonButton from 'view/components/button/CommonButton';

import Modal from 'react-native-modal';
import CommonCheckBox from '../../../../components/checkbox/CommonCheckBox';
const FriendParticipatePopupScreen = (props) => {
  const [checked, setChecked] = useState();
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar opa backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <CommonText text="Passer" style={styles.header} onPress={() => props.onPress()} />
      <View
        style={{
          width: 349 * em,
          height: 20 * hm,
          marginTop: -10 * hm,
          alignSelf: 'center',
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20 * em,
          borderTopRightRadius: 20 * em,
        }}
        opacity={0.5}
      />
      <View style={styles.body}>
        <Image source={require('assets/images/sample_cover_1.png')} style={styles.titleImg} />
        <TitleText text="À prévoir" style={styles.title} />
        <CommonText text="Dans cette demande Antoine a pévu une liste des choses à apporter" style={styles.comment} />
        <CommonCheckBox
          style={styles.listItem}
          oval
          text="Papier de fond noir"
          color="#40CDDE"
          textStyle={styles.itemCheckedText}
        />
        <CommonCheckBox
          style={styles.listItem}
          oval
          text="Trépied Professionnel"
          color="#1E2D60"
          textStyle={styles.itemText}
        />
        <CommonCheckBox
          style={styles.listItem}
          oval
          text="Objectif 105mm f / 2.8 EX DG Macro OS HSM"W
          color="#1E2D60"
          textStyle={styles.itemText}
        />
      </View>
      <CommonButton
        text="Valider"
        onPress={() => props.onPress()}
        style={{ alignSelf: 'center', marginBottom: 30 * hm }}
      />
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 20.5 * hm,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: { marginRight: 30 * em, marginBottom: 18 * em, marginTop: 25 * hm, alignSelf: 'flex-end' },
  body: { paddingHorizontal: 30 * em, alignItems: 'center', flex: 1 },
  title: { marginTop: 15 * hm, fontFamily: 'Lato-Black' },
  titleImg: { width: 58 * em, height: 58 * em, borderRadius: 29 * em, marginTop: 18 * hm },
  comment: { textAlign: 'center', lineHeight: 23 * em, width: 285 * em, marginTop: 5 * hm },
  listItem: { marginTop: 42 * hm },
  itemCheckedText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    width: 260 * em,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  },
  itemText: { width: 260 * em, textAlign: 'left', fontFamily: 'Lato-Bold' },
};
export default FriendParticipatePopupScreen;
