import React from 'react';
import { View } from 'react-native';
import { em, hm } from '../../../../constants/consts';
import { FlatList } from 'react-native';
import ProfileCommonNeedCard from '../../../../adapter/ProfileCommonNeedCard';
import { Actions } from 'react-native-router-flux';
import SellServiceType from '../../../../model/service/SellServiceType';
import SellService from '../../../../model/service/SellService';

const needsLists = [
  new SellService(
    'La belle coiffure',
    'Je vends Évènement',
    'Atelier de soin de cheveux',
    '04 Fév · 25 Mars',
    require('../../../../assets/images/sample_cover_15.png'),
    1,
    SellServiceType.EVENT,
    '15,00 €'
  ),
];
const ProEventsTabScreen = () => {
  const renderFlatList = ({ item }) => (
    <ProfileCommonNeedCard data={item} style={styles.listItem} onPress={() => Actions.proSell({ data: item })} />
  );
  const listView = (
    <FlatList
      data={needsLists}
      renderItem={renderFlatList}
      keyExtractor={(i) => i.id}
      style={{ paddingTop: 25 * em, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
    />
  );
  return <View style={styles.container}>{listView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
    paddingTop: 10 * hm,
  },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * em, width: 315 * em },
};

export default ProEventsTabScreen;
