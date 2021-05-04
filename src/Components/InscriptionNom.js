import React, { Component,useEffect } from 'react';
import { Button, View, Text,Image,TextInput,   
  TouchableOpacity, Dimensions,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
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

  export default class InscriptionNom extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          nom: "",
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
   
   
   <View style={{flex:1 ,paddingTop:50*hm,alignItems:'center',alignContent:'stretch'}}>
   <TouchableOpacity
              style={{ position: 'absolute', left: 40*em,paddingTop: 55 * hm}}
              onPress={() => Actions.pop()}>
              <BackArrowWhite width={30 * em} height={30 * hm} />
            </TouchableOpacity>
<TitleLabul width={69*em} height={20*hm}  
            
            />
</View>



<View style={{flex:10}}>
                <View style={styles.ActionWrapper}>
                
                <TouchableOpacity style={{position: 'absolute', left: 40*em,top:40*hm}} onPress={this.handleContinueClick}>
                
                            </TouchableOpacity>
                            <View style={{position: 'absolute',top:40*hm}} >
                            <Usercreat width={30*em} height={30*hm}/> 
                </View>

                <Text style={{color:'#1E2D60',fontSize:28*em,paddingTop:79*hm,fontFamily:'lato-Black'}}>Mon nom de famille</Text>
   
                <View style={styles.contentWrapper}>
              <Text style={styles.descText}>Quel est ton nom de famille ?</Text>
              <MyTextInput style={styles.TextInput} textContentType={"familyName"} autoFocus={true} value={this.state.nom} handleChange={(text)=>this.setState({nom:text})} />
              <MyTextInput />
              
      

          

</View>

              <TouchableOpacity  onPress={() => Actions.jump('InscriptionMobile')} style={{ overflow: 'hidden',
    borderRadius: 18*em,
    height: 59 * hm,
    width: 315 * em,
    alignItems: 'center',
    backgroundColor: '#40CDDE',
    "opacity": 0.5,
    top:200*hm}}
 >
  <View
    style={styles.btnContainer}>
    
    <Text style={{  fontSize: 16*em,
        color: '#FFFFFF',
        marginLeft: 10*em,
        marginTop: 2*hm}}>Continuer</Text>
  </View>
              </TouchableOpacity>

        
                </View>
              </View>
 
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
    paddingTop: 34*hm
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