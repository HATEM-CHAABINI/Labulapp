import React, { Component,useEffect } from 'react';
import { Button, View, Text,Image,TextInput,   
  TouchableOpacity, Dimensions,
  Platform,
  StyleSheet ,
  StatusBar,
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
import { Actions } from 'react-native-router-flux';
import BackArrowWhite from '../assets/svg/icons/navigation/BackArrowWhite';
import Reinput from "reinput"

  export default class InscriptionPrenom extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          prenom: "",
        }
      }
    //   componentDidMount() {
    //     PasswordInputText.ignoreLogs(['Animated: `useNativeDriver`']);
    // }
  render() {
   
    const icon = false ? 'eye-slash' : 'eye';
    const { navigation } = this.props;
console.log(navigation);
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
                
              
                <View style={{position: 'absolute',paddingTop:40*hm}} >
                <Usercreat width={30*em} height={30*hm}/> 
                </View>

                <Text style={{color:'#1E2D60',fontSize:28*em,paddingTop:60*hm,fontFamily:'lato-Black'}}>Mon prénom</Text>
   
                <View style={styles.contentWrapper}>

                   
<Reinput 
label='Quel est ton prénom ?'
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
 />
              
      

          

</View>


                </View>
              </View>
              <KeyboardAvoidingView
                    behavior='padding'
                    style={{alignItems:'center'}}
                >
                  
                    <TouchableOpacity  onPress={() => Actions.jump('InscriptionNom')} style={{ 
                overflow: 'hidden',
    borderRadius: 18*em,
    height: 59 * hm,

    width: 315 * em,
    backgroundColor: '#40CDDE',
    "opacity": 0.5,
    bottom:30*hm
  // top:240*hm
   }}
 >
  <View
    style={styles.btnContainer}>
    
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
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10*em,
    }
   
});