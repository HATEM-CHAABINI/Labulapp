import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, Text, ActivityIndicator } from 'react-native';
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
import ProfileCommonAvatar from '../Components/view/ProfileCommonAvatar';
import {
  TabPlus,
  TabCalendarOff,
  TabCalendarOn,
  TabCardOff,
  TabCardOn,
  TabMessageOff,
  TabMessageOn,
} from '../assets/svg/icons';
import MabulHomeScreen from '../Mabul/MabulHomeScreen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux'
const Tab = createBottomTabNavigator();

const myPhoto = require('../assets/images/tab_profile_off.png');
const proPhoto = require('../assets/images/avatar_curology.png');

const MainTabBar = ({ state, descriptors, navigation, data }) => {
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
            elevation: 10,
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
            elevation: 10,
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
          return <View key={route.key}></View>;
        }
        if (route.name === 'ProProfile') {
          return <View key={route.key}></View>;
        }
        return (
          <View key={route.key}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ marginBottom: index === 2 ? -8 * hm : 4, marginLeft: index === 2 ? 40 * em : 30 }}>
              {tabIcon}
              {index === 4 && (
                <View
                  style={[styles.photoWrapper, { overflow: 'hidden', borderColor: isFocused || state.index === 5 ? '#4BD8E9' : '#ffffff' }]}>
                  {/* {data.profilePic === '' ?<ActivityIndicator  size='small'color='#000'/>:<Image source={state.index === 5 ? proPhoto : {uri:data.profilePic}} style={styles.TapImage} />} */}
                  {data.profilePic === null && data.profilePic === '' ? <ActivityIndicator size='small' color='#000' /> : <ProfileCommonAvatar
                    icon={data.profilePic === '' || data.profilePic === null ? '' : { uri: data.profilePic }}
                    style={styles.TapImage}
                    fullName={data.firstName + ' ' + data.lastName}
                    logoVisible={false}
                    borderWidth={3 * em}
                  />}
                </View>
              )}
            </TouchableOpacity>
          </View>

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

export default (props) => {
  // const [lodaing, setlodaing] = useState(true)
  const { profileData } = useSelector((state) => state.profileReducer);
  const [data, setdata] = useState({
    profilePic: profileData.profilePic !== undefined && profileData.profilePic !== null ? profileData.profilePic : '',
    firstName: profileData.firstName !== undefined && profileData.firstName !== null ? profileData.firstName : '',
    lastName: profileData.lastName !== undefined && profileData.lastName !== null ? profileData.lastName : '',
  })


  return (
    <View style={styles.TabBarMainContainer}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator
           unmountOnBlur={true}
          tabBar={(props) => <MainTabBar {...props} data={data} />}
          initialRouteName={props.tabNav ? props.tabNav : 'Friends'}>
          <Tab.Screen
             unmountOnBlur={true}
            name="Friends"
            component={FriendsNavigator}
            initialParams={{ friendNav: props.friendNav || 'Carte' ,filtre: props.filtre,filtreD: props.filtreD}}
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
    height: 24 * em,
    borderWidth: 2 * em,
    borderRadius: 14 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
