import React from 'react';
import { View, Text } from 'react-native';
import { em, hm } from '../constants/consts';
import TitleText from '../text/TitleText';
import SmallText from '../text/SmallText';

const PurchaseMenuCard = (props) => {
  var psStyle = {
    borderColor: '#ffffff',
    bgColor: '#BFCDDB',
  };
  if (props.selected) {
    psStyle.borderColor = props.name === 'Pro' ? '#1E2D60' : '#41D0E2';
    psStyle.bgColor = props.name === 'Pro' ? '#1E2D60' : '#41D0E2';
  }
  const shadow = {
    elevation: 2,
    shadowColor: '#A7A7A733',
    shadowOffset: {
      width: 0,
      height: 8 * em,
    }, shadowOpacity: 1,
    shadowRadius: 22 * em,
  };
  return (
    <View
      style={[
        styles.container,
        props.selected || props.noMore ? { elevation: 0 } : shadow,
        props.style,
        { borderColor: psStyle.borderColor },
      ]}>
      <View style={[
        styles.title,
        { backgroundColor: psStyle.bgColor, borderColor: props.noMore ? '#ffffff' : 'transparent' },
      ]}>
        <Text
          style={{
            fontFamily: 'HelveticaNeue',
            color: '#FFFFFF',
            fontSize: 18 * em,
            lineHeight: 22 * em,
          }}>
          {props.name}
        </Text></View>
      <TitleText text={props.price} style={styles.price} />
      <TitleText text={'par mois'} style={{ fontFamily: 'Lato-Medium', marginBottom: 17 * em, fontSize: 12 * em, lineHeight: 14 * em }} />
      <View style={[styles.containerTxt, { width: props.txtWidth }]}>
        <Text style={styles.comment}>{props.commentRadius}</Text>
        <Text style={[styles.comment, { color: '#6A8596' }]}>{props.comment}</Text>
      </View>
      {/* {!props.noMore && (
        <SmallText
          style={[styles.addTxt, { bottom: props.name === 'Pro' ? 15 * em : 19 * em }]}
          color={props.name === 'Pro' ? '#7398FD' : '#41D0E2'}
          text="En savoir plus"
        />
      )} */}
    </View>
  );
};

const styles = {
  container: {
    paddingHorizontal: 15 * em,
    backgroundColor: '#ffffff',
    borderRadius: 18 * em,
    borderWidth: 3 * em,

    alignItems: 'center',
  },
  title: {

    borderRadius: 17 * em,


    paddingHorizontal: 18 * em,
    paddingVertical: 4 * em,

    marginTop: -15 * em,
    borderWidth: 1 * em,
    borderColor: 'transparent',
  },
  price: { fontFamily: 'Lato-Black', marginTop: 25 * em, fontSize: 25 * em, lineHeight: 30 * em },
  containerTxt: { width: 120 * em, height: 60 * hm },
  comment: { fontFamily: 'HelveticaNeue', fontSize: 12 * em, lineHeight: 14 * em, textAlign: 'center', color: '#1E2D60' },
  addTxt: { fontFamily: 'Lato-Medium', position: 'absolute', fontSize: 12 * em, lineHeight: 14 * em },
};

export default PurchaseMenuCard;
