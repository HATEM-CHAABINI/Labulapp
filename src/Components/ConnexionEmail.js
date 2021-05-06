import React, { Component, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
  StatusBar,
  Alert, KeyboardAvoidingView
} from 'react-native';
import { em, HEIGHT, hm, WIDTH } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import PasswordInputText from '../Components/textInput/PasswordTextInput';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import BackArrowWhite from '../assets/svg/icons/navigation/BackArrowWhite';
import Usercreat from './Usercreat';
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import TitleLabul from '../assets/title/TitleLabul';
import MyTextInput from './MyTextInput';
import { LogBox } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Reinput from "reinput"
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addLogin } from '../redux/actions/login';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default ({ navigation }) => {


  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Oops! Adresse e-mail invalide.')
      .trim()
      .required(),
    password: Yup.string().required(),

  });
  const onSubmit = values => {

    dispatch(addLogin({
      email: values.email,
      login: true,
      NotificationActive: false
    }));

  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


  return (
    <View style={{ flex: 1, backgroundColor: '#40CDDE' }}>
      <View style={{ paddingTop: 40 * hm, paddingLeft: 159 * em }}>
        <TouchableOpacity
          style={{ position: 'absolute', paddingTop: 40 * hm, paddingLeft: 27 * em }}
          onPress={() => Actions.pop()}>
          <BackArrowWhite width={30 * em} height={30 * hm} />
        </TouchableOpacity>
        <TitleLabul width={69 * em} height={20 * hm} />
      </View>

      <View style={{ flex: 2, paddingTop: 25 * hm, paddingBottom: 90 * hm }}>
        <View style={styles.ActionWrapper}>
          <TouchableOpacity
            style={{ position: 'absolute' }}
            onPress={() => { console.log("Click") }}></TouchableOpacity>
          <View style={{ position: 'absolute', top: 40 * hm }}>
            <Usercreat width={20 * em} height={25 * hm} />
          </View>

          <Text style={{ color: '#1E2D60', fontSize: 28 * em, paddingTop: 45 * hm, fontFamily: 'lato-black' }}>
            Je me connecte
            </Text>

          <View style={styles.contentWrapper}>
            {/* <Text style={styles.descText}>Saisis ton email</Text> */}
            <Reinput 
label='Saisie ton email'
underlineColor="#BFCDDB"
underlineActiveColor="#41D0E2"
labelActiveColor="#BFCDDB"
labelColor="#BFCDDB"
paddingBottom={12*hm}
clearButtonMode="while-editing"
color='#1E2D60'
fontFamily='lato-bold'
fontSize={16 * em}
keyboardType="email-address"
selectionColor={'#41D0E2'}
autoFocus={true}
value={formik.values.email}
onBlur={formik.handleBlur('email')}
onChangeText={formik.handleChange('email')}
 />
 {formik.errors.email && formik.touched.email && <Text style={styles.descerrorText}>entrez une adresse e-mail valide</Text>}
            {/*       
              <MyTextInput
                style={styles.TextInput}
                textContentType={'emailAddress'}
                
              /> */}
            <View style={{ bottom: 20 * hm }}>
              <PasswordInputText

                // secureTextEntry={true}
                textContentType={'Mot de passe'}
                // autoFocus={true}
                placeholder={''}
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
              />
              {formik.errors.password && formik.touched.password && <Text style={styles.descerrorText}>Le mot de passe ne peut pas être vide</Text>}
            </View>
          </View>
          <View style={{ marginLeft: 220 * em, bottom: 50 * em }}>
            <Text
              style={{ color: '#1E2D60', fontSize: 12 * em, fontFamily: 'lato-medium' }}
              onPress={() => Actions.MotdePasseOublie()}>
              Mot de passe oublié ?
                </Text>
          </View>

          <TouchableOpacity
            onPress={formik.handleSubmit}
            style={{
              overflow: 'hidden',
              borderRadius: 18 * em,
              height: 59 * hm,

              width: 315 * em,
              backgroundColor: '#40CDDE',
              bottom: 36 * hm
            }}>
            <View style={styles.btnContainer}>
              <Text
                style={{
                  fontSize: 16 * em,
                  color: '#FFFFFF',
                  marginLeft: 10 * em,
                  marginTop: 2 * hm,
                  fontFamily: 'lato-Medium'
                }}>
                Suivant
                </Text>
            </View>
          </TouchableOpacity>

        </View>


        <View style={{ position: 'absolute', bottom: 0, marginBottom: 50 * hm, alignSelf: 'center' }}>

          <Text
            style={
              ({

                fontSize: 16 * em,
                fontFamily: 'lato-Regular',

              },
                StyleSheet.flatten([{ alignSelf: 'center', color: '#6A8596' }]))
            }>
            Je n’ai pas de compte ?
            <Text
              style={{ color: '#40CDDE', fontSize: 16 * em, fontFamily: 'lato-semibold' }}
              onPress={() => {
                Actions.signupMenu();
              }}>
              {' '}
              Je m’inscris
            </Text>
          </Text>

        </View>


      </View>



      {/* <View style={{ marginBottom: 60 * hm ,marginTop:80*hm}}>
         
       </View> */}
    </View>
  );

}
const styles = StyleSheet.create({
  TextInput: {
    height: 40 * hm,
    fontSize: 13 * em,
    fontFamily: "lato-bold",
    // width:250*em,
    color: '#28c7ee',
    borderBottomWidth: 1 * em,
    borderBottomColor: '#28c7ee',
    marginBottom: 23 * hm,
  },
  descerrorText: {
    fontSize: 12 * em,
    marginBottom: 10 * em,
    color: "red",
  },
  contentWrapper: {
    width: WIDTH,
    paddingLeft: 20 * em,
    paddingRight: 20 * em,
    paddingTop: 14 * hm,

  },
  descText: {
    fontSize: 12 * em,
    marginTop: 10 * hm,
    color: '#A0AEB8',
    fontFamily: 'Lato'
  },
  ActionWrapper: {
    alignItems: 'center',
    // paddingStart: 15*hm,
    paddingTop: 25 * hm,
    width: em * 375,
    height: Dimensions.get('window').height,
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    borderBottomEndRadius: 0 * em,
    borderBottomStartRadius: 0 * em,
    backgroundColor: 'rgba(255, 255, 255, 255)'
  },
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20 * em,
    paddingBottom: 50 * hm,
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30 * em,
    borderTopRightRadius: 30 * em,
    paddingHorizontal: 20 * hm,
    paddingVertical: 30 * em,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30 * em,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18 * em,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10 * hm,
    borderBottomWidth: 1 * hm,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5 * hm,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10 * hm,
    borderBottomWidth: 1 * em,
    borderBottomColor: '#FF0000',
    paddingBottom: 5 * hm,
  },

  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10 * em,
  },

});
