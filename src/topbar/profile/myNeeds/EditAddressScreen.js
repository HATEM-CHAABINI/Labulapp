import React, { useState } from 'react';
import { em, WIDTH, hm } from '../../../constants/consts';
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../../../Components/textInput/ProfileCommonTextInput';
import { StatusBar, View, Text, Platform, Alert, KeyboardAvoidingView } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import OkModalchange from '../../../Components/button/OkModalchange';
import TitleText from '../../../text/TitleText';
import MabulAddLieuDemands from '../../../Mabul/MabulAddLieuDemands';

export default (props) => {
    const conceptColor = '#F9547B';

    const [value, setvalue] = useState(props.value)
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false)
    const [erroraddress, setErrorAddress] = useState('')
    const [locations, setLocations] = useState(false);

    const initialValues = {
        address: value,
    };
    const validationSchema = Yup.object({
        address: Yup.string().required('required')

    });
    const onSubmit = async (values) => {
        props.onChange(values.address)
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    const location = () => {
        setErrorAddress('')
        setLocations(true)
      }
    const setadresse = (add, coor) => {
        formik.setFieldValue('address', add)
        formik.setFieldValue('coordinate', coor)
    
      }
    return (
        <Modal
            isVisible={props.visible}
            backdropOpacity={0.8}
            style={styles.container}
            backdropColor={'#1E2D60'}
            swipeDirection={'up'}
            onBackButtonPress={() => props.onPress()}>
            
           
                <TitleText text={"Lieu"} textAlign={"left"} style={{ marginLeft:30*em, marginTop: 55 * hm, marginBottom: 5 * hm }} />
                <View style={{ flex: 1,
    backgroundColor: '#ffffff',}}>

                <MabulAddLieuDemands
              hideDescription={() => { }}
              requiredLocation={() => location()}
              conceptColor={conceptColor}
              setadresse={
                  setadresse
                }
              closeModal={() => props.onPress()
            }
            />
                    
                      </View>

           
        </Modal>
    );
};
const styles = {
    container: {
        backgroundColor: 'white',
        marginTop: 40.5 * hm,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 0,
       
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

