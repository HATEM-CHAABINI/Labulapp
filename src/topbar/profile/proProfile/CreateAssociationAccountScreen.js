import React from 'react';
import { em, hm } from '../../../constants/consts';
import { View , KeyboardAvoidingView,Platform} from 'react-native';
import PopupHeader from '../../../Components/header/PopupHeader';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { AssociationInner } from '../../../assets/svg/icons';
import AccountCommonHeaderpro from '../../../Components/header/AccountCommonHeaderpro';
import Reinput from "reinput"
import { Text } from 'react-native';
const CreateAssociationAccountScreen = (props) => {
  return (
    <View style={styles.container}>
      <AccountCommonHeaderpro style={styles.header} rightTxtStyle={{paddingBottom:19*hm}}rightTxt="Annuler"  />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <AssociationInner width={39 * em} height={30 * em} />
          <TitleText text={'Complète le compte'} style={styles.titleText} />
     <Text style={{fontFamily:'Lato-italic',fontSize:12*em,color:'#A0AEB8', marginBottom: 3 * hm }}>* champs obligatoires</Text>
         
<Reinput
  label='Quel est le nom de l’association ? *'
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
marginBottom={-7*hm}

/>



<Reinput
  label='Quel est le secteur d’activité ? *'
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
  marginBottom={-7*hm}


/>


<Reinput
  label='Avez-vous un numéro Siret ?'
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
  marginBottom={-7*hm}


/>



        </View>
        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: 'center' }}
      >
        <View style={{backgroundColor:'white',width:'100%',alignItems:'center',bottom:0.2*hm}}>
       <CommonButton
            color="#7398FC"
            text={'Suivant'}
            onPress={() => Actions.proRegisterMobile({ accountType: props.accountType })}
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
    // marginTop: 27 * hm,

  },
  popupView: {
    flex: 1,
    height: '88%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: { paddingTop: 20 * hm, alignItems: 'center', width: '80%' },
  titleText: { fontFamily: 'Lato-Black', marginTop: 11 * hm, marginBottom: 3 * hm },
  btnNext: { backgroundColor: '#9FE7F0' ,
  overflow: 'hidden',
  borderRadius: 18 * em,
  height: 59 * hm,

  width: 315 * em,

  bottom: 14*hm},
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default CreateAssociationAccountScreen;
