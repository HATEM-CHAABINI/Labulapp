import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import TitleText from '../../../text/TitleText';
import { em, hm, mabulColors } from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
import Modal from 'react-native-modal';
import CommonButton from '../../../Components/button/CommonButton';
import { Family, Friend, Neighbor, All, CheckBlue, Voisins, Amis, Famille, Tous } from '../../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux'
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import ShareButton from '../../../Components/button/ShareButton';
import CheckBox from '../../../Components/checkbox/CheckBox';
import RelationshipType from '../../../model/user/RelationshipType';

export default (props) => {


    const [contactType, setcontactType] = useState(props.value)

    const [vchecked, setvChecked] = useState(false);
    const [achecked, setaChecked] = useState(false);
    const [fchecked, setfChecked] = useState(false);
    const [tchecked, settChecked] = useState(false);
    const check = (id) => {
        setvChecked(false)
        setaChecked(false)
        setfChecked(false)
        settChecked(false)
        switch (id) {
            case 1:
                setvChecked(true)
                setcontactType({ type: 1, name: 'mes voisins' })
                break;
            case 2:

                setaChecked(true)
                setcontactType({ type: 2, name: 'mes amis' })
                break;
            case 3:
                setfChecked(true)
                setcontactType({ type: 3, name: 'Ma famille' })
                break;
            case 4:
                settChecked(true)
                setcontactType({ type: 4, name: 'tous' })
                break;
        }
    }
    useEffect(() => {

        check(contactType.type)
    }, [])



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
                paddingHorizontal: 30 * em,
                borderTopRightRadius: 20 * em,
                borderTopLeftRadius: 20 * em,
                flex: 1,
                justifyContent: 'flex-start',
            }}
            backdropColor={'#1E2D60'}
            swipeDirection={'up'}
            onBackButtonPress={() => props.onPress()}>
            <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
            <View
                style={{
                    width: 349 * em,
                    height: 20 * hm,
                    marginTop: -10 * hm,
                    alignSelf: 'center',
                    position: 'absolute',
                    backgroundColor: '#FFFFFF',
                    borderTopLeftRadius: 20 * em,
                    borderTopRightRadius: 20 * em,
                }}
                opacity={0.5}
            />
            <ProfileModalHeader
                title={props.title}
                style={styles.header}
                onCancelPress={() => { props.onPress() }}
                onFinishPress={() => { onSubmit() }}
            />
            {/* <View style={styles.container}> */}

            {/* <View style={styles.body}> */}
            <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>


<ShareButton text={"mes voisins"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(215,243,255,0.7)' }} leftIcon={<Voisins />} rightIcon={
  <CheckBox
    oval
    pink={props.sort === RelationshipType.FAMILIY ? true : false}
    blue={props.sort === RelationshipType.FRIEND ? true : false}
    bgColor="#EF88B9"
    isChecked={vchecked}
    onClick={() => {
      check(1)
      // const arr = [...checked];
      // arr[index] = !arr[index];
      // setChecked(arr);
    }}
  />
} />
<ShareButton text={"mes amis"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(255,244,217,0.62)' }} leftIcon={<Amis />} rightIcon={
  <CheckBox
    oval
    orange={true}
    bgColor="#FF9417"
    isChecked={achecked}
    onClick={() => {
      check(2)
      // const arr = [...checked];
      // arr[index] = !arr[index];
      // setChecked(arr);
    }}
  />
} />



<ShareButton text={"ma famille"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(255,23,103,0.11)' }} leftIcon={<Famille />} rightIcon={
  <CheckBox
    oval
    pink={true}
    bgColor="#EF88B9"
    isChecked={fchecked}
    onClick={() => {
      check(3)
      // const arr = [...checked];
      // arr[index] = !arr[index];
      // setChecked(arr);
    }}
  />
} />
<ShareButton text={"TOUS"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(240,245,247,0.62)' }} leftIcon={<Tous />} rightIcon={
  <CheckBox
    oval
    gray={true}
    bgColor="#EF88B9"
    isChecked={tchecked}
    onClick={() => {
      check(4)
      // const arr = [...checked];
      // arr[index] = !arr[index];
      // setChecked(arr);
    }}
  />
} />
</View>


            {/* </View> */}
            {/* </View> */}
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


