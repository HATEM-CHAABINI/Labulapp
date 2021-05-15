import React from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import {
  ChildCare,
  SupportChildren,
  SchoolSupport,
  HelpOlder,
  Animal,
  ComputerBlue,
  MealPreparation,
} from '../../assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };
const needItems = [
  { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: ChildCare(iconSize) },
  { id: 1, itemName: 'Soutien scolaire/ cours', icon: SchoolSupport(iconSize) },
  { id: 2, itemName: 'Accompagnement des enfants', icon: SupportChildren(iconSize) },
  {
    id: 3,
    itemName: 'Aide aux personnes âgées',
    subName: '(promenades, transports, actes de la vie courante)',
    icon: HelpOlder(iconSize),
  },
  {
    id: 4,
    itemName: 'Animaux de compagnie',
    subName: 'Soins et promenades',
    icon: Animal(iconSize),
  },
  { id: 5, itemName: 'Informatique/ Internet', icon: ComputerBlue(iconSize) },
  { id: 6, itemName: 'Administrative', icon: MealPreparation(iconSize) },
];

const MabulFamilyNeedScreen = () => {
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
        <TitleText text={'J’ai besoin \ncoup de main pour'} style={styles.title} />
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
    // marginTop: 16 * em,
  },
  header: { 
    
    height: '10.3%',
     marginTop: 16 * hm,
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

export default MabulFamilyNeedScreen;
