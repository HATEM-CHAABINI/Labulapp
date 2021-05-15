import React from 'react';
import { View, Platform } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, mabulColors, hexToRGB, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../../Components/button/MabulNextButton';
// import MabulNextButton from 'src/Components/button/MabulNextButton';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';

const MabulSellPriceScreen = (props) => {
  const conceptColor = mabulColors.sell;
  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={true}
        progressBarColor={conceptColor}
      />
      <View style={styles.body}>
        <View>
          <TitleText text={'Prix'} style={styles.title} />
          <CommentText text="Ajoutez un prix" style={styles.comment} />
          <TextInput
            style={styles.input}
            placeholder="0"
            selectionColor={conceptColor}
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          />
        </View>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ alignItems: 'center', marginBottom: 30 * hm }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 105*hm : 105*hm}
      >
        <MabulNextButton
          color={hexToRGB(conceptColor, 0.5)}
          style={styles.nextBtn}
          onPress={() => {
            Actions.mabulCommonAddPhoto({ mabulService: 'sell', process: 73 });
          }}
        />
              </KeyboardAvoidingView>

      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
     PaddingTop: 16 * hm,
  },
  header: {
    height: '10.3%',
    marginTop: 16 * hm,
  },
  body: {
    flex: 1,
    paddingLeft: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: { width: 315 * em, textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * hm },
  photoZone: {
    width: 315 * em,
    height: 121 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 35 * hm,
  },
  commentPhoto: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#6A8596',
  },
  icon: {
    width: 40 * em,
    height: 28 * em,
  },
  nextBtn: {
    alignSelf: 'flex-end',
    marginRight: 30 * em,
   
  },
  input: {
    marginTop:44*hm,
    fontSize: 49 * em,
    textAlign: 'center',
    color: '#A0AEB8',
  },
};

export default MabulSellPriceScreen;
