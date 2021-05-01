import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { em, hm } from 'view/common/const';
import ProfileInformationListItem from 'view/components/adapter/ProfileInformationListItem';
import CommonText from 'view/components/text/CommonText';
import ProfileCommonHeader from 'view/components/header/ProfileCommonHeader';
import ProfileCommonModal from 'view/components/other/ProfileCommonModal';
import { Actions } from 'react-native-router-flux';

const MyInformationScreen = (props) => {
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfile, setUserProfile] = useState(props.userProfile);
  return (
    <ProfileCommonHeader title="Mes informations" onCancel={() => Actions.pop()} onFinish={() => Actions.pop()} >
      {/* <ProfileCommonHeader title="Mes informations" onCancel={() => Actions.pop()} onFinish={() => Actions.pop()} /> */}
      <CommonText text="Connexion et sécurité" style={styles.itemTitle} />
      <ProfileInformationListItem
        caption={'Mon email'}
        value={userProfile.email}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(1);
          setModalVisible(!modalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Modifier mot de passe'}
        value={'...........'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(2);
          setModalVisible(!modalVisible);
        }}
      />
      <CommonText text="Contact" style={styles.itemTitle} />
      <ProfileInformationListItem
        caption={'Mon mobile'}
        value={'+590 6 90 874 258'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(3);
          setModalVisible(!modalVisible);
        }}
      />
      <CommonText text="Localisation" style={styles.itemTitle} />
      <ProfileInformationListItem
        caption={'Mon dresse'}
        value={'ABYMES 97139\nGuadeloupe'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(4);
          setModalVisible(!modalVisible);
        }}
      />
      <CommonText
        text={
          'Votre adresse postale n’est jamais rendue publique. Nous en avons besoin uniquement pour vous proposer un service géolocalisé'
        }
        style={styles.notice}
      />
      <ProfileCommonModal
        visible={modalVisible}
        itemKey={inputItemKey}
        onPress={() => {
          setModalVisible(false);
        }}
        onChange={(profile) => {}}
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
    marginLeft: 25 * em,
    marginTop: 25 * hm,
  },
  listItem: {
    width: 375 * em,
    marginTop: 10 * hm,
    paddingTop: 25 * hm,
    paddingBottom: 25 * hm,
    paddingRight: 30 * em,
    paddingLeft: 30 * em,
  },
  notice: {
    marginTop: 10 * hm,
    fontSize: 12 * em,
    lineHeight: 17 * em,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    marginBottom: 65 * hm,
  },
};

export default MyInformationScreen;
