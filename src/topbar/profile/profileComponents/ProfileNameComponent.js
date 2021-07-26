import React from 'react';
import { em, WIDTH, hm } from '../../../constants/consts';
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../../../textInput/ProfileCommonTextInput';
import CommonText from '../../../text/CommonText';
import SearchBox from '../../../Components/other/SearchBox';
import CommonCheckBox from '../../../Components/checkbox/CommonCheckBox';
import { StatusBar, View, Text, Platform ,KeyboardAvoidingView} from 'react-native';
import User from '../../../model/user/User';
import { feedbackIcons } from '../../../constants/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../redux/actions/profile';
import TitleText from '../../../text/TitleText';
import OkModal from '../../../Components/button/OkModal';
import { TouchableOpacity } from 'react-native';
import Cta from '../../../assets/svg/icons/navigation/Cta';
import OkModalchange from '../../../Components/button/OkModalchange';
const ProfileNameComponent = (props) => {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: props.firstName,
    lastName: props.lastName
  };
  const validationSchema = Yup.object({


  });
  const onSubmit = async values => {

    props.setprofileDataCurrent({ ...props.profileDataCurrent, firstName: values.firstName, lastName: values.lastName })
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
       
      <TitleText text={"Mon nom"} textAlign={"left"} style={{marginTop:55*hm,marginBottom:10*hm}}/>
      <ProfileCommonTextInput
        style={styles.input}
        text={'Prénom'}
        value={formik.values.firstName}
        onFocus={true}
        kyeboardType={'default'}
        onChangeText={formik.handleChange('firstName')}
      />
      <ProfileCommonTextInput
        style={styles.input}
        text={'Nom de famille'}
        value={formik.values.lastName}
        onChangeText={formik.handleChange('lastName')}
        onFocus={true}
        kyeboardType={'default'}
      />
     {/* <ProfileModalHeader
        title={props.title}
        style={styles.header}
        onCancelPress={() => { formik.handleReset(), props.onPress() }}
        onFinishPress={
          // props.onPress();
          formik.handleSubmit
        }
      /> */}

</KeyboardAvoidingView>
{/* <View> */}
<OkModalchange conceptColor={"#40CDDE"} closeModal={formik.handleSubmit} style={{alignItems:'center',marginBottom:15*hm}}/>
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
};
export default ProfileNameComponent;
