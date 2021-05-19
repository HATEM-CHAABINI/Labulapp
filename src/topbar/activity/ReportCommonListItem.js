import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { em } from '../../constants/consts';
import CommonListItem from '../../adapter/CommonListItem';
import { RightArrow } from '../../assets/svg/icons';
const ReportCommonListItem = (props) => {
    return (
        <><View style={styles.line} />
            <CommonListItem
                onPress={props.onPress}
                style={props.style}
                icon={<View style={{ marginRight: 10 * em }}>{props.icon}</View>}
                title={props.text}
                subTitle={props.subText}
                titleStyle={styles.textTitle}
                subTitleStyle={styles.textSubTitle}
                rightView={
                    <View
                        style={[
                            styles.rightView,
                            { marginTop: props.icon ? 10 * em : 0 * em, justifyContent: props.icon ? 'flex-start' : 'center' },
                        ]}>
                        <RightArrow width={11 * em} height={18 * em} />
                    </View>
                }
            />

        </>
    );
};
export default ReportCommonListItem;
const styles = {
    rightView: {
        marginRight: 20 * em,
        borderBottomWidth: 0.5 * em,
        borderBottomColor: '#B3C6CF33',
        alignItems: 'center',
    },
    textTitle: {
        marginRight: 20 * em,
        fontFamily: 'Lato-Regular',
        fontSize: 16 * em,
        lineHeight: 23 * em,
        color: '#6A8596',
    },
    textSubTitle: { marginRight: 50 * em, color: '#A0AEB8', lineHeight: 16 * em, width: 205 * em },
    line: { marginTop: 25 * em, marginLeft: 10 * em, backgroundColor: '#B3C6CF33', height: 1 * em },
};
