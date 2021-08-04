import React, { useState } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, hexToRGB } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBoxAlert';
import CommentText from '../../text/CommentText';
import SearchCommonListItem from '../../adapter/SearchCommonListItem';
import MabulCommonHeader from '../../Mabul/MabulCommonHeader';
import MabulNextButton from '../../Components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
import { LocationRed } from '../../assets/svg/icons';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { update_into_demand } from '../../redux/actions/demand'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Reinput from "reinput"
import GooglePlacesInput from '../../Components/GooglePlacesInput'
import { TextInput } from 'react-native';
import CommonBigButton from '../../Components/button/CommonBigButton';
import { add_into_alert, update_into_alert } from '../../redux/actions/alert';

const AlertTypeScreen = (props) => {
  const conceptColor = '#F9547B';
  const alertData = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch()
  const initialValues = {
    alertDescription: '',
  };
  const validationSchema = Yup.object({
    alertDescription: Yup.string()
      .required('Obligatoire')
      .max(48),

  });
  const onSubmit = (values) => {
    dispatch(update_into_alert({ alertType: values }))
    Actions.alertAddNote({ item: props.item, process: 60 })
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  // console.log(props.item)

  return (

    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'J’alerte'} style={styles.title} />
        <View style={{
          flexDirection: 'row', marginTop: 50 * hm, marginBottom: 10 * hm, paddingLeft: 30 * em
        }}>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 12 * em, color: '#6A8596' }}>Quel type d’alerte </Text>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 12 * em, color: '#FC3867' }}>*</Text>
        </View>
        <TextInput
          autoFocus={true}
          value={formik.values.alertDescription}
          onBlur={formik.handleBlur('alertDescription')}
          onChangeText={formik.handleChange('alertDescription')}
          selectionColor="#40CDDE"
          style={styles.textInput}
        />
        <Text style={{ fontFamily: 'Lato-Italic', fontSize: 11 * em, color: '#6A8596', marginTop: 20 * hm, paddingLeft: 30 * em }}>(48 caractères maximum)</Text>
        {formik.errors.alertDescription && formik.touched.alertDescription && <Text style={styles.descerrorText}>{formik.errors.alertDescription}</Text>}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: 'center' }}
      >
        <View style={{ width: '100%', alignItems: 'center' }}>
          <CommonBigButton
            text={'Contiuer'}
            onPress={formik.handleSubmit}
            style={styles.btnNext}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = {
  btnNext: {
    backgroundColor: '#FEC3D1',
    overflow: 'hidden',
    borderRadius: 18 * em,
    height: 59 * hm,
    width: 315 * em,
    bottom: 30
  },
  textInput: {
    fontFamily: 'Lato-Bold',
    fontSize: 21 * em,
    paddingLeft: 30 * em,
    color: '#1E2D60',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  descerrorText: {
    fontSize: 12 * em,
    bottom: 30 * hm,
    paddingLeft: 28 * hm,
    // marginBottom: 4 * hm,
    color: "red",
  },
  header: {
    height: '12.45%',

  },
  body: {
    flex: 1,
  },
  commonHeader: { marginTop: 27 * hm },
  title: {
    paddingLeft: 30 * em,
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  searchBox: { marginTop: 16 * hm, height: 53 * em },
  location: { alignSelf: 'center', marginTop: 15 * hm, alignItems: 'center', flexDirection: 'row' },
  listItem: { height: 38 * hm, marginTop: 35 * hm },
  btn: {
    position: 'absolute',
    width: 163 * em,
    alignSelf: 'flex-end',
    bottom: 30 * hm,
    right: 30 * em,
    backgroundColor: '#38C2FF',
  },
};

export default AlertTypeScreen;
