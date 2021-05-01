import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text, Image, ImageBackground } from 'react-native';

import { em, WIDTH, HEIGHT, hm } from '../constants/consts';


const ProProfileHomeScreen = (props) => {
 
  return (
   <View>
     <Text>ProProfileHomeScreen</Text>
   </View>
  );
};

const styles = {
  rowContainer: { flexDirection: 'row' },
  topView: { height: 300 * hm, alignItems: 'center' },
  avatar: { marginTop: 89 * hm, height: 70 * hm, width: 70 * hm },
  txtFullName: { marginTop: 15 * hm, fontSize: 20 * em, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' },
  txtGoToProfile: { marginTop: 5 * hm, fontSize: 14 * em, color: '#FFFFFF', textAlign: 'center' },
  scrollView: { width: WIDTH, backgroundColor: '#ffffff' },
  dropDown: { right: 30 * em, top: 33 * hm, position: 'absolute', zIndex: 1 },
  bottomView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#254D5612',
    shadowOffset: { width: 0, height: 12 * hm },
    shadowRadius: 25 * em,
    paddingHorizontal: 30 * em,
  },
  cardContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: -46 * em, marginBottom: 30 * hm },
  cardStyle: {

    width: 150 * em,
    flexGrow: 1,
  },
  listBox: { marginTop: 15 * hm },
  caption: { width: '100%', textAlign: 'left', fontWeight: '300', marginBottom: 20 * em },
  listItem: {},
  line1: { marginLeft: 53 * em, marginBottom: 25 * hm, marginTop: 15 * hm, height: 1 * em, backgroundColor: '#F0F5F7' },
  line2: {
    marginBottom: 30 * hm,
    marginTop: 25 * hm,
    height: 1 * em,
    backgroundColor: '#F0F5F7',
    marginLeft: -30 * em,
    marginRight: -30 * em,
  },
  imgBg: {
    height: HEIGHT * 0.21,
    flex: 1,
    backgroundColor: '#40CDDE0C',
    marginTop: 35 * hm,
    marginBottom: 20 * hm,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  imageTextMain: { marginTop: 25 * hm, fontSize: 20 * em, marginLeft: 18 * em },
  imageTextSub: { fontSize: 15 * em, marginLeft: 18 * em, marginRight: -58 * em, marginBottom: 10 * hm },
  button: {
    fontSize: 12 * em,
    lineHeight: 15 * em,
    borderRadius: 9 * em,
    width: 126 * em,
    height: 33 * em,
    padding: 9 * em,
    borderWidth: 1 * em,
    borderColor: '#40CDDE',
    marginLeft: 15 * em,
  },
  line3: { marginBottom: 25 * em, marginTop: 25 * em, height: 1 * em, backgroundColor: '#F0F5F7' },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50 * hm,
    marginBottom: 15 * hm,
  },
  imgLogo: { height: 26 * em, width: 20 * em, resizeMode: 'contain', marginRight: 10 * em, tintColor: '#7398FD' },
  txtLogo: { height: 23 * em, width: 80 * em, resizeMode: 'contain', tintColor: '#7398FD' },
  proText: { lineHeight: 15 * em, alignSelf: 'flex-start', color: '#7398FD' },
  txtVersion: { marginBottom: 110 * hm },
};

export default ProProfileHomeScreen;
