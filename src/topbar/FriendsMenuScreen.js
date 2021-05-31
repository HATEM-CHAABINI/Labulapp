import React from 'react';
import { View,Text, ImageBackground, Platform, Image, TouchableOpacity,StyleSheet,TouchableHighlight } from 'react-native';
import { em, hm } from '../constants/consts';
import { Actions } from 'react-native-router-flux';
import { Animals, Bricolage, HomeCare, Interview, Workshop, Path, Return2Point, Alert } from '../assets/svg/icons';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const servicIconSize = { width: 18 * em, height: 18 * em };
const locationList = [
  {
    id: '0',
    latitude:    48.857716,
    longitude: 2.3367652,
    avatar: require('../assets/images/sample_user_2.png'),
    serviceIcon: Animals(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '1',
    latitude:    48.8593816,
    longitude: 2.3372225,
    avatar: require('../assets/images/sample_ic_plant.png'),
    serviceIcon: Interview(servicIconSize),
    bgColor: 'rgba(170, 135, 229, 0.2)',
  },
  {
    id: '2',
    latitude:   48.8594982,
    longitude:2.340837,
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
  return (
    <View style={styles.container}>
             <MapView
          provider={PROVIDER_DEFAULT} // remove if not using Google Maps
          style={styles.map}
          region={{
         
            latitude:    48.857716,
            longitude: 2.3367652,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          
{locationList.map((location,i) => 
PositionView(location,i  ))}
{/* <Marker
  
key={i}
// tracksViewChanges={false}
coordinate={{
  latitude: location.latitude,
  longitude:location.longitude}}
  
 
  onPress={() =>console.log("kdkdkdkdkdkdkdkd " +i)}

   >
   <View style={{padding: 10,width:76 * em, height:48 * hm }}>
   <View
style={{
shadowColor: '#254D5621',
shadowOffset: {
  width: 0,
  height: 10 * hm,
},
shadowRadius: 12 * em,
shadowOpacity:1,
 position: 'absolute', }}>
<Path width={76 * em} height={48 * hm} />
</View> 
<View style={{ zIndex: 1,
  position: 'absolute',marginTop:4*hm,
  marginRight:2*em,
  marginLeft:2*em,
  marginBottom:2*hm,
  width: 72 * em,
  height: 30 * hm,
  borderRadius: 18 * em,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', backgroundColor: location.bgColor}}>

<Image source={location.avatar} style={{marginLeft: 2 * em, width: 36 * em, height: 36 * em}} />
<View style={{  marginRight: 8.83 * em }}>{location.serviceIcon}</View>
</View> 
 </View>
</Marker> */}


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
      {/* <Image style={styles.TabControlContainer} source={require('../assets/images/bg_map.png')} />

      <View style={{ position: 'absolute', top: 203 * hm, left: 34 * em }}>
        <Path width={76 * em} height={48 * em} />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 213 * hm,
          left: 309 * em,
          alignItems: 'center',
          justifyContent: 'center',
          //backgroundColor: '#FFF',
          elevation: 10,
          shadowColor: '#254D5621',
          shadowOffset: {
            width: 0,
            height: 5 * hm,
          },
          shadowRadius: 9 * em,
        }}>
        <Image source={require('../assets/images/img_alert.png')} />
      </View>
     
      <View
        style={{
          position: 'absolute',
          top: 335 * hm,
          width: 36 * em,
          height: 36 * em,
          left: 297 * em,
          borderRadius: 18 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(238, 231, 250, 1)',
          borderColor: '#ffffff',
          borderWidth: 2 * em,
          elevation: 10,
          shadowColor: '#254D5621',
          shadowOffset: {
            width: 0,
            height: 10 * hm,
          }, shadowOpacity: 1,
          shadowRadius: 12 * em,
        }}>
        {Interview(servicIconSize)}
      </View>

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
      <Image
        source={require('../assets/images/img_navigator.png')}
        style={{ position: 'absolute', top: 316 * hm, zIndex: 0, opacity: 0.8 }}
      />
      <View
        style={{
          position: 'absolute',
          top: 463 * hm,
          width: 36 * em,
          height: 36 * em,
          left: 34 * em,
          borderRadius: 23 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 244, 217, 1)',
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
        }}
      >
        <TouchableOpacity
          onPress={() => Actions.friendOrganize()}
        >
          {Workshop(servicIconSize)}
        </TouchableOpacity>
      </View> */}
    </View >
  );
};

const PositionView = ({ latitude, longitude, avatar, serviceIcon, bgColor, id,i }) => (
 

  <Marker
  
  key={id}
  // tracksViewChanges={false}
  coordinate={{
    latitude: latitude,
    longitude:longitude}}
    
   
    onPress={() => Actions.friendOrganize()}

  
     >
     <View style={{padding: 10,width:76 * em, height:48 * hm }}>
     <View
  style={{
  shadowColor: '#254D5621',
  shadowOffset: {
    width: 0,
    height: 10 * hm,
  },
  shadowRadius: 12 * em,
  shadowOpacity:1,
   position: 'absolute', }}>
  <Path width={76 * em} height={48 * hm} />
  </View> 
  <View style={{ zIndex: 1,
    position: 'absolute',marginTop:4*hm,
    marginRight:2*em,
    marginLeft:2*em,
    marginBottom:2*hm,
    width: 72 * em,
    height: 30 * hm,
    borderRadius: 18 * em,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', backgroundColor: bgColor}}>
  
  <Image source={avatar} style={{marginLeft: 2 * em, width: 36 * em, height: 36 * em}} />
  <View style={{  marginRight: 8.83 * em }}>{serviceIcon}</View>
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
