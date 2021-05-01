import React from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { Apero, Meet, Meal, Show, Party, WorkshpIcon } from '../../assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const themeData = [
  { id: 0, icon: Party(iconSize), themeName: 'Fête' },
  { id: 1, icon: Apero(iconSize), themeName: 'Apéro' },
  { id: 2, icon: Show(iconSize), themeName: 'Spectacle' },
  { id: 3, icon: Meet(iconSize), themeName: 'Rencontre' },
  { id: 4, icon: Meal(iconSize), themeName: 'Repas' },
  { id: 5, icon: WorkshpIcon(iconSize), themeName: 'Atelier' },
];
const MabulOrganizeScreen = ({ process }) => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.themeName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => {
        Actions.mabulCommonRequestDetail({ mabulService: 'organize', process: 40 });
      }}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} noBackButton progressBarColor={'#FDC641'} />
      <View style={styles.body}>
        <TitleText text={'J’organise'} style={styles.title} />
        <FlatList data={themeData} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 16 * hm,
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    paddingLeft: WIDTH * 0.08,
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 35 * hm,
    marginBottom: 18 * hm,
  },
  listItem: { width: 345 * em, marginTop: 25 * hm },
};

export default MabulOrganizeScreen;
