import React, { Component,useEffect } from 'react';
import { Button, View, Text,Image,TextInput,  ImageBackground, 
  TouchableOpacity, Dimensions,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
} from 'react-native';
import { em, HEIGHT, WIDTH } from '../constants';
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
import TitleBlue from '../assets/title/TitleBlue';
import Menu from './Menu';
import SwitchSelector from 'react-native-switch-selector';
import Lupe1 from '../assets/icons/navigation-app/Lupe1';
import Filtre from '../assets/icons/navigation-app/Filtre';
import Selector from './Selector';
import { CardList } from 'react-native-card-list';

const cards = [
    {
      id: "0",
      title: "Starry Night",
      picture: require('../assets/img/homepage/carte.png'),
      content: <Text>Starry Night</Text>
    },
    {
      id: "1",
      title: "Wheat Field",
      picture: require('../assets/img/homepage/carte.png'),
      content: <Text>Wheat Field with Cypresses</Text>
    },
    {
      id: "2",
      title: "Bedroom in Arles",
      picture: require('../assets/img/homepage/carte.png'),
      content: <Text>Bedroom in Arles</Text>
    }
  ]
   
  export default class CarteComponents extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          mobile: "",
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
    
        <View style={{flex:1,flexDirection: "column",backgroundColor:'#F0F5F7'}}>

             
         
<View style={{ position : 'absolute', top : em*150, left : 0, right : 0,bottom : 0}}>
<CardList cards={cards} />  

</View>


        



 
          </View>
    )
  }
}
const styles = StyleSheet.create({
    TextInput:{
        height: 45*em,
        fontSize: 13*em,
       // width:250*em,
        color:"#28c7ee",
        borderBottomWidth:1*em,
        borderBottomColor:"#28c7ee",
        marginBottom: 60*em,
      },
      contentWrapper:{
        width:WIDTH,
        paddingLeft: 20*em,
        paddingRight: 20*em,
        paddingTop: 15*em
      },
    descText:{
        fontSize: 12*em,
        marginTop: 10*em,
        color:"#928da6",
      },
    ActionWrapper:{

        alignItems: "center",
        paddingStart: 15,
        paddingTop: 20,
        width: em*375,
        height: Dimensions.get('window').height,
        borderTopStartRadius: 28,
        borderTopEndRadius: 28,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 255)"
        
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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