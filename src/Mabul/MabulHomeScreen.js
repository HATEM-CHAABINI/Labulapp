import React from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { em, hm } from '../constants/consts';
import CircularButton from '../Components/button/CircularButton';
import { Actions } from 'react-native-router-flux';
import { Bluecircle, Dansmabul, MabulCancel } from '../assets/svg/icons';

const MabulHomeScreen = (props) => {



  const { navigation } = props;
  console.log(props);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#40cdde" barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Dansmabul/>
      </View>
      <Bluecircle style={{position:'absolute',marginTop:370*hm}}/>
      <View style={styles.buttonsContainer}>

      <View style={styles.buttonFirstRowA}>
          <CircularButton
            type="alerte"
            onPress={() => {
              props.onClosePress();
              // navigation.navigate('MabulOrganizeScreen',{ process: 20 })
              Actions.alertCircles();
            }}
          />
        {/* </View> */}
      
        <CircularButton
            type="sell"
            onPress={() => {
              props.onClosePress();
              Actions.mabulSell({ process: 26 });
            }}
          />
        {/* <View style={styles.buttonFirstRow}> */}
         
        </View>
        <View style={styles.buttonSecondRow}>
          <CircularButton
            type="give"
            onPress={() => {
              props.onClosePress();
              Actions.mabulGive({ process: 25 });
            }}
          />
        
          <CircularButton
            type="need"
            onPress={() => {
              props.onClosePress();
              Actions.mabulNeed({ process: 7 });
            }}
          />
           <CircularButton
            type="organize"
            onPress={() => {
              props.onClosePress();
              // navigation.navigate('MabulOrganizeScreen',{ process: 20 })
              Actions.mabulOrganize({ process: 20 });
            }}
          />
        </View>
        <TouchableOpacity onPress={props.onClosePress} style={{
          shadowColor: '#0C15233D',
          shadowOffset: {
            width: 0, height: 16 * hm,
          }, shadowOpacity: 1,
          shadowRadius: 24 * em,
        }}>
          <MabulCancel style={styles.closeButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#40cdde',
    paddingBottom: 16 * em,
    opacity: 0.9,
  },
  logoContainer: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 50*hm },
  logoImage: { width: 84 * em, resizeMode: 'contain' },
  logoLabel: { width: 125 * em, resizeMode: 'contain', marginTop: 18 * em, PaddingBottom: 100 },
  buttonsContainer: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16 * em,
  },
  buttonFirstRowA:{ width: '40%', flexDirection: 'row', justifyContent: 'center' ,justifyContent: 'space-between' },
  buttonFirstRow: { width: '100%', flexDirection: 'row', justifyContent: 'center' },
  buttonSecondRow: { width: '80%', flexDirection: 'row', justifyContent: 'space-between' },
  closeButton: { width: 48 * em, resizeMode: 'contain', marginTop: 18 * em },
};

export default MabulHomeScreen;
