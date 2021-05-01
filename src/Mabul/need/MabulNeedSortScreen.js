import React from 'react';
import { View,FlatList } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { NeedDaily, NeedFamily } from '../../assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };
const needItems = [
  {
    id: 0,
    itemName: 'Besoin de la famille',
    subName: 'Enfants/ Soutien scolaire/Aide aux personnes âgées/ Animaux de compagnie/ Informatique…',
    icon: NeedFamily(iconSize),
    onPress: () => {
      Actions.mabulFamilyNeed({ process: 15 });
    },
  },
  {
    id: 1,
    itemName: 'Besoin de vie quotidienne',
    subName: 'Maison/ Livraison/ Repas/ Repassage/ Achats de Courses/ Transport/ Co-voiturage/ Soins…',
    icon: NeedDaily(iconSize),
    onPress: () => {
      Actions.mabulDailyNeed({ process: 15 });
    },
  },
];
const MabulNeedSortScreen = (props) => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      subText={item.subName}
      icon={item.icon}
      onPress={() => item.onPress()}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={false}
        progressBarColor={'#38C2FF'}
      />
      <View style={styles.body}>
        <TitleText text={'J’ai besoin\n' + props.title} style={styles.title} />
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
    marginTop: 16 * em,
  },
  header: { height: 81 * hm },
  popView: {
    paddingLeft: 30 * em,
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  body: { flex: 1, alignItems: 'flex-start', backgroundColor: '#F0F5F7' },
  title: { lineHeight: 38 * em, paddingLeft: 30 * em, marginVertical: 35 * em, textAlign: 'left' },
  listItem: { width: 345 * em, marginTop: 25 * hm },
};

export default MabulNeedSortScreen;
