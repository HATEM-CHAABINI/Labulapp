import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { em, hm } from '../../constants/consts';
import ProfileInformationListItem from '../../adapter/ProfileInformationListItem';
import MyEmailComponent from '../profile/InformationComponents/MyEmailComponent'
import CommonText from '../../text/CommonText';
import ProfileCommonHeader from '../../Components/header/ProfileCommonHeader';
import ProfileCommonModal from '../../Components/other/ProfileCommonModal';
import { Actions } from 'react-native-router-flux';
import MypasswordComponent from '../profile/InformationComponents/MypasswordComponent'
import MyMobileComponent from '../profile/InformationComponents/MyMobileComponent'
import MyAddressComponent from '../profile/InformationComponents/MyAddressComponent'
import { updateUserProfile, getUserProfile } from '../../services/firebase'
import { useDispatch } from 'react-redux'
import { addProfile, updateProfile } from '../../redux/actions/profile';
const MyInformationScreen = (props) => {
  const dispatch = useDispatch()
  const [inputItemKey, setInputItemKey] = useState(1);
  const [loading, setloading] = useState(false);
  const [emailModalVisible, setemailModalVisible] = useState(false);
  const [passwordModalVisible, setpasswordModalVisible] = useState(false);
  const [mobileModalVisible, setmobileModalVisible] = useState(false);
  const [addressModalVisible, setaddressModalVisible] = useState(false);
  const [profileData, setprofileData] = useState(props.firbaseInfo);
  const [currentData, setcurrentData] = useState({ mobile: profileData.mobile === undefined || profileData.mobile === '' ? ' ' : profileData.mobile, address: profileData.address === undefined || profileData.address === '' ? ' ' : profileData.address })

  useEffect(() => {

    getUserProfile(profileData.uid).then(res => {
      setprofileData(() => res)
    })

  }, [currentData])

  const updateDate = () => {
    setloading(true)
    updateUserProfile(profileData.uid, currentData).then(res => {
      setloading(false)
      getUserProfile(profileData.uid).then(res => {
        dispatch(updateProfile(res))
        // Actions.pop()
      })
    })
  }

  return (
    <ProfileCommonHeader title="Mes informations" onCancel={() => Actions.pop()} onFinish={() => updateDate()} loading={loading}>
      {/* <ProfileCommonHeader title="Mes informations" onCancel={() => Actions.pop()} onFinish={() => Actions.pop()} /> */}
      <Text style={styles.itemTitle} >Connexion et sécurité</Text>
      <ProfileInformationListItem
        caption={'Mon email'}
        value={profileData.email}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(1);
          setemailModalVisible(!emailModalVisible);
        }}
      />
      <ProfileInformationListItem
        caption={'Modifier mot de passe'}
        value={'************'}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(2);
          setpasswordModalVisible(!passwordModalVisible);
        }}
      />
      <Text style={styles.itemTitle} >Contact</Text>
      <ProfileInformationListItem
        caption={'Mon mobile'}
        value={currentData.mobile && currentData.mobile !== undefined ? currentData.mobile : ''}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(3);
          setmobileModalVisible(!mobileModalVisible);
        }}
      />
      <Text style={styles.itemTitle} >Localisation</Text>
      <ProfileInformationListItem
        caption={'Mon adresse'}
        value={currentData.address && currentData.address !== undefined ? currentData.address : ''}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(4);
          setaddressModalVisible(!addressModalVisible);
        }}
      />
      <CommonText
        text={
          'Votre adresse postale n’est jamais rendue publique. Nous en avons besoin uniquement pour vous proposer un service géolocalisé'
        }
        style={styles.notice}
      />
      <MyEmailComponent
        visible={emailModalVisible}
        itemKey={inputItemKey}
        heading={"Mon email"}
        value={profileData.email}
        onPress={() => {
          setemailModalVisible(false)
        }}
        onChange={(profile) => { }}
      />
      <MypasswordComponent
        visible={passwordModalVisible}
        itemKey={inputItemKey}
        heading={"Mon mot de passe"}
        value={''}
        onPress={() => {
          setpasswordModalVisible(false)
        }}
        onChange={(profile) => { }}
      />
      <MyMobileComponent
        visible={mobileModalVisible}
        itemKey={inputItemKey}
        heading={"Mon mobile"}
        value={currentData}
        setcurrentData={(val) => setcurrentData(() => val)}
        onPress={() => {
          setmobileModalVisible(false)
        }}
        onChange={(profile) => { }}
      />
      <MyAddressComponent
        visible={addressModalVisible}
        itemKey={inputItemKey}
        heading={"Ma localisation"}
        value={currentData}
        setcurrentData={(val) => setcurrentData(() => val)}
        onPress={() => {
          setaddressModalVisible(false)
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
