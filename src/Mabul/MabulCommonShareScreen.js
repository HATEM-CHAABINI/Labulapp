import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm, mabulColors } from '../constants/consts';
import CommonText from '../text/CommonText';
import MabulCommonHeader from './MabulCommonHeader';
import CommonButton from '../Components/button/CommonButton';
import { Family, Friend, Neighbor, All } from '../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
const MabulCommonShareScreen = ({ mabulService, process }) => {
  const conceptColor = mabulColors[mabulService];
  const [vchecked, setvChecked] = useState(false);
  const [achecked, setaChecked] = useState(false);
  const [fchecked, setfChecked] = useState(false);
  const [tchecked, settChecked] = useState(false);

const check = (id) => {
  setvChecked(false)
  setaChecked(false)
  setfChecked(false)
  settChecked(false)
  switch(id){
  case 1:
    setaChecked(true)
    break;
  case 2:
    setvChecked(true)
    break;
  case 3:
    setfChecked(true)
    break;
  case 4:
    settChecked(true)
    break;
}
}
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Je partage avec'} style={styles.title} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity   activeOpacity={1}
        style={[
          vchecked ? styles.iconViewClicked : styles.iconView,
          // { marginBottom: index === 2 ? 40 * em : 0 },
        ]}
        onPress={() => check(2)}>
              <Neighbor width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
            <TouchableOpacity 
             activeOpacity={1}
             style={[
               achecked ? styles.iconViewClicked : styles.iconView,
               // { marginBottom: index === 2 ? 40 * em : 0 },
             ]}
             onPress={() => check(1)}>
              <Friend width={48 * em} height={48 * em} />
              <CommonText text="mes amis" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity 
             activeOpacity={1}
             style={[
               fchecked ? styles.iconViewClicked : styles.iconView,
               // { marginBottom: index === 2 ? 40 * em : 0 },
             ]}
             onPress={() => check(3)}>
              <Family width={48 * em} height={48 * em} />
              <CommonText text="mes famille" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
            <TouchableOpacity 
             activeOpacity={1}
             style={[
               tchecked ? styles.iconViewClicked : styles.iconView,
               // { marginBottom: index === 2 ? 40 * em : 0 },
             ]}
             onPress={() => check(4)}>
              <All width={48 * em} height={48 * em} />
              <CommonText text="tous" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
          </View>
        </View>
        <CommonButton
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="Publier"
          onPress={() => {
            mabulService === 'organize'
              ? Actions.myOrganize()
              : mabulService === 'give'
              ? Actions.main()
              : Actions.myNeed();
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // marginTop: 16 * em,
  },
  header: {
    height: '10.3%',
    marginTop: 16 * hm,
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
    marginBottom: 35 * hm,

  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },
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
  iconViewClicked: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * em,
    height: 176 * em,
    paddingHorizontal: 15 * em, backgroundColor: '#fff',

    ...Platform.select({
      ios: {
        borderRadius:20*em,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * em,
    height: 176 * em,
 
  },
  btn: {
    marginBottom: 30 * em,
    backgroundColor: '#38C2FF',
  },

};

export default MabulCommonShareScreen;
