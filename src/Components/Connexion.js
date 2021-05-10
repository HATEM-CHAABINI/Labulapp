import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {em, hm, WIDTH} from '../constants';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Fleche from './Fleche';
import Usercreat from './Usercreat';
import Googleicon from '../assets/icons/navigation-app/Googleicon';
import Facebookicon from '../assets/icons/navigation-app/Facebookicon';
import {Actions} from 'react-native-router-flux';
import TitleText from '../text/TitleText';
import CommonText from '../text/CommonText';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import {addLogin} from '../redux/actions/login';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
GoogleSignin.configure({
  webClientId:
    '555389901225-u0ooiaamgap21lj4i8f34aq0heiemd5n.apps.googleusercontent.com',
});
import {Settings} from 'react-native-fbsdk-next';
if (Platform.OS === 'ios') {
  Settings.initializeSDK();
}
export default ({navigation}) => {
  const dispatch = useDispatch();
  const [loadinggoogle, setloadinggoogle] = useState(false);
  const [loadingfacebook, setloadingfacebook] = useState(false);
  async function onFacebookButtonPress() {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    return auth().signInWithCredential(facebookCredential);
  }
  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // const user = auth().currentUser;

    return auth().signInWithCredential(googleCredential);
  }
  return (
    <View style={{flex: 1, alignContent: 'center'}}>
      <Image
        source={require('../assets/images/onbording-1296x814.png')}
        style={{width: em * 500, height: 339 * hm,bottom:10*hm,}}
      />

      <View
        style={{
          height: 420 * hm,
          // flex: 1,
          backgroundColor: '#ffffff',
          borderTopStartRadius: 28 * em,
          borderTopEndRadius: 28 * em,
          width: '100%',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <View style={styles.ActionWrapper}>
          <TouchableOpacity
            style={{position: 'absolute', left: 27 * em, top: 33 * hm}}
            onPress={() => Actions.pop()}>
            <Fleche width={20 * em} height={18 * em} />
          </TouchableOpacity>
          <View style={{position: 'absolute', top: 39 * hm}}>
            <Usercreat width={20 * em} height={25 * em} />
          </View>
          <TitleText text="Je me connecte" style={{marginTop: 79 * hm}} />
          <CommonText
            text="Ravis de te revoir :)"
            style={{color: '#6A8596', marginTop: 7 * hm}}
          />
          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                setloadinggoogle(() => true),
                  onGoogleButtonPress()
                    .then(res => {
                      Object.assign(res.user, {
                        login: true,
                        NotificationActive: false,
                      });

                      dispatch(addLogin(res.user));
                      setloadinggoogle(() => false);
                    })
                    .catch(e => {
                      alert(e), setloadinggoogle(() => false);
                    });
              }}
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
                {loadinggoogle ? (
                  <ActivityIndicator
                    size="small"
                    color="#1E2D60"
                    style={{marginLeft: 25 * em}}
                  />
                ) : (
                  <Text
                    style={[
                      styles.btnText,
                      {
                        marginLeft: 25 * em,
                      },
                    ]}>
                    Je me connecte avec Google
                  </Text>
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setloadingfacebook(() => true),
                  onFacebookButtonPress()
                    .then(res => {
                      Object.assign(res.user, {
                        login: true,
                        NotificationActive: false,
                      });

                      dispatch(addLogin(res.user));
                      setloadingfacebook(() => false);
                    })
                    .catch(e => {
                      console.log(e), setloadingfacebook(() => false);
                    });
              }}
              style={{
                overflow: 'hidden',
                borderRadius: 18 * em,
                height: 59 * hm,
                width: 315 * em,
                // alignItems: 'center',
                backgroundColor: '#F0F5F7',
                marginTop: 8 * hm,
              }}>
              <View style={styles.btnContainer}>
                <Facebookicon width={18 * em} height={18 * hm} />
                {loadingfacebook ? (
                  <ActivityIndicator
                    size="small"
                    color="#1E2D60"
                    style={{marginLeft: 25 * em}}
                  />
                ) : (
                  <Text
                    style={[
                      styles.btnText,
                      {
                        marginLeft: 16 * em,
                      },
                    ]}>
                    Je me connecte avec Facebook
                  </Text>
                )}
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
                marginTop: 10 * hm,
                marginBottom: 30 * hm,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingVertical: 20 * hm,
                  //paddingLeft: 47 * em,
                  justifyContent: 'center',
                  borderRadius: 10 * em,
                }}>
                <Text
                  style={{
                    fontSize: 16 * em,
                    color: '#FFFFFF',
                    // marginLeft: 10*em,
                    // marginTop: 2*hm,
                    fontFamily: 'lato-Medium',
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
};
const styles = StyleSheet.create({
  ActionWrapper: {
    alignItems: 'center',
    // paddingTop: 20,
    width: em * 375,
    height: hm * 420,
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    borderBottomEndRadius: 0 * em,
    borderBottomStartRadius: 0 * em,
    backgroundColor: 'rgba(255, 255, 255, 255)',
  },

  errorMsg: {
    color: '#FF0000',
    fontSize: 14 * em,
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
    paddingVertical: 20 * hm,
    paddingLeft: 15 * em,
    //justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    borderRadius: 10 * em,
  },

  btnText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16 * em,
    color: '#1E2D60',
    // marginTop: 2*hm,
  },
});
