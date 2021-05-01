import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em } from 'view/common/const';
import SwitchButton from 'view/components/button/SwitchButton';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navigationRef } from 'view/screens/main/RootNavigation';

const Tab = createMaterialTopTabNavigator();

const MyNeedsScreen = (props) => {
  const [, setActiveTab] = React.useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerTxtBtn}>
          <TouchableOpacity onPress={() => navigationRef.current.navigate('MyNotifictions')}>
            <Image source={require('assets/images/ic_notification.png')} style={styles.notificationBtn} />
          </TouchableOpacity>
        </View>
        <TitleText text={'Mon activité'} style={styles.title} />
        <SwitchButton
          onValueChange={(val) => {
            setActiveTab(val);
            console.log(props.navigation);
            if (val === 1) {
              props.navigation.jumpTo('Demandes');
            } else {
              props.navigation.jumpTo('Invitations');
            }
          }}
          text1="Mes demandes"
          text2="Mes invitations"
          switchWidth={264 * em}
          switchHeight={37 * em}
          switchdirection="ltr"
          switchBorderColor="transparent"
          switchBackgroundColor="transparent"
          btnBorderColor="#ffffff"
          btnBackgroundColor="#40CDDE"
          fontColor="#6A8596"
          activeFontColor="#FFFFFF"
          style={{ marginTop: 6 * em }}
        />
      </View>
      <Tab.Navigator tabBar={() => null} swipeEnabled={false}>
        {/* <Tab.Screen name="Demandes" component={} />
        <Tab.Screen name="Invitations" component={} /> */}
      </Tab.Navigator>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#EDF2F5',
  },
  header: {
    height: 181 * em,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginBottom: 10 * em,
  },
  notificationBtn: {
    width: 19 * em,
    height: 22 * em,
    alignSelf: 'flex-end',
    marginRight: 30 * em,
    marginTop: 39 * em,
  },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * em,
    marginBottom: 14 * em,
  },
};

export default MyNeedsScreen;
