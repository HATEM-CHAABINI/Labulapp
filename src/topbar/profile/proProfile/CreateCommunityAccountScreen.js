import React from 'react';
import { em, hm } from '../../../constants/consts';
import { View , KeyboardAvoidingView,Platform} from 'react-native';
import PopupHeader from '../../../Components/header/PopupHeader';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { InstitutionInner } from '../../../assets/svg/icons';
import AccountCommonHeaderpro from '../../../Components/header/AccountCommonHeaderpro';
const CreateCommunityAccountScreen = (props) => {
  console.log(props.type1)
  return (
    <View style={styles.container}>
      <AccountCommonHeaderpro style={styles.header}  rightTxtStyle={{paddingBottom:19*hm}}rightTxt="Annuler"  />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <InstitutionInner width={35 * em} height={30 * em} />
          {/* <TitleText text={'Identité'} style={styles.titleText} /> */}
          <CommonTextInput
            text={'Quel est le nom de ton collectivité/ institution ?'}
            isPasswordInput={false}
            style={styles.commonInput}
          />
        </View>

        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: 'center' }}
      >
        <View style={{backgroundColor:'white',width:'100%',alignItems:'center'}}>
          <CommonButton text={'Suivant'} onPress={() => Actions.proRegisterMobile({ accountType: props.accountType })} style={styles.btnNext} />
        </View>
        </KeyboardAvoidingView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FC',
  },
  header: {
    //height: '12%',
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
  popupTopView: { paddingTop: 39 * em, alignItems: 'center', width: '80%' },
  titleText: { fontFamily: 'Lato-Black', marginTop: 11 * em, marginBottom: 35 * em },
  btnNext: {
    marginBottom: 30 * em,
    backgroundColor: '#7398FC',
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
    marginTop: 35 * em
  },
};

export default CreateCommunityAccountScreen;
