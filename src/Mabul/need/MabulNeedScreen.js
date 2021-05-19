import React from 'react';
import { View ,FlatList} from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';

const needItems = [
  { id: 0, itemName: 'Coup de main' },
  { id: 1, itemName: 'Service' },
  { id: 2, itemName: 'Outil' },
];
const MabulNeedScreen = (props) => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => {
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
