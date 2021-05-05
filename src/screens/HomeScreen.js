import React from 'react';
import { View, Image, Text } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonMediumButton from '../Components/button/CommonMediumButton';
import CommonText from '../text/CommonText';
import TitleText from '../text/TitleText';
import { Actions } from 'react-native-router-flux';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.registerWrapper}>
                <Text style={{ color: '#6A8596', fontFamily: 'lato-Regular', fontSize: 16 * em }} >
                    Je n'ai pas de compte?
                </Text>
                <Text
                    onPress={() => {
                        Actions.signupMenu();
                    }}
                    style={{ fontFamily: 'Lato-Semibold', color: '#40CDDE', fontSize: 16 * em }}
                >
                    Je m'inscris
                </Text>
            </View>
            <CommonMediumButton
                text="Je me connecte"
                style={styles.wideMargin}
                onPress={() => {
                    Actions.loginMenu();
                }}
            />
            <Text style={{ color: '#6A8596', fontFamily: 'lato-Regular', fontSize: 16 * em, textAlign: 'center' }} >ma famille</Text>
            <Text style={{ color: '#6A8596', fontFamily: 'lato-Regular', fontSize: 16 * em, textAlign: 'center' }} >Je vis avec mon voisinage, mes amis,</Text>
            <TitleText text="Bienvenue" style={styles.narrowMargin} />
            <Image style={styles.topImage} source={require('../assets/images/onbording-1296x814.png')} />
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
    },
    wideMargin: {
        marginTop: 29 * hm,

    },
    narrowMargin: { marginBottom: 6 * hm, color: '#1E2D60' },
    topImage: {
        flex: 1,
        marginBottom: 18 * hm,
        width: 375 * em,
        // heigth: 387 * hm
    },
};

export default HomeScreen;