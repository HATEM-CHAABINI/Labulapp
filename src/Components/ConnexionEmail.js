import React, { Component, useEffect } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import { em, HEIGHT, hm, WIDTH } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import PasswordInputText from 'react-native-hide-show-password-input';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import BackArrowWhite from '../assets/svg/icons/navigation/BackArrowWhite';
import Usercreat from './Usercreat';
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import TitleLabul from '../assets/title/TitleLabul';
import MyTextInput from './MyTextInput';
import { LogBox } from 'react-native';
import { Actions } from 'react-native-router-flux';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default class ConnexionEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const icon = false ? 'eye-slash' : 'eye';
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <View style={{ flex: 1, backgroundColor: '#40CDDE' }}>
        <View style={{ flex: 1, paddingTop: 50 * hm, alignItems: 'center' }}>
        <TouchableOpacity
              style={{ position: 'absolute', left: 40,paddingTop: 55 * hm}}
              onPress={() => Actions.pop()}>
              <BackArrowWhite width={30 * em} height={30 * hm} />
            </TouchableOpacity>
          <TitleLabul width={69 * em} height={20 * hm} />
        </View>

        <View style={{ flex: 10 }}>
          <View style={styles.ActionWrapper}>
            <TouchableOpacity
              style={{ position: 'absolute', left: 40*em, top: 40*hm }}
              onPress={this.handleContinueClick}></TouchableOpacity>
            <View style={{ position: 'absolute', top: 40*hm }}>
              <Usercreat width={30 * em} height={30 * hm} />
            </View>

            <Text style={{ color: '#1E2D60', fontSize: 28*em, paddingTop: 70*hm,fontFamily:'lato-black' }}>
              Je me connecte
            </Text>

            <View style={styles.contentWrapper}>
              <Text style={styles.descText}>Saisis ton email</Text>
              <MyTextInput
                style={styles.TextInput}
                textContentType={'emailAddress'}
                autoFocus={true}
                value={this.state.email}
                handleChange={text => this.setState({ email: text })}
              />
                <PasswordInputText
                secureTextEntry={true}
                textContentType={'Mot de passe'}
                // autoFocus={true}
                placeholder={''}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
              <View style={{ left: em * 200, marginTop: 10*hm }}>
                <Text
                  style={{ color: '#1E2D60', fontSize: 12*em,fontFamily:'lato' }}
                  onPress={this.handleGoLogin}>
                  {' '}
                  Mot de passe oublié ?
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => Actions.main()}
              style={{
                overflow: 'hidden',
                borderRadius: 18 * em,
                height: 50 * hm,
                width: 300 * em,
                alignItems: 'center',
                backgroundColor: '#40CDDE',
                marginTop: 30 * hm,
              }}>
              <View style={styles.btnContainer}>
                <Text
                  style={{
                    fontSize: 16*em,
                    color: '#FFFFFF',
                    marginLeft: 10*em,
                    marginTop: 2*hm,
                    fontFamily:'lato'
                  }}>
                  Suivant
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 50 * hm }}>
          <Text
            style={
              ({
                fontSize: 16*em,
                fontFamily:'lato-Regular',
                color: '#6A8596',
              },
                StyleSheet.flatten([{ alignSelf: 'center' }]))
            }>
            Je n’ai pas de compte ?
            <Text
              style={{ color: '#40CDDE', fontSize: 16 *em,fontFamily:'lato'}}
              onPress={() => {
                Actions.signupMenu();
            }}>
              {' '}
              Je m’inscris
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TextInput: {
    height: 30 * hm,
    fontSize: 13 * em,
    // width:250*em,
    color: '#28c7ee',
    borderBottomWidth: 1 * em,
    borderBottomColor: '#28c7ee',
    marginBottom: 23 * hm,
  },
  contentWrapper: {
    width: WIDTH,
    paddingLeft: 20 * em,
    paddingRight: 20 * em,
    paddingTop: 15 * hm,
  },
  descText: {
    fontSize: 12 * em,
    marginTop: 10 * hm,
    color: '#A0AEB8',
    fontFamily:'Lato'
  },
  ActionWrapper: {
    alignItems: 'center',
    paddingStart: 15*hm,
    paddingTop: 20*hm,
    width: em * 375,
    height: Dimensions.get('window').height,
    borderTopStartRadius: 28*em,
    borderTopEndRadius: 28*em,
    borderBottomEndRadius: 0*em,
    borderBottomStartRadius: 0*em,
    backgroundColor: 'rgba(255, 255, 255, 255)',
  },
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20*em,
    paddingBottom: 50*hm,
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30*em,
    borderTopRightRadius: 30*em,
    paddingHorizontal: 20*hm,
    paddingVertical: 30*em,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30*em,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18*em,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10*hm,
    borderBottomWidth: 1*hm,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5*hm,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10*hm,
    borderBottomWidth: 1*em,
    borderBottomColor: '#FF0000',
    paddingBottom: 5*hm,
  },
  
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10*em,
  },
  
});
