import React, { useState } from 'react';
import { View } from 'react-native';
import { em, hm } from '../../constants/consts';
import FriendsFilterListItem from '../../adapter/FriendsFilterListItem';
import CommonListItem from '../../adapter/CommonListItem';
import CommonText from '../../text/CommonText';
import Switch from '../../Components/other/Switch';
import { Actions } from 'react-native-router-flux';
import FriendsFilterRequestModalScreen from './popup/FriendsFilterRequestModalScreen';
import FriendsFilterDateModalScreen from './popup/FriendsFilterDateModalScreen';
import FriendCommonHeader from '../../Components/header/FriendCommonHeader';
import { Calendar, TypeRequest, Address } from '../../assets/svg/icons';
const FriendsFilterScreen = () => {
  const [filterRequestModalVisible, setfilterRequestModalVisible] = useState(false);
  const [filterDateModalVisible, setfilterDateModalVisible] = useState(false);
  const [typeFilters, setTypeFilters] = useState();
  return (
    <View style={styles.container}>
      <FriendCommonHeader title="Filtrer" />
      <View style={{ marginTop: 35 * hm }}>
        <FriendsFilterListItem
          title={'Type de demande'}
          defaultSetting={typeFilters && 'Tous'}
          onSelected={(result) => setTypeFilters(result)}
          style={styles.listItem}
          icon={<View style={{ width: 20 * em }}>{TypeRequest({ width: 20 * em, height: 20 * em })}</View>}
          onPress={() => {
            setfilterRequestModalVisible(true);
          }}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Date'}
          defaultSetting={'Tous'}
          style={styles.listItem}
          icon={<View style={{ width: 20 * em }}>{Calendar({ width: 18 * em, height: 20 * em })}</View>}
          onPress={() => {
            setfilterDateModalVisible(true);
          }}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Lieu'}
          defaultSetting={'Autour de moi'}
          style={styles.listItem}
          icon={<View style={{ width: 20 * em }}>{Address({ width: 16 * em, height: 20 * em })}</View>}
          onPress={() => {
            Actions.inputLocation();
          }}
        />
        <View style={[styles.line, { marginLeft: 0 }]} />
        <CommonListItem
          style={styles.switchContainer}
          title="Voir les demandes des pro et particuliers"
          titleStyle={styles.textSwitch}
          rightView={
            <Switch
              style={styles.switch}
              switchWidth={50 * em}
              switchHeight={28 * em}
              switchdirection="ltr"
              switchBorderColor="#ffffff"
              switchBackgroundColor="#40CDDE"
              btnBackgroundColor="#FFFFFF"
            />
          }
        />
      </View>
      <View />

      <FriendsFilterRequestModalScreen
        visible={filterRequestModalVisible}
        onPress={() => {
          setfilterRequestModalVisible(false);
        }}
      />
      <FriendsFilterDateModalScreen
        visible={filterDateModalVisible}
        onPress={() => {
          setfilterDateModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  listItem: {
    height: 50 * hm,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    width: 315 * em,
  },
  title: {
    marginLeft: 30 * em,
    marginBottom: 35 * hm,
  },
  line: {
    height: 1 * hm,
    marginLeft: 65 * em,
    backgroundColor: '#F0F5F7',
    marginTop: 25 * em,
    marginBottom: 25 * hm,
  },
  switchContainer: { marginLeft: 30 * em, marginRight: 30 * em },
  textSwitch: { fontFamily: 'Lato-Bold', marginRight: 40 * em, color: '#1E2D60', lineHeight: 21 * em },
  txtSwitchBox: {
    justifyContent: 'center',
  },
  switch: { marginTop: 5 * hm },
};

export default FriendsFilterScreen;
