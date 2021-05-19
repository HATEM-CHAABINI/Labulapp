import React from 'react';
import { View ,FlatList} from 'react-native';
import TitleText from '../../text/TitleText';
import { em, HEIGHT, WIDTH } from '../../constants/consts';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import {
  HouseWork,
  BricologeIcon,
  Tool,
  Gardening,
  MealPreparation,
  Ironing,
  Transport,
  Delivery,
  BeautyCare,
} from '../../assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const needItems = [
  { id: 0, itemName: 'Entretien de la maison/ travaux ménagers', icon: HouseWork(iconSize) },
  { id: 1, itemName: 'Bricolage', icon: BricologeIcon(iconSize) },
  { id: 2, itemName: 'Outillage', icon: Tool(iconSize) },
  { id: 3, itemName: 'Jardinage/ élagage', icon: Gardening(iconSize) },
  { id: 4, itemName: 'Préparation/ Livraison repas', icon: MealPreparation(iconSize) },
  { id: 5, itemName: 'Repassage', icon: Ironing(iconSize) },
  { id: 5, itemName: 'Livraison/ Achat de courses', icon: Delivery(iconSize) },
  { id: 5, itemName: 'Transport/ Co-voiturage', icon: Transport(iconSize) },

  { id: 5, itemName: 'Soins d’esthétique à domicile', icon: BeautyCare(iconSize) },
];

const MabulDailyNeedScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      subText={item.subName}
      icon={item.icon}
      onPress={() => Actions.mabulCommonRequestDetail({ mabulService: 'need', process: 40 })}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={false} progressBarColor={'#38C2FF'} />
      <View style={styles.body}>
        <TitleText text={'J’ai besoin coup de main pour'} style={styles.title} />
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
  header: {
    height: '12.45%',

  },
  popView: {
    paddingLeft: WIDTH * 0.08,
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    backgroundColor: '#ffffff',
    paddingBottom: 163 * em,
  },
  body: {
    flex: 1,

    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
  },
  title: {
    marginLeft: 30 * em,
    marginTop: 35 * em,
    marginBottom: 35 * em,
    lineHeight: 35 * em,
    width: 186 * em,
    height: 71 * em,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  listItem: {
    height: HEIGHT * 0.09,
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulDailyNeedScreen;
