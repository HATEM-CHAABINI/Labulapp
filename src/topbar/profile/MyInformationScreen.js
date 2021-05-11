import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { em, hm } from '../../constants/consts';
import ProfileInformationListItem from '../../adapter/ProfileInformationListItem';
import CommonText from '../../text/CommonText';
import ProfileCommonHeader from '../../Components/header/ProfileCommonHeader';
import ProfileCommonModal from '../../Components/other/ProfileCommonModal';
import { Actions } from 'react-native-router-flux';

const MyInformationScreen = (props) => {
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfile, setUserProfile] = useState(props.userProfile);
  return (
    <ProfileCommonHeader title="Mes informations" onCancel={() => Actions.pop()} onFinish={() => Actions.pop()} >
      {/* <ProfileCommonHeader title="Mes informations" onCancel={() => Actions.pop()} onFinish={() => Actions.pop()} /> */}
      <Text style={styles.itemTitle} >Connexion et sécurité</Text>
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
      <Text style={styles.itemTitle} >Contact</Text>
      <ProfileInformationListItem
        caption={'Mon mobile'}
        value={'+590 6 90 874 258'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(3);
          setModalVisible(!modalVisible);
        }}
      />
      <Text style={styles.itemTitle} >Localisation</Text>
      <ProfileInformationListItem
        caption={'Mon adresse'}
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
        onChange={(profile) => { }}
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
    color: '#6A8596',
    height: 18 * em,
    lineHeight: 19 * em,
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
