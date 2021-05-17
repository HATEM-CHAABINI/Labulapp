import React, { Component, useEffect } from 'react';
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

import { useDispatch } from 'react-redux';
import { SignupData } from '../redux/actions/signup';
export default ({ navigation }) => {


  const dispatch = useDispatch();
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Oops! Adresse e-mail invalide.')
      .trim()
      .required(),

  });
  const onSubmit = values => {

    dispatch(SignupData({
      email: values.email,
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



      <View style={{ flex: 2, paddingTop: 25 * hm }}>
        <View style={styles.ActionWrapper}>


          <View style={{ position: 'absolute', paddingTop: 40 * hm }} >

            <Email width={30 * em} height={30 * hm} />
          </View>

          <Text style={{ color: '#1E2D60', fontSize: 28 * em, paddingTop: 60 * hm, fontFamily: 'Lato-Black' }}>Mon Email</Text>

          <View style={styles.contentWrapper}>

            <Reinput
              label='Saisie ton email'
              autoCorrect={false}
              underlineColor="#BFCDDB"
              underlineActiveColor="#41D0E2"
              labelActiveColor="#BFCDDB"
              labelColor="#BFCDDB"
              paddingBottom={12 * hm}
              clearButtonMode="while-editing"
              color='#1E2D60'
              fontFamily='Lato-Bold'
              fontSize={16 * em}
              keyboardType="email-address"
              selectionColor={'#41D0E2'}
              value={formik.values.email}
              onBlur={formik.handleBlur('email')}
              onChangeText={formik.handleChange('email')}
            />
            {formik.errors.email && formik.touched.email && <Text style={styles.descerrorText}>entrez une adresse e-mail valide</Text>}




          </View>


        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: 'center' }}
      >

        <TouchableOpacity disabled={formik.values.email === '' ? true : false} onPress={formik.handleSubmit} style={{
          overflow: 'hidden',
          borderRadius: 18 * em,
          height: 59 * hm,

          width: 315 * em,

          bottom: 30
          // top:240*hm
        }}
        >
          <View
            style={[styles.btnContainer, {
              backgroundColor: '#40CDDE', height: 59 * hm,
              width: 315 * em, opacity: formik.values.email === '' ? 0.5 : 1
            }]}>

            <Text style={{
              fontSize: 16 * em,
              color: '#FFFFFF',
              marginLeft: 10 * em,
              marginTop: 2 * hm
            }}>Suivant</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )

}
const styles = StyleSheet.create({
  TextInput: {
    height: 45 * hm,
    fontSize: 13 * em,
    width: 315 * em,
    color: "#28c7ee",
    borderBottomWidth: 1 * em,
    borderBottomColor: "#28c7ee",
  },
  contentWrapper: {
    alignItems:'center',
    width: 315*em,
    paddingTop: 30 * hm
  },
  descerrorText: {
    fontSize: 12 * em,
    bottom: 35 * hm,
    // marginBottom: 4 * hm,
    color: "red",
  },
  descText: {
    fontSize: 12 * em,
    marginTop: 10 * hm,
    color: "#928da6",
  },
  ActionWrapper: {

    alignItems: "center",
    // paddingStart: 15*hm,
    paddingTop: 20 * hm,
    width: em * 375,
    height: Dimensions.get('window').height,
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    borderBottomEndRadius: 0 * em,
    borderBottomStartRadius: 0 * em,
    backgroundColor: "rgba(255, 255, 255, 255)"

  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10 * em,
  }

});