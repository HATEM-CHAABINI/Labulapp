import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { em, WIDTH } from '../constants/consts';
import LinearGradient from 'react-native-linear-gradient';

const LoadingScreen = (props) => {
    const [percent, setPercent] = useState(0);
    useEffect(() => {
        if (props.authenticated){
            Actions.reset('main');
        }else{
        if (percent < 100) {
            increasePercent();
        } else {
            Actions.reset('home');
        }
    }
    }, [percent]);

    function increasePercent() {
        setTimeout(() => {
            var newPercent = percent + 1.5;
            if (newPercent > 100) {
                newPercent = 100;
            }
            setPercent(newPercent);
        }, 40);
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0.5, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}
                useAngle={true}
                angle={180}
                colors={['#64E4F4', '#4BD8E9']}
                style={styles.linearGradient}>
                <View style={styles.topHalfContainer}>
                    <View style={styles.imageLogoContainer}>
                        <Image source={require('../assets/images/img_logo_white.png')} style={styles.imageLogo} />
                    </View>
                </View>
                <View style={styles.bottomHalfContainer}>
                    <Image source={require('../assets/images/txt_logo_white.png')} style={styles.textLogo} />
                    <View style={styles.progressContainer}>
                        <View style={[{ width: ((WIDTH - 120 * em) / 100) * percent }, styles.progressBar]} />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    topHalfContainer: {
        flex: 0.5,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        paddingDown: 2.27 * em,
    },
    bottomHalfContainer: {
        flex: 0.5,
        alignItems: 'center',
    },
    progressBar: {
        height: 6 * em,
        backgroundColor: '#FFFFFF',
        borderRadius: 3 * em,
    },
    progressContainer: {
        width: WIDTH - 120 * em,
        height: 6 * em,
        marginTop: 65 * em,
        backgroundColor: '#A4E4F4',
        borderRadius: 3 * em,
    },
    title: {
        fontSize: 40 * em,
    },
    linearGradient: {
        flex: 1,
        width: '100%',
    },
    imageLogoContainer: {
        width: 109.07 * em,
        height: 117.64 * em,
    },
    imageLogo: {
        width: 86.5 * em,
        height: 98.62 * em,
        marginLeft: 8.5 * em,
        marginTop: 9.2 * em,
        resizeMode: 'contain',
    },
    textLogo: {
        height: 53.59 * em,
        width: 186.22 * em,
        resizeMode: 'contain',
    },
};

export default LoadingScreen;
