import React from 'react';
import { em } from 'view/common/const';
import { View } from 'react-native';
import PopupHeader from 'view/components/header/PopupHeader';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { AssociationInner } from 'assets/svg/icons';
const CreateAssociationAccountScreen = (props) => {
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} rightTxt="Annuler" />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <AssociationInner width={39 * em} height={30 * em} />
          <TitleText text={'Identité'} style={styles.titleText} />
          <CommonTextInput
            text={'Quel est le nom de ton association ?'}
            isPasswordInput={false}
            style={styles.commonInput}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            color="#7398FC"
            text={'Suivant'}
            onPress={() => Actions.proRegisterMobile({accountType:props.accountType})}
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
  popupTopView: { paddingTop: 30 * em, alignItems: 'center', width: '80%' },
  titleText: { marginTop: 11 * em, marginBottom: 35 * em },
  btnNext: {
    marginBottom: 30 * em,
    backgroundColor: '#7398FC',
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default CreateAssociationAccountScreen;
