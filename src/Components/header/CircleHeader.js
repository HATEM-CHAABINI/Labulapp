import React from 'react';
import { em } from '../../constants/consts';
import CommonHeader from './CommonHeader';

const CircleHeader = (props) => {
    return (
        <CommonHeader
            style={[styles.container, props.style]}
            leftTxt={'Annuler'}
            centerTxt={props.title}
            centerTxtStyle={styles.centerTxt}
            onLeftPress={() => props.onCancelPress()}
        />
    );
};

const styles = {
    container: { marginHorizontal: -30 * em },
    btn: {
        lineHeight: 18 * em,
    },
    title: { fontFamily: 'Lato-Bold' },
    rightTxt: { color: '#40CDDE', fontSize: 16 * em, marginRight: 12 * em },
    centerTxt: { fontFamily: 'Lato-Bold', fontSize: 16 * em, marginLeft: -50 * em },
};

export default CircleHeader;