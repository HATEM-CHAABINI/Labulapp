import React, { useState } from 'react';
import { em, WIDTH, hm } from '../../../constants/consts';
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../../../Components/textInput/ProfileCommonTextInput';
import CommonText from '../../../text/CommonText';
import SearchBox from '../../../Components/other/SearchBox';
import CommonCheckBox from '../../../Components/checkbox/CommonCheckBox';
import { StatusBar, View, Text, Platform, Alert } from 'react-native';
import User from '../../../model/user/User';
import { feedbackIcons } from '../../../constants/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updateUserProfile, getUserProfile } from '../../../services/firebase'
import auth from '@react-native-firebase/auth'
import { addProfile } from '../../../redux/actions/profile';
import { useDispatch } from 'react-redux';
import TitleText from '../../../text/TitleText';
import { KeyboardAvoidingView } from 'react-native';
import OkModalchange from '../../../Components/button/OkModalchange';
const insertInformations = [
    { title: 'Mon email', inputTexts: [{ commentInput: 'Mon email', value: 'mathieu@labul.com' }] },
    {
        title: 'Mon mot de passe',
        comment: 'Mot de passe oublié?',
        inputTexts: [
            { commentInput: 'Mot de passe actuel', value: '' },
            { commentInput: 'Nouveau mot de passe', value: '' },
            { commentInput: 'Confirmation de nouveau mot de passe', value: '' },
        ],
    },
    { title: 'Mon mobile', inputTexts: [{ commentInput: 'Mon mobile', value: '+590 6 90 874 258' }] },

    { title: 'Ma localisation', inputTexts: [{ commentInput: 'Mon dresse', value: 'ABYMES 97139\nGuadeloupe' }] },

    {
        title: 'Mon nom',
        inputTexts: [
            { commentInput: 'Prénom', value: 'Mathieu' },
            { commentInput: 'Nom de famille', value: 'Torin' },
        ],
    },
    {
        title: 'Ma disponibilité',
        comment: 'Soit concis, limité à 45 caractères',
        inputTexts: [{ commentInput: '', value: 'Je suis disponible le soir et le week-end|' }],
    },
    {
        title: 'Ma présentation',
        comment: 'Les 150 premiers caractères dans les lignes plus visibles.',
        inputTexts: [
            {
                commentInput: '',
                value:
                    'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
            },
        ],
    },
    {
        title: 'Mes atouts',
    },
];
const options = [
    { id: 0, title: 'Bricolage', checked: false },
    { id: 1, title: 'Jardinage', checked: false },
    { id: 2, title: 'Mécanique', checked: false },
    { id: 3, title: 'Ménages', checked: false },
    { id: 4, title: 'Travaux maison', checked: false },
    { id: 5, title: 'Agriculture', checked: false },
    { id: 6, title: 'Élevage', checked: false },
];

const updatedMyProfile = new User(
    'Mathieu Torin',
    require('../../../assets/images/tab_profile_off.png'),
    null,
    null,
    'mathieu@labul.com',
    'Je suis disponible le soir et le week-end',
    'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
    ['Bricoleur', 'Jardinier'],
    4,
    7,
    17,
    24,
    6,
    2,
    feedbackIcons,
    '+590 6 90 874 258',
    'ABYMES 97139 Guadeloupe'
);

export default (props) => {
    // console.log(insertInfo.inputTexts[0].toString())
    const insertInfo = insertInformations[props.itemKey - 1];
    const [value, setvalue] = useState(props.value.address)
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false)
    const initialValues = {
        address: value,

    };
    const validationSchema = Yup.object({
        address: Yup.string()
            .required('L\'adresse est requise'),

    });
    const onSubmit = async values => {

        props.setcurrentData({ ...props.value, address: values.address })
        props.onPress()

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
                 <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          
       
          flex: 1,
          justifyContent: 'flex-start',
  
        }}

      >         
        <TitleText text={"Modifier ma \nlocalisation"} textAlign={"left"} style={{marginTop:55*hm,marginBottom:5*hm}}/>

            <ProfileCommonTextInput
                style={styles.input}
                text={props.heading}
                value={formik.values.address}
                onFocus={true}
                key={0}
                keyboardType={'default'}
                onChangeText={formik.handleChange('address')}
            />
            {formik.errors.address && formik.touched.address && <Text style={styles.descerrorText}>{formik.errors.address}</Text>}
            </KeyboardAvoidingView>


         
<OkModalchange conceptColor={"#40CDDE"}txt={"Enregistrer"} closeModal={props.onPress} 
okoModal={formik.handleSubmit}
style={{paddingBottom:15*hm,flexDirection:'row', justifyContent:'space-between',alignContent:'center',alignItems:'center'}}/>

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

