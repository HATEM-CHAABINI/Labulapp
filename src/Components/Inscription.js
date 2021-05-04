import React, { Component } from 'react';
import { Button, View, Text,Image,TextInput,   
  TouchableOpacity, 
  Platform,
  StyleSheet ,
  StatusBar,
  Alert} from 'react-native';
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


  export default class Inscription extends Component {
  render() {
    const { navigation } = this.props;
console.log(navigation);
    return (
    
        <View style={{flex:1,bottom:80*hm}}>
   
  

        <Image style={{flex:0.3}}
            
             source={require('../assets/img/hedaer.png')}
             style={{width: em*580 ,
              height:440*hm,
              right:20*em,
              }} resizeMode={'center'} />


<View style={{flex:1,bottom:hm*120}}>
                <View style={styles.ActionWrapper}>
                
                <TouchableOpacity style={{position: 'absolute', left: 40*em,top:40*hm}} onPress={() => Actions.pop()}>
                <Fleche width={30*em} height={30*hm} />      
                            </TouchableOpacity>
                            <View style={{position: 'absolute',top:40*hm}} >
                <Inscrire width={30*em} height={30*hm} /> 
                </View>

                <Text style={{color:'#1E2D60',fontFamily:'lato-Black',fontSize:28*em ,paddingTop:60*hm}}>Je m’inscris</Text>
                <Text style={{color:'#6A8596',fontFamily:'lato',fontSize:16*em,paddingTop:10*hm}}>Rentre dans Labul </Text>
                <TouchableOpacity  onPress={this.onBooking} style={{ overflow: 'hidden',
    borderRadius: 18*em,
    height: 59 * hm,
    width: 315 * em,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
    marginTop: 58*hm}}
 >
  <View
    style={styles.btnContainer}>
    <Googleicon width={30*em} height={30*hm} />
    <Text style={styles.btnText}>Je me connecte avec Google</Text>
  </View>
              </TouchableOpacity>
              

              <TouchableOpacity  onPress={this.onBooking} style={{ overflow: 'hidden',
    borderRadius: 18*em,
    height: 59 * hm,
    width: 315 * em,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
    marginTop: 8*hm}}
 >
  <View
    style={styles.btnContainer}>
    <Facebookicon width={30*em} height={30*hm} />
    <Text style={styles.btnText}>Je me connecte avec Facebook</Text>
  </View>
              </TouchableOpacity>
              
              <TouchableOpacity  onPress={() => Actions.jump('InscriptionEmail')} style={{ overflow: 'hidden',
    borderRadius: 18*em,
    height: 59 * hm,
                width: 315 * em,
    alignItems: 'center',
    backgroundColor: '#40CDDE',
    marginTop:10*hm}}
 >
  <View
    style={styles.btnContainer}>
    
    <Text style={{  fontSize: 16*em,fontFamily:'lato',
        color: '#FFFFFF',
        marginLeft: 10*em,
        marginTop: 2*hm}}>Je m’inscris avec mon email</Text>
  </View>
              </TouchableOpacity>

        
                </View>
              </View>

          </View>
    )
  }
}
const styles = StyleSheet.create({
    ActionWrapper:{

        alignItems: "center",
        // paddingStart: 15*hm,
        paddingTop: 20*hm,
        width: em*375,
        height: hm*520,
        borderTopStartRadius: 28*em,
        borderTopEndRadius: 28*em,
        borderBottomEndRadius: 0*em,
        borderBottomStartRadius: 0*em,
        backgroundColor: "rgba(255, 255, 255, 255)"
        
      },
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20*em,
        paddingBottom: 50*hm
    },
    
   
    
      ActionBlueText:{
        color:"#fff",
        fontSize: 14*em,      },
    
 
      btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10*em,
      },
   
      btnText: {
        fontSize: 16*em,
        color: '#1E2D60',
        marginLeft: 10*em,
        marginTop: 2*hm,
        fontFamily:'lato-Bold'
      }
  });