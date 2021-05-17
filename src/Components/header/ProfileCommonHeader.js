import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import TitleText from '../../text/TitleText';
import CommonHeader from './CommonHeader';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const ProfileCommonHeader = (props) => {
  return (
    <ParallaxScrollView
      contentContainerStyle={styles.container}
      headerBackgroundColor="#333"
      backgroundColor="#ffffff"
      stickyHeaderHeight={81 * hm}
      parallaxHeaderHeight={139 * hm}
      backgroundSpeed={10}
      renderFixedHeader={() => (
        <CommonHeader
          rightTxt={'Terminer'}
          style={{ position: 'absolute', top: 40 * hm }}
          onRightPress={props.onFinish}
          onLeftPress={props.onCancel}
          leftTxt={'Annuler'}
          rightTxtStyle={styles.rightTxt}
          loading={props.loading}
        />
      )}
      renderForeground={() => <TitleText text={props.title} style={styles.title} />}
      renderStickyHeader={() => (
        <View key="sticky-header" style={{ marginTop: 40 * hm, alignItems: 'center' }}>
          <CommonText text={props.title} color="#1E2D60" style={{ fontFamily: 'Lato-Bold' }} />
        </View>
      )}>
      {props.children}
    </ParallaxScrollView>
  );
};

const styles = {
  container: {
    backgroundColor: '#F0F5F7',
  },
  commonHeader: { position: 'absolute', marginBottom: 23 * hm, marginTop: 40 * hm },
  title: {
    marginLeft: 30 * em,
    lineHeight: 38 * hm,
    backgroundColor: '#ffffff',
    // marginBottom: 25 * hm,
    textAlign: 'left',
    marginTop: 81 * hm,
    fontFamily: 'Lato-Black'
  },
  rightTxt: { color: '#40CDDE', fontSize: 16 * em, marginRight: 12 * em },
};

export default ProfileCommonHeader;
