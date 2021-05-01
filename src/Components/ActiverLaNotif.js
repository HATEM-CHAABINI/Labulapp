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
import { Actions } from 'react-native-router-flux';


  export default class ActiverLaNotif extends Component {
  render() {
    const { navigation } = this.props;
console.log(navigation);
    return (
    
        <View style={{flex:1,bottom:40*hm,backgroundColor:"#F0F5F7"}}>
   
  

        <Image style={{flex:0.3}}
            
             source={require('../assets/img/notifications.png')}
             style={{
               width: em*350 ,
              height:340*hm,
             left:em*15,
             marginTop:40*em,
              }} resizeMode={'contain'} />


<View style={{flex:1}}>
                <View style={styles.ActionWrapper}>
                
               
                       

                <Text style={{color:'#1E2D60',fontSize:24*em,paddingTop:40*hm,textAlign:'center',fontFamily:'lato-Black'}}>Activer{"\n"}les notifications</Text>
                <Text style={{color:'#6A8596',fontSize:16*em,paddingTop:10*hm,textAlign:'center',fontFamily:'lato-Regular',width:345*em}}>Activer les notifications pour recevoir l’activité de tes amis, ta famille et tes voisins.</Text>
                

              
              <TouchableOpacity  onPress={() => Actions.jump('main')} style={{ overflow: 'hidden',
    borderRadius: 18*em,
    height: 58*hm,
    width:315*em,
    alignItems: 'center',
    backgroundColor: '#40CDDE',
    marginTop: 28*hm}}
 >
  <View
    style={styles.btnContainer}>
    
    <Text style={{  fontSize: 16*em,
        color: '#FFFFFF',
        marginLeft: 10*em,
        marginTop: 2*hm}}>Activer</Text>
  </View>
              </TouchableOpacity>


              <View style={{ marginTop: 35*hm}}>
              
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
        height: hm*357,
        borderTopStartRadius: 28*em,
        borderTopEndRadius: 28*em,
        borderBottomEndRadius: 0*em,
        borderBottomStartRadius: 0*em,
        backgroundColor: "rgba(255, 255, 255, 255)"
        
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
        borderRadius: 10,
      },
     
  });