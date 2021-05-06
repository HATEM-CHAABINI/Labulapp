/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from './src/Components/Connexion';
import ConnexionEmail from './src/Components/ConnexionEmail';
import Inscription from './src/Components/Inscription';
import MotdePasseOublie from './src/Components/MotdePasseOublie';
import InscriptionEmail from './src/Components/InscriptionEmail';
import InscriptionPrenom from './src/Components/InscriptionPrenom';
import InscriptionNom from './src/Components/InscriptionNom';
import InscriptionMobile from './src/Components/InscriptionMobile';
import InscriptionAdresse from './src/Components/InscriptionAdresse';
import ActiverLocalisation from './src/Components/ActiverLocalisation';
import ActiverLaNotif from './src/Components/ActiverLaNotif';
import HomePage from './src/Components/HomePage'
import MainScreen from './src/topbar/MainScreen';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Platform, View, Image, TouchableOpacity } from 'react-native';

import { em, WIDTH } from './src/constants';
import CarteComponents from './src/Components/CarteComponents';
import Recherche from './src/Components/Recherche';
import AgendaScreen from './src/Components/agenda';
import Filtre from './src/Components/Filtre';
import FriendOrganizeScreen from './src/ServiceScrenns/FriendOrganizeScreen';
import FriendNeedScreen from './src/ServiceScrenns/FriendNeedScreen';
import FriendSellScreen from './src/ServiceScrenns/FriendSellScreen';
import FriendCancelParticipatePopupScreen from './src/ServiceScrenns/FriendCancelParticipatePopupScreen';
import MabulHomeScreen from './src/Mabul/MabulHomeScreen';
import MabulOrganizeScreen from './src/Mabul/organize/MabulOrganizeScreen';
import FriendsSearchScreen from './src/Components/FriendSearchScreen';

import { RootSiblingParent } from 'react-native-root-siblings';
import RootRoutes from './src/routes';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/redux/store';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);

  StatusBar.setBarStyle('dark-content');
  Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
  Platform.OS === 'android' && StatusBar.setTranslucent(true);

  return (
    <RootSiblingParent>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
      <Provider store={store}>
    <PersistGate  persistor={persistor}>
        <RootRoutes />
        </PersistGate>
  </Provider>
      </View>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Connexio" component={Connexion} options={{ headerShown: false }} />
          <Stack.Screen name="ConnexionEmail" component={ConnexionEmail} options={{ headerShown: false }} />
          <Stack.Screen name="Inscription" component={Inscription} options={{ headerShown: false }} />
          <Stack.Screen name="MotdePasseOublie" component={MotdePasseOublie} options={{ headerShown: false }} />
          <Stack.Screen name="InscriptionEmail" component={InscriptionEmail} options={{ headerShown: false }} />
          <Stack.Screen name="InscriptionPrenom" component={InscriptionPrenom} options={{ headerShown: false }} />
          <Stack.Screen name="InscriptionNom" component={InscriptionNom} options={{ headerShown: false }} />
          <Stack.Screen name="InscriptionMobile" component={InscriptionMobile} options={{ headerShown: false }} />
          <Stack.Screen name="InscriptionAdresse" component={InscriptionAdresse} options={{ headerShown: false }} />
          <Stack.Screen name="ActiverLocalisation" component={ActiverLocalisation} options={{ headerShown: false }} />
          <Stack.Screen name="ActiverLaNotif" component={ActiverLaNotif} options={{ headerShown: false }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="CarteComponents" component={CarteComponents} options={{ headerShown: false }} />
          <Stack.Screen name="Recherche" component={Recherche} options={{ headerShown: false }} />
          <Stack.Screen name="AgendaScreen" component={AgendaScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Filtre" component={Filtre} options={{ headerShown: false }} />
          <Stack.Screen name="FriendsNavigator" component={FriendsNavigator} initialParams={{ friendNav: 'Carte' }} options={{ headerShown: false }} />
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FriendOrganizeScreen" component={FriendOrganizeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FriendNeedScreen" component={FriendNeedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FriendSellScreen" component={FriendSellScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FriendCancelParticipatePopupScreen" component={FriendCancelParticipatePopupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MabulHomeScreen" component={MabulHomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MabulOrganizeScreen" component={MabulOrganizeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FriendsSearchScreen" component={FriendsSearchScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer> */}
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});

export default App;




