import React, { useState } from 'react';
import { em, WIDTH, hm } from '../../../constants/consts';
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../../../Components/textInput/ProfileCommonTextInput';

import { StatusBar, View, Text, Platform, Alert } from 'react-native';
import User from '../../../model/user/User';
import { feedbackIcons } from '../../../constants/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUserProfile } from '../../../services/firebase'
import auth from '@react-native-firebase/auth'
import { addProfile, updateProfile } from '../../../redux/actions/profile';
import { useDispatch } from 'react-redux';

export default (props) => {
    // console.log(insertInfo.inputTexts[0].toString())
    // const insertInfo = insertInformations[props.title];
    const [value, setvalue] = useState(props.value)
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false)

    const initialValues = {
        address: value,
    };
    const validationSchema = Yup.object({
        address: Yup.string().required('required')

    });
    const onSubmit = async values => {
        console.log("val ", values);
        props.onChange(values.address)
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    return (
        <Modal
            isVisible={props.visible}
            backdropOpacity={0.8}
            style={styles.container}
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
                loading={loading}
                setloading={setloading}
                onCancelPress={() => props.onPress()}
                onFinishPress={formik.handleSubmit}
            />
            <ProfileCommonTextInput
                style={styles.input}
                text={props.title}
                value={formik.values.address}
                onFocus={true}
                key={0}
                kyeboardType={'default'}
                onChangeText={formik.handleChange('address')}
            />
            {
                formik.errors.address && formik.touched.address && <Text style={styles.descerrorText}>{formik.errors.address}</Text>}
        </Modal>
    );
};
const styles = {
    container: {
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
    },
    descerrorText: {
        fontSize: 12 * em,
        bottom: 0,
        // marginBottom: 4 * hm,
        color: "red",
    },
    header: { marginBottom: 10 * hm, marginTop: 27 * hm },
    input: { marginTop: 25 * hm },
    forgotPsswd: { lineHeight: 18 * em, marginTop: 78 * hm, textAlign: 'center' },
    comment: { fontSize: 12 * em, lineHeight: 20 * em, marginTop: 15 * hm },
    listItem: { paddingHorizontal: 10 * em, marginBottom: 35 * hm },
};

