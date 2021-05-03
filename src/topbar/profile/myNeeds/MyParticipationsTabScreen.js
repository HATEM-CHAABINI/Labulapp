import React from 'react';
import { View } from 'react-native';
import { em, hm } from '../../../constants/consts';
import { FlatList } from 'react-native';
import ProfileCommonNeedCard from '../../../adapter/ProfileCommonNeedCard';
import { Actions } from 'react-native-router-flux';
import NeedService from '../../../model/service/NeedService';
import NeedServiceType from '../../../model/service/NeedServiceType';
import User from '../../../model/user/User';
import OrganizeServiceType from '../../../model/service/OrganizeServiceType';
import NeedStatusType from '../../../model/service/NeedStatusType';
import OrganizeService from '../../../model/service/OrganizeService';

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
const MyParticipationsScreen = () => {

  const renderFlatList = ({ item, index }) => (
    <ProfileCommonNeedCard
      data={item}
      style={[styles.listItem, { marginBottom: paricipationLists.length === index + 1 ? 50 * hm : 15 * hm }]}
      onPress={() => {
        Actions.friendNeed({ detail: item });
      }}
    />
  );
  const listView = (
    <FlatList
      data={paricipationLists}
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
  listItem: { marginBottom: 15 * em },
};

export default MyParticipationsScreen;
