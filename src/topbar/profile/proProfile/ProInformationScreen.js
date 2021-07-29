import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { em, hm } from '../../../constants/consts';
import ProfileInformationListItem from '../../../adapter/ProfileInformationListItem';
import CommonText from '../../../text/CommonText';
import ProfileCommonHeader from '../../../Components/header/ProfileCommonHeader';
import ProfileCommonModal from '../../../Components/other/ProfileCommonModal';
import { Actions } from 'react-native-router-flux';

const ProInformationScreen = () => {
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ProfileCommonHeader title="Mes informations" onCancel={() => Actions.pop()}>
       <CommonText text="Connexion et sécurité" style={styles.itemTitle} />
      <ProfileInformationListItem
        caption={'Email entreprise'}
        value={'contact@baratshirt.fr'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(1);
          setModalVisible(!modalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Modifier mot de passe'}
        value={'••••••••••'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(2);
          setModalVisible(!modalVisible);
        }}
      />
      <CommonText text="Contact" style={styles.itemTitle} />
      <ProfileInformationListItem
        caption={'Mobile entreprise'}
        value={'+590 6 90 874 258'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(3);
          setModalVisible(!modalVisible);
        }}
      />
      
      <CommonText
    style={styles.notice}
      />
      <ProfileCommonModal
        visible={modalVisible}
        itemKey={inputItemKey}
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
    fontFamily: 'Lato-Regular',
    fontSize: 16 * em,
    height: 18 * em,
    lineHeight: 18 * em,
    marginLeft: 30 * em,
    marginTop: 25 * em,
  },
  listItem: {
    width: 375 * em,
    marginTop: 10 * em,
    paddingTop: 25 * em,
    paddingBottom: 25 * em,
    paddingRight: 30 * em,
    paddingLeft: 30 * em,
  },
  notice: {
    marginTop: 10 * em,
    fontSize: 11 * em,
    lineHeight: 17 * em,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    height: 300 * hm
  },
};

export default ProInformationScreen;
