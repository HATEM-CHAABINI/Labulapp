import React from 'react';
import { View } from 'react-native';
import { em, hm } from '../../../constants/consts';
import { FlatList } from 'react-native';
import ProfileCommonNeedCard from '../../../adapter/ProfileCommonNeedCard';
import { Actions } from 'react-native-router-flux';
import NeedService from '../../../model/service/NeedService';
import NeedServiceType from '../../../model/service/NeedServiceType';
import OrganizeService from '../../../model/service/OrganizeService';
import User from '../../../model/user/User';
import OrganizeServiceType from '../../../model/service/OrganizeServiceType';
import ServiceType from '../../../model/service/ServiceType';
import NeedStatusType from '../../../model/service/NeedStatusType';

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
  //   const [isEmpty, setIsEmpty] = useState(true);
  //   const emptyView = (
  //     <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
  //       <CircleDraw
  //         radius={17.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', left: 103.85 * em }}
  //       />
  //       <CircleDraw
  //         radius={8.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', top: 17.31 * em, left: 190.35 * em }}
  //       />
  //       <Image style={styles.msgIcon} />
  //       <CommonText text={'Tu n’as pas de messages'} color={'#6A8596'} style={styles.msgTxt} />
  //       <CommentText
  //         text={'Parle que si tu participes dans une demande sur Labul, la messagerie est dédiée qu’au demandes'}
  //         color={'#6A8596'}
  //         style={styles.explainTxt}
  //       />
  //     </TouchableOpacity>
  //   );
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
  const listView = (
    <FlatList
      data={needsLists}
      renderItem={renderFlatList}
      keyExtractor={(i) => i.id}
      style={{ paddingTop: 25 * hm, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
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
  listItem: { marginBottom: 15 * hm, width: 315 * em },
};

export default MyNeedsTabScreen;
