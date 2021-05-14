import React , { useState } from 'react';
import { View, Image ,Switch} from 'react-native';
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

const MabulCommonDateSettingScreen = ({ mabulService, process }) => {
  const conceptColor = mabulColors[mabulService];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDate, setDate] = useState(new Date());
  const [isSwitch, setSwitch] = useState(false);
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
    trackColor={{ true: conceptColor }}
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
    // console.warn("A date has been picked: ", isDate);
    hideDatePicker();
  };

  // Moment.locale('fr');
  
  // console.warn(Moment(isDate).format('DD MMMM YYYY-HH:MM'));

  return (

    <View style={styles.container}>
       <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Quand ?'} style={styles.title} />
          <CommentText text="Choisis une date si nécessaire" style={styles.comment} />
          <CommonListItem
            icon={iconDate}
            style={styles.listItem}
            title="Date et heure de début"
            subTitle={Moment(isDate).format('DD MMMM YYYY-HH:MM')}
            subTitleStyle={styles.listComment}
            titleStyle={styles.listCaption}
            onPress={showDatePicker}
          />
          
          <View style={styles.line} />
          <CommentText style={styles.addDateText} text="+ Date et heure de fin" color={conceptColor} />
          <CommonListItem title="Pas de date" rightView={switchView} />
          <TitleText text={'Lieu'} style={styles.title} />
          <CommentText text="Choisis un adresse si besoin" style={styles.comment} />
          
          
          
          {/* <CommonListItem
            icon={iconLocation}
            style={styles.listItem}
            title="Rue, adresse, ville"
            titleStyle={[styles.listCaption, { fontSize: 16 * em, lineHeight: 18 * em, color: '#6A8596' }]}
          />


          
          <View style={[styles.line, { marginTop: 13 * em }]} />
          
          <CommonListItem
            style={styles.listAddLocation}
            titleStyle={[styles.listaddLocationTitle, { color: conceptColor }]}
            icon={iconAddress}
            title="Utiliser ma position"
          /> */}

<Reinput 
label='Rue, adresse, ville'
icon={iconLocation}
underlineColor="#BFCDDB"
 activeColor={conceptColor}
labelActiveColor="#6A8596"
labelColor="#6A8596"
paddingBottom={25*em}
 
 />
          <CommonListItem
            style={{marginLeft: 37 * em,bottom:20*em}}
            titleStyle={[styles.listaddLocationTitle, { color: conceptColor }]}
            icon={iconAddress}
            title="Utiliser ma position"
          />
        </View>
        <MabulNextButton
          color={hexToRGB(conceptColor, 0.5)}
          style={styles.nextBtn}
          onPress={() => {
            mabulService === 'give'
              ? Actions.mabulCommonShare({ mabulService: mabulService, process: 97 })
              : mabulService === 'sell'
              ? Actions.mabulCommonShare({ mabulService: mabulService, process: 93 })
              : mabulService === 'organize'
              ? Actions.mabulOrganizeParticipation({ mabulService: mabulService, process: 80 })
              : Actions.mabulCommonParticipate({ mabulService: mabulService, process: 80 });
          }}
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
    height: '10.3%',
    marginTop: 16 * hm,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em,marginBottom:33*em },

  iconDate: { width: 19 * em, height: 20 * em, marginRight: 15 * em, marginTop: 9 * em },
  iconLocation: { width: 21 * em, height: 30 * em, marginRight: 15 * em },
  iconAddress: { width: 16 * em, height: 19 * em, marginRight: 10 * em },
  listaddLocationTitle: { fontSize: 14 * em, lineHeight: 16 * em },
  listCaption: { color: '#A0AEB8', fontSize: 12 * em, lineHeight: 14 * em },
  listComment: { fontSize: 16 * em, lineHeight: 18 * em, color: '#1E2D60' },
  listAddLocation: { marginLeft: 37 * em, marginTop: 15 * em },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 36 * em, marginTop: 25 * em },
  addDateText: {
    marginTop: 10 * em,
    textAlign: 'left',
    marginLeft: 36 * em,
  },
  nextBtn: {
    alignSelf: 'flex-end',
    // marginRight: 30 * em,
    marginBottom: 30 * em,
  },
};

export default MabulCommonDateSettingScreen;
