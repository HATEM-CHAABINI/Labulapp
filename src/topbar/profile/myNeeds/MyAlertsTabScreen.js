import React, { useState, useEffect } from 'react';
import { View,ActivityIndicator , Image, Text } from 'react-native';
import { em, hm, WIDTH, HEIGHT } from '../../../constants/consts';
import { FlatList } from 'react-native';
import CommonListItem from '../../../adapter/CommonListItem';
import { Actions } from 'react-native-router-flux';
import { AlertRed } from '../../../assets/svg/icons';
const alertList = [{ name: 'Alerte travaux', comment: 'Route de Mare Gaillard Guadeloupe' }];
import { fetchAlerts, getUserProfile } from '../../../services/firebase'
import auth from "@react-native-firebase/auth";
const MyAlertsTabScreen = () => {
  const [alerts, setalerts] = useState([])
  const [user, setuser] = useState()

  const [loadingData, setloadingData] = useState(true)

  useEffect(() => {

    fetchAlerts().then(async (item) => {
    //  console.log('priteshitem',item)
      if (item !== undefined) {
      setalerts(() =>item)
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
    if (alerts.length > 0) {
      setloadingData(false)
    }

  }, [alerts])

  const renderFlatList = ({ item }) => (

    <CommonListItem
      style={styles.listItem}
      // title={item.name}
       title={item}
      titleStyle={styles.titleStyle}
      subTitleStyle={styles.subTitleStyle}
      // subTitle={item.comment}
      subTitle={item}
      icon={
        <View style={styles.alertIconContainer}>
          <AlertRed width={50 * em} height={50 * em} />
        </View>
      }
      onPress={() => Actions.myAlert()}
    />
  );
  const listView = (
    <FlatList
      data={alertList}
      renderItem={renderFlatList}
      keyExtractor={(i) => i.id}
      style={{ flex: 1, width: '100%', paddingTop: 25 * em, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
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
  const renderFlatList2 = ({ item }) => (

    <CommonListItem
      style={styles.listItem}
     title={item.data.type.title} 
      titleStyle={styles.titleStyle}
      subTitleStyle={styles.subTitleStyle}
      subTitle={item.data.description}
      icon={
        <View style={styles.alertIconContainer}>
          <AlertRed width={50 * em} height={50 * em} />
        </View>
      }
      onPress={() => Actions.myAlert({ alertData:item.data, user: user ,docId:item.docId})}
    /> 
  );
  const listView2 = (
    <FlatList
      data={alerts}
      renderItem={renderFlatList2}
      ListEmptyComponent={renderEmptyContainer}
      keyExtractor={(i) => i.id}
      style={{ flex: 1, width: '100%', paddingTop: 25 * em, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
    />
  );

  return (<>
    {/* <View style={styles.container}>{listView}</View> */}
    {loadingData ? <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F0F5F7',
    }} /> :<View style={styles.container}>{listView2}</View>}
  </>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
    paddingTop: 10 * hm,
  },
  titleStyle: { fontSize: 14 * em, color: '#1E2D60', lineHeight: 22 * em, marginTop: 15 * em, marginBottom: 9 * em, fontFamily: 'Lato-Black' },
  subTitleStyle: { color: '#A0AEB8', lineHeight: 16 * em, marginBottom: 21 * em, fontFamily: 'Lato-Medium', fontSize: 14 * em },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * em, width: '100%' },
  alertIconContainer: {
    width: 95 * em,
    height: 95 * em,
    borderRadius: 20 * em,
    backgroundColor: '#FEE0E7',
    marginRight: 15 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MyAlertsTabScreen;
