import React from 'react';
import { View, Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import MabulCommonHeader from '../../Mabul/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../../Components/button/MabulNextButton';
import CommonListItem from '../../adapter/CommonListItem';
import { NoteInlineRed } from '../../assets/svg/icons';
import Reinput from "reinput"
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { update_into_demand } from '../../redux/actions/demand'
const AlertAddNoteScreen = (props) => {
  const conceptColor = '#F9547B';
  
  const dispatch = useDispatch()
  var iconEdit = (
    <View style={{ marginRight: 19 * em }}>
      <NoteInlineRed width={20 * em} height={22 * em} />
    </View>
  );
  const initialValues = {
    description: '',

  };
  const validationSchema = Yup.object({

    description: Yup.string()
      .required('Obligatoire')
    ,
  });
  const onSubmit = values => {
   
    const  value= { description:values}
    console.log(value)
    dispatch(update_into_demand(value))

    Actions.alertShare({ process: 94 })
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={true}
        progressBarColor={conceptColor}
      />
      <View style={styles.body}>
        <View>
          <TitleText text="Ajoute une note" style={styles.title} />
          <CommentText
            text="Si besoin, ajoute des détails de cette alerte"
            style={styles.comment}
            titleStyle={styles.listCaption}
          />

          <Reinput style={{ paddingTop: 34 * hm }}
            label={`Détail ta demande ici
            (Soit concis pour être plus efficace)`}
            icon={iconEdit}
            underlineColor="#6A8596"
            activeColor="#F9547B"
            labelActiveColor="#6A8596"
            labelColor="#6A8596"
            labelActiveTop={-38}
            height={300}
            paddingBottom={30 * em}
            value={formik.values.description}

            onBlur={formik.handleBlur('description')}
            onChangeText={formik.handleChange('description')} />
          {formik.errors.description && formik.touched.description && <Text style={styles.descerrorText}>{formik.errors.description}</Text>}

          {/* 
          <CommonListItem
            icon={iconEdit}
            style={[styles.listItem, { height: 62 * em }]}
            title="Détaille l'alerte ici"
            subTitle="(Soit concis pour être plus efficace)"
            titleStyle={styles.listCaption}
            subTitleStyle={styles.listComment}
          /> */}


        </View>
        <MabulNextButton
          color={conceptColor}
          style={styles.nextBtn}
          onPress={formik.handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '12.45%',

  },
  descerrorText: {
    fontSize: 12 * em,
    bottom: 30 * hm,
    left: 40 * hm,
    color: "red",
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 300 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
    fontSize: 28 * em,
    fontWeight: 'bold',
  },
  comment: {
    fontFamily: 'Lato-Regular',
    textAlign: 'left',
    lineHeight: 20 * em,
    height: 17 * hm,
    textAlignVertical: 'center',
    marginTop: 10 * em
  },
  listItem: {
    height: 43 * em,
    marginTop: 25 * hm,
  },
  icon: { width: 19 * em, height: 22 * em, marginRight: 20 * em },
  listCaption: { fontFamily: 'Lato-Medium', fontSize: 16 * em, color: '#6A8596' },
  listComment: { fontFamily: 'Lato-Medium', fontSize: 13 * em, lineHeight: 17 * em, color: '#6A8596' },
  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 30 * hm,
  },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 39 * em },
};

export default AlertAddNoteScreen;
