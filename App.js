/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,

  StatusBar,
  StyleSheet,

  Platform,
  View,

} from 'react-native';

import fb from 'firebase/app';
import { RootSiblingParent } from 'react-native-root-siblings';
import RootRoutes from './src/routes';
import SplashScreen from 'react-native-splash-screen';
import LoadingScreen from './src/screens/LoadingScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/redux/store';

if (!fb.apps.length) {
  fb.initializeApp({
    apiKey: 'AIzaSyA-FKUgTuOhGiZ86WIN-wZ4a6_RK24nsUQ',
    authDomain: 'labul-b362c.firebaseapp.com',
    projectId: 'labul-b362c',
    storageBucket: 'labul-b362c.appspot.com',
    messagingSenderId: '555389901225',
    appId: '1:555389901225:web:b59820563fe5a3dd710cb8',
    measurementId: 'G-Z21P0XG9FY',
  })
  fb.storage().setMaxUploadRetryTime(5000)

  fb.firestore().settings({ experimentalForceLongPolling: true });
}
else {
  fb.app()
}

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
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
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
