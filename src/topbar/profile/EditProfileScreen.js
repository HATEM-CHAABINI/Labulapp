import React, { useState,useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { em, hm } from '../../constants/consts';
import ProfileInformationListItem from '../../adapter/ProfileInformationListItem';
import ProfileCommonHeader from '../../Components/header/ProfileCommonHeader';
import ProfileCommonModal from '../../Components/other/ProfileCommonModal';
import CommonButton from '../../Components/button/CommonButton';
import ProfileCommonAvatar from '../../Components/view/ProfileCommonAvatar';
import CommentText from '../../text/CommentText';
import { Actions } from 'react-native-router-flux';
import User from '../../model/user/User';
import { feedbackIcons } from '../../constants/icons';

const updatedMyProfile = new User(
  'Mathieu Torin',
  require('../../assets/images/tab_profile_off.png'),
  '',
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
const EditProfileScreen = (props) => {
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfile, setUserProfileOnChanged] = useState(props.userProfile);

  

  return (
    <ProfileCommonHeader
      title="Modifier mon profil"
      onCancel={() => Actions.pop()}
      onFinish={() => Actions.profileOverview({ userProfile: updatedMyProfile })}>
      <View style={styles.listItem}>
        <ProfileCommonAvatar
          initialSize={36 * em}
          fullName="Mathieu Torin"
          style={styles.avatar}
          icon={userProfile.photo}
          borderWidth={3 * em}
        />
        <CommentText text="Changer ma photo de profil" style={styles.addPhotoBtn} color="#40CDDE" />
      </View>
      <ProfileInformationListItem
        caption={'Mon nom'}
        value={userProfile.name}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(5);
          setModalVisible(!modalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Ma disponibilité'}
        placeholder={!userProfile.availability ? true : false}
        value={userProfile.availability || 'Ajoute ta disponiblité'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(6);
          setModalVisible(!modalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Ma présentation'}
        placeholder={!userProfile.presentation ? true : false}
        value={
          userProfile.presentation ||
          'Salut ! Je suis …\nPrésente toi ici. Ce texte sera affiché pour vous invitations et apparaitra sur ta page profil. Soit court, avent et efficace. Vivons ensemble !'
        }
        commentText={userProfile.presentation ? null : 'Les 100 premiers caractères feront office de ta présentation.'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setModalVisible(!modalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Mes atouts (3 max)'}
        placeholder
        value={'Sélectionne les compétences où tu es plus l’aise'}
        style={styles.listItem}
        options={userProfile.specs}
        onPress={() => {
          setInputItemKey(8);
          setModalVisible(!modalVisible);
        }}
      />
      <CommonButton
        text={'Supprimer mon compte'}
        textStyle={{ color: '#F9547B' }}
        style={styles.deleteBtn}
        onPress={() => Actions.main()}
      />
      <ProfileCommonModal
        visible={modalVisible}
        itemKey={inputItemKey}
        onChange={(val) => {
          setUserProfileOnChanged(val);
        }}
        onPress={() => {
          setModalVisible(false);
        }}
      />
    </ProfileCommonHeader>
  );
};

const styles = {
  container: {
    backgroundColor: '#F0F5F7',
  },
  itemTitle: {
    height: 18 * em,
    lineHeight: 18 * em,
    marginLeft: 30 * em,
    marginTop: 25 * hm,
  },
  listItem: {
    width: '100%',
    marginTop: 10 * hm,
    paddingVertical: 25 * hm,
    paddingHorizontal: 30 * em,
    backgroundColor: '#ffffff',
  },
  avatar: { width: 92 * em, height: 92 * em, marginTop: 25 * hm, marginBottom: 10 * hm, alignSelf: 'center' },
  addPhotoBtn: { marginBottom: 25 * hm, lineHeight: 21 * em },
  deleteBtn: {
    marginTop: 25 * hm,
    marginBottom: 25 * hm,
    lineHeight: 19 * em,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
};

export default EditProfileScreen;
