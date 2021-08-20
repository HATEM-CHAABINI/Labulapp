import React, { useState, useEffect } from 'react';
import { em, WIDTH, hm } from '../../../../constants/consts';
import ProfileModalHeader from '../../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../../../../Components/textInput/ProfileCommonTextInput';

import CommonText from '../../../../text/CommonText';
import SearchBox from '../../../../Components/other/SearchBox';
import CommonCheckBox from '../../../../Components/checkbox/CommonCheckBox';
import { StatusBar, View, Text, Platform ,KeyboardAvoidingView,Switch} from 'react-native';
import User from '../../../../model/user/User';
import { feedbackIcons } from '../../../../constants/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../../redux/actions/profile';
import OkModalchange from '../../../../Components/button/OkModalchange';
import TitleText from '../../../../text/TitleText';
import CommonListItem from '../../../../adapter/CommonListItem';
const ModalEdit = (props) => {
  const [value, setvalue] = useState(props.value)
  const toggleSwitch = () => setSwitch(previousState => !previousState);
  const [isSwitch, setSwitch] = useState(false);

  var switchView = (
    <Switch
      trackColor={{ true: '#9FE7F0', false: '#A0AEB8' }}
      onValueChange={toggleSwitch}
      value={isSwitch}
    />
  );
  const initialValues = {
    presentation: value,

  };
  const validationSchema = Yup.object({
    presentation: Yup.string()

  });
  const onSubmit = async values => {

    props.setprofileDataCurrent({ ...props.profileDataCurrent, presentation: values.presentation })
    props.onPress();
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
      style={{
        backgroundColor: 'white',
        marginTop: 20.5 * hm,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 0,
        borderTopRightRadius: 20 * em,
        borderTopLeftRadius: 20 * em,
        flex: 1,
        justifyContent: 'flex-start',


      }}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
          <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          
          paddingHorizontal: 30 * em,
       
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
      {/* <ProfileModalHeader
        title={props.title}
        style={styles.header}
        onCancelPress={() => { props.onPress() }}
        onFinishPress={
          // props.onPress();
          formik.handleSubmit
        }
      /> */}
            <TitleText text={props.title} textAlign={"left"} style={{marginTop:55*hm,marginBottom:10*hm}}/>

      <ProfileCommonTextInput
        style={styles.input}
        text={props.text}
        value={formik.values.presentation}
        onFocus={true}
        max={100}
        keyboardType={props.keyboardType}
        onChangeText={formik.handleChange('presentation')}
      />
  {props.hor==true?  <View style={{flexDirection:'row'}}>
      <Text style={{fontFamily:'Lato-Italic',fontSize:11*em,color:'#6A8596',marginTop:10*hm}}>
   ( </Text>
  <Text style={{fontWeight:'bold',fontFamily:'Lato-Italic',fontSize:11*em,color:'#1E2D60',marginTop:10*hm}}>
   {formik.values.presentation.length}</Text>
   <Text style={{fontFamily:'Lato-Italic',fontSize:11*em,color:'#6A8596',marginTop:10*hm}}>
    /80 caractères maximum)</Text>
    </View>:<></>}

    {props.contact==true? 
    <CommonListItem title="Ne pas afficher le télephone" rightView={switchView} style={styles.addDateText} />
                :<></>}
</KeyboardAvoidingView>
{/* <View> */}
<OkModalchange txt={"Enregistrer"} conceptColor={"#40CDDE"} okoModal={formik.handleSubmit} closeModal={props.onPress} style={{paddingBottom:15*hm,flexDirection:'row', justifyContent:'space-between',marginRight:30*em,marginLeft:30*em,alignContent:'center',alignItems:'center'}}/>
{/* </View> */}
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
  header: { marginBottom: 10 * hm, marginTop: 27 * hm },
  input: { marginTop: 25 * hm },
  forgotPsswd: { lineHeight: 18 * em, marginTop: 78 * hm, textAlign: 'center' },
  comment: { fontSize: 12 * em, lineHeight: 20 * em, marginTop: 15 * hm },
  listItem: { paddingHorizontal: 10 * em, marginBottom: 35 * hm },
  addDateText: {
    marginTop: 30 * hm,
    textAlign: 'left',
    // marginLeft: 36 * em,
    marginBottom: 20 * hm
  },
};
export default ModalEdit;
