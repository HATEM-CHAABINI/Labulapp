import React from 'react';
import { em, WIDTH, hm } from '../../constants/consts';
import ProfileModalHeader from '../header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../textInput/ProfileCommonTextInput';
import CommonText from '../../text/CommonText';
import SearchBox from '../other/SearchBox';
import CommonCheckBox from '../checkbox/CommonCheckBox';
import { StatusBar, View, Text, Platform } from 'react-native';
import User from '../../model/user/User';
import { feedbackIcons } from '../../constants/icons';
const insertInformations = [
  { title: 'Mon email', inputTexts: [{ commentInput: 'Mon email', value: 'mathieu@labul.com' }] },
  {
    title: 'Mon mot de passe',
    comment: 'Mot de passe oublié?',
    inputTexts: [
      { commentInput: 'Mot de passe actuel', value: '' },
      { commentInput: 'Nouveau mot de passe', value: '' },
      { commentInput: 'Confirmation de nouveau mot de passe', value: '' },
    ],
  },
  { title: 'Mon mobile', inputTexts: [{ commentInput: 'Mon mobile', value: '+590 6 90 874 258' }] },

  { title: 'Ma localisation', inputTexts: [{ commentInput: 'Mon dresse', value: 'ABYMES 97139\nGuadeloupe' }] },

  {
    title: 'Mon nom',
    inputTexts: [
      { commentInput: 'Prénom', value: 'Mathieu' },
      { commentInput: 'Nom de famille', value: 'Torin' },
    ],
  },
  {
    title: 'Ma disponibilité',
    comment: 'Soit concis, limité à 45 caractères',
    inputTexts: [{ commentInput: '', value: 'Je suis disponible le soir et le week-end|' }],
  },
  {
    title: 'Ma présentation',
    comment: 'Les 150 premiers caractères dans les lignes plus visibles.',
    inputTexts: [
      {
        commentInput: '',
        value:
          'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
      },
    ],
  },
  {
    title: 'Mes atouts',
  },
];
const options = [
  { id: 0, title: 'Bricolage', checked: false },
  { id: 1, title: 'Jardinage', checked: false },
  { id: 2, title: 'Mécanique', checked: false },
  { id: 3, title: 'Ménages', checked: false },
  { id: 4, title: 'Travaux maison', checked: false },
  { id: 5, title: 'Agriculture', checked: false },
  { id: 6, title: 'Élevage', checked: false },
];

const updatedMyProfile = new User(
  'Mathieu Torin',
  require('../../assets/images/tab_profile_off.png'),
  null,
  null,
  'mathieu@labul.com',
  'Je suis disponible le soir et le week-end',
  'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
  ['Bricoleur', 'Jardinier'],
  4,
  7,
  17,
  24,
  6,
  2,
  feedbackIcons,
  '+590 6 90 874 258',
  'ABYMES 97139 Guadeloupe'
);
const ProfileCommonModal = (props) => {
  // console.log(insertInfo.inputTexts[0].toString())
  const insertInfo = insertInformations[props.itemKey - 1];
  var modalBody =
    props.itemKey === 8 ? (
      <>
        <SearchBox style={{ marginBottom: 15 * em, height: 44 * em, marginTop: 40 * em }} />
        {options.map((option) => {
          return (
            <CommonCheckBox
              text={option.title}
              isChecked={options.checked}
              style={styles.listItem}
              onChecked={() => { }}
            />
          );
        })}
      </>
    ) : (
      <>
        {insertInfo.inputTexts.map((inpuText, index) => {
          return (
            <ProfileCommonTextInput
              style={styles.input}
              text={inpuText.commentInput}
              value={inpuText.value}
              onFocus={true}
              key={index}
              kyeboardType={index === 3 ? 'numeric-pad' : 'default'}
            />
          );
        })}
        {insertInfo.comment && (
          <CommonText
            color={props.itemKey === 2 ? '#40CDDE' : '#A0AEB8'}
            text={insertInfo.comment}
            style={props.itemKey === 2 ? styles.forgotPsswd : styles.comment}
          />
        )}
      </>
    );
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
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
      <ProfileModalHeader
        title={insertInfo.title}
        style={styles.header}
        onCancelPress={() => props.onPress()}
        onFinishPress={() => {
          props.onPress();
          props.onChange(updatedMyProfile);
        }}
      />
      
      {/* {modalBody} */}
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
    paddingHorizontal: 30 * em,
    borderTopRightRadius: 20 * em,
    borderTopLeftRadius: 20 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: { marginBottom: 10 * hm, marginTop: 27 * hm },
  input: { marginTop: 25 * hm },
  forgotPsswd: { lineHeight: 18 * em, marginTop: 78 * hm, textAlign: 'center' },
  comment: { fontSize: 12 * em, lineHeight: 20 * em, marginTop: 15 * hm },
  listItem: { paddingHorizontal: 10 * em, marginBottom: 35 * hm },
};
export default ProfileCommonModal;
