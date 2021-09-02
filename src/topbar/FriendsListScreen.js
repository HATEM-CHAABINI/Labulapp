import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { em, hm } from '../constants/consts';
import OrganizeService from '../model/service/OrganizeService';
import User from '../model/user/User';
import OrganizeServiceType from '../model/service/OrganizeServiceType';
import FriendListCard from './FriendListCard';
import ServiceType from '../model/service/ServiceType';
import { Actions } from 'react-native-router-flux';
import NeedService from '../model/service/NeedService';
import NeedServiceType from '../model/service/NeedServiceType';
import GiveService from '../model/service/GiveService';
import SellService from '../model/service/SellService';
import SellServiceType from '../model/service/SellServiceType';
import NeedStatusType from '../model/service/NeedStatusType';
import RelationshipType from '../model/user/RelationshipType';
import { AlertRed, Computer } from '../assets/svg/icons';



const FriendsListScreen = (props) => {
  const navigation = props.navigation;

  const [loading, setLoading] = useState(props.loading)
  const [datas, setData] = useState(props.data);
  //  console.log('props.data...............',props.data)
  useEffect(() => {
    setLoading(props.loading)
    setData(props.data)
  }, [props.loading, props.data])

  const renderFlatList = ({ item, index }) => (
    <FriendListCard
      key={item.key}
      style={[styles.card, { marginBottom: index === datas.length - 1 ? 120 * hm : 15 * hm }]}
      data={item}
      onPress={() => {
        if (item.serviceType.name==="alerts"){
          Actions.myAlert({ alertData: item, data2: item, user: item.user, docId: item.key })
  
        }
        else if (item.serviceType.code == 0) {
          Actions.myOrganize({ data: item, user: item.user, docId: item.key });
  
        }
        else if (item.serviceType.code == 1) {
          Actions.myGive({ data: item, user: item.user, docId: item.key });
        } else if (item.serviceType.code == 2) {
          Actions.mySell({ data: item, user: item.user, docId: item.key });
  
        }
  
        else if (item.serviceType.code == 3) {
          Actions.myNeed({ data: item, user: item.user, docId: item.key });
  
        }
      }}
    />
  );
  if (loading) {
    return (
      <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0F5F7',
      }} />
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={datas}
        renderItem={renderFlatList}
        keyExtractor={(i) => i.id}
        style={{ paddingTop: 35 * hm, paddingBottom: 100 * hm }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
    paddingTop: 100 * hm,
  },
  card: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    alignSelf: 'center',
    borderRadius: 25 * em,
    marginBottom: 15 * hm,
  },
};

export default FriendsListScreen;
