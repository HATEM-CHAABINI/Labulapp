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
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat'
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addLogin } from '../redux/actions/login';
import * as Firebase from 'firebase'
import app from 'firebase/app'
const fireStore = app.firestore()
export default ({ navigation }) => {
const [loading, setloading] = useState(false)
  const { signupData } = useSelector((state) => state.signupReducer);
  const dispatch = useDispatch();
console.log(signupData.adresse);
  const login = () => {
    setloading(true)
Firebase.default.auth().createUserWithEmailAndPassword(signupData.email,signupData.password).then((userCredential) => {
      var user = userCredential.user;
      if(user){
        user.updateProfile({
           displayName: signupData.nom,
           nom: signupData.nom,// some displayName,
           prenom:signupData.prenom,
           phoneNumber:  signupData.mobile,
           adresse:  signupData.adresse,
        }).then(
          (s)=>{
            Object.assign(user, { login: true, NotificationActive: false });
           
            dispatch(addLogin(user));
          } // perform any other operation
        )
      }
    })
    .catch((error) => {
      console.log(error.code,error.message)
    });
    setloading(false)
   
  }
  const loginWithActiveNotification = () => {
    setloading(true)
    Firebase.default.auth().createUserWithEmailAndPassword(signupData.email,signupData.password).then((userCredential) => {
          var user = userCredential.user;
          
          fireStore.collection("usersCollection")
          .add({
            uid: userCredential.user.uid,
            nom: signupData.nom,
            prenom: signupData.prenom,
            mobile:  signupData.mobile,
            adresse:  signupData.adresse,
    
          })
    
          Object.assign(signupData, { login: true, NotificationActive: true });
        console.log(user)
        dispatch(addLogin(user));
        })
        .catch((error) => {
          console.log(error.code,error.message)
        });
        setloading(false)
  

  }
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




          <Text style={{ color: '#1E2D60', fontSize: 24 * em, paddingTop: 40 * hm, textAlign: 'center', fontFamily: 'lato-Black' }}>Activer{"\n"}les notifications</Text>
          <Text style={{ color: '#6A8596', fontSize: 16 * em, paddingTop: 10 * hm, textAlign: 'center', fontFamily: 'lato-Regular', width: 345 * em }}>Activer les notifications pour recevoir l’activité de tes amis, ta famille et tes voisins.</Text>



          <TouchableOpacity onPress={loginWithActiveNotification} style={{
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

          {loading ? <ActivityIndicator size='small' color='#1E2D60' style={{ }} /> :<Text style={{ color: '#6A8596', fontSize: 16 * em }} onPress={()=>login()}>Activer plus tard</Text>}
          </View>

        </View>
      </View>

    </View>
  )

}
const styles = StyleSheet.create({
  ActionWrapper: {

    alignItems: "center",
    paddingStart: 15 * hm,
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