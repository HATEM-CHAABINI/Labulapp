import React, { useState } from 'react';
import { View } from 'react-native';
import TitleText from '../text/TitleText';
import { em, mabulColors, hm, hexToRGB } from '../constants/consts';
import CommentText from '../text/CommentText';
import MabulCommonHeader from './MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../Components/button/MabulNextButton';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../redux/actions/demand'
const MabulCommonParticipateScreen = (props) => {
  const dispatch = useDispatch()
  const { demandData } = useSelector((state) => state.demandReducer);
  const [participatents, setparticipatents] = useState('')

  const conceptColor = mabulColors[props.mabulService];
  const onSubmit = () => {
    // console.log(participatents)
    dispatch(update_into_demand({ participatents: participatents }))
    Actions.mabulCommonShare({ mabulService: props.mabulService, process: 93 });
  }
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
          <TitleText text={'Participants'} style={styles.title} />
          <CommentText text="Combien de personnes peuvent participer dans votre demande ?" style={styles.comment} />
          <TextInput keyboardType="number-pad"
                      autoFocus={true}

            style={styles.input} placeholder="0" selectionColor={conceptColor} value={participatents} onChangeText={(value) => { setparticipatents(value) }} onChange={(value) => { setparticipatents(value) }} />
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ alignItems: 'center', marginBottom: 50 * hm }}
          keyboardVerticalOffset={Platform.OS === "ios" ? 105 * hm : 105 * hm}
        >
          <MabulNextButton
            color={participatents.length <= 0 ? hexToRGB(conceptColor, 0.5) : hexToRGB(conceptColor)}
            style={styles.nextBtn}
            disabled={participatents.length <= 0 ? true : false}
            onPress={() => {
              onSubmit()
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
    // marginTop: 16 * hm,
  },
  header: {
    height: '12.45%',
  },
  body: {
    flex: 1,
    paddingLeft: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
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
    // marginBottom: 30 * hm,
  },
  input: {

    fontSize: 49 * em,
    marginTop: 24 * em,

    textAlign: 'center',
    color: '#A0AEB8',
  },
};

export default MabulCommonParticipateScreen;
