import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Filter, MagnifierBlue } from '../assets/svg/icons';
import { em, hm } from '../constants/consts';
import { fetchallDemand, fetchDemandFiltre } from '../services/firebase';
import CommonBlueHeader from './CommonBlueHeader';
import FriendsListScreen from './FriendsListScreen';
import FriendsMenuScreen from './FriendsMenuScreen';
import SwitchButton from './SwitchButton';
const Tab = createMaterialTopTabNavigator();
export default function FriendsNavigator(props) {
  const [activeTab, setActiveTab] = useState(1);
  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(true)
  
  useEffect(() => {
    // console.log(props.route.params.filtre," ===========> ",props.route.params.filtreD);
if ((props.route.params.filtre!==undefined && props.route.params.filtre.length!=0 )|| (props.route.params.filtreD !="Toutes" && props.route.params.filtreD !==undefined && props.route.params.filtreD.length!=0)){
  // console.log("filtrageeee");
  fetchDemandFiltre(props.route.params.filtre,props.route.params.filtreD).then((item) => {
    if (item !== undefined) {
      // console.log("filtrrreeee=== ", item);
      setData(() => item)
    }
  })
  // console.log("jdjdjdjdjdjddjdjdjncirnricnircirni",props.route.params.filtre);
}else
{ 
  //  console.log("filtrageeee");
    fetchallDemand().then((item) => {
      // console.log("ncncncncnc",item[0]);
      // console.log('userdata aa gya re.....')
      if (item !== undefined) {
        setData(() => item)
      }
    })
  }
  }, [])



  useEffect(() => {

    if (Data.length >= 0) {
      // console.log("leennnnghhhththt");
      setLoading(false)
    }
  }, [Data])
  return (
    <View style={styles.TabBarMainContainer}>
      <Tab.Navigator
        tabBar={() => null}
        swipeEnabled={false}
        initialRouteName={props.route.params.friendNav || 'Carte'}>
        {/* <Tab.Screen name="Carte" component={FriendsMenuScreen}  /> */}
        <Tab.Screen name="Carte">
          {(props) => <FriendsMenuScreen  {...props} data={Data} loading={Loading} />}
        </Tab.Screen>
        {/* <Tab.Screen name="Liste" component={FriendsListScreen} /> */}
        <Tab.Screen name="Liste">
          {(props) => <FriendsListScreen  {...props} data={Data} loading={Loading} />}
        </Tab.Screen>
      </Tab.Navigator>
      <View style={styles.TabControlContainer}>
        <CommonBlueHeader />
        <View style={styles.TabButtonContainer}>
          <TouchableOpacity
            style={styles.functionBtn}
            shadowOffset={{ height: 10 }}
            shadowColor='black'
            shadowOpacity={0.5}
            onPress={() => {
              // props.navigation.navigate('FriendsSearchScreen')    
              Actions.friendsSearch();
            }}>
            <MagnifierBlue width={20 * em} height={20 * em} />
          </TouchableOpacity>

          <SwitchButton
            onValueChange={(val) => {
              setActiveTab(val);
              // console.log(props.navigation);
              if (val === 1) {
                props.navigation.jumpTo('Carte');
              } else {
                props.navigation.jumpTo('Liste');
              }
            }}
            text1="Carte"
            text2="Liste"
            switchWidth={134 * em}
            switchHeight={46 * em}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#fff"
            btnBorderColor="#ffffff"
            btnBackgroundColor="#1E2D60"
            fontColor="#6A8596"
            activeFontColor="#fff"
            style={styles.switch}
          />
          <TouchableOpacity
            style={styles.functionBtn}
            onPress={() => {
              Actions.jump('Filtre')
            }}>
            <Filter width={20 * em} height={16 * em} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarMainContainer: {
    backgroundColor: '#F0F5F7',
    flex: 1
  },
  functionBtn: {
    width: 46 * em,
    height: 46 * em,
    borderRadius: 23 * em,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    shadowColor: '#254D56',
    shadowOffset: {
      width: 0, height: 16 * hm,
    }, shadowOpacity: 0.45,
    shadowRadius: 24 * em,
  },
  TabControlContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    top: em * 20
  },
  TabButtonContainer: {
    alignItems: 'center',
    paddingHorizontal: 22 * em,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15 * hm,
  },
  switch: {
    elevation: 10,
    shadowColor: '#254D56',
    shadowOffset: {
      width: 0,
      height: 12 * hm,
    },
    shadowOpacity: 0.2,

    shadowRadius: 25 * em,
  },
});
