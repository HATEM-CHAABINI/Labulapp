import React from 'react';
import { em, hm } from '../../../constants/consts';
import { View } from 'react-native';
import PopupHeader from '../../../Components/header/PopupHeader';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { AssociationInner } from '../../../assets/svg/icons';
import AccountCommonHeaderpro from '../../../Components/header/AccountCommonHeaderpro';
const CreateAssociationAccountScreen = (props) => {
  return (
    <View style={styles.container}>
      <AccountCommonHeaderpro style={styles.header} rightTxtStyle={{paddingBottom:19*hm}}rightTxt="Annuler"  />
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
    //mariginVertical: 0 * hm
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
