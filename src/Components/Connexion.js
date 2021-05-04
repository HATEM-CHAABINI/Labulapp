import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import { em, hm, WIDTH } from '../constants';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat';
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import { Actions } from 'react-native-router-flux';

export default class Connexion extends Component {
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <View style={{ flex: 1,alignContent:'center'}}>
        <Image
          source={require('../assets/images/onbording-1296x814.png')}
          style={{ width: em *500, height: 339 * hm}}
        />

        <View style={{   height: 420 * hm,
    // flex: 1,
    backgroundColor: '#ffffff',
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, }}>
          <View style={styles.ActionWrapper}>
            <TouchableOpacity
              style={{ position: 'absolute', left: 40*em, top: 40*hm }}
              onPress={() => Actions.pop()}>
              <Fleche width={30 * em} height={30 * em} />
            </TouchableOpacity>
            <View style={{ position: 'absolute', top: 40*hm }}>
              <Usercreat width={30 * em} height={30 * em} />
            </View>

            <Text style={{ color: '#1E2D60', fontSize: 28*em, paddingTop: 80 *hm,fontFamily:"lato-Black"}}>
              Je me connecte
            </Text>
            <Text style={{ color: '#6A8596', fontSize: 16*em, paddingTop: 10*hm ,fontFamily:"lato-Medium"}}>
              Ravis de te revoir :){' '}
            </Text>
            <View style={{}} >
                          <TouchableOpacity
              onPress={this.onBooking}
              style={{
                overflow: 'hidden',
                borderRadius: 18 * em,
                height: 59 * hm,
                width: 315 * em,
                backgroundColor: '#F0F5F7',
                marginTop: 58 * hm,
              }}>
              <View style={styles.btnContainer}>
                <Googleicon width={18 * em} height={18 * hm} />
                <Text style={[styles.btnText,{     marginLeft: 25*em,
}]}>Je me connecte avec Google</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.onBooking}
              style={{
                overflow: 'hidden',
                borderRadius: 18 * em,
                height: 59 * hm,
                width: 315 * em,
                // alignItems: 'center',
                backgroundColor: '#F0F5F7',
                marginTop: 8 *hm,
              }}>
              <View style={styles.btnContainer}>
                <Facebookicon width={18 * em} height={18 * hm} />
                <Text style={[styles.btnText,{     marginLeft: 16*em,
}]}>Je me connecte avec Facebook</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.registerEmail()}
              style={{
                overflow: 'hidden',
                borderRadius: 18 * em,
                height: 59 * hm,
                width: 315 * em,
                // alignItems: 'center',
                backgroundColor: '#40CDDE',
                marginTop:10 * hm,
                marginBottom:30*hm
              }}>
              <View style={{flex: 1,
    flexDirection: 'row',
    paddingTop:20*hm,
      paddingLeft:47*em,
   
    borderRadius: 10*em,}}>
                <Text
                  style={{
                    fontSize: 16*em,
                    color: '#FFFFFF',
                    // marginLeft: 10*em,
                    // marginTop: 2*hm,
                    fontFamily:"lato-Medium"
                  }}>
                  Je me connecte avec mon email
                </Text>
              </View>
            </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ActionWrapper: {
    alignItems: 'center',
    // paddingTop: 20,
    width: em * 375,
    height: hm * 420,
    borderTopStartRadius: 28*em,
    borderTopEndRadius: 28*em,
    borderBottomEndRadius: 0*em,
    borderBottomStartRadius: 0*em,
    backgroundColor: 'rgba(255, 255, 255, 255)',
  },
 
 
  
  

  
  
  errorMsg: {
    color: '#FF0000',
    fontSize: 14*em,
  },
  
  
  ActionBlueText: {
    color: '#fff',
    fontSize: 14 * em,
  },


  ActionBlueText: {
    color: '#fff',
    fontSize: 14 * em,
  },

 
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop:20*hm,
     paddingLeft:15*em,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    borderRadius: 10*em,
  },

  btnText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * em,
    color: '#1E2D60',
    // marginTop: 2*hm,
  },
});
