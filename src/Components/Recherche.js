import React, { Component } from 'react';
import { Button, View, Text,Image,TextInput,   
  TouchableOpacity, 
  Platform,
  StyleSheet ,
  StatusBar,
  Alert} from 'react-native';
import { em, WIDTH } from '../constants';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat'
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import SearchBar from 'react-native-search-bar';


  export default class Recherche extends Component {
    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };
    
  render() {
    const { navigation } = this.props;
console.log(navigation);
const { search } = this.state;
const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets'];

    return (
    
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{paddingTop:em*70,paddingLeft:em*30}}>
            <Fleche />
            </View>
            <Text style={{paddingTop:em*30,paddingLeft:em*30,color:'#1E2D60',fontSize:34}}>Recherche</Text>
            <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        color="white"
      />





        
              

          </View>
    )
  }
}
const styles = StyleSheet.create({
    ActionWrapper:{

        alignItems: "center",
        paddingStart: 15,
        paddingTop: 20,
        width: em*375,
        height: em*520,
        borderTopStartRadius: 28,
        borderTopEndRadius: 28,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
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