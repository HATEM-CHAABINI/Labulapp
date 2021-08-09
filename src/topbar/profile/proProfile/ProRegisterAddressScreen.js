import React from 'react';
import { em, hm } from '../../../constants/consts';
import { View , KeyboardAvoidingView,Platform} from 'react-native';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import CommonText from '../../../text/CommonText';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { AddressBlue } from '../../../assets/svg/icons';
import AccountCommonHeaderpro from '../../../Components/header/AccountCommonHeaderpro';
import { Text } from 'react-native';
import Reinput from "reinput";

const ProRegisterAddressScreen = (props) => {
  console.log(props.accountType)

  return (
    <View style={styles.container}>
      <AccountCommonHeaderpro style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <AddressBlue width={21 * em} height={25.5 * em} />
          <TitleText text={'Localisation'} style={styles.titleText} />
          <Text style={{fontFamily:'Lato-italic',fontSize:12*em,color:'#A0AEB8', marginBottom: 3 * hm }}>* champs obligatoires</Text>


          <Reinput
  label='Quel est la localisation de l’association ? *'
  autoCorrect={false}

  underlineColor="#BFCDDB"
  underlineActiveColor="#41D0E2"
  labelActiveColor="#BFCDDB"
  labelColor="#BFCDDB"
  paddingBottom={12 * hm}
  clearButtonMode="while-editing"
  color='#1E2D60'
  fontFamily='Lato-Bold'
  fontSize={16 * em}
  keyboardType="email-address"
  selectionColor={'#41D0E2'}
marginBottom={-17*hm}

/>        

<Text style={{alignSelf:'flex-start',color:'#40CDDE',fontSize:14*em,fontFamily:'lato-Regular'}}>Utiliser ma position</Text>

        </View>
        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: 'center' }}
      >
        <View style={{backgroundColor:'white',width:'100%',alignItems:'center',bottom:0.2*hm}}>
          <CommonButton
            text={'Contiuer'}
            onPress={() => Actions.home({ tabNav: 'ProProfile', accountType: props.accountType })}
            style={styles.btnNext}
          />
        </View>
        </KeyboardAvoidingView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#1E2D60'
  },
  header: {
    // height: '12%',
  },
  icon: {
    width: 21 * em,
    height: 30 * em,
    marginTop: 39 * em,
    marginBottom: 11 * em,
  },
  popupView: {
    flex: 1,
    height: '88%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: { paddingTop: 39 * em, alignItems: 'center', width: '80%' },
  titleText: { fontFamily: 'Lato-Black', marginTop: 11 * hm, marginBottom: 3 * hm },
  btnNext: { backgroundColor: '#9FE7F0' ,
  overflow: 'hidden',
  borderRadius: 18 * em,
  height: 59 * hm,

  width: 315 * em,

  bottom: 14*hm},
  viewText: {
    marginTop: 25 * em,
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default ProRegisterAddressScreen;
