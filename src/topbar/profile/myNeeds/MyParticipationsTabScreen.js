import React,{useEffect,useState} from 'react';
import { View ,ScrollView, ActivityIndicator,Text} from 'react-native';
import { em, hm  ,WIDTH, HEIGHT} from '../../../constants/consts';
import { FlatList } from 'react-native';
import ProfileCommonNeedCard from '../../../adapter/ProfileCommonNeedCard';
import { Actions } from 'react-native-router-flux';
import NeedService from '../../../model/service/NeedService';
import NeedServiceType from '../../../model/service/NeedServiceType';
import User from '../../../model/user/User';
import OrganizeServiceType from '../../../model/service/OrganizeServiceType';
import NeedStatusType from '../../../model/service/NeedStatusType';
import OrganizeService from '../../../model/service/OrganizeService';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { fetchAlerts, getUserProfile } from '../../../services/firebase'

const paricipationLists = [
  Object.assign(
    new NeedService(
      new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’ai besoin coup de main bricolage',
      'Réparer une chaise',
      new Date(),
      require('../../../assets/images/sample_cover_2.png'),
      3,
      NeedServiceType.REPAIR
    ),
    { status: NeedStatusType.WAITING }
  ),
  Object.assign(
    new OrganizeService(
      new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’organise atelier',
      'Photographie vintage',
      new Date(),
      require('../../../assets/images/sample_cover_1.png'),
      1,
      OrganizeServiceType.WORKSHOP
    ),
    { status: NeedStatusType.PARTICPATED }
  ),
  Object.assign(
    new NeedService(
      new User('Mathieu Torin', require('../../../assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’ai besoin service bricolage',
      'Récolter des figues',
      new Date(),
      require('../../../assets/images/sample_cover_12.png'),
      3,
      NeedServiceType.REPAIR
    ),
    { status: NeedStatusType.REFUSED }
  ),
];

const MyParticipationsScreen = (props) => {

  const [participants, setParticipants] = useState([])
  const [loadingData, setloadingData] = useState(true)
  const [user, setuser] = useState()
  useEffect(() => {
    firestore().collection('userParticipants').doc(auth().currentUser.uid).collection('participate').onSnapshot(snapshot => {
      setParticipants(
        snapshot.docs.map((doc) => ({ data2: doc.data(), docId: doc.id }))
      )
    })
    getUserProfile(auth().currentUser.uid).then(async (item) => {
      setuser(() => item)
    })
    setloadingData(false)
  }, [])
  
  const RenderEmptyContainer = () => {
    return (<View style={{
      flex: 1,
      alignItems: 'center',
      minWidth: WIDTH,
      // right: '6%'
    }}>
      <Text style={{
        alignItems: 'center',
        fontSize: 18,
        marginTop: '3%'
      }}>
        No Data Found
</Text>
    </View>)
  }

  const RenderFlatList = ({ item, index }) => (
    console.log("hello item",item),
    <ProfileCommonNeedCard
      data={item}
      style={[styles.listItem,{marginBottom: paricipationLists.length === index + 1 ? 50 * hm : 15 * hm }]}
      onPress={() => {
        Actions.friendNeed({ detail: item });
      }}
    />
  );

  // const listView =(
  //   <FlatList
  //     data={paricipationLists}
  //     renderItem={renderFlatList}
  //     keyExtractor={(i) => i.id}
  //     style={{ paddingTop: 25 * em, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
  //   />
  // );

  const listView =(
    <>
      {participants.map((item) => {
        return <RenderFlatList item={item} />
      })}
    </>
  );

  // return <View style={styles.container}>{listView}</View>;
  return(<>
      {loadingData ? <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
       flex: 1,
       alignItems: 'center',
       backgroundColor: '#F0F5F7',
     }} /> : participants.length < 1 ? < RenderEmptyContainer /> : <ScrollView style={{ flex: 1, width: '100%', paddingTop: 25 * em, paddingHorizontal: 30 * em, backgroundColor: '#F0F5F7' }}>
       <View style={styles.container}>{listView}</View></ScrollView>}
  </> )
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
    paddingTop: 10 * hm,
  },
  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * em },
};

export default MyParticipationsScreen;
