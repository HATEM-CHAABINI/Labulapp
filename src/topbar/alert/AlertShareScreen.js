import React from 'react';
import { View, FlatList } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBox';
import SearchCommonListItem from '../../adapter/SearchCommonListItem';
import MabulCommonHeader from '../../Components/header/MabulCommonHeader';
import CommonButton from '../../Components/button/CommonButton';
import { AlertWhite } from '../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';

const usersList = [
  { id: 0.1, userName: 'Tous' },
  {
    id: 0,
    userName: 'Amandine Bernard',
    avatar: require('../../assets/images/avatar.png'),
    invited: true,
  },
  {
    id: 1,
    userName: 'Amélie Petit',
    avatar: require('../../assets/images/avatar.png'),
    invited: false,
  },
  {
    id: 2,
    userName: 'Antoine Durand',
    avatar: require('../../assets/images/avatar.png'),
    invited: true,
  },
  {
    id: 3,
    userName: 'Robert Dupont',
    avatar: require('../../assets/images/avatar.png'),
    invited: true,
  },
  {
    id: 4,
    userName: 'Julien Girard',
    avatar: require('../../assets/images/avatar.png'),
    invited: true,
  },
];
const AlertShareScreen = (props) => {
  const conceptColor = '#F9547B';
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} icon={item.avatar} style={styles.listItem} option />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Partager avec'} style={styles.title} />
        <SearchBox style={styles.searchBox} comment="Rechercher par ville" />
        <FlatList
          data={usersList}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 25 * em }}
        />
        <CommonButton
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="J’alerte"
          textStyle={{ marginLeft: 12.52 * em }}
          leftIcon={<AlertWhite width={27.21 * em} height={22.03 * em} />}
          onPress={() => Actions.myAlert()}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  commonHeader: { marginTop: 27 * hm },
  title: {
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
  },
  searchBox: { marginTop: 35 * hm, height: 52 * hm },
  location: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    alignItems: 'center',
    flexDirection: 'row',
  },

  listItem: { marginTop: 35 * hm },
  btn: {
    width: 315 * em,
    alignSelf: 'center',
    marginBottom: 30 * hm,
  },
};

export default AlertShareScreen;
