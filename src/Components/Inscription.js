import React, { useState } from 'react';
import {
  Button, View, Text, Image, TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Alert
} from 'react-native';
import { em, hm, WIDTH } from '../constants';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat'
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import { Actions } from 'react-native-router-flux';
import Inscrire from '../assets/icons/navigation-app/Inscrire';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { addLogin } from '../redux/actions/login';
import { addProfile } from '../redux/actions/profile';
import firestore from '@react-native-firebase/firestore';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
GoogleSignin.configure({
  webClientId: "555389901225-u0ooiaamgap21lj4i8f34aq0heiemd5n.apps.googleusercontent.com",
});

export default ({ navigation }) => {

  const dispatch = useDispatch();
  const [loadinggoogle, setloadinggoogle] = useState(false)
  const [loadingfacebook, setloadingfacebook] = useState(false)

  async function onFacebookButtonPress() {

    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }


    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }


    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);


    return auth().signInWithCredential(facebookCredential);
  }

  async function onGoogleButtonPress() {

    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // const user = auth().currentUser;

    return auth().signInWithCredential(googleCredential);

  }
  const updateUserProfile = () => {
    let user = auth().currentUser;

    firestore().collection('users').doc(user.uid).get().then((snapshot) => {
      dispatch(addProfile(snapshot.data()))

    });
  }
  return (

    <View style={{flex: 1, alignContent: 'center'}}>
      <Image
        source={require('../assets/images/onbording-1296x814.png')}
        style={styles.topImage} 
      />


<View
        style={{
          height: 420 * hm,
          // flex: 1,
          backgroundColor: '#ffffff',
          borderTopStartRadius: 28 * em,
          borderTopEndRadius: 28 * em,
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <View style={styles.ActionWrapper}>

          <TouchableOpacity style={{ position: 'absolute', left: 40 * em, top: 40 * hm }} onPress={() => Actions.pop()}>
            <Fleche width={30 * em} height={30 * hm} />
          </TouchableOpacity>
          <View style={{ position: 'absolute', top: 40 * hm }} >
            <Inscrire width={30 * em} height={30 * hm} />
          </View>

          <Text style={{ color: '#1E2D60', fontFamily: 'Lato-Black', fontSize: 28 * em, paddingTop: 60 * hm }}>Je m’inscris</Text>
          <Text style={{ color: '#6A8596', fontFamily: 'Lato-Medium', fontSize: 16 * em, paddingTop: 10 * hm }}>Rentre dans Labul </Text>
          <TouchableOpacity
            onPress={() => {
              setloadinggoogle(() => true), onGoogleButtonPress().then((res) => {
                var firstName = res.user.displayName.split(' ').slice(0, -1).join(' ');
                var lastName = res.user.displayName.split(' ').slice(-1).join(' ');
                var email = res.user.email
                var activeNotification = false
                var profilePic = res.user.photoURL
                var uid = res.user.uid
                firestore()
                  .collection('users')
                  .doc(res.user.uid)
                  .set({
                    lastName,
                    firstName,
                    email,
                    profilePic,
                    activeNotification,
                    uid
                  })
                  .then(async () => {
                    // dispatch(addProfile({firstname:firstName,secondname:lastName,profilePic:profilePic,uid:uid,activeNotification:activeNotification,email:email}))
                    setloadinggoogle(() => false);
                    updateUserProfile();
                  })
                  .catch(error => {
                    alert("something went wrong!")
                    setloadinggoogle(() => false);
                  })
              }).catch(e => { alert(e), setloadinggoogle(() => false) })
            }}
            style={{
              overflow: 'hidden',
              borderRadius: 18 * em,
              height: 59 * hm,
              width: 315 * em,
              backgroundColor: '#F0F5F7',
              marginTop: 58 * hm,
            }}>
            <View style={styles.btnContainer}>
              <Googleicon width={18 * em} height={18 * hm} />
              {loadinggoogle ? <ActivityIndicator size='small' color='#1E2D60' style={{ marginLeft: 25 * em, }} /> : <Text style={[styles.btnText, {
                marginLeft: 25 * em,
              }]}>Je me connecte avec Google</Text>}
            </View>
          </TouchableOpacity>

          <TouchableOpacity

            onPress={() => {
              setloadingfacebook(() => true), onFacebookButtonPress().then((res) => {
                var firstName = res.user.displayName.split(' ').slice(0, -1).join(' ');
                var lastName = res.user.displayName.split(' ').slice(-1).join(' ');
                var email = res.user.email
                var activeNotification = false
                var profilePic = res.user.photoURL
                var uid = res.user.uid
                firestore()
                  .collection('users')
                  .doc(res.user.uid)
                  .set({
                    lastName,
                    firstName,
                    email,
                    profilePic,
                    activeNotification,
                    uid
                  })
                  .then(async () => {
                    // dispatch(addProfile({firstname:firstName,secondname:lastName,profilePic:profilePic,uid:uid,activeNotification:activeNotification,email:email}))
                    // dispatch(addLogin(res.user));
                    setloadingfacebook(() => false);
                    updateUserProfile();
                  })
                  .catch(error => {
                    alert("something went wrong!")
                    setloadingfacebook(() => false);
                  })
              }).catch(e => { console.log(e), setloadingfacebook(() => false) })
            }}
            style={{
              overflow: 'hidden',
              borderRadius: 18 * em,
              height: 59 * hm,
              width: 315 * em,
              // alignItems: 'center',
              backgroundColor: '#F0F5F7',
              marginTop: 8 * hm,
            }}>
            <View style={styles.btnContainer}>
              <Facebookicon width={18 * em} height={18 * hm} />
              {loadingfacebook ? <ActivityIndicator size='small' color='#1E2D60' style={{ marginLeft: 25 * em, }} /> : <Text style={[styles.btnText, {
                marginLeft: 16 * em,
              }]}>Je me connecte avec Facebook</Text>}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.jump('InscriptionEmail')} style={{
            overflow: 'hidden',
            borderRadius: 18 * em,
            height: 59 * hm,
            width: 315 * em,
            // alignItems: 'center',
            backgroundColor: '#40CDDE',
            marginTop: 10 * hm,
            marginBottom: 30 * hm
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              paddingVertical: 20 * hm,
              //paddingLeft: 47 * em,
              justifyContent: 'center',
              borderRadius: 10 * em,
            }}>
              <Text
                style={{
                  fontSize: 16 * em,
                  color: '#FFFFFF',
                  // marginLeft: 10*em,
                  // marginTop: 2*hm,
                  fontFamily: "Lato-Medium"
                }}>Je m’inscris avec mon email</Text>
            </View>
          </TouchableOpacity>


        </View>
      </View>

    </View>
  )

}
const styles = StyleSheet.create({
  ActionWrapper: {

    alignItems: "center",
    // paddingStart: 15*hm,
    paddingTop: 20 * hm,
    width: em * 375,
    height: hm * 520,
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    borderBottomEndRadius: 0 * em,
    borderBottomStartRadius: 0 * em,
    backgroundColor: "rgba(255, 255, 255, 255)"

  },
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20 * em,
    paddingBottom: 50 * hm
  },



  ActionBlueText: {
    color: "#fff",
    fontSize: 14 * em,
  },


  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20 * hm,
    paddingLeft: 15 * em,
    //justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    borderRadius: 10 * em,
  },

  btnText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * em,
    color: '#1E2D60',
    // marginTop: 2*hm,
  },
  topImage: { flex: 1,resizeMode:'contain' ,width:'150%',bottom:200*hm,right:20*em},

});