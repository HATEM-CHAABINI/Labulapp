import React from 'react';
import { View } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonHeader from '../Mabul/CommonHeader';
import TitleText from '../text/TitleText';

const FriendCommonHeader = (props) => {
  return (
    <View style={styles.header}>
      <CommonHeader
        dark={true}
        centerTxt={props.upperTitle}
        rightView={<View width={44 * em} height={44 * em} />}
        style={styles.commonHeader}
      />
      <TitleText text={props.title} style={styles.title} />
    </View>
  );
};

const styles = {
  header: { paddingBottom: 10 * hm },
  commonHeader: { marginTop: 27 * hm },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 10 * hm,
  },
};

export default FriendCommonHeader;
