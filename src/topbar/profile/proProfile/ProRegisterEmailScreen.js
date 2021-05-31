import React from 'react';
import { em, hm } from '../../../constants/consts';
import { View , KeyboardAvoidingView,Platform} from 'react-native';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { EmailBlue } from '../../../assets/svg/icons';
import AccountCommonHeaderpro from '../../../Components/header/AccountCommonHeaderpro';
const ProRegisterEmailScreen = (props) => {
  console.log(props.accountType);

  return (
    <View style={styles.container}>
      <AccountCommonHeaderpro style={styles.header} rightTxtStyle={{paddingBottom:19*hm}}rightTxt="Annuler"  />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <EmailBlue width={30 * em} height={21 * em} />
          <TitleText text={'Mon Email'} style={styles.titleText} />
          <CommonTextInput text={'Saisis ton email'} isPasswordInput={false} style={styles.commonInput} />
        </View>
        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: 'center' }}
      >
        <View style={{backgroundColor:'white',width:'100%',alignItems:'center'}}>
       <CommonButton
            text={'Suivant'}
            style={styles.btnNext}
            onPress={() => Actions.home({ tabNav: 'ProProfile', accountType: props.accountType })}
          />
      </View>
      </KeyboardAvoidingView>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FD',
  },
  header: {
    // height: '12%',
  },
  icon: {
    width: 30 * em,
    height: 27 * em,
    marginTop: 40 * em,
    marginBottom: 13 * em,
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
  popupTopView: { paddingTop: 40 * em, alignItems: 'center', width: '80%' },
  titleText: { marginTop: 13 * em, marginBottom: 35 * em },
  btnNext: { backgroundColor: '#7398FD', marginBottom: 30 * em },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default ProRegisterEmailScreen;
