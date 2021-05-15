import React, { useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBox';
import MabulCommonHeader from '../../Components/header/MabulCommonHeader';
import CommonButton from '../../Components/button/CommonButton';
import { AlertWhite } from '../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';
import CheckBox from '../../Components/checkbox/CheckBox';
import CommonListItem from '../../adapter/CommonListItem';

const usersList = [
  { id: 0.1, userName: 'Tous',tous:true },
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

  const [optionCheck, setOptionCheck] = useState();  const [checked, setChecked] = useState(new Array(usersList.length).fill(false));
  const renderCircleList = ({ item, index }) => {
if (item.tous){
  return (
    <CommonListItem
    
    
    style={styles.listItem}
      title={item.userName}
      titleStyle={{ color: '#1E2D60', fontFamily: 'Lato-Bold',fontSize:16*em }}
      rightView={
        <CheckBox
          oval
          red
          isChecked={checked[index]}
          onClick={() => {
            const arr = [...checked];
            arr[index] = !arr[index];
            setChecked(arr);
          }}
        />
      }
    />
  );
}
  else{    


    return (
      <CommonListItem
      
      icon={   <Image source={item.avatar} style={{ width: 40 * em, height: 40 * em, marginRight: 15 * em }} />}
      style={styles.listItem}
        title={item.userName}
        titleStyle={{ color: '#1E2D60', fontFamily: 'Lato-Bold',fontSize:16*em }}
        rightView={
          <CheckBox
            oval
            red
            isChecked={checked[index]}
            onClick={() => {
              const arr = [...checked];
              arr[index] = !arr[index];
              setChecked(arr);
            }}
          />
        }
      />
    );}
  };
  
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Partager avec'} style={styles.title} />
        <SearchBox style={styles.searchBox} comment="Rechercher un contact" smallText="Rechercher un contact" />
        <FlatList data={usersList} renderItem={renderCircleList} keyExtractor={(i) => i.id} style={{ marginTop: 70 * hm }} />
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

  listItem: { width:'90%',marginBottom: 35 * hm },
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
