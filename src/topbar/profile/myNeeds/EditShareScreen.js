import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import TitleText from '../../../text/TitleText';
import { em, hm, mabulColors } from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
import Modal from 'react-native-modal';
import CommonButton from '../../../Components/button/CommonButton';
import { Family, Friend, Neighbor, All, CheckBlue } from '../../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux'
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import AlertShareScreen from '../../alert/AlertShareScreen';

export default (props) => {
    const [contactType, setcontactType] = useState(props.value)


    const mabulService = "Alerte";
const conceptColor = '#F9547B';

   

    const onSubmit = () => {

        props.onChange(contactType)
        props.onPress()
        // setloadingSet(true)
        // let data = {}
        // if (mabulService === 'organize') {
        //   data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'organize', code: 0, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })

        // } else if (mabulService === 'give') {
        //   data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'give', code: 1, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })

        // } else if (mabulService === 'sell') {
        //   data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'sell', code: 2, subCode: 40 }, status: { status: 'INPROGRESS', code: 102 } })

        // } else {

        //   data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'need', code: 3, subCode: 11 }, status: { status: 'INPROGRESS', code: 102 } })
        // }

        // saveData(data);
    }
    console.log(",djdjdjdjddjdj ", props.alertData);
    return (
        <Modal
            isVisible={props.visible}
            backdropOpacity={0.8}
            style={{
                backgroundColor: 'white',
                marginTop: 20.5 * hm,
                marginRight: 0,
                marginLeft: 0,
                marginBottom: 0,
                // paddingHorizontal: 30 * em,
                borderTopRightRadius: 20 * em,
                borderTopLeftRadius: 20 * em,
                flex: 1,
                justifyContent: 'flex-start',
            }}
            backdropColor={'#1E2D60'}
            swipeDirection={'up'}
            onBackButtonPress={() => props.onPress()}>
            <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
            <AlertShareScreen txt={"Ok"} shareEdit={true} item={props.alertData} mabulService={mabulService} conceptColor={conceptColor} close={()=>props.onPress()}/>

        </Modal>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // marginTop: 16 * em,
    },
    header: {
        height: '12.45%',

    },
    body: {
        flex: 1,
        paddingHorizontal: 30 * em,
        justifyContent: 'space-between',
    },
    title: {
        width: 315 * em,
        textAlign: 'left',
        marginTop: 35 * em,
        lineHeight: 38 * em,
        marginBottom: 35 * hm,

    },
    comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },
    photoZone: {
        width: 315 * em,
        height: 121 * em,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
        borderWidth: 2 * em,
        borderColor: '#BFCDDB',
        borderRadius: 20 * em,
        marginTop: 35 * em,
    },
    commentPhoto: {
        fontSize: 12 * em,
        lineHeight: 14 * em,
        color: '#6A8596',
    },
    iconViewClicked: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150 * em,
        height: 176 * em,
        paddingHorizontal: 15 * em, backgroundColor: '#fff',

        ...Platform.select({
            ios: {
                borderRadius: 20 * em,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,

                elevation: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    iconView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150 * em,
        height: 176 * em,

    },
    btn: {
        marginBottom: 30 * em,
        backgroundColor: '#38C2FF',
    },

};


