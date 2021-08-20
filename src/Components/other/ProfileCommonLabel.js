import React from 'react';
import { View, Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em } from '../../constants/consts';

const ProfileCommonLabel = (props) => {
  return (
    <View style={styles.container}>
      {props.icon && props.icon}
      <TitleText text={props.number} style={styles.numberTxt} />
      <Text style={styles.nameTxt}>{props.name}</Text>
    </View>
  );
};
const styles = {
  container: { alignItems: 'center', paddingTop: 9 * em },
  numberTxt: { marginTop: 10 * em, marginBottom: 6 * em, fontSize: 20 * em, lineHeight: 25 * em, fontFamily: 'Montserrat-Bold',color:"#1E2D60" },
  nameTxt: { fontFamily: 'Lato-Medium', fontSize: 13 * em, color: '#A0AEB8' },
};
export default ProfileCommonLabel;
