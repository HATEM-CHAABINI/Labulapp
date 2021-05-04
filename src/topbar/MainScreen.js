import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsNavigator from './FriendsNavigator';
import CalendarHomeScreen from '../Components/calendar/CalendarHomeScreen';
import MyActivityHomeScreen from './activity/MyActivityHomeScreen';
import ProfileHomeScreen from './profile/ProfileHomeScreen';
import ProProfileHomeScreen from './profile/proProfile/ProProfileHomeScreen';
import { em, hm, WIDTH } from '../constants/consts';
import { navigationRef } from './RootNavigation';
import Modal from 'react-native-modal';
import MyNotificationsScreen from './activity/MyNotificationsScreen';
import {
  TabPlus,
  TabCalendarOff,
  TabCalendarOn,
  TabCardOff,
  TabCardOn,
  TabMessageOff,
  TabMessageOn,
} from '../assets/svg/icons';
import AgendaScreen from '../Components/agenda';
import MabulHomeScreen from '../Mabul/MabulHomeScreen';

const Tab = createBottomTabNavigator();

const myPhoto = require('../assets/images/tab_profile_off.png');
const proPhoto = require('../assets/images/avatar_curology.png');

const MainTabBar = ({ state, descriptors, navigation }) => {
  const [mabulVisible, setMabulVisible] = React.useState(false);
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const TabIcons = [
    { on: TabCardOn(styles.TapImage), off: TabCardOff(styles.TapImage) },
    {
      on: TabCalendarOn({ width: 22 * em, height: 22 * hm }),
      off: TabCalendarOff({ width: 22 * em, height: 22 * hm }),
    },
    {
      on: (
        <View
          style={{
            shadowColor: '#0C15233D',
            shadowOffset: {
              width: 0,
              height: 16 * hm,
            },
            shadowOpacity: 1,

            shadowRadius: 24 * em,
          }}>
          {TabPlus(styles.AddImage)}
        </View>
      ),
      off: (
        <View
          style={{
            shadowColor: '#0C15233D',
            shadowOffset: {
              width: 0,
              height: 16 * hm,
            },
            shadowOpacity: 1,

            shadowRadius: 24 * em,
          }}>
          {TabPlus(styles.AddImage)}
        </View>
      ),
    },
    { on: TabMessageOn(styles.TapImage), off: TabMessageOff(styles.TapImage) },
  ];

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (

    <ImageBackground style={styles.VirtualTabButtons} source={require('../assets/images/Trace.png')}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const tabIcon =
          index <= 3 && (isFocused || (state.index === 6 && index === 3) ? TabIcons[index].on : TabIcons[index].off);
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            index === 2 ? setMabulVisible(true) : navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (route.name === 'MyNotifictions') {
          return <></>;
        }
        if (route.name === 'ProProfile') {
          return <></>;
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ marginBottom: index === 2 ? -8 * hm : 0 }}>
            {tabIcon}
            {index === 4 && (
              <View
                style={[styles.photoWrapper, { borderColor: isFocused || state.index === 5 ? '#4BD8E9' : '#ffffff' }]}>
                <Image source={state.index === 5 ? proPhoto : myPhoto} style={styles.TapImage} />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
      <Modal backdropColor={'transparent'} style={styles.modalStyle} isVisible={mabulVisible}>
        <MabulHomeScreen
          navigation={navigation}
          onClosePress={() => {
            setMabulVisible(false);
          }}
        />
      </Modal>
    </ImageBackground>
  );
};
export default function MainScreen(props) {

  return (
    <View style={styles.TabBarMainContainer}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator
          tabBar={(props) => <MainTabBar {...props} />}
          initialRouteName={props.tabNav ? props.tabNav : 'Friends'}>
          <Tab.Screen
            name="Friends"
            component={FriendsNavigator}
            initialParams={{ friendNav: props.friendNav || 'Carte' }}
          />
          <Tab.Screen name="Calendar" component={CalendarHomeScreen} />
          <Tab.Screen name="Mabul" component={MabulHomeScreen} />
          <Tab.Screen
            name="Activity"
            component={MyActivityHomeScreen}
            initialParams={{ activityType: props.activityType || 'needs', noEmpty: props.noEmpty }}
          />
          <Tab.Screen name="Profile" component={ProfileHomeScreen} initialParams={{ purchased: props.purchased }} />
          <Tab.Screen
            name="ProProfile"
            component={ProProfileHomeScreen}
            initialParams={{
              accountType: props.accountType,
              purchased: props.purchased,
            }}
          />
          <Tab.Screen name="MyNotifictions" component={MyNotificationsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = {
  TabBarMainContainer: {
    flex: 1,
  },
  modalStyle: { margin: 0 },
  VirtualTabButtons: {
    flex: 1,
    width: WIDTH * 1.18,
    height: 110 * hm,
    position: 'absolute',
    left: -30 * em,
    //  right:100*em,
    bottom: -hm * 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 52 * hm,
    justifyContent: 'space-evenly',
  },

  AddImage: {
    width: 50 * em,
    height: 50 * hm,
  },

  TapImage: { width: 22 * em, height: 22 * hm },
  photoWrapper: {
    width: 24 * em,
    height: 24 * hm,
    borderWidth: 2 * em,
    borderRadius: 14 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
