import React from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, HEIGHT, WIDTH } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
const sellItems = [
  {
    id: 0,
    itemName: 'Service',
    onPress: () => {
      Actions.mabulSellService({ process: 46 });
    },
  },
  {
    id: 1,
    itemName: 'Object',
    onPress: () => {
      Actions.mabulSellObject({ process: 46 });
    },
  },
  {
    id: 2,
    itemName: 'Évènement',
    onPress: () => {
      Actions.mabulSellEnvironment({ process: 46 });
    },
  },
];
const MabulSellScreen = (props) => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      noIcons={true}
      percent={0}
      onPress={() => item.onPress()}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} noBackButton progressBarColor={'#AA87E5'} />
      <View style={styles.body}>
        <TitleText text={'Je vends'} style={styles.title} />
        <FlatList data={sellItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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
    height: '10.3%',
  },
  body: {
    flex: 1,
    paddingLeft: WIDTH * 0.08,
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 35 * em,
    marginBottom: 18 * em,
  },
  listItem: {
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulSellScreen;
