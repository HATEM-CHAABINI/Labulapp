import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBox';
import SearchCommonListItem from '../../adapter/SearchCommonListItem';
import MabulCommonHeader from '../../Components/header/MabulCommonHeader';
import CommonButton from '../../Components/button/CommonButton';
import { AlertWhite } from '../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';
import CheckBox from '../../Components/checkbox/CheckBox';

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

  const [optionCheck, setOptionCheck] = useState();
  const [checked, setChecked] = useState();

  const renderOptions = ({ item, index }) => {

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          checked === index ? styles.optionBoxClicked : styles.optionBox,
          { marginBottom: index === 2 ? 40 * em : 0 },
        ]}
        onPress={() => setChecked(index)}>
        {/* <TitleText style={styles.optionCaption} text={item.userName} /> */}
        <SearchCommonListItem text={item.userName} icon={item.avatar} style={styles.listItem} option />
        <CheckBox
          oval
          red
          single
          isChecked={checked === index}
          singleSelection={true}
          onClick={() => setChecked(index)}
        />
      </TouchableOpacity>
    );
  };
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} icon={item.avatar} style={styles.listItem} option />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Partager avec'} style={styles.title} />
        <SearchBox style={styles.searchBox} comment="Rechercher un contact" smallText="Rechercher un contact" />
        <FlatList data={usersList} renderItem={renderOptions} keyExtractor={(i) => i.id} style={{ marginTop: 29 * hm }} />
        {/* <FlatList
          data={usersList}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 29 * hm }}
        /> */}
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
  searchBox: { marginBottom: -35 * hm, marginTop: 15 * hm, height: 52 * hm },
  location: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    alignItems: 'center',
    flexDirection: 'row',
  },

  listItem: { marginBottom: 35 * hm },
  btn: {
    width: 315 * em,
    alignSelf: 'center',
    marginBottom: 30 * hm,
  },
  optionBox: {



  },
  optionBoxClicked: {




  },
  optionCaption: {
    fontSize: 18 * em,
    lineHeight: 23 * em,
    color: '#1E2D60',
  },
};

export default AlertShareScreen;
