import React from 'react';
import { View,Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, HEIGHT, hm, WIDTH } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
import { Bonplan, Event, Promo } from '../../assets/svg/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const sellItems = [
 
  {
    id: 0,
    itemName: 'Un événement',
    icon: Event(iconSize) ,

    onPress: () => {

  Actions.mabulCommonRequestDetail({ mabulService: 'sell', process: 67 }) 
    },
  },
  {
    id: 1,
    itemName: 'Une promo',
    // itemName: 'Service',
    icon: Promo(iconSize) ,
    onPress: () => {
      Actions.mabulSellService({ process: 46 });
    },
  },
  {
    id: 2,
    itemName: 'Un Bon plan',
    // itemName: 'Objet',
    icon: Bonplan(iconSize) ,
    onPress: () => {
      Actions.mabulSellService({ process: 46 });
    },
  },
  
];
const MabulSellScreen = (props) => {
  const dispatch = useDispatch()

  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      noIcons={true}
      percent={0}
      // onPress={() =>dispatch(add_into_demand({ type: item }))}
      onPress={() => {

        item.id === 0 ? 
        (
        dispatch(add_into_demand({ belongsTo: { name: "Évènement", id: item.id } })),
        dispatch(update_into_demand({ category: { name: item.itemName, id: item.id } })))
          : item.id === 1 ? dispatch(add_into_demand({ belongsTo: { name: "Promo", id: item.id } }))
            : dispatch(update_into_demand({ belongsTo: { name: "Bon plan", id: item.id } }));
        item.onPress()
      }}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader
      isNoBackBtn={true} 
        style={styles.header}
        percent={props.process}
        // noBackButton={true}
        progressBarColor={'#AA87E5'}
      />
      <View style={styles.body}>
        <TitleText text={'Je vends'} style={styles.title} />
        <Text style={{fontFamily:'Lato-Regular',fontSize:14*em,color:'#6A8596'}}>Choisis dans quelle catégorie se trouve ton don</Text>

        <FlatList data={sellItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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
export default MabulSellScreen;
