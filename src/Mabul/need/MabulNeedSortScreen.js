import React from 'react';
import { View, FlatList } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { NeedDaily, NeedFamily } from '../../assets/svg/icons';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
const iconSize = { width: 38 * em, height: 38 * em };
const needItems = [
  {
    id: 0,
    itemName: 'De la famille',
    subName: 'Enfants/ Soutien scolaire/Aide aux personnes âgées/ Animaux de compagnie/ Informatique…',
    icon: NeedFamily(iconSize),
    onPress: () => {
      Actions.mabulFamilyNeed({ process: 15 });
    },
  },
  {
    id: 1,
    itemName: 'De vie quotidienne',
    subName: 'Maison/ Livraison/ Repas/ Repassage/ Achats de Courses/ Transport/ Co-voiturage/ Soins…',
    icon: NeedDaily(iconSize),
    onPress: () => {
      Actions.mabulDailyNeed({ process: 15 });
    },
  },
];
const MabulNeedSortScreen = (props) => {

  const dispatch = useDispatch()
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      subText={item.subName}
      icon={item.icon}
      onPress={() => { item.onPress(), item.id === 0 ? dispatch(update_into_demand({ belongsTo: { name: "family", id: item.id } })) : dispatch(update_into_demand({ belongsTo: { name: "dailyUse", id: item.id } })) }}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} isNoBackBtn={false}
        progressBarColor={'#38C2FF'} />

      <View style={styles.body}>
        <TitleText text={'Type de besoin'} style={styles.title} />
        <View style={styles.popView}>
          <FlatList data={needItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    PaddingTop: 16 * hm,
  },
  header: {
    height: '12.45%',

  },
  body: {
    flex: 1,
    paddingLeft: WIDTH * 0.08,
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 35 * hm,
    marginBottom: 10 * hm,
  },
  listItem: {
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulNeedSortScreen;
