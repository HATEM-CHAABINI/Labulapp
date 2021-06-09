import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Platform, Image, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import { em, hm } from '../constants/consts';
import { Actions } from 'react-native-router-flux';
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { fetchcoordinate,fetchallDemands, fetchallneed, fetchallorganize, fetchallsell,getUserProfile ,fetchallgive, fetchallDemand} from '../services/firebase'
import { ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Gardeenfant,Soutienscolaire,Accompagnementenfants,Personnesagees,Informatique,Aministrative,ChildCare,ChildCareSell,SupportChildren,SchoolSupport,Animals, HomeCare, Interview, Workshop, Path, Return2Point, Alert 
  , Entretien,Bricolage,Outillage,Jardinage,Preparationrepas,Repassage,Livraisonachats,TransportNeed,Soinsdomicile
 ,Fetesell,AperoSell1,SpectacleSell,RencontreSell,RepasSell,AtelierSell,
 GardeenfantSell,SoutienscolaireSell,PersonnesageesSell,InformatiqueSell,AministrativeSell,EntretienSell,
 JardinageSell,LivraisonachatsSell,TransportSells,AccompagnementenfantsSell,AnimalsSell,PreparationrepasSell,
 RepassageSell,SoinsdomicileSell,

 Feteorg,Aperoorg,Spectacleorg,Rencontreorg,Repasorg,Atelierorg,

 Objetdiversgive,Meublegive,Hightechgive,Educationgive,Vetementsgive,Repasgive,Alimentsgive

} from '../assets/svg/icons';



const servicIconSize = { width: 18 * em, height: 18 * em };
const renderimgSell  = (belongto,catrgory) => {
  // console.log(belongto,"==================== sell ",catrgory);
  if (belongto==0){
    switch(catrgory) {
      case 0:
        return GardeenfantSell(servicIconSize);
      case 1:
        return SoutienscolaireSell(servicIconSize);
      case 2:
        return AccompagnementenfantsSell(servicIconSize);
      case 3:
        return PersonnesageesSell(servicIconSize);
      case 4:
        return AnimalsSell(servicIconSize);
      case 5:
        return InformatiqueSell(servicIconSize);
      case 6:
        return AministrativeSell(servicIconSize); 
      case 7:
        return EntretienSell(servicIconSize);
      case 8:
        return JardinageSell(servicIconSize);
      case 9:
        return PreparationrepasSell(servicIconSize);
      case 10:
        return RepassageSell(servicIconSize);
      case 11:
        return LivraisonachatsSell(servicIconSize);
      case 12:
        return TransportSells(servicIconSize);
      case 13:
        return SoinsdomicileSell(servicIconSize); 
      }
  }
  else if (belongto==1){
    switch(catrgory) {
      case 0:
        return GardeenfantSell(servicIconSize);
      case 1:
        return SoutienscolaireSell(servicIconSize);
      case 2:
        return AccompagnementenfantsSell(servicIconSize);
      case 3:
        return AnimalsSell(servicIconSize);
      case 4:
        return InformatiqueSell(servicIconSize);
      case 5:
        return AministrativeSell(servicIconSize);
      case 6:
        return EntretienSell(servicIconSize); 
      case 7:
        return JardinageSell(servicIconSize); 
      case 8:
        return RepassageSell(servicIconSize); 
      case 9:
        return TransportSells(servicIconSize);
      case 10:
        return SoinsdomicileSell(servicIconSize);

    }
  }
  else {
    switch(catrgory) {
      case 0:
        return Fetesell(servicIconSize);
      case 1:
        return AperoSell1(servicIconSize);
      case 2:
        return SpectacleSell(servicIconSize);
      case 3:
        return RencontreSell(servicIconSize);
      case 4:
        return RepasSell(servicIconSize);
      case 5:
        return AtelierSell(servicIconSize);
  }
}
}

const renderimgneed = (belongto,catrgory) => {
  // console.log(belongto,"====================",catrgory);
  if (belongto==0){
    switch(catrgory) {
      case 0:
        return Gardeenfant(servicIconSize);
      case 1:
        return Soutienscolaire(servicIconSize);
      case 2:
        return Accompagnementenfants(servicIconSize);
      case 3:
        return Personnesagees(servicIconSize);
      case 4:
        return Animals(servicIconSize);
      case 5:
        return Informatique(servicIconSize);
      case 6:
        return Aministrative(servicIconSize); 
    }
  }
  else {
    switch(catrgory) {
      case 0:
        return Entretien(servicIconSize);
      case 1:
        return Bricolage(servicIconSize);
      case 2:
        return Outillage(servicIconSize);
      case 3:
        return Jardinage(servicIconSize);
      case 4:
        return Preparationrepas(servicIconSize);
      case 5:
        return Repassage(servicIconSize);
      case 6:
        return Livraisonachats(servicIconSize); 
      case 7:
        return TransportNeed(servicIconSize); 
      case 8:
        return Soinsdomicile(servicIconSize); 
    }
  }

}

