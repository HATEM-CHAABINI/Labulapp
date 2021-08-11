import React from 'react';
import { em, hexToRGB } from '../../../constants/consts';
import { View, Image } from 'react-native';
import TitleText from '../../../text/TitleText';
import CommonTextInput from '../../../Components/textInput/CommonTextInput';
import CommonButton from '../../../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from '../../../Components/header/AccountCommonHeader';
import { CreateGroupNeighbor, CreateGroupFamily, CreateGroupFriend, CreateGroupPro } from '../../../assets/svg/icons';
import CommonHeader from '../../../Components/header/CommonHeader';
import RelationshipType from '../../../model/user/RelationshipType';
const addIconSize = { width: 42 * em, height: 30 * em };

const themeButtons = [
  { id: RelationshipType.FAMILIY, icon: CreateGroupFamily(addIconSize), color: '#EF88B9' },
  { id: RelationshipType.FRIEND, icon: CreateGroupFriend(addIconSize), color: '#6784DA' },
  { id: RelationshipType.NEIGHBOR, icon: CreateGroupNeighbor(addIconSize), color: '#40CDDE' },
  { id: RelationshipType.PRO, icon: CreateGroupPro(addIconSize), color: '#1E2D60' },
];
const NameGroupScreen = (props) => {
  const themeBtn = themeButtons.find((item) => item.id === props.sort);
 
  return (
    <View style={[styles.container, { backgroundColor: props.themeColor }]}>
      <CommonHeader
        dark={false}
        rightTxt={'Annuler'}
        style={styles.header}
        onRightPress={() =>props.sort==="Professionnel"?Actions.mesAboonespro(): Actions.myCirclesHome()}
        />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View style={styles.icon}>{themeBtn.icon}</View>
          <TitleText text={'Nom du groupe'} style={styles.titleText} />
          <CommonTextInput text={'Donne un nom à ton groupe'} isPasswordInput={false} style={styles.commonInput} />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Créer groupe'}
            style={[styles.btnNext, { backgroundColor: hexToRGB(props.themeColor, 0.5) }]}
            onPress={() =>props.sort==="Professionnel"?Actions.mesAboonespro(): Actions.myCirclesHome()}
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
    alignItems: 'center',
  },
  header: { marginBottom: 10 * em, marginTop: 27 * em },
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
  popupTopView: {
    alignItems: 'center',
    width: '80%',
  },
  titleText: {
    marginBottom: 35 * em,
  },
  btnNext: { backgroundColor: '#7398FD', marginBottom: 30 * em },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default NameGroupScreen;
