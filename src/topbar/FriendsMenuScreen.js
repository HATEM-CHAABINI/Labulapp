import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Platform, Image, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import { em, hm } from '../constants/consts';
import { Actions } from 'react-native-router-flux';
import { Animals, Bricolage, HomeCare, Interview, Workshop, Path, Return2Point, Alert } from '../assets/svg/icons';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { fetchallDemands, getUserProfile } from '../services/firebase'
import { ActivityIndicator } from 'react-native';

const servicIconSize = { width: 18 * em, height: 18 * em };
const locationList = [
  {
    id: '0',
    latitude: 48.857716,
    longitude: 2.3367652,
    avatar: require('../assets/images/sample_user_2.png'),
    serviceIcon: Animals(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '1',
    latitude: 48.8593816,
    longitude: 2.3372225,
    avatar: require('../assets/images/sample_ic_plant.png'),
    serviceIcon: Interview(servicIconSize),
    bgColor: 'rgba(170, 135, 229, 0.2)',
  },
  {
    id: '2',
    latitude: 48.8594982,
    longitude: 2.340837,
    avatar: require('../assets/images/sample_user_2.png'),
    serviceIcon: Bricolage(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  // {
  //   id: '3',
  //   latitude:    48.857716,
  //   longitude: 2.3367652,
  //   avatar: require('../assets/images/avatar.png'),
  //   serviceIcon: Bricolage(servicIconSize),
  //   bgColor: 'rgba(56, 194, 255, 0.2)',
  // },
  // {
  //   id: '4',
  //   latitude:    48.857716,
  //   longitude: 2.3367652,
  //   avatar: require('../assets/images/sample_ic_hair.png'),
  //   serviceIcon: HomeCare(servicIconSize),
  //   bgColor: 'rgba(170, 135, 229, 0.2)',
  // },
  // {
  //   id: '5',
  //   latitude:    48.857716,
  //   longitude: 2.3367652,
  //   avatar: require('../assets/images/sample_user_2.png'),
  //   serviceIcon: Animals(servicIconSize),
  //   bgColor: 'rgba(253, 198, 65, 0.2)',
  // },
];

const FriendsMenuScreen = () => {
  const [demands, setdemands] = useState([])
  const [loadingData, setloadingData] = useState(true)
  useEffect(() => {

    fetchallDemands().then(async (item) => {

      if (item !== undefined) {
        setdemands(() => item)
      }


    })
  }, [])
  useEffect(() => {
    if (demands.length > 0) {
      setloadingData(false)
    }


  }, [demands])
 

  return (<>
  
    {/* <View style={styles.container}>{listView}</View> */}
    {loadingData ? <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F0F5F7',
    }} /> :
    <View style={styles.container}>
      
      <MapView
        provider={PROVIDER_DEFAULT} // remove if not using Google Maps
        style={styles.map}
        region={{

          latitude: 48.857716,
          longitude: 2.3367652,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >

        {
        demands.map((demand, i) =>
          
demand.forEach( doc => 
  
  
  
  console.log("usssssssssssssssssss",doc) )
/* <Marker

key={id}
// tracksViewChanges={false}
coordinate={{
  latitude: latitude,
  longitude: longitude
}}


onPress={() => Actions.friendOrganize()}


>
<View style={{ padding: 10, width: 76 * em, height: 48 * hm }}>
  <View
    style={{
      shadowColor: '#254D5621',
      shadowOffset: {
        width: 0,
        height: 10 * hm,
      },
      shadowRadius: 12 * em,
      shadowOpacity: 1,
      position: 'absolute',
    }}>
    <Path width={76 * em} height={48 * hm} />
  </View>
  <View style={{
    zIndex: 1,
    position: 'absolute', marginTop: 4 * hm,
    marginRight: 2 * em,
    marginLeft: 2 * em,
    marginBottom: 2 * hm,
    width: 72 * em,
    height: 30 * hm,
    borderRadius: 18 * em,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', backgroundColor: bgColor
  }}>

    <Image source={avatar} style={{ marginLeft: 2 * em, width: 36 * em, height: 36 * em }} />
    <View style={{ marginRight: 8.83 * em }}>{serviceIcon}</View>
  </View>
</View>
</Marker> */


// 


          // PositionView(location, i)
          
          
          
          )}
      </MapView>
      <View
        style={{
          position: 'absolute',
          top: 529 * hm,
          width: 46 * em,
          height: 46 * em,
          left: 309 * em,
          borderRadius: 23 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          borderColor: '#ffffff',
          borderWidth: 2 * em,
          ...Platform.select({
            ios: {
              shadowColor: '#254D5621',
              shadowOffset: {
                width: 0,
                height: 10 * hm,
              }, shadowOpacity: 1,
              shadowRadius: 12 * em,
            },
            android: {
              elevation: 5,
            },
          }),

        }}>
        {Return2Point(servicIconSize)}
      </View>

      <View
        style={{
          position: 'absolute',
          top: 463 * hm,
          width: 46 * em,
          height: 46 * em,
          left: 309 * em,
          borderRadius: 23 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#ffffff',
          borderWidth: 2 * em,
          backgroundColor: '#FFF',
          ...Platform.select({
            ios: {
              shadowColor: '#254D5621',
              shadowOffset: {
                width: 0,
                height: 10 * hm,
              }, shadowOpacity: 1,
              shadowRadius: 12 * em,
            },
            android: {
              elevation: 5,
            },
          }),
        }}
      >
        <TouchableOpacity
          onPress={() => Actions.alertCircles()}
        >
          {Alert({ width: 26.45 * em, height: 22.31 * em })}
        </TouchableOpacity>
      </View>

    </View >}</>);
 }

const PositionView = ({ latitude, longitude, avatar, serviceIcon, bgColor, id, i }) => (


  <Marker

    key={id}
    // tracksViewChanges={false}
    coordinate={{
      latitude: latitude,
      longitude: longitude
    }}


    onPress={() => Actions.friendOrganize()}


  >
    <View style={{ padding: 10, width: 76 * em, height: 48 * hm }}>
      <View
        style={{
          shadowColor: '#254D5621',
          shadowOffset: {
            width: 0,
            height: 10 * hm,
          },
          shadowRadius: 12 * em,
          shadowOpacity: 1,
          position: 'absolute',
        }}>
        <Path width={76 * em} height={48 * hm} />
      </View>
      <View style={{
        zIndex: 1,
        position: 'absolute', marginTop: 4 * hm,
        marginRight: 2 * em,
        marginLeft: 2 * em,
        marginBottom: 2 * hm,
        width: 72 * em,
        height: 30 * hm,
        borderRadius: 18 * em,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', backgroundColor: bgColor
      }}>

        <Image source={avatar} style={{ marginLeft: 2 * em, width: 36 * em, height: 36 * em }} />
        <View style={{ marginRight: 8.83 * em }}>{serviceIcon}</View>
      </View>
    </View>
  </Marker>

);
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: { flex: 1, alignItems: 'center' },
  tagInView: {
    zIndex: 1,
    position: 'absolute',
    width: 72 * em,
    height: 36 * em,
    borderRadius: 18 * em,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  TabControlContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%'
  },
  alertImg: {
    width: 46 * em,
    height: 46 * em,
    position: 'absolute',
    resizeMode: 'contain',
    top: 463 * hm,
    left: 309 * em,
  },
});

export default FriendsMenuScreen;
