import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, ScrollView } from 'react-native';
import { em, hm, WIDTH, HEIGHT } from '../../../constants/consts';
import { FlatList } from 'react-native';
import ProfileCommonNeedCard from '../../../adapter/ProfileCommonNeedCard';
import ProfileCommonNeedCard2 from '../../../adapter/ProfileCommonNeedCards2';
import { Actions } from 'react-native-router-flux';
import NeedService from '../../../model/service/NeedService';
import NeedServiceType from '../../../model/service/NeedServiceType';
import OrganizeService from '../../../model/service/OrganizeService';
import User from '../../../model/user/User';
import OrganizeServiceType from '../../../model/service/OrganizeServiceType';
import ServiceType from '../../../model/service/ServiceType';
import NeedStatusType from '../../../model/service/NeedStatusType';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { fetchDemands, getUserProfile } from '../../../services/firebase'

let dem = []

const needsLists = [
  Object.assign(
    new NeedService(
      new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’ai besoin coup de main bricolage',
      'Récolter des figues',
      new Date(),
      require('../../../assets/images/sample_cover_9.png'),
      3,
      NeedServiceType.REPAIR
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new OrganizeService(
      new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’organise apéro',
      'Récolter des figues',
      new Date(),
      require('../../../assets/images/sample_cover_10.png'),
      1,
      OrganizeServiceType.WORKSHOP
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new NeedService(
      new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'Coup de main Entretien de la maison/ travaux ménagers',
      'Récolter des figues',
      new Date(),
      require('../../../assets/images/sample_cover_11.png'),
      3,
      NeedServiceType.REPAIR
    ),
    { status: NeedStatusType.CANCELED }
  ),
];
const MyNeedsTabScreen = () => {

  const [data, setdata] = useState([])
  const [user, setuser] = useState()
  const [demands, setdemands] = useState([])
  const [need, setneed] = useState([])
  const [sell, setsell] = useState([])
  const [organize, setorganize] = useState([])
  const [give, setgive] = useState([])
  const [loadingData, setloadingData] = useState(true)


  useEffect(() => {


    firestore().collection('userDemands').doc(auth().currentUser.uid).collection('need').onSnapshot(snapshot => {
      setneed(
        snapshot.docs.map((doc) => ({ docId: doc.id, data: doc.data() }))
      )
    })

    firestore().collection('userDemands').doc(auth().currentUser.uid).collection('organize').onSnapshot(snapshot => {
      setorganize(
        snapshot.docs.map((doc) => ({ docId: doc.id, data: doc.data() }))
      )
    })

    firestore().collection('userDemands').doc(auth().currentUser.uid).collection('sell').onSnapshot(snapshot => {
      setsell(
        snapshot.docs.map((doc) => ({ docId: doc.id, data: doc.data() }))
      )
    })

    firestore().collection('userDemands').doc(auth().currentUser.uid).collection('give').onSnapshot(snapshot => {
      setgive(
        snapshot.docs.map((doc) => ({ docId: doc.id, data: doc.data() }))
      )
    })

    getUserProfile(auth().currentUser.uid).then(async (item) => {
      setuser(() => item)
    })
    setloadingData(false)
  }, [])

  useEffect(() => {
    if (give.length > 0 || need.length > 0 || sell.length > 0 | organize.length > 0) {
      setloadingData(false)
    }



  }, [need, sell, organize, give])






  const renderFlatList = ({ item, index }) => (
    <ProfileCommonNeedCard
      data={item}
      style={[styles.listItem, { marginBottom: needsLists.length === index + 1 ? 50 * hm : 15 * hm }]}
      onPress={() => {
        if (item.type === ServiceType.ORGANIZE) {
          Actions.myOrganize();
        } else {
          Actions.myNeed();
        }
      }}
    />
  );

  const RenderFlatList2 = ({ item, index }) => {

    return (
      <ProfileCommonNeedCard2
        data={item.data}
        style={[styles.listItem, { marginBottom: needsLists.length === index + 1 ? 50 * hm : 15 * hm }]}
        onPress={() => {
          if (item.data.type === ServiceType.ORGANIZE) {
            Actions.myOrganize();
          } else {
            Actions.myNeed({ data: item.data, user: user, docId: item.docId });
          }
        }
        }
      />
    )
  };

  const RenderEmptyContainer = () => {
    return (<View style={{
      flex: 1,
      alignItems: 'center',
      minWidth: WIDTH,

      backgroundColor: '#F0F5F7', justifyContent: 'center'
    }}>
      <Text style={{
        alignItems: 'center',
        fontSize: 18,

      }}>
        No Data Found
  </Text>
    </View>)
  }
  const listView = (
    <FlatList
      data={needsLists}
      renderItem={renderFlatList}
      keyExtractor={(i) => i.id}
      style={{ paddingTop: 25 * hm, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
    />

  );

  const listView2 = (
    <>
      {need.map((item, index) => {

        return <RenderFlatList2 item={item} key={index} />
      })}
      {sell.map((item, index) => {

        return <RenderFlatList2 item={item} key={index} />
      })}
      {organize.map((item, index) => {

        return <RenderFlatList2 item={item} key={index} />
      })}
      {give.map((item, index) => {

        return <RenderFlatList2 item={item} key={index} />
      })}


    </>

  );
  return (<>
    {/* <View style={styles.container}>{listView}</View> */}
    {loadingData ? <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F0F5F7',
    }} /> : give.length < 1 && need.length < 1 && sell.length < 1 && organize.length < 1 ? <RenderEmptyContainer /> : <ScrollView style={{ flex: 1, backgroundColor: '#F0F5F7', paddingHorizontal: '2%' }}><View style={styles.container}>{listView2}</View></ScrollView>}</>);
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
    paddingTop: 10 * hm,
  },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * hm, width: 315 * em },
};

export default MyNeedsTabScreen;
