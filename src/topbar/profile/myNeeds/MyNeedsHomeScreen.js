import React from 'react';
import { View } from 'react-native';
import TitleText from '../../../text/TitleText';
import { em } from '../../../constants/consts';
import CommonTabBar from '../../../Components/other/CommonTabBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyNeedsTabScreen from './MyNeedsTabScreen';
import { NavigationContainer } from '@react-navigation/native';
import MyParticipationsTabScreen from './MyParticipationsTabScreen';
import MyAlertsTabScreen from './MyAlertsTabScreen';
import CommonBackButton from '../../../Components/button/CommonBackButton';

const Tab = createMaterialTopTabNavigator();

const MyNeedsHomeScreen = ({ tabNav }) => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CommonBackButton dark style={{ marginLeft: 15 * em }} />
        <TitleText text={'Mes demandes'} style={styles.title} />
        <Tab.Navigator
          tabBar={(props) => <CommonTabBar {...props} />}
          swipeEnabled={false}
          initialRouteName={tabNav || 'families'}>
          <Tab.Screen
            name="needs"
            options={{ title: 'Mes demandes', tabColor: '#40CDDE' }}
            component={MyNeedsTabScreen}
          />
          <Tab.Screen
            name="participations"
            options={{ title: 'Mes participations', tabColor: '#40CDDE' }}
            component={MyParticipationsTabScreen}
          />
          <Tab.Screen
            name="alerts"
            options={{ title: 'Mes alertes', tabColor: '#40CDDE' }}
            component={MyAlertsTabScreen}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = {
  container: {
    paddingTop: 27 * em,
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    fontFamily: 'Lato-Black',
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 10 * em,
    marginBottom: 14 * em,
  },
};

export default MyNeedsHomeScreen;
