import React from 'react';
import { View, FlatList } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand } from '../../redux/actions/demand'
import { Main, MobileBlue, NeedFamily, Outil, Service } from '../../assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const needItems = [
  { id: 0, itemName: 'D’un coup de main', icon: Main(iconSize), },
  { id: 1, itemName: 'D’un service',icon: Service(iconSize), },
  { id: 2, itemName: 'D’un outil' ,icon: Outil(iconSize),},
];

const MabulNeedScreen = (props) => {
  const dispatch = useDispatch()

  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => {
        dispatch(add_into_demand({ type: item }))
        Actions.mabulNeedSort({ title: item.itemName, process: 11.2 });
      }}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} noBackButton progressBarColor={'#38C2FF'} />

      <View style={styles.body}>
        <TitleText text={'J’ai besoin'} style={styles.title} />
        <FlatList data={needItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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
    marginBottom: 18 * hm,
  },
  listItem: { width: 345 * em, marginTop: 25 * hm },

};

export default MabulNeedScreen;
