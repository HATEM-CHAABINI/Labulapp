import React, { useState } from 'react';
import { View, Image, Switch, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm, hexToRGB, mabulColors } from '../constants/consts';
import CommentText from '../text/CommentText';
import MabulCommonHeader from './MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../Components/button/MabulNextButton';
import CommonListItem from '../adapter/CommonListItem';
// import Switch from 'view/components/other/Switch';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import Reinput from "reinput"
import { Header } from 'react-native/Libraries/NewAppScreen';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import GooglePlacesInput from '../Components/GooglePlacesInput'
import { google_api } from '../constants/consts'
import OkModal from '../Components/button/OkModal';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../redux/actions/demand'
/////////                 HERE GOES API KEY
Geocoder.init(google_api);
//////////
const MabulAddLieu = (props) => {
  const dispatch = useDispatch()
  const { demandData } = useSelector((state) => state.demandReducer);
  const [data, setData] = useState()
  const conceptColor = props.conceptColor;

  const initialValues = {
    address: '',
    coordinate: {}
  };
  const validationSchema = Yup.object({

    address: Yup.string()
      .required('Obligatoire')
    ,
  });

  const onSubmit = values => {
    dispatch(update_into_demand(data))
    props.setadresse(formik.values.address, formik.values.coordinate);
    props.requiredLocation(),
      props.closeModal()
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


  return (
    <View style={{
      flex: 1, backgroundColor: '#ffffff', zIndex: 999,
    }}>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >

        <View style={styles.body}>
          <View style={{ justifyContent: 'flex-end', paddingBottom: 5 * hm }}>

            <GooglePlacesInput
              placeholder={"Rechercher une addresse"}
              containerStyle={{
                backgroundColor: 'white',
                width: "100%",
              }}
              TextBtn={"Utiliser ma position"}
              borderBottomColor={conceptColor}
              style={{ width: '100%', }}
              show={false}
              textInputStyle={{
                // height: 40,
                color: '#1E2D60',
                fontSize: 12 * em,
                fontFamily: 'Lato-Bold',
              }}
              myLocationContainer={{
                //  paddingTop: s50 * hm 
                // top:550
              }}
              // autoFillOnNotFound={true}
              value={formik.values.address}
              myLocationColor={conceptColor}
              myLocationIconColor={conceptColor}
              formik={formik}

              changedValue={(val) => {
                setData(val)
                // console.log(val.adresse);
                // formik.setFieldValue('address', val.address);
                // formik.setFieldValue('coordinate', val.coordinate);
              }}
            />
            {formik.errors.address && formik.touched.address && <Text style={{ color: 'red', top: '1%', bottom: "5%", }}>{formik.errors.address}</Text>}

          </View>

        </View>
      </KeyboardAvoidingView>
      <OkModal conceptColor={conceptColor}
        showDescription={() => { }}
        hideDescription={() => { }}
        okoModal={() => onSubmit()}
        closeModal={() => props.closeModal()}
      />

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
    // marginTop: 15 * hm,

    //  height: '10.3%',
    //  marginTop: 16 * hm,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'left',
    marginTop: 10 * hm,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * hm, marginBottom: 23 * hm },

  iconDate: { width: 19 * em, height: 20 * em, marginRight: 15 * em, marginTop: 9 * em },
  iconLocation: { width: 21 * em, height: 30 * em, marginRight: 15 * em },
  iconAddress: { width: 16 * em, height: 19 * em, marginRight: 10 * em },
  listaddLocationTitle: { fontSize: 14 * em, lineHeight: 16 * em },
  listCaption: { color: '#A0AEB8', fontSize: 12 * em, lineHeight: 14 * em },
  listComment: { fontSize: 16 * em, lineHeight: 18 * em, color: '#1E2D60' },
  listAddLocation: { marginLeft: 37 * em, marginTop: 15 * em },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 36 * em, marginTop: 25 * em },
  addDateText: {
    marginTop: 10 * hm,
    textAlign: 'left',
    marginLeft: 36 * em,
    marginBottom: 20 * hm
  },
  nextBtn: {
    alignSelf: 'flex-end',
    // marginRight: 30 * em,
    marginBottom: 30 * hm,
  },
};
export default MabulAddLieu;








