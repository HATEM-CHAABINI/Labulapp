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
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../redux/actions/demand'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';

/////////                 HERE GOES API KEY
Geocoder.init("########################");
//////////
const MabulCommonDateSettingScreen = ({ mabulService, process }) => {
  const dispatch = useDispatch()
  const { demandData } = useSelector((state) => state.demandReducer);
  const conceptColor = mabulColors[mabulService];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setisEndDatePickerVisible] = useState(false);
  const [isDate, setDate] = useState(new Date());
  const [isEndDate, setisEndDate] = useState('');
  const [isSwitch, setSwitch] = useState(false);
  const [showEndDataView, setshowEndDataView] = useState(false)
  const [loading, setloading] = useState(false)
  const initialValues = {
    address: ''
  };
  const validationSchema = Yup.object({

    address: Yup.string()
      .required('Obligatoire')
    ,
  });
  const getlocation = () => {
    setloading(() => true)
    Geolocation.getCurrentPosition(
      (position) => {


        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(json => {
            var addressComponent = json.results[0].formatted_address;

            formik.setFieldValue('address', addressComponent)
            setloading(() => false)
          })
          .catch(error => { console.warn(error), setloading(() => false), alert(error.origin.error_message) });
      },
      (error) => {
        setloading(() => false)
        console.log(error.code, error.message);

      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
  const onSubmit = values => {

    let value = {}
    if (isSwitch) {
      value = { demandStartDate: isDate, demandEndData: '', address: values.address }
    } else {
      value = { demandStartDate: isDate, demandEndData: isEndDate, address: values.address }
    }

    dispatch(update_into_demand(value))
    mabulService === 'give'
      ? Actions.mabulCommonShare({ mabulService: mabulService, process: 97 })
      : mabulService === 'sell'
        ? Actions.mabulCommonShare({ mabulService: mabulService, process: 93 })
        : mabulService === 'organize'
          ? Actions.mabulOrganizeParticipation({ mabulService: mabulService, process: 80 })
          : Actions.mabulCommonParticipate({ mabulService: mabulService, process: 80 });

  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const toggleSwitch = () => setSwitch(previousState => !previousState);

  var iconDate = (
    <Image style={[styles.iconDate, { tintColor: conceptColor }]} source={require('../assets/images/ic_date.png')} />
  );
  var iconLocation = (
    <Image
      style={[styles.iconLocation, { tintColor: conceptColor }]}
      source={require('../assets/images/ic_location_green.png')}
    />
  );
  var iconAddress = (
    <Image
      style={[styles.iconAddress, { tintColor: conceptColor }]}
      source={require('../assets/images/ic_location_green.png')}
    />
  );

  var switchView = (
    <Switch
      trackColor={{ true: conceptColor, false: 'grey' }}
      onValueChange={toggleSwitch}
      value={isSwitch}
    />
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    hideDatePicker();
  };
  const hideendDatePicker = () => {
    setisEndDatePickerVisible(false);
  };
  const handleEndConfirm = (date) => {
    setisEndDate(date);
    hideendDatePicker();

  };
  const showEndDatePicker = () => {
    setisEndDatePickerVisible(true);
  };




  return (

    <View style={{
      flex: 1, backgroundColor: '#ffffff', zIndex: 999,
    }}>
      <MabulCommonHeader style={[styles.header, { zIndex: 999, backgroundColor: '#ffffff', }]} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}

      >
        <ScrollView>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="datetime"
            minimumDate={new Date()}
            onConfirm={handleEndConfirm}
            onCancel={hideendDatePicker}
          />
          <View style={styles.body}>
            <View style={{ justifyContent: 'flex-end', }}>
              <TitleText text={'Quand ?'} style={styles.title} />
              <CommentText text="Choisis une date si nécessaire" style={styles.comment} />
              <View style={{ marginVertical: 20 }}>
                <CommonListItem
                  icon={iconDate}
                  title="Date et heure de début"
                  subTitle={Moment(isDate).format('DD MMMM YYYY-HH:MM')}
                  subTitleStyle={styles.listComment}
                  titleStyle={styles.listCaption}
                  onPress={showDatePicker}
                />
                <View style={styles.line} />
              </View>
              {showEndDataView ? <View style={{ marginVertical: 20 }}>
                <CommonListItem
                  icon={iconDate}
                  title="Date et heure de fin"
                  subTitle={isEndDate === '' ? ' ' : Moment(isEndDate).format('DD MMMM YYYY-HH:MM')}
                  subTitleStyle={styles.listComment}
                  titleStyle={styles.listCaption}
                  onPress={showEndDatePicker}
                />
                <View style={styles.line} />
              </View> : null}



              {!showEndDataView ? <CommentText style={styles.addDateText} onPress={() => setshowEndDataView(true)} text="+ Date et heure de fin" color={conceptColor} /> : null}
              <CommonListItem title="Pas de date" rightView={switchView} style={styles.addDateText} />
              <TitleText text={'Lieu'} style={styles.title} />
              <CommentText text="Choisis un adresse si besoin" style={styles.comment} />

              <Reinput
                label='Rue, adresse, ville'
                icon={iconLocation}
                underlineColor="#BFCDDB"
                activeColor={conceptColor}
                labelActiveColor="#6A8596"
                labelColor="#6A8596"
                paddingBottom={25 * em}
                value={formik.values.address}

                onBlur={formik.handleBlur('address')}
                onChangeText={formik.handleChange('address')} />
              {formik.errors.address && formik.touched.address && <Text style={styles.descerrorText}>{formik.errors.address}</Text>}

              {loading ? <ActivityIndicator style={{ marginLeft: 37 * em, bottom: 20 * em }} color={conceptColor} size={'small'} />
                : <CommonListItem
                  style={{ marginLeft: 37 * em, bottom: 20 * em }}
                  titleStyle={[styles.listaddLocationTitle, { color: conceptColor }]}
                  icon={iconAddress}
                  title="Utiliser ma position"
                  onPress={() => { getlocation() }}
                />}
            </View>
            <MabulNextButton
              color={hexToRGB(conceptColor)}
              style={styles.nextBtn}
              onPress={formik.handleSubmit}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

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
  descerrorText: {
    fontSize: 12 * em,
    bottom: 30 * hm,
    left: 40 * hm,
    color: "red",
  },
  title: {
    textAlign: 'left',
    marginTop: 14 * hm,
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
    marginBottom: 36 * em,
  },
};

export default MabulCommonDateSettingScreen;
