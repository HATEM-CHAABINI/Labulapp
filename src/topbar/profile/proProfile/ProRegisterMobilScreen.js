import React from 'react';
import { em } from 'view/common/const';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { MobileBlue } from 'assets/svg/icons';
const ProRegisterMobilScreen = (props) => {
  console.log(props.accountType);

  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
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
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Suivant'}
            onPress={() => Actions.proRegisterAddress({ accountType: props.accountType })}
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
    height: '12%',
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
  btnNext: {
    marginBottom: 30 * em,
    backgroundColor: '#7398FC',
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default ProRegisterMobilScreen;
