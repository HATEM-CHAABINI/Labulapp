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
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { em, HEIGHT, hm, WIDTH } from '../constants';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat';
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import TitleLabul from '../assets/title/TitleLabul';
import MyTextInput from './MyTextInput';
import { Actions } from 'react-native-router-flux';
import Email from '../assets/svg/icons/navigation/Email';
import BackArrowWhite from '../assets/svg/icons/navigation/BackArrowWhite';
import Reinput from 'reinput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SignupData } from '../redux/actions/signup';

export default ({ navigation }) => {
// console.log('hello',navigation)
  const { signupData } = useSelector(state => state.signupReducer);
  // console.log(signupData)
  const dispatch = useDispatch();
  const initialValues = {
    firstName: '',
    lastName: ''
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .trim()
      .required('Obligatoire'),
      lastName: Yup.string()
      .trim()
      .required('Obligatoire'),
  });
  const onSubmit = values => {
    dispatch(SignupData({
      firstName:values.firstName,
      lastName:values.lastName
    }));
    
    // navigation.navigate('ActiverLaNotif')

    Actions.jump('ActiverLocalisation')
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
          Complète ton profil
                      </Text>
                      <Text style={{ color: '#6A8596', fontSize: 12 * em,  fontFamily: 'Lato-italic' }}>
                      * champs obligatoires
                      </Text>
          <View style={styles.contentWrapper}>
            {/* <Text style={styles.descText}>Saisis ton email</Text> */}
            <View >

           
            <Reinput
              label='Quel est ton prénom ? *'
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
              value={formik.values.firstName}
              onBlur={formik.handleBlur('firstName')}
              onChangeText={formik.handleChange('firstName')}
            />
            {formik.errors.firstName && formik.touched.firstName && <Text style={styles.descerrorText}>{formik.errors.firstName}</Text>}
            </View>
            <View style={{ bottom: 20 * hm }}>


           
 <Reinput
 
              label='Quel est ton nom ? *'
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
              value={formik.values.lastName}
              onBlur={formik.handleBlur('lastName')}
              onChangeText={formik.handleChange('lastName')}
            />
            {formik.errors.lastName && formik.touched.lastName && <Text style={styles.descerrorText}>{formik.errors.lastName}</Text>}
            </View>
            {/* {formik.errors.email && formik.touched.email && <Text style={styles.descerrorText}>entrez une adresse e-mail valide</Text>} */}
            {/*       
              <MyTextInput
                style={styles.TextInput}
                textContentType={'emailAddress'}
                
              /> */}
          
          </View>
        </View>

      
      </View>

       
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ alignItems: 'center' }}>
        <TouchableOpacity
          // disabled={formik.values.firstName === '' ? true : false}
          // onPress={() => Actions.jump('ActiverLocalisation')}
          onPress={formik.handleSubmit} 
          style={{
            overflow: 'hidden',
            borderRadius: 18 * em,
            height: 59 * hm,

            width: 315 * em,

            bottom: 18 * hm,
            // top:240*hm
          }}>
          <View
            style={[
              styles.btnContainer,
              {
                backgroundColor: '#40CDDE',
                height: 59 * hm,
                width: 315 * em,
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
