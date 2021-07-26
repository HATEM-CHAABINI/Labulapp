import React, { useState } from 'react';
import { TouchableOpacity,KeyboardAvoidingView } from 'react-native'
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
import { updateUserProfile } from '../../../services/firebase'
import auth from '@react-native-firebase/auth'
import { addProfile } from '../../../redux/actions/profile';
import { useDispatch } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import TitleText from '../../../text/TitleText';
import OkModalchange from '../../../Components/button/OkModalchange';
export default (props) => {
    // console.log(insertInfo.inputTexts[0].toString())
    // const insertInfo = insertInformations[props.itemKey - 1];
    const [value, setvalue] = useState(props.value)
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false)
    const initialValues = {
        old_password: '',
        new_passsword: '',
        confirm_password: ''
    };
    const validationSchema = Yup.object({
        old_password: Yup.string().required('Un ancien mot de passe est requis'),
        new_passsword: Yup.string().required('Mot de passe requis').min(
            8,
            'Le mot de passe est trop court minimum 8 caractères.',
        ),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('new_passsword'), null], 'le nouveau mot de passe et le mot de passe de confirmation doivent correspondre')
    });
    const onSubmit = async values => {
        setloading(true)
        var user = auth().currentUser;
        var credential = auth.EmailAuthProvider.credential(
            auth().currentUser.email,
            values.old_password
        );
        user.reauthenticateWithCredential(credential).then(function (res) {
            auth().currentUser.updatePassword(values.new_passsword).then(res => {

                setloading(false)
                Alert.alert(
                    "Succès",
                    "Le mot de passe a bien été modifié, souhaitez-vous vous déconnecter?",
                    [
                        {
                            text: "Non",
                            onPress: () => props.onPress(),
                            style: "cancel"
                        },
                        {
                            text: "Oui", onPress: () => {
                                auth()
                                    .signOut()
                                    .then(() => { dispatch(addProfile('')), console.log('User signed out!') }).catch(e => { console.log(e), dispatch(addProfile('')) });
                            }
                        }
                    ]
                );

            });
        }).catch(function (error) {

            if (error.code === 'auth/wrong-password') {
                alert("Old password is incorrect!!")
                setloading(false)
            }
            else {
                alert("Something went wrong")
                setloading(false)
            }
            console.log(error)
        });

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
           
           <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          
       
          flex: 1,
          justifyContent: 'flex-start',
  
        }}

      >
           
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

<TitleText text={"Modifier mot de passe"} textAlign={"left"} style={{marginTop:55*hm,marginBottom:5*hm}}/>

            <ProfileCommonTextInput
                        placestyle={{fontSize:15*em}}

                style={styles.input}
                text={"Mot de passe actuel"}
                value={formik.values.old_password}
                onFocus={true}
                key={0}
                kyeboardType={'default'}
                onChangeText={formik.handleChange('old_password')}
            />
            {formik.errors.old_password && formik.touched.old_password && <Text style={styles.descerrorText}>{formik.errors.old_password}</Text>}
            <ProfileCommonTextInput
                        placestyle={{fontSize:15*em}}

                style={styles.input}
                text={"Nouveau mot de passe"}
                value={formik.values.new_passsword}
                onFocus={true}
                key={1}
                kyeboardType={'default'}
                onChangeText={formik.handleChange('new_passsword')}
            />
            {formik.errors.new_passsword && formik.touched.new_passsword && <Text style={styles.descerrorText}>{formik.errors.new_passsword}</Text>}
            <ProfileCommonTextInput
                        placestyle={{fontSize:15*em}}
                        // styletxt={{fontFamily:'Lato-Regular',fontSize:10*em,color:'#6A8596'}}
                style={styles.input}
                text={"Confirmation de nouveau mot de passe"}
                value={formik.values.confirm_password}
                onFocus={true}
                key={2}
                kyeboardType={'default'}
                onChangeText={formik.handleChange('confirm_password')}
            />
            {formik.errors.confirm_password && formik.touched.confirm_password && <Text style={styles.descerrorText}>{formik.errors.confirm_password}</Text>}
            {/* <TouchableOpacity onPress={() => { props.onPress(), Actions.MotdePasseOublie() }}>
                <CommonText
                    color={'#40CDDE'}
                    text={'Mot de passe oublié?'}
                    style={styles.forgotPsswd}

                />
            </TouchableOpacity> */}
            </KeyboardAvoidingView>

<OkModalchange conceptColor={"#40CDDE"} 

// onFinishPress={formik.handleSubmit}
closeModal={props.onPress} 

style={{
    paddingBottom:15*hm,alignContent:'center',alignItems:'center'
    }}/>


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
    forgotPsswd: { lineHeight: 18 * em, marginTop: 78 * hm, textAlign: 'center' },
    header: { marginBottom: 10 * hm, marginTop: 27 * hm },
    input: { marginTop: 25 * hm },
    forgotPsswd: { lineHeight: 18 * em, marginTop: 78 * hm, textAlign: 'center' },
    comment: { fontSize: 12 * em, lineHeight: 20 * em, marginTop: 15 * hm },
    listItem: { paddingHorizontal: 10 * em, marginBottom: 35 * hm },
};

