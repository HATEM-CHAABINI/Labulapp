import React, { Component } from 'react';
import { Button, View, Text,Image,TextInput,   
  TouchableOpacity, 
  Platform,
  StyleSheet ,
  StatusBar,
  Alert} from 'react-native';
import { em, WIDTH,hm } from '../constants';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat'
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';


  export default class ActiverLocalisation extends Component {
  render() {
    const { navigation } = this.props;
console.log(navigation);
    return (
    
        <View style={{flex:1,bottom:40*hm,backgroundColor:"#F0F5F7"}}>
   
  

        <Image style={{flex:0.3}}
            
             source={require('../assets/img/geolocalisation.png')}
             style={{width: em*375 ,
              height:380*hm,
              right:em*40
             
              }} resizeMode={'contain'} />


<View style={{flex:1}}>
                <View style={styles.ActionWrapper}>
                
               
                       

                <Text style={{color:'#1E2D60',fontSize:24*em,paddingTop:40*hm,textAlign:'center',fontFamily:'lato-Black'}}>Activer ma localisation</Text>
                <Text style={{color:'#6A8596',fontSize:16*em,paddingTop:10*hm,textAlign:'center',fontFamily:'lato-Regular',width:345*em}}>Labul a besoin de ta localisation pour te mettre en contact avec tes proches.</Text>
                

              
              <TouchableOpacity  onPress={() => navigation.navigate('ActiverLaNotif')} style={{ overflow: 'hidden',
    borderRadius: 18*em,
    height: 60*hm,
    width:300*em,
    alignItems: 'center',
    backgroundColor: '#40CDDE',
    marginTop: 62*hm}}
 >
  <View
    style={styles.btnContainer}>
    
    <Text style={{  fontSize: 16*em,
        color: '#FFFFFF',
        marginLeft: 10*em,
        marginTop: 2*hm}}>Activer</Text>
  </View>
              </TouchableOpacity>


              <View style={{ marginTop: 50*hm}}>
              
                <Text style={{color:'#6A8596',fontSize: 16*em}} onPress={this.handleGoLogin}>Activer plus tard</Text>
              </View>
        
                </View>
              </View>

          </View>
    )
  }
}
const styles = StyleSheet.create({
    ActionWrapper:{

        alignItems: "center",
        paddingStart: 15*hm,
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
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    ActionButtonBlue: {
        overflow: 'hidden',
        borderRadius: 18*em,
        alignItems: 'center',
        backgroundColor: '#28c7ee',
        height: 50*em,
        justifyContent: 'center',
        marginLeft:20*em,
        marginRight:20*em,
      },  ActionBlueText:{
        color:"#fff",
        fontSize: 14*em,
      },
      ActionButtonNoBg: {
        justifyContent:"center", alignSelf:"center"
      },
    
      ActionBlueText:{
        color:"#fff",
        fontSize: 14*em,      },
    
      ActionNoBgText:{
        color:"#a099b0",
        fontSize: 14*em,
        padding: 15*em,
      },
      btnClickContain: {
        overflow: 'hidden',
        borderRadius: 18*em,
        height: 50*em,
        width:300*em,
        alignItems: 'center',
        backgroundColor: '#40CDDE',
        justifyContent: 'center',
        marginTop: 58*em,
        justifyContent: 'center',
      },
      btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10*em,
      },
      btnIcon: {
        height: 25,
        width: 25,
      },
      btnText: {
        fontSize: 16,
        color: '#1E2D60',
        marginLeft: 10,
        marginTop: 2,
      }
  });