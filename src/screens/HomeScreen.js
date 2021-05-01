import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonButton from '../Components/button/CommonButton';
import CommonText from '../text/CommonText';
import TitleText from '../text/TitleText';
import { Actions } from 'react-native-router-flux';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.registerWrapper}>
                <CommonText text="Je n'ai pas de compte ? " style={{color:'#6A8596',fontFamily:'lato-Regular',fontSize:16*em }}/>
                <CommonText
                    text="Je m'inscris"
                    color="#40CDDE"
                    onPress={() => {
                        Actions.signupMenu();
                    }}
                    style={{ fontFamily: 'Lato-Semibold',color:'#40CDDE',fontFamily:'lato-Regular',fontSize:16*em }}
                />
            </View>
            <CommonButton
                text="Je me connecte"
                style={styles.wideMargin}
                onPress={() => {
                    Actions.loginMenu();
                }}
            />
            <CommonText text="ma famille" textAlign="center" />
            <CommonText text="Je vis avec mon voisinage, mes amis," textAlign="center" style={{color:'#6A8596',fontFamily:'lato-Regular',fontSize:16*em}}/>
            <TitleText text="Bienvenue" style={styles.narrowMargin} />
            <Image style={styles.topImage} source={require('../assets/images/img_sample_profiles.png')} />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingBottom: 16 * hm,
    },
    registerWrapper: { flexDirection: 'row', alignItems: 'center', paddingVertical: 36 * hm },
    wideMargin: { marginTop: 24 * hm,color:'#FFFFFF',fontFamily:'lato-Medium',fontSize:16*em },
    narrowMargin: { marginBottom: 6 * hm ,color:'#1E2D60',fontFamily:'lato-black',fontSize:28*em},
    topImage: { flex: 1, marginBottom: 18 * hm },
};

export default HomeScreen;