const renderimgorganize= (catrgory) => {
  
    switch(catrgory) {
      case 0:
        return Feteorg(servicIconSize);
      case 1:
        return Aperoorg(servicIconSize);
      case 2:
        return Spectacleorg(servicIconSize);
      case 3:
        return Rencontreorg(servicIconSize);
      case 4:
        return Repasorg(servicIconSize);
      case 5:
        return Atelierorg(servicIconSize);
    
  }}

  const renderimggive= (catrgory) => {
  
    switch(catrgory) {
      case 0:
        return Objetdiversgive(servicIconSize);
      case 1:
        return Meublegive(servicIconSize);
      case 2:
        return Hightechgive(servicIconSize);
      case 3:
        return Educationgive(servicIconSize);
      case 4:
        return Vetementsgive(servicIconSize);
      case 5:
        return Repasgive(servicIconSize);
      case 6:
        return Alimentsgive(servicIconSize);
  }}




 

const FriendsMenuScreen = () => {
   const [loading, setLoading]= useState(true)
  const [datas, setData] = useState([]);
  const [datasSell, setDataSell] = useState([]);
  const [datasOrganize, setDataOrganize] = useState([]);
  const [datasGive, setDataGive] = useState([]);


    useEffect(() => {
   
      fetchallDemand().then((item) => {
          if (item !== undefined) {
            // console.log("fetchhhhhhhhh=======give",item);
            setData(()=> item)
          }
        })
        
      }, [])
     
  useEffect(() => {

    if (datas.length > 0) {
      setLoading(false)
    }

  },[datas])

  return (<>

  {loading ? <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
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
        }}         loadingEnabled = {true}
         loadingIndicatorColor="#666666"
         loadingBackgroundColor="#eeeeee"
         moveOnMarkerPress = {false}
         showsUserLocation={true}
         showsCompass={true}
         showsPointsOfInterest = {false}
         >
        {datas.map((location,i) => 
         PositionView(location,i  ))
 }
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

const PositionView = (location,i) => (

  <Marker
    key={location.key}
    coordinate={{
      latitude: location.coordinate.latitude,
      longitude:location.coordinate.logitude
      }}

      onPress={() => {
        if (location.serviceType.code == 0) {
          Actions.myOrganize({ data: location, user: location.user, docId: location.key });

        }
       else if (location.serviceType.code == 1) {
          Actions.myGive({ data: location, user: location.user, docId: location.key });
        } else if (location.serviceType.code == 2) {
          Actions.mySell({ data: location, user: location.user, docId: location.key });

        }
        
        else if (location.serviceType.code == 3) {
          Actions.myNeed({ data: location, user: location.user, docId: location.key });

        }
        // console.log("kfkfkfkfk,riv,ototototot",location.key);
        // }
      }}
      
      >

    {
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
      <View style={getTextStyle(location.serviceType.code)}>
        <Image source={require('../assets/images/sample_user_2.png')} style={{ marginLeft: 2 * em, width: 36 * em, height: 36 * em }} />
      
      
        <View style={{ marginRight: 8.83 * em }}>
           {/* { this.renderSwitch(location.category.id)} */}
           {/* {
      {
         0: Animals(servicIconSize),
        1: Interview(servicIconSize)
      }[location.category.id]
    } */}
    {
    // console.log(location.belongsTo),
    location.serviceType.code === 0 ?
    renderimgorganize(location.category.id) :
    location.serviceType.code === 1 ?
    renderimggive(location.category.id)
  :location.serviceType.code === 2 ?
  renderimgSell(location.belongsTo.id,location.category.id):
  renderimgneed(location.belongsTo.id,location.category.id)

  }
         
           </View>
      </View>
    </View> 
   }
  </Marker>

);
const getTextStyle = (catrgory) => {
  switch(catrgory) {
    case 0:
          return{
            zIndex: 1,
            position: 'absolute', marginTop: 5 * hm,
            marginRight: 2 * em,
            marginLeft: 2 * em,
            marginBottom: 2 * hm,
            width: 72 * em,
            height: 30 * hm,
            borderRadius: 18 * em,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(253, 198, 65, 0.2)'
        }
    case 1:
      return {
        zIndex: 1,
        position: 'absolute', marginTop: 5 * hm,
        marginRight: 2 * em,
        marginLeft: 2 * em,
        marginBottom: 2 * hm,
        width: 72 * em,
        height: 30 * hm,
        borderRadius: 18 * em,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(214, 248, 241, 0.2)'      }
    case 2:
      return{
        zIndex: 1,
        position: 'absolute', marginTop: 5 * hm,
        marginRight: 2 * em,
        marginLeft: 2 * em,
        marginBottom: 2 * hm,
        width: 72 * em,
        height: 30 * hm,
        borderRadius: 18 * em,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(170, 135, 229, 0.2)'
      }
      case 3:
        return{
          zIndex: 1,
          position: 'absolute', marginTop: 5 * hm,
          marginRight: 2 * em,
          marginLeft: 2 * em,
          marginBottom: 2 * hm,
          width: 72 * em,
          height: 30 * hm,
          borderRadius: 18 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(56, 194, 255, 0.2)'
        }
        
  }
 }

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
