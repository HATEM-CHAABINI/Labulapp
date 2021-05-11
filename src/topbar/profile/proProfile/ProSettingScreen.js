import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { em, hm } from '../../../constants/consts';
import CommonHeader from '../../../Components/header/CommonHeader';
import Switch from '../../../Components/other/Switch';
import CommonListItem from '../../../adapter/CommonListItem';
import { Address, NotificationYellow } from '../../../assets/svg/icons';
const ProSettingScreen = () => {
  return (
    <View style={styles.container}>
      <CommonHeader dark={true} style={styles.header} />
      <View style={styles.line} />
      <CommonListItem
        style={styles.listItem}
        icon={
          <View style={[styles.icon, { backgroundColor: 'rgba(64, 205, 222, 0.15)' }]}>
            <Address height={22 * hm} width={15 * em} />
          </View>
        }
        title="Localisation"
        titleStyle={styles.listTitle}
        subTitleStyle={styles.listComment}
        rightView={
          <Switch
            switchWidth={49 * em}
            switchHeight={27 * hm}
            switchdirection="rtl"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#40CDDE"
            btnBorderColor="red"
            btnBackgroundColor="#FFFFFF"
            initialValue={1}
            style={styles.switch}
          />
        }
        subTitle="Vous êtes visibles dans la carte Labul"
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
            switchHeight={27 * hm}
            switchdirection="rtl"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#40CDDE"
            btnBorderColor="red"
            btnBackgroundColor="#FFFFFF"
            initialValue={0}
            style={styles.switch}
          />
        }
        subTitle="Activez la réception de notifications"
      />
      <View style={styles.line2} />
      {/* <View style={styles.rectangle} /> */}
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
    </View>

  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 27 * hm,
    marginBottom: 10 * hm,
  },
  rectangle: {
    height: 200 * hm,
    backgroundColor: 'white',
  },
  line: {
    height: 10 * hm,
    backgroundColor: '#F0F5F7',
  },
  line2: {
    height: 370 * hm,
    backgroundColor: '#FFF',
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
    height: 39 * hm,
    borderRadius: 20 * em,
  },
  containerTxt: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18 * em,
    lineHeight: 23 * hm,
    textAlign: 'left',
    marginBottom: 7 * em,
    color: 'rgba(30, 45, 96, 1)',
  },
  listComment: {
    fontFamily: 'Lato-Medium',
    lineHeight: 16 * hm,
    textAlign: 'left',
    marginRight: 15 * em,
  },
  switch: {
    marginTop: 6 * hm,
  },
};

export default ProSettingScreen;
