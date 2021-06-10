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

import GooglePlacesInput from '../../Components/GooglePlacesInput'

const AlertAddressScreen = (props) => {
  const conceptColor = '#F9547B';
  const dispatch = useDispatch()
  // const { demandData } = useSelector((state) => state.demandReducer);
  // console.log("demand ", demandData);
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
    const value = { address: values }
    //  console.log('hello address',value)
    dispatch(update_into_demand(value))

    Actions.alertAddNote({ process: 60 })

  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const [searchedUsers, getSearchResult] = useState('');
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} subText={item.address} icon={item.ic_location} style={styles.listItem} />
  );
  return (
    <View style={styles.container}>

      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />


      <View style={styles.body}>

        <TitleText text={'Où ?'} style={styles.title} />

        <GooglePlacesInput
          placeholder={"Rechercher une addresse"}
          containerStyle={{
            backgroundColor: 'white',
            width: "100%",

          }}
          textInputStyle={{
            // height: 40,
            color: '#5d5d5d',
            fontSize: 18,

          }}
          value={formik.values.address}
          formik={formik}
          changedValue={(val) => {
            // console.log(val);
            formik.setFieldValue('address', val.address);
            formik.setFieldValue('coordinate', val.coordinate)
          }}
        />


        <MabulNextButton
          color={

            formik.values.address.length > 0
              ? hexToRGB(conceptColor) : hexToRGB(conceptColor, 0.5)
          }
          disabled={
            formik.values.address.length > 0
              ? false : true
          }
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="Suivant"
          onPress={
            formik.handleSubmit
            // Actions.alertAddNote({ process: 60 })
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
  },
  header: {
    height: '12.45%',

  }, body: { flex: 1, width: '100%', paddingHorizontal: 30 * em, justifyContent: 'flex-start', alignItems: 'flex-start', },
  commonHeader: { marginTop: 27 * hm },
  title: { textAlign: 'left', marginTop: 35 * hm, lineHeight: 38 * em },
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

export default AlertAddressScreen;
