import React, { useState } from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import MabulCommonHeader from '../../Components/header/MabulCommonHeader';
import MabulNextButton from '../../Components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
import { Family, Friend, Neighbor, CheckBlue, All } from '../../assets/svg/icons';
import { TouchableOpacity } from 'react-native';

const AlertCircleSelectionScreen = () => {
  const conceptColor = '#F9547B';
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
      <MabulCommonHeader style={styles.header} percent={20} noBackButton={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'J’alerte'} style={styles.title} />
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
   
      </View>
      <MabulNextButton
        color={conceptColor}
        style={[styles.btn, { backgroundColor: conceptColor }]}
        text="Suivant"
        onPress={() => Actions.alertClass({ process: 40 })}
      />
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
  body: { flex: 1, paddingHorizontal: 30 * em, justifyContent: 'space-between' },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 34 * hm,
    marginBottom: 35 * hm,
    lineHeight: 38 * em,
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32 * hm,
    paddingVertical: 47 * hm,
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
  iconViewChecked: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32 * hm,
    paddingVertical: 47 * hm,
    borderRadius: 20 * em,
    backgroundColor: '#ffffff',
    elevation: 5
  },

  btn: {
    postion: 'absolute',
    alignSelf: 'flex-end',
    right: 30 * em,
    bottom: 30 * hm,
    backgroundColor: '#38C2FF'
  },
};

export default AlertCircleSelectionScreen;
