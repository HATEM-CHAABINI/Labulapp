import React from 'react';
import { em } from '../../../constants/consts';
import { View } from 'react-native';
import PopupHeader from '../../../Components/header/PopupHeader';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { EnterpriseInner } from '../../../assets/svg/icons';

const CreateProfessionalAccountScreen = (props) => {
  return (
    <View style={styles.container}>

      <AccountCommonHeader style={styles.header} rightTxt="Annuler" />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <EnterpriseInner width={33 * em} height={30 * em} />
          <TitleText text={'Identité'} style={styles.titleText} />
          <CommonTextInput
            text={'Quel est le nom de ton activité ?'}
            isPasswordInput={false}
            style={styles.commonInput}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Suivant'}
            onPress={() => Actions.proRegisterMobile({ accountType: props.accountType })}
            style={styles.btnNext}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FC',
    alignItems: 'center',
  },
  header: {

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
  btnNext: { backgroundColor: '#7398FD', marginBottom: 30 * em },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default CreateProfessionalAccountScreen;
