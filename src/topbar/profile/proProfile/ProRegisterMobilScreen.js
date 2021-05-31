import React from 'react';
import { em, hm } from '../../../constants/consts';
import { View , KeyboardAvoidingView,Platform} from 'react-native';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { MobileBlue } from '../../../assets/svg/icons';
import AccountCommonHeaderpro from '../../../Components/header/AccountCommonHeaderpro';
const ProRegisterMobilScreen = (props) => {
  console.log(props.accountType);

  return (
    <View style={styles.container}>
      <AccountCommonHeaderpro style={styles.header} rightTxtStyle={{paddingBottom:19*hm}}rightTxt="Annuler"  />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <MobileBlue width={25 * em} height={25 * em} />
          <TitleText text={'Contact'} style={styles.titleText} />
          <CommonTextInput
            text={'Quel est le contact de ton activité ?'}
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
          <CommonButton
            text={'Suivant'}
            onPress={() => Actions.proRegisterAddress({ accountType: props.accountType })}
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
    backgroundColor: '#7398FC',
  },
  header: {
    // height: '12%',
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
  popupTopView: { paddingTop: 41 * em, alignItems: 'center', width: '80%' },
  titleText: { marginTop: 14 * em, marginBottom: 35 * em },
  btnNext: { backgroundColor: '#7398FC' ,
  overflow: 'hidden',
  borderRadius: 18 * em,
  height: 59 * hm,

  width: 315 * em,

  bottom: 30},
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default ProRegisterMobilScreen;
