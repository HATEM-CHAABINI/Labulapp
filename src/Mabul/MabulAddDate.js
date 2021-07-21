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
import * as Yup from 'yup'
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import GooglePlacesInput from '../Components/GooglePlacesInput'
import { google_api } from '../constants/consts'
import OkModal from '../Components/button/OkModal';
/////////                 HERE GOES API KEY
Geocoder.init(google_api);
//////////
const MabulAddDate = (props) => {
  const dispatch = useDispatch()
  // const { demandData } = useSelector((state) => state.demandReducer);
  const conceptColor = props.conceptColor;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setisEndDatePickerVisible] = useState(false);
  const [isDate, setDate] = useState(props.Datea);
  const [isEndDate, setisEndDate] = useState('');
  const [isSwitch, setSwitch] = useState(false);
  const [showEndDataView, setshowEndDataView] = useState(false)
  const [loading, setloading] = useState(false)
  const initialValues = {
    address: '',
    coordinate: {}
  };
  const validationSchema = Yup.object({

    address: Yup.string()
      .required('Obligatoire')
    ,
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
    // let datee = toTimestamp(date)
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
  const okoModal=()=>{
    props.setdatea(isDate);
    props.setdatee(isEndDate)
    props.closeModal()
  }
  function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }



  return (

    <View style={{
      flex: 1, backgroundColor: '#ffffff', zIndex: 999,
    }}>
      {/* <MabulCommonHeader style={[styles.header, { zIndex: 999, backgroundColor: '#ffffff', }]} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} /> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}

      >
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          minimumDate={new Date()}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode="datetime"
          minimumDate={isDate}
          onConfirm={handleEndConfirm}
          onCancel={hideendDatePicker}
        />
        <View style={styles.body}>
          <View style={{ justifyContent: 'flex-end', paddingBottom: 5 * hm }}>
            <View style={{}}>
              <CommonListItem
                title="Date et heure de début"
                subTitle={Moment(isDate).format('DD MMMM YYYY-HH:MM')}
                subTitleStyle={styles.listComment}
                titleStyle={styles.listCaption}
                onPress={showDatePicker}
              />
              <View style={styles.line} />
            </View>
            {showEndDataView ? <View style={{ paddingTop: 10 * hm }}>
              <CommonListItem
                title="Date et heure de fin"
                subTitle={isEndDate === '' ? ' ' : Moment(isEndDate).format('DD MMMM YYYY-HH:MM')}
                subTitleStyle={styles.listComment}
                titleStyle={styles.listCaption} 
                onPress={showEndDatePicker}
              />
              <View style={styles.line} />
            </View> : null}



          <CommentText style={styles.addDateText} onPress={() => setshowEndDataView(true)} text="+ Date et heure de fin" color={conceptColor} />
            </View>
        
        </View>
      </KeyboardAvoidingView>
      <OkModal conceptColor={conceptColor} closeModal={ () =>  props.closeModal()} okoModal={()=>okoModal()}/>

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
  listCaption: { color: '#A0AEB8', fontSize: 12 * em, lineHeight: 24 * em },
  listComment: { fontSize: 16 * em, lineHeight: 18 * em, color: '#1E2D60' },
  listAddLocation: { marginLeft: 37 * em, marginTop: 15 * em },
  line: { backgroundColor: '#BFCDDB', height: 1 * em,  marginTop: 25 * em },
  addDateText: {
    marginTop: 10 * hm,
    textAlign: 'left',
    // marginLeft: 36 * em,
    marginBottom: 20 * hm
  },
  nextBtn: {
    alignSelf: 'flex-end',
    // marginRight: 30 * em,
    marginBottom: 30 * hm,
  },
};

export default MabulAddDate;
