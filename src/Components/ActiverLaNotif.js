import React, { useState } from 'react';
import {
  Button, View, Text, Image, TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native';
import { em, WIDTH, hm } from '../constants';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { createUser, setUserData, verifyUserEmail } from '../services/firebase'
import auth from "@react-native-firebase/auth";
import { LogBox } from 'react-native';
import { SignupData } from '../redux/actions/signup';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
export default ({ navigation }) => {
  const [loading, setloading] = useState(false)
  const { signupData } = useSelector((state) => state.signupReducer);
  const dispatch = useDispatch();
   
  // console.log(signupData)

  // const login = () => {
  //   setloading(true)
  //   dispatch(SignupData({
  //     activeNotification:false,
  // }));
  // navigation.navigate('registerEmail')
  // }

  const login = () => {

    dispatch(SignupData({
      activeNotification:false,
  }));

    setloading(true)
    createUser(signupData).then(async (response) => {
      // console.log('login response',response)
      // console.log('login ',signupData)

      if (response.error) {
        if (response.error.code === 'auth/email-already-in-use') {
          alert("Cette adresse email est déjà utilisée.")
        }
        setloading(false)
      }
      else {
        setUserData(response.DataToBeSet).then(res => {
          auth().currentUser.sendEmailVerification()
            .then(function () {
              Alert.alert(
                "Succès",
                "Merci pour votre inscription. Un e-mail envoyé à votre adresse e-mail avec un lien de vérification, veuillez cliquer sur le lien pour vérifier votre adresse e-mail",
                [
                  { text: "OK", onPress: () => { Actions.registerEmail() } }
                ]
              );
              auth().signOut()
              setloading(false)
            })
            .catch(function (error) {
              Alert.alert("Erreur", "Un problème est survenu")
              auth().currentUser.delete().then(function () {
                setloading(false)
                // User deleted.
              }).catch(function (error) {
                // An error happened.
                setloading(false)
              });
              // Error occurred. Inspect error.code.
            });
        })

      }
    })

  };


  // const loginWithActiveNotification = async () => {
  //   setloading(true)
  //   createUser(signupData, true).then(async (response) => {


  //     if (response.error) {
  //       if (response.error.code === 'auth/email-already-in-use') {
  //         alert("Cette adresse email est déjà utilisée.")
  //       }
  //       setloading(false)
  //     }
  //     else {

  //       setUserData(response.DataToBeSet).then(res => {

  //         auth().currentUser.sendEmailVerification()
  //           .then(function () {

  //             Alert.alert(
  //               "Succès",
  //               "Merci pour votre inscription. Un e-mail envoyé à votre adresse e-mail avec un lien de vérification, veuillez cliquer sur le lien pour vérifier votre adresse e-mail",
  //               [

  //                 { text: "OK", onPress: () => { Actions.registerEmail() } }
  //               ]
  //             );
  //             auth().signOut()
  //             setloading(false)
  //           })
  //           .catch(function (error) {
  //             Alert.alert("Erreur", "Un problème est survenu")
  //             auth().currentUser.delete().then(function () {
  //               setloading(false)
  //               // User deleted.
  //             }).catch(function (error) {
  //               // An error happened.
  //               setloading(false)
  //             });
  //             // Error occurred. Inspect error.code.
  //           });
  //       })
  //     }
  //   })
  // };

  

  const loginWithActiveNotification = async () => {
  
    dispatch(SignupData({
      activeNotification:true,
  }));
    setloading(true)
    createUser(signupData).then(async (response) => {
      // console.log('response ',response)
      // console.log(signupData)
      if (response.error) {
        if (response.error.code === 'auth/email-already-in-use') {
          alert("Cette adresse email est déjà utilisée.")
        }
        setloading(false)
      }
      else {
        setUserData(response.DataToBeSet).then(res => {
          auth().currentUser.sendEmailVerification()
            .then(function () {
              Alert.alert(
                "Succès",
                "Merci pour votre inscription. Un e-mail envoyé à votre adresse e-mail avec un lien de vérification, veuillez cliquer sur le lien pour vérifier votre adresse e-mail",
                [
                  { text: "OK", onPress: () => { Actions.registerEmail() } }
                ]
              );
              auth().signOut()
              setloading(false)
            })
            .catch(function (error) {
              Alert.alert("Erreur", "Un problème est survenu")
              auth().currentUser.delete().then(function () {
                setloading(false)
                // User deleted.
              }).catch(function (error) {
                // An error happened.
                setloading(false)
              });
              // Error occurred. Inspect error.code.
            });
        })
      }
    })
  };
  

  return (

    <View style={{ flex: 1, backgroundColor: "#F0F5F7" }}>
      <Image style={{ flex: 0.3 }}
        source={require('../assets/images/notifications-personnes-1106x814.png')}
        style={{
          width: em * 310.58,
          height: 228.22 * hm,
          marginLeft: 24.56 * em,
          marginRight: 39.86 * em,
          marginTop: 59.51 * hm,
          marginBottom: 32.27 * hm,
        }} resizeMode={'contain'} />
      <View style={{ flex: 1 }}>
        <View style={styles.ActionWrapper}>
          <Text style={{ color: '#1E2D60', fontSize: 24 * em, paddingTop: 40 * hm, textAlign: 'center', fontFamily: 'Lato-Black' }}>Activer{"\n"}les notifications</Text>
          <Text style={{ color: '#6A8596', fontSize: 16 * em, paddingTop: 10 * hm, textAlign: 'center', fontFamily: 'Lato-Regular', width: 345 * em }}>Activer les notifications pour recevoir l’activité de tes amis, ta famille et tes voisins.</Text>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('ActiverLaNotif')}
          // onPress={() => loginWithActiveNotification()}
          onPress={() => loginWithActiveNotification()}
           style={{
            overflow: 'hidden',
            borderRadius: 18 * em,
            height: 59 * hm,
            width: 315 * em,
            alignItems: 'center',
            backgroundColor: '#40CDDE',
            marginTop: 28 * hm
          }}
          >
            <View
              style={styles.btnContainer}>
              <Text style={{
                fontSize: 16 * em,
                color: '#FFFFFF',
                // marginLeft: 10*em,
                marginTop: 2 * hm
              }}>Activer</Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginTop: 35 * hm }}>
            {loading ? <ActivityIndicator size='small' color='#1E2D60' style={{}} /> : <Text style={{ color: '#6A8596', fontSize: 16 * em }} onPress={() => login()}>Activer plus tard</Text>}
          </View>
        </View>
      </View>
    </View>
  )

}
const styles = StyleSheet.create({
  ActionWrapper: {

    alignItems: "center",
    // paddingStart: 15 * hm,
    width: em * 375,
    height: hm * 357,
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    borderBottomEndRadius: 0 * em,
    borderBottomStartRadius: 0 * em,
    backgroundColor: "rgba(255, 255, 255, 255)"

  },

  ActionBlueText: {
    color: "#fff",
    fontSize: 14 * em,
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },

});