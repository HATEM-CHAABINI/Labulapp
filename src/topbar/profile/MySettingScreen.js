import React from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonHeader from 'view/components/header/CommonHeader';
import Switch from 'view/components/other/Switch';
import CommonListItem from 'view/components/adapter/CommonListItem';
import { Address, NotificationYellow } from 'assets/svg/icons';
const MySettingScreen = () => {
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
          value={1}
            switchWidth={49 * em}
            switchHeight={27 * em}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#40CDDE"
            btnBorderColor="red"
            btnBackgroundColor="#FFFFFF"
            initialValue={1}
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
            style={styles.switch}
          />
        }
        subTitle="Activez la réception de notifications"
      />
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
  line: {
    height: 10 * hm,
    backgroundColor: '#F0F5F7',
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
    fontFamily: 'Lato-Black',
    fontSize: 18 * em,
    lineHeight: 23 * hm,
    textAlign: 'left',
    marginBottom: 7 * em,
    color: 'rgba(30, 45, 96, 1)',
  },
  listComment: {
    lineHeight: 16 * hm,
    textAlign: 'left',
    width: 170 * em,
  },
  switch: {
    marginTop: 6 * hm,
  },
};

export default MySettingScreen;
