import React, { useState, useEffect } from 'react';
import {
  Button, View, Text, Image, TextInput,
  TouchableOpacity, Dimensions,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import { em, HEIGHT, hm, WIDTH } from '../constants';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat'
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import TitleLabul from '../assets/title/TitleLabul'
import MyTextInput from './MyTextInput';
import { Actions } from 'react-native-router-flux';
import Email from '../assets/svg/icons/navigation/Email'
import BackArrowWhite from '../assets/svg/icons/navigation/BackArrowWhite';
import Reinput from "reinput"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PasswordInputText from '../Components/textInput/PasswordTextInput';

import { useDispatch } from 'react-redux';
import { SignupData } from '../redux/actions/signup';
export default ({ navigation }) => {

  const [loading, setloading] = useState(false)
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('entrez une adresse e-mail valide')
      .trim()
      .required('entrez une adresse e-mail valide'),
    password: Yup.string().required('Le mot de passe ne peut pas être vide'),

  });

  const onSubmit = values => {
    dispatch(SignupData({
      email: values.email,
      password:values.password
    }));

    Actions.jump('InscriptionMdp')
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
          <BackArrowWhite width={27 * em} height={25 * hm} />
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

          <Text style={{ color: '#1E2D60', fontSize: 28 * em, paddingTop: 45 * hm, fontFamily: 'Lato-Black' }}>
          Crée ton compte
                      </Text>
                      <Text style={{ color: '#6A8596', fontSize: 12 * em,  fontFamily: 'Lato-italic' }}>
                      * champs obligatoires
                      </Text>
          <View style={styles.contentWrapper}>
            {/* <Text style={styles.descText}>Saisis ton email</Text> */}
            <Reinput
              label='Saisis ton email *'
              autoCorrect={false}
              underlineColor="#BFCDDB"
              underlineActiveColor="#41D0E2"
              labelActiveColor="#BFCDDB"
              labelColor="#BFCDDB"
              clearButtonMode="while-editing"
              color='#1E2D60'
              keyboardType="email-address"



              selectionColor={'#41D0E2'}
              paddingBottom={12 * hm}

              autoFocus={false}
              value={formik.values.email}
              onBlur={formik.handleBlur('email')}
              onChangeText={formik.handleChange('email')}
            />

            {formik.errors.email && formik.touched.email && <Text style={styles.descerrorText}>{formik.errors.email}</Text>}
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
                label={"Crée un mot de passe *"}
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
              />
              {formik.errors.password && formik.touched.password && <Text style={styles.descerrorText}>{formik.errors.password}</Text>}
            </View>
          </View>
        </View>

      
      </View>

       
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ alignItems: 'center' }}>
        <TouchableOpacity
          // disabled={formik.values.password === '' ? true : false}
          onPress={formik.handleSubmit}
          style={{
            overflow: 'hidden',
            borderRadius: 18 * em,
            height: 59 * hm,

            width: 315 * em,

            bottom: 25 * hm,
            // top:240*hm
          }}>
          <View
            style={[
              styles.btnContainer,
              {
                backgroundColor: '#40CDDE',
                height: 59 * hm,
                width: 315 * em,
                // opacity: formik.values.password === '' ? 0.5 : 1,
              },
            ]}>
            <Text
              style={{
                fontSize: 16 * em,
                color: '#FFFFFF',
                marginLeft: 10 * em,
                marginTop: 2 * hm,
              }}>
              Suivant
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


      {/* <View style={{ marginBottom: 60 * hm ,marginTop:80*hm}}>
         
       </View> */}
    </View>
  );

}
const styles = StyleSheet.create({
  TextInput: {
    height: 40 * hm,
    fontSize: 13 * em,
    fontFamily: "Lato-Bold",
    // width:250*em,
    color: '#28c7ee',
    borderBottomWidth: 1 * em,
    borderBottomColor: '#28c7ee',
    marginBottom: 23 * hm,
  },
  descerrorText: {
    fontSize: 12 * em,
    bottom: 30 * hm,
    // marginBottom: 4 * hm,
    color: "red",
  },
  contentWrapper: {
    // alignItems:'center',
    width: 315 * em,
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
