import React from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
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

const MabulFamilyNeedScreen = (props) => {
  const dispatch = useDispatch()
  // const { demandData } = useSelector((state) => state.demandReducer);

  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      subText={item.subName}
      icon={item.icon}
      onPress={() => { dispatch(update_into_demand({ category: { name: item.itemName, id: item.id } })), Actions.mabulCommonRequestDetail({ mabulService: 'need', process: 40, }) }}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={false} progressBarColor={'#38C2FF'} />
      <View style={styles.body}>
        <TitleText text={'Besoin de'} style={styles.title} />
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

export default MabulFamilyNeedScreen;
