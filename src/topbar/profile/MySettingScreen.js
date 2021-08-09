import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommonHeader from '../../Components/header/CommonHeader';
import Switch from '../../Components/other/Switch';
import CommonListItem from '../../adapter/CommonListItem';
import { Address, BackArrowBlack, BackArrowWhite, LocationBlues, NotificationYellow } from '../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import auth from "@react-native-firebase/auth";
import { getUserProfile, updateUserProfile } from '../../services/firebase'
import { useDispatch, useSelector } from 'react-redux';

import { addProfile, updateProfile } from '../../redux/actions/profile';
const MySettingScreen = () => {
  const { profileData } = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const [state, setstate] = useState(profileData.activeNotification ? 1 : 2)
  const [location, setlocation] = useState()
  // useEffect(() => {
  //   getUserProfile()

  // }, [])
  const logout = () => {

    auth()
      .signOut()
      .then(() => { dispatch(addProfile('')), console.log('User signed out!') }).catch((e => { console.log(e), dispatch(addProfile('')) }));
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: 'relative', marginTop: 40 * hm, paddingLeft: 27 * em, paddingBottom: 23 * hm }}
        onPress={() => Actions.pop()}>
        <BackArrowBlack width={20 * em} height={18 * hm} />
      </TouchableOpacity>

      <View style={styles.line} />
      <CommonListItem
        style={styles.listItem}
        icon={
          <View style={[styles.icon, { backgroundColor: 'rgba(64, 205, 222,.15)' }]}>
            <LocationBlues height={22.39 * em} width={18.76 * em} />
          </View>
        }
        title="Localisation"
        titleStyle={styles.listTitle}
        subTitleStyle={styles.listComment}
        rightView={
          <Switch
            switchWidth={49 * em}
            switchHeight={27 * em}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#40CDDE"
            btnBorderColor="red"
            btnBackgroundColor="#FFFFFF"
            initialValue={0}
            value={location}
            setstate={val => { setlocation(!val)}}
              // ,
              //  updateUserProfile(profileData.uid, { activeNotification: val === 1 ? true : false }).then(res => { dispatch(updateProfile({ activeNotification: val === 1 ? true : false })) }) }}
            style={styles.switch}
          />
        }
        subTitle="Ma localisation est activé"
      />
            <View style={styles.line} />

      <CommonListItem
        style={styles.listItem}
        icon={
          <View style={[styles.icon, { backgroundColor: 'rgba(253, 198, 65,.15)' }]}>
            <NotificationYellow height={22.39 * em} width={18.76 * em} />
          </View>
        }
        title="Notifications"
        titleStyle={styles.listTitle}
        subTitleStyle={styles.listComment}
        rightView={
          <Switch
            switchWidth={49 * em}
            switchHeight={27 * em}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#40CDDE"
            btnBorderColor="red"
            btnBackgroundColor="#FFFFFF"
            initialValue={0}
            value={state}
            setstate={val => { setstate(val), updateUserProfile(profileData.uid, { activeNotification: val === 1 ? true : false }).then(res => { dispatch(updateProfile({ activeNotification: val === 1 ? true : false })) }) }}
            style={styles.switch}
          />
        }
        subTitle="Activez la réception de notifications"
      />
      <View style={styles.rectangle} />
      <TouchableOpacity
        onPress={() =>
          Alert.alert('Me déconnecter', 'Voulez-vous vous déconnecter?', [
            { text: 'Oui', onPress: () => { logout() } },
            { text: 'Annuler', style: 'cancel' },
          ])
        }
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 59 * hm,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F0F5F7',
          borderColor: '#ffffff',
          borderWidth: 2 * em,
        }}>
        <Text style={{ color: "#1E2D60", fontFamily: 'Lato-Bold', fontSize: 16 * em }}>Me déconnecter</Text>

      </TouchableOpacity>
    </View >
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  header: {
    marginTop: 34 * hm,
    marginBottom: 10 * hm,
  },
  line: {
    height: 10 * hm,
    backgroundColor: '#F0F5F7',
  },
  rectangle: {
    height: 200 * hm,
    backgroundColor: 'white',
  },
  listItem: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 45 * hm,
    marginTop: 25 * hm,
    marginBottom: 25 * hm,
  },
  icon: {
    marginRight: 15 * em,
    alignItems: 'center',
    justifyContent: 'center',
    width: 39 * em,
    height: 39 * em,
    borderRadius: 20 * em,
  },
  containerTxt: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontFamily: 'Lato-bold',
    fontSize: 18 * em,
    lineHeight: 23 * hm,
    textAlign: 'left',
    marginBottom: 7 * em,
    color: '#1E2D60',
  },
  listComment: {
    fontFamily: 'HelveticaNeue',
    lineHeight: 14 * em,
    textAlign: 'left',
    color:'#9093A3',
    width: 170 * em,
  },
  switch: {
    marginTop: 6 * hm,
  },
};

export default MySettingScreen;
