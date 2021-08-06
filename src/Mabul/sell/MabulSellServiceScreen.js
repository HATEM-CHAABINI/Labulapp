import React from 'react';
import { View,Text} from 'react-native';
import TitleText from '../../text/TitleText';
import { em, HEIGHT, WIDTH, hm } from '../../constants/consts';
import { FlatList } from 'react-native';
import MabulCommonListItem from '../../adapter/MabulCommonListItem';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
import {
  AnimalSell,
  BeautyCareSell,
  GardeningSell,
  HouseWorkSell,
  IroningSell,
  SchoolSupportSell,
  SupportChildrenSell,
  ChildCareSell,
  TransportSell,
  ComputerSell,
  AdministrativeSell,
  HelpOlderSell,
  Objet,
  Services,
  ProduitAl,
  BienEtre,
  Divers,
} from '../../assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };
const giveItems = [
  { id: 0, itemName: 'Un objet', icon: Objet(iconSize) },
  { id: 1, itemName: 'Un Service', icon: Services(iconSize) },
  { id: 2, itemName: 'Des Produits alimentaires', icon: ProduitAl(iconSize) },
  { id: 3, itemName: 'Du Bien-être', icon: BienEtre(iconSize) },
  { id: 4, itemName: 'Divers', icon: Divers(iconSize) },
  ];
const MabulSellServiceScreen = (props) => {
  const dispatch = useDispatch()

  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      subText={item.comment}
      icon={item.icon}
      // onPress={() => Actions.mabulCommonRequestDetail({ mabulService: 'sell', process: 67 })}
      onPress={() => { dispatch(update_into_demand({ category: { name: item.itemName, id: item.id } })), Actions.mabulCommonRequestDetail({ mabulService: 'sell', process: 67 }) }}
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
        <TitleText text={'Je vends'} style={styles.title} />
        <Text style={{fontFamily:'Lato-Regular',fontSize:14*em,color:'#6A8596'}}>Choisis dans quelle catégorie se trouve ton don</Text>

        <View style={styles.popView}>
          <FlatList data={giveItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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
export default MabulSellServiceScreen;
