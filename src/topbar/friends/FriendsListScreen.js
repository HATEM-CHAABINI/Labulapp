import React from 'react';
import { View, FlatList } from 'react-native';
import { em, hm } from 'view/common/const';
import OrganizeService from 'model/service/OrganizeService';
import User from 'model/user/User';
import OrganizeServiceType from 'model/service/OrganizeServiceType';
import FriendListCard from 'view/components/adapter/FriendListCard';
import ServiceType from 'model/service/ServiceType';
import { Actions } from 'react-native-router-flux';
import NeedService from 'model/service/NeedService';
import NeedServiceType from 'model/service/NeedServiceType';
import GiveService from 'model/service/GiveService';
import SellService from 'model/service/SellService';
import SellServiceType from 'model/service/SellServiceType';
import NeedStatusType from 'model/service/NeedStatusType';
import RelationshipType from 'model/user/RelationshipType';
import { AlertRed, Computer } from 'assets/svg/icons';
const friends = [
  Object.assign(
    new NeedService(
      new User(
        'Amandine Bernard',
        require('assets/images/sample_user_1.png'),
        [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
        'anton@gmail.com'
      ),
      'J’ai besoin Service Bricolage',
      'Réparer une chaise',
      new Date(),
      require('assets/images/sample_cover_2.png'),
      3,
      NeedServiceType.REPAIR
    ),
    { status: null }
  ),
  Object.assign(
    new NeedService(
      new User(
        'Amandine Bernard',
        require('assets/images/sample_user_2.png'),
        [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
        'anton@gmail.com'
      ),
      'J’ai besoin Service Bricolage',
      'Réparer une chaise',
      new Date(),
      require('assets/images/sample_cover_3.png'),
      3,
      NeedServiceType.CARPOOL
    ),
    { status: NeedStatusType.CANCELED }
  ),
  Object.assign(
    new SellService(
      'Arbre de vie',
      'Je vends Bon plan',
      'Spray cuisine 100% Bio',
      '04 Fév · 08h00',
      require('assets/images/sample_cover_4.png'),
      1,
      SellServiceType.PLANT,
      '5,00 €'
    )
  ),
  Object.assign(
    new NeedService(
      new User(
        'Pierre Legrand',
        require('assets/images/sample_user_1.png'),
        [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
        'anton@gmail.com'
      ),
      'J’ai besoin Service Bricolage',
      'iPhoneX 256Go comme neuf',
      null,
      (
        <View
          style={{
            backgroundColor: '#EEE7FA', marginTop:15*hm,
            width: '100%',
            height: 85 * hm,
            borderRadius: 15 * hm,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Computer width={39 * em} height={35 * em} />
        </View>
      ),
      1,
      NeedServiceType.REPAIR_DEVICE,
      '560,00 €'
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new OrganizeService(
      new User(
        'Philippe Durand',
        require('assets/images/sample_user_2.png'),
        [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
        'anton@gmail.com'
      ),
      'J’organise Atelier',
      'Photographie vintage',
      new Date(),
      require('assets/images/sample_cover_1.png'),
      1,
      OrganizeServiceType.WORKSHOP
    ),
    { status: null }
  ),
  Object.assign(
    new SellService(
      'La belle coiffure',
      'Je vends Promotion',
      'Coiffure et soin keratine',
      '04 Fév · 08h00',
      require('assets/images/sample_cover_6.png'),
      1,
      SellServiceType.BEAUTY,
      '5,00 €',
      '15,00 €',
      '(Jusqu’au 25 Fév)'
    ),
    { status: null }
  ),
  Object.assign(
    new GiveService(
      new User(
        'Antoine Durand',
        require('assets/images/sample_user_2.png'),
        [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
        'anton@gmail.com'
      ),
      '',
      'Route barré',
      null,
      (
        <View
          style={{
            marginTop:15*hm,
            backgroundColor: '#FBEAEE',
            width: '100%',
            height: 85 * hm,
            borderRadius: 15 * hm,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AlertRed width={43 * em} height={37 * em} />
        </View>
      ),
      '77 Boulevard Amedee Clara Le Gosier'
    ),
    { status: null }
  ),
  Object.assign(
    new NeedService(
      new User(
        'Sarah Dupont',
        require('assets/images/sample_user_1.png'),
        [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
        'anton@gmail.com'
      ),
      'J’ai besoin Service Bricolage',
      'Nourriture vegan',
      null,
      require('assets/images/sample_cover_7.png'),
      1,
      NeedServiceType.VEGAN_FOOD
    ),
    { status: NeedStatusType.WAITING }
  ),
];

const FriendsListScreen = () => {
  const renderFlatList = ({ item, index }) => (
    <FriendListCard
      key={(Date.now() + parseInt(Math.random() * 100000000)).toString()}
      style={[styles.card, { marginBottom: index === friends.length - 1 ? 120 * hm : 15 * hm }]}
      data={item}
      onPress={() => {
        if (item.type === ServiceType.ORGANIZE) {
          Actions.friendOrganize({ detail: item });
        } else {
          if (item.type !== ServiceType.SELL) {
            Actions.friendNeed({ detail: item });
          } else {
            Actions.friendSell({ detail: item });
          }
        }
      }}
      onAvatarPress={() => Actions.userProfile()}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
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
    paddingTop: 128 * hm,
  },
  card: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    alignSelf: 'center',
    borderRadius: 10 * em,
    marginBottom: 15 * hm,
  },
};

export default FriendsListScreen;
