import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { em, hexToRGB } from '../../../constants/consts';
import ProfileInformationListItem from '../../../adapter/ProfileInformationListItem';
import ProfileCommonHeader from '../../../Components/header/ProfileCommonHeader';
import CommonButton from '../../../Components/button/CommonButton';
import ProfileCommonAvatar from '../../../Components/view/ProfileCommonAvatar';
import CommentText from '../../../text/CommentText';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import { ProAddCover } from '../../../assets/svg/icons';
import { feedbackIcons } from '../../../constants/icons';
const updateUserPrfile = {
  avatar: require('../../../assets/images/avatar_curology.png'),
  cover: require('../../../assets/images/img_curology.png'),
  name: 'Curology',
  type: 'Professional',
  publications: { tips: 3, promotions: 2, events: 1 },
  services: ['Beauté', 'Soins'],
  badges: feedbackIcons,
  presentation:
    'Des soins de la peau personnalisés pour les besoins uniques de votre peau. Maintenant disponible dans un ensemble avec nettoyant et hydratant!',
};
const EditProProfileScreen = (props) => {
  const [, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [userProfile, setUserProfileOnChanged] = useState(props.userProfile);
  return (
    <ProfileCommonHeader
      title="Modifier mon profil"
      onCancel={() => Actions.pop()}
      onFinish={() => Actions.proProfileOverview({ userProfile: updateUserPrfile })}>
      <ImageBackground style={styles.bgView} source={userProfile.cover} blurRadius={8}>
        <View
          style={
            userProfile.cover
              ? [
                styles.bgViewFilter,
                {
                  backgroundColor: 'rgba(30, 45, 96, 0.64)',
                },
              ]
              : styles.bgViewFilter
          }>
          <View style={[styles.addCoverBtn, { tintColor: userProfile.cover ? '#FFFFFF' : '#40CDDE' }]}>
            <ProAddCover width={27.79 * em} height={28 * em} />
          </View>
          <CommentText
            text={!userProfile.cover ? 'Ajouter une photo de couverture' : 'Changer photo de couverture'}
            color={userProfile.cover ? '#FFFFFF' : '#40CDDE'}
          />
        </View>
      </ImageBackground>
      <View style={[styles.listItem, { marginTop: 0, paddingVertical: 0 }]}>
        <ProfileCommonAvatar
          pro
          borderWidth={3 * em}
          fullName={userProfile.name}
          style={styles.avatar}
          icon={userProfile.avatar}
        />
        <CommentText text="Ajouter mon logo" style={styles.addPhotoBtn} color="#40CDDE" />
      </View>
      <ProfileInformationListItem
        caption={'Mon identité'}
        value={userProfile.name}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(5);
          setModalVisible(!modalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Ma présentation'}
        placeholder={!userProfile.presentation ? true : false}
        value={
          !userProfile.presentation
            ? 'Présente ton activité en quelques lignes. Les 100 premiers caractères feront office de la présentation de ton activité.'
            : userProfile.presentation
        }
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setModalVisible(!modalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Mes services'}
        placeholder
        value={'Sélectionne le(s) service(s) de ton activité'}
        style={styles.listItem}
        options={userProfile.specs}
        onPress={() => {
          setInputItemKey(8);
          setModalVisible(!modalVisible);
        }}
      />
      <CommonButton
        text={'Supprimer mon compte'}
        style={styles.deleteBtn}
        textStyle={{ color: '#F9547B' }}
        onPress={() => setDeleteModalVisible(true)}
      />
      <Modal
        isVisible={deleteModalVisible}
        backdropColor={'#04040F66'}
        backdropOpacity={1}
        swipeDirection={'up'}
        onBackButtonPress={() => setDeleteModalVisible(false)}>
        <StatusBar backgroundColor="#04040F66" barStyle="light-content" />
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Supprimer mon compte</Text>
          <Text style={styles.modalContent}>
            Êtes-vous sûr de vouloir supprimer ton compte ? Cette action est irréversible.
          </Text>
          <View style={styles.modalBtnBox}>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setUserProfileOnChanged(updateUserPrfile);
                setDeleteModalVisible(false);
              }}>
              <Text style={styles.modalBtnTxt}>Annuler</Text>
            </TouchableOpacity>
            <View style={styles.modalLine} />
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setDeleteModalVisible(false);
                Actions.home();
              }}>
              <Text style={styles.modalBtnTxt}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <ProfileCommonModal
        visible={modalVisible}
        itemKey={inputItemKey}
        onChange={(val) => setUserProfileOnChanged(val)}
        onPress={() => {
          setModalVisible(false);
        }}
      /> */}
    </ProfileCommonHeader>
  );
};

const styles = {
  container: {
    backgroundColor: '#F0F5F7',
  },
  bgView: {
    marginTop: 10 * em,
    height: 184 * em,

    backgroundColor: hexToRGB('#40CDDE10', 0.1),
  },
  bgViewFilter: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCoverBtn: { width: 28 * em, height: 28 * em, position: 'absolute', top: 47 * em },
  itemTitle: {
    height: 18 * em,
    lineHeight: 18 * em,
    marginLeft: 30 * em,
    marginTop: 25 * em,
  },
  listItem: {
    width: '100%',
    marginTop: 10 * em,
    paddingVertical: 25 * em,
    paddingHorizontal: 30 * em,
    backgroundColor: '#ffffff',
  },
  avatar: { width: 92 * em, height: 92 * em, marginBottom: 10 * em, alignSelf: 'center', marginTop: -46 * em },
  addPhotoBtn: { marginBottom: 25 * em, lineHeight: 21 * em },
  deleteBtn: {
    marginTop: 25 * em,
    marginBottom: 25 * em,
    lineHeight: 19 * em,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: '#F9547B',
  },
  modalView: {
    height: 140 * em,
    width: 270 * em,
    backgroundColor: '#F8F8F8D1',
    borderRadius: 14 * em,
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalTitle: { fontSize: 17 * em, lineHeight: 22 * em, marginTop: 20 * em, color: '#000000' },
  modalContent: {
    fontSize: 13 * em,
    lineHeight: 18 * em,
    color: '#000000',
    marginBottom: 16 * em,
    textAlign: 'center',
  },
  modalBtnBox: { flexDirection: 'row', flex: 1 },
  modalBtn: {
    borderColor: '#3F3F3F',
    borderTopWidth: 0.5 * em,
    flexGrow: 135,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBtnTxt: { color: '#007AFF', fontSize: 17 * em, lineHeight: 22 * em },
  modalLine: { backgroundColor: '#3F3F3F', width: 0.5 * em, flexGrow: 1 },
};

export default EditProProfileScreen;
