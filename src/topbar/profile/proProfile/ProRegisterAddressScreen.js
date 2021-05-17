import React from 'react';
import { em, hm } from '../../../constants/consts';
import { View, Image } from 'react-native';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import CommonText from '../../../text/CommonText';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { AddressBlue } from '../../../assets/svg/icons';
import AccountCommonHeaderpro from '../../../Components/header/AccountCommonHeaderpro';

const ProRegisterAddressScreen = (props) => {
  console.log(props.accountType)

  return (
    <View style={styles.container}>
      <AccountCommonHeaderpro style={styles.header} rightTxtStyle={{paddingBottom:19*hm}}rightTxt="Annuler"  />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <AddressBlue width={21 * em} height={25.5 * em} />
          <TitleText text={'Localisation'} style={styles.titleText} />
          <CommonTextInput text={'Saisis ton adresse complète'} isPasswordInput={false} style={styles.commonInput} />
          <View style={styles.viewText}>
            <CommonText color={'#7398FD'} text={'Me géolocaliser'} />
          </View>
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Contiuer'}
            onPress={() => Actions.proRegisterEmail({ accountType: props.accountType })}
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
    backgroundColor: '#7398FD',
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
  titleText: { fontFamily: 'Lato-Black', marginTop: 15.5 * em, marginBottom: 35 * em },
  btnNext: { backgroundColor: '#7398FD', marginBottom: 30 * em },
  viewText: {
    marginTop: 25 * em,
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default ProRegisterAddressScreen;
