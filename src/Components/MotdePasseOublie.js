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
import { BackArrowWhite } from '../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import Motpass from '../assets/icons/navigation-app/Motpass';
  export default class MotdePasseOublie extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          email: "",
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
    
      <View style={{ flex: 1, backgroundColor: '#40CDDE' }}>
        <View style={{  paddingTop: 40 * hm ,paddingLeft:159*em}}>
        <TouchableOpacity
              style={{ position: 'absolute', paddingTop: 40 * hm,paddingLeft:27*em}}
              onPress={() => Actions.pop()}>
              <BackArrowWhite width={30 * em} height={30 * hm} />
            </TouchableOpacity>
          <TitleLabul width={69 * em} height={20 * hm} />
        </View>




<View style={{ flex: 2 ,paddingTop:25*hm}}>
                <View style={styles.ActionWrapper}>
                
                <TouchableOpacity style={{position: 'absolute'}} onPress={this.handleContinueClick}>
                
                            </TouchableOpacity>
                            <View style={{position: 'absolute',paddingTop:40*hm}} >
                <Motpass width={30*em} height={30*hm} /> 
                </View>
                <Text style={{color:'#1E2D60',fontSize:28*em,paddingTop:80*hm,textAlign:'center',fontFamily:"lato-Black"}}>Demander un nouveau {"\n"}mot de passe</Text>
                <Text style={{color:'#6A8596',fontSize:14*em,paddingTop:10*hm,textAlign:'center',fontFamily:"lato-Regular"}}>Entrez votre adresse e-mail pour réinitialiser votre{"\n"} mot de passe</Text>
                <View style={styles.contentWrapper}>
              <Text style={styles.descText}>Saisis ton email</Text>
              <MyTextInput style={styles.TextInput} textContentType={"emailAddress"} autoFocus={true} value={this.state.email} handleChange={(text)=>this.setState({email:text})} />
              <MyTextInput />
     
</View>
<View style={{flex:1,bottom:5*hm}}>
              <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={{ overflow: 'hidden',
    borderRadius: 18*em,
    height: 59*hm,
    width:315*em,
    alignItems: 'center',
    backgroundColor: '#40CDDE',
  }}
 >
  <View
    style={styles.btnContainer}>
    
    <Text style={{  fontSize: 16,
        color: '#FFFFFF',
      fontFamily:"lato-Medium"}}>Demander</Text>
  </View>
              </TouchableOpacity>

              </View>
                </View>
              </View>

          </View>
    )
  }
}
const styles = StyleSheet.create({
    TextInput:{
        height: 45*em,
        fontSize: 16*em,
       // width:250*em,
        color:"#28c7ee",
        borderBottomWidth:1*hm,
        borderBottomColor:"#28c7ee",
        fontFamily:'lato-bold'
        // marginBottom: 60*em,
      },
      contentWrapper:{
        width:WIDTH,
        paddingLeft: 20*em,
        paddingRight: 20*em,
        paddingTop: 23*hm,
      },
    descText:{
        fontSize: 12*em,
        marginTop: 10*em,
        color:"#928da6",
      },
    ActionWrapper:{

        alignItems: "center",
        marginBottom:em*400,
        width: em*375,
        height: em*492,
        borderTopStartRadius: 28,
        borderTopEndRadius: 28,
        borderBottomEndRadius: 28,
        borderBottomStartRadius: 28,
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
        borderRadius: 10,
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