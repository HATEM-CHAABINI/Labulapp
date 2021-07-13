import React from 'react';
import { View, Image, Text } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonMediumButton from '../Components/button/CommonMediumButton';
import CommonText from '../text/CommonText';
import TitleText from '../text/TitleText';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Labullogo } from '../assets/svg/icons';
GoogleSignin.configure({
    webClientId:"555389901225-u0ooiaamgap21lj4i8f34aq0heiemd5n.apps.googleusercontent.com",
  });
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center',top:50*hm}}>
            <Labullogo style={{marginBottom:10*hm}}/>
            <TitleText text={`Bienvenue `}  style={styles.narrowMargin} />     
                   <Text style={{ color: '#1E2D60', fontFamily: 'Montserrat-Bold', fontSize: 12 * em, textAlign: 'center' ,top:10*hm,}} >dans</Text>
                   <Text style={{ top:20*hm,color: '#6A8596', fontFamily: 'lato-Regular', fontSize: 16 * em, textAlign: 'center' }} >Le réseau social {'\n'}
du vivre ensemble</Text>


          
            <CommonMediumButton
                text="Connecte-toi"
                textStyle={{}}
                style={styles.wideMargin}
                onPress={() => {
                    Actions.loginMenu();
                }}
            />
                <View style={styles.registerWrapper}>

                    <Text style={{ color: '#6A8596', fontFamily: 'lato-Regular', fontSize: 16 * em }} >
                        Tu n’as pas de compte ?
</Text>
                    <Text
                        onPress={() => {
                            Actions.signupMenu();
                        }}
                        style={{ fontFamily: 'Lato-Semibold', color: '#40CDDE', fontSize: 16 * em }}
                    >
                        {" "}Inscris-toi
</Text>
                </View>
        </View>
            <Image style={styles.topImage} source={require('../assets/images/Onboarding.png')} />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        backgroundColor: '#FAFAFF',
        paddingBottom: 16 * hm,
    },
    registerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20 * hm,
        top:10*hm
    },
    wideMargin: {
        marginTop: 50 * hm,

    },
    narrowMargin: {top:10*hm, color: '#1E2D60' ,fontFamily: 'Montserrat-Bold', textAlign: 'center'},
    topImage: {
        flex: 1,
        marginBottom: -100 * hm,
        width: 603 * em,
       top:140*hm,
        heigth: 391 * hm,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default HomeScreen;