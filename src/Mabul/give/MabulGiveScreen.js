import React from 'react';
import { View ,Text} from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, WIDTH } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { Aliments, Education, HighTech, Mebule, ObjetDrivers, Repas, Vetements } from '../../assets/svg/icons';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
import CommentText from '../../text/CommentText';
import CommonText from '../../text/CommonText';

const iconSize = { width: 38 * em, height: 38 * em };
const giveItems = [
  { id: 0, itemName: 'Objet divers', icon: ObjetDrivers(iconSize) },
  { id: 1, itemName: 'Meuble', icon: Mebule(iconSize) },
  { id: 2, itemName: 'High Tech', icon: HighTech(iconSize) },
  { id: 3, itemName: 'Education', icon: Education(iconSize) },
  { id: 4, itemName: 'Vêtements', icon: Vetements(iconSize) },
  { id: 5, itemName: 'Repas', icon: Repas(iconSize) },
  { id: 6, itemName: 'Aliments', icon: Aliments(iconSize) },
];
const MabulGiveScreen = (props) => {
  const dispatch = useDispatch() 
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() =>
     { dispatch(add_into_demand({ category: { name: item.itemName, id: item.id } })), Actions.mabulCommonRequestDetail({ mabulService: 'give', process: props.mabulService === 'give' ? 84 : 50 }) 
        // Actions.mabulCommonRequestDetail({ mabulService: 'give', process: props.mabulService === 'give' ? 84 : 50 })
      }}
    />
  );
  return (
    <View style={styles.container}>
    <MabulCommonHeader
      style={styles.header}
      percent={props.process}
      noBackButton={true}
      progressBarColor={'#34D9B8'}
      />
    <View style={styles.body}>
    <TitleText text={'Je donne'} style={styles.title} />
    <Text style={{fontFamily:'Lato-Regular',fontSize:14*em,color:'#6A8596'}}> Choisis dans quelle catégorie se trouve ton don </Text>
      <FlatList data={giveItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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
export default MabulGiveScreen;
