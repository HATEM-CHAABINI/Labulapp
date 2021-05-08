import React, { Component,useEffect,useState } from 'react';
import { Button, View, Text,Image,TextInput,   
  TouchableOpacity, Dimensions,
  Platform,
  StyleSheet ,
  StatusBar,
  ActivityIndicator,
  Alert,KeyboardAvoidingView
} from 'react-native';
import { em, HEIGHT, hm, WIDTH } from '../constants';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import PasswordInputText from 'react-native-hide-show-password-input';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat'
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import TitleLabul from '../assets/title/TitleLabul'
import MyTextInput from './MyTextInput';
import Address from '../assets/svg/icons/navigation/Address'
import BackArrowWhite from '../assets/svg/icons/navigation/BackArrowWhite';
import { Actions } from 'react-native-router-flux';
import Reinput from "reinput"
import { useSelector } from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {useDispatch} from 'react-redux';
import {SignupData} from '../redux/actions/signup';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';

/////////                 HERE GOES API KEY
Geocoder.init("############################");      
//////////
export default ({navigation}) => {
  const [loading, setloading] = useState(false)
  const { signupData } = useSelector((state) => state.signupReducer);

  const dispatch = useDispatch();
  const initialValues = {
    adresse: '',
  };
  const validationSchema = Yup.object({
    adresse: Yup.string().trim()
      .required(),
    
  });

  const onSubmit = values => {
  
    dispatch(SignupData({
      email: signupData.email,
      prenom:signupData.prenom,
      password:signupData.password,
      nom:signupData.nom,
      mobile:signupData.mobile,
      adresse:values.adresse
    }));
   
    navigation.navigate('ActiverLocalisation')
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const getlocation = () =>{
    setloading(()=>true)
    Geolocation.getCurrentPosition(
      (position) => {
        

        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(json => {
            var addressComponent = json.results[0].formatted_address;
            
           formik.setFieldValue('adresse',addressComponent)
           setloading(()=>false)
          })
          .catch(error => {console.warn(error) ,setloading(()=>false),alert(error.origin.error_message)});
      },
      (error) => {
        setloading(()=>false)
        console.log(error.code, error.message);
        
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
    return (
    
        <View style={{flex:1,backgroundColor:'#40CDDE'}}>
   
   <View style={{  paddingTop: 40 * hm ,paddingLeft:159*em}}>
        <TouchableOpacity
              style={{ position: 'absolute', paddingTop: 40 * hm,paddingLeft:27*em}}
              onPress={() => Actions.pop()}>
              <BackArrowWhite width={30 * em} height={30 * hm} />
            </TouchableOpacity>
          <TitleLabul width={69 * em} height={20 * hm} />
        </View>


        <View style={{flex:2,paddingTop:25*hm}}>
                <View style={styles.ActionWrapper}>
                
              
                            <View style={{position: 'absolute',top:40*hm}} >
                <Address width={30*em} height={30*hm}/> 
                </View>
                <Text style={{color:'#1E2D60',fontSize:28*em,paddingTop:60*hm,fontFamily:'lato-Black'}}>Mon adresse</Text>
   
                <View style={styles.contentWrapper}>
              <Reinput 
label='Saisis ton adresse complète'
underlineColor="#BFCDDB"
underlineActiveColor="#41D0E2"
labelActiveColor="#BFCDDB"
labelColor="#BFCDDB"
paddingBottom={12*hm}
clearButtonMode="while-editing"
color='#1E2D60'
fontFamily='lato-bold'
fontSize={16*em}
keyboardType="email-address"
selectionColor={'#41D0E2'}

// onChangeText={}
value={formik.values.adresse} 
           
           onBlur={formik.handleBlur('adresse')}
           onChangeText={formik.handleChange('adresse')}   />
           {formik.errors.adresse && formik.touched.adresse && <Text style={styles.descerrorText}>l'adresse ne peut pas être vide</Text>}
         
            
              
              <View style={{bottom:19*hm,alignItems:'center'}}>
            
              {loading ? <ActivityIndicator size='small' color='#40CDDE'  />:<Text style={{color:'#40CDDE',fontSize: 14*em,fontFamily:'lato'}} onPress={()=>{getlocation()}}>Me géolocaliser</Text>}
              
              </View>

          

</View>
</View>
</View>

      <KeyboardAvoidingView
      behavior='padding'
      style={{alignItems:'center'}}
  >
    
      <TouchableOpacity  onPress={formik.handleSubmit} disabled={formik.values.adresse === ''?true:false}  style={{ 
  overflow: 'hidden',
borderRadius: 18*em,
height: 59 * hm,

width: 315 * em,

bottom:30*hm
// top:240*hm
}}
>
<View
              style={[styles.btnContainer,{backgroundColor: '#40CDDE',height: 59 * hm,
              width: 315 * em,opacity:formik.values.adresse === '' ? 0.5:1}]}>

<Text style={{  fontSize: 16*em,
color: '#FFFFFF',
marginLeft: 10*em,
marginTop: 2*hm
}}>Continuer</Text>
</View>
</TouchableOpacity> 
  </KeyboardAvoidingView>

        
 
          </View>
    )
  }

const styles = StyleSheet.create({
  TextInput:{
      height: 45*hm,
      fontSize: 13*em,
      width:315*em,
      color:"#28c7ee",
      borderBottomWidth:1*em,
      borderBottomColor:"#28c7ee",
    },
    contentWrapper:{
      width:WIDTH,
      paddingLeft: 20*em,
      paddingRight: 20*em,
      paddingTop: 30*hm
    },
  descText:{
      fontSize: 12*em,
      marginTop: 10*hm,
      color:"#928da6",
    },
  ActionWrapper:{

      alignItems: "center",
      // paddingStart: 15*hm,
      paddingTop: 20*hm,
      width: em*375,
      height: Dimensions.get('window').height,
      borderTopStartRadius: 28*em,
      borderTopEndRadius: 28*em,
      borderBottomEndRadius: 0*em,
      borderBottomStartRadius: 0*em,
      backgroundColor: "rgba(255, 255, 255, 255)"
      
    },    
    descerrorText: {
      fontSize: 12 * em,
      marginTop: 10 * hm,
      color: "red",
    }, 
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10*em,
    }
   
});