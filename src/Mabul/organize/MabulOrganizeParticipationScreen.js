import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, mabulColors, hm, hexToRGB } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../../Components/button/MabulNextButton';
import CommonTextInput from '../../textInput/CommonTextInput';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
import { TextInput } from 'react-native-gesture-handler';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const MabulOrganizeParticipationScreen = (props) => {
  const dispatch = useDispatch()
  const [participants, setParticipants] = useState('')
  const [predictable, setPredictable] = useState('')

  const initialValues = {
    predictable: '',
  };
  const validationSchema = Yup.object({
    predictable: Yup.string()
      .required('Obligatoire')
  });
  const onSubmit = (value) => {
    let values = { number: participants, item: value.predictable }
    dispatch(update_into_demand({ participants: values }))
    Actions.mabulCommonShare({ mabulService: props.mabulService, process: 90 });
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const conceptColor = mabulColors.organize;



  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={true}
        progressBarColor={conceptColor}
      />
      <View style={styles.body}>
        <View style={styles.topBody}>
          <TitleText text={'Participants'} style={styles.title} />
          <CommentText text="Nombre de participants" style={styles.comment} />
          {/* <TextInput 
          style={styles.input} 
          placeholder="0" 
          selectionColor={conceptColor} 
          /> */}
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            autoFocus={true}

            placeholder="0"
            selectionColor={conceptColor}
            value={participants}
            onChangeText={(value) => { setParticipants(value) }}
            onChange={(value) => { setParticipants(value) }}

          />
        </View>
        <View style={[styles.topBody, { flex: 1, marginTop: 10 * hm }]}>
          <TitleText text={'À prévoir'} style={styles.title} />
          <CommentText text="Ce que les participants doivent amener" style={styles.comment} />

          <CommonTextInput
            text={'Écrit ici'}
            isPasswordInput={false}
            style={styles.commonInput}
            value={formik.values.predictable}

            onChange={formik.handleChange('predictable')}
            // onChangeValue={(value) => { console.log(value) }}
            onChangeText={formik.handleChange('predictable')}
            onBlur={formik.handleBlur('predictable')}
          />
          {formik.errors.predictable && formik.touched.predictable && <Text style={styles.descerrorText}>{formik.errors.predictable}</Text>}


        </View>
        <MabulNextButton
          color={hexToRGB(conceptColor)}
          style={styles.nextBtn}
          // disabled={participants.length <= 0 ? true : false}
          onPress={
            // Actions.mabulCommonShare({ mabulService: props.mabulService, process: 90 });
            // onSubmit()
            formik.handleSubmit
          }
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    PaddingTop: 16 * hm,
  },
  header: {
    height: '12.45%',
  },
  descerrorText: {
    color: 'red'
  },
  body: { backgroundColor: '#F0F5F7', flex: 1, justifyContent: 'space-between' },
  topBody: { paddingHorizontal: 30 * em, backgroundColor: '#ffffff' },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
  },
  comment: { width: 315 * em, textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * hm },

  nextBtn: { position: 'absolute', right: 30 * em, bottom: 30 * hm },
  input: { paddingVertical: 0, alignSelf: 'center', fontSize: 49 * em, textAlign: 'center', color: '#A0AEB8' },
  commonInput: { marginTop: 20 * hm, width: '100%', height: 52 * em },
};

export default MabulOrganizeParticipationScreen;
