import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivityInviationsTabScreen from './ActivityInviationsTabScreen';
import { navigationRef } from '../RootNavigation';
import ActivityNeedsTabScreen from './ActivityNeedsTabScreen';
import { NotificationOutline } from '../../assets/svg/icons';
import CommonTabBar from '../../Components/other/CommonTabBar';
const Tab = createMaterialTopTabNavigator();

const MyActivityHomeScreen = (prop) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigationRef.current.navigate('MyNotifictions')}>
        <View style={styles.notificationBtn}>
          <NotificationOutline width={19 * em} height={22 * em} />
        </View>
      </TouchableOpacity>
      <TitleText text={'Mon activité'} style={styles.title} />
      <Tab.Navigator
        tabBar={(props) => <CommonTabBar {...props} />}
        swipeEnabled={false}
        initialRouteName={prop.route.params.activityType || 'needs'}>
        <Tab.Screen
          name="needs"
          options={{ title: 'Mes demandes', tabColor: '#40CDDE' }}
          component={ActivityNeedsTabScreen}
          initialParams={{ selected: prop.route.params.noEmpty }}
        />
        <Tab.Screen
          name="invitations"
          options={{ title: 'Mes invitations', tabColor: '#40CDDE' }}
          component={ActivityInviationsTabScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginBottom: 10 * hm,
  },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * hm,
    marginBottom: 14 * hm,
  },

  notificationBtn: { alignSelf: 'flex-end', marginRight: 30 * em, marginTop: 39 * hm },
};

export default MyActivityHomeScreen;
