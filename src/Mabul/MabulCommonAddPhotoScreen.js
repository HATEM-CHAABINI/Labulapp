import React from 'react';
import { View, Image } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm, mabulColors } from '../constants/consts';
import CommentText from '../text/CommentText';
import MabulCommonHeader from './MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../Components/button/MabulNextButton';

const MabulCommonAddPhotoScreen = ({ mabulService, process }) => {
  const conceptColor = mabulColors[mabulService];

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Ajoute des photos'} style={styles.title} />
          <CommentText
            text="Les photos aident les utilisateurs à avoir une idée de ce que tu vends."
            style={styles.comment}
          />
          <View style={styles.photoZone}>
            <Image
              source={require('../assets/images/ic_addphotos_green.png')}
              style={[styles.icon, { tintColor: conceptColor }]}
            />
            <CommentText text="3 maximum" style={styles.commentPhoto} />
          </View>
        </View>
        <MabulNextButton
          color={conceptColor}
          style={styles.nextBtn}
          onPress={() =>
            Actions.mabulCommonDateSetting({
              mabulService: mabulService,
              process: mabulService === 'need' ? 67 : mabulService === 'organize' ? 60 : 79,
            })
          }
        />
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
    height: '12.45%',

  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * em },
  photoZone: {
    width: 315 * em,
    height: 121 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 35 * em,
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
    marginBottom: 30 * hm,
  },
};

export default MabulCommonAddPhotoScreen;
