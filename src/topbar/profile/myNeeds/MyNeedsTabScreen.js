import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
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
  const [loadingData, setloadingData] = useState(true)

  useEffect(() => {
    fetchDemands().then(async (item) => {
      if (item !== undefined) {
        setdemands(() => item)
        if (item.length === 0) {
          setloadingData(false)
        }
      }
    })
    getUserProfile(auth().currentUser.uid).then(async (item) => {

      setuser(() => item)
    })
  }, [])

  useEffect(() => {
    if (demands.length > 0) {
      setloadingData(false)
    }

  }, [demands])




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

  const renderFlatList2 = ({ item, index }) => (
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
  );

  const renderEmptyContainer = () => {
    return (<View style={{
      flex: 1,
      alignItems: 'center',
      minWidth: WIDTH,
      right: '5%'
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
    <FlatList
      data={demands}
      renderItem={renderFlatList2}
      ListEmptyComponent={renderEmptyContainer}
      keyExtractor={({ item, index }) => index}
      style={{ paddingTop: 25 * hm, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
    />

  );
  return (<>
    {/* <View style={styles.container}>{listView}</View> */}
    {loadingData ? <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F0F5F7',
    }} /> : <View style={styles.container}>{listView2}</View>}</>);
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
