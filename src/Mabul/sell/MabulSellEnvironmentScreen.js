import React from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { AperoSell, MealSell, MeetSell, PartySell, ShowSell, WorkshopSell } from '../../assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const themeData = [
  { id: 0, icon: PartySell(iconSize), themeName: 'Fête' },
  { id: 1, icon: AperoSell(iconSize), themeName: 'Apéro' },
  { id: 2, icon: ShowSell(iconSize), themeName: 'Spectacle' },
  { id: 3, icon: MeetSell(iconSize), themeName: 'Rencontre' },
  { id: 4, icon: MealSell(iconSize), themeName: 'Repas' },
  { id: 5, icon: WorkshopSell(iconSize), themeName: 'Atelier' },
];
const MabulSellEnvironmentScreen = (props) => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.themeName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => Actions.mabulCommonRequestDetail({ mabulService: 'sell', process: 67 })}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={true}
        progressBarColor={'#AA87E5'}
      />
      <View style={styles.body}>
        <TitleText text={'Je vends\nÉvènement'} style={styles.title} />
        <View style={styles.popView}>
          <FlatList data={themeData} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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

export default MabulSellEnvironmentScreen;
