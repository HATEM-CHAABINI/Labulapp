import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { em, hm } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBox';
import CommentText from '../../text/CommentText';
import SearchCommonListItem from '../../adapter/SearchCommonListItem';
import FriendCommonHeader from '../../Components/header/FriendCommonHeader';
const InputLocationScreen = () => {
  const [searchedUsers, getSearchResult] = useState('');
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem
      location
      text={item.location}
      subText={item.comment}
      icon={item.ic_location}
      style={styles.listItem}
    />
  );
  return (
    <View style={styles.container}>
      <FriendCommonHeader upperTitle="Filtrer" title="Lieu" />
      <SearchBox
        style={styles.searchBox}
        comment="Rechercher par ville"
        onChangeText={(text) => {
          if (text) {
            getSearchResult([
              { id: 0, location: 'Le Gosier' },
              { id: 1, location: 'Gosier Guadeloupe' },
              { id: 2, location: 'Beaumanoir, Le Gosier', comment: 'Route de Beaumanoir, Le Gosier' },
            ]);
            setlocationViewVisible('none');
          } else {
            getSearchResult([]);
            setlocationViewVisible('flex');
          }
        }}
      />
      <View style={[styles.location, { display: locationViewVisible }]}>
        {/* <LocationBlue width={16 * hm} height={19 * hm} /> */}
        <CommentText text={'Utiliser ma position'} color="#40CDDE" style={{ marginTop: 5 * em }} />
      </View>

      <FlatList
        data={searchedUsers}
        renderItem={renderFlatList}
        keyExtractor={(i) => i.id}
        style={{ marginTop: 25 * hm }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  header: { height: 131 * hm },
  commonHeader: { marginTop: 27 * hm },
  title: {
    fontSize: 34 * hm,
    lineHeight: 38 * hm,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 30 * em,
    height: 40 * hm,
    marginTop: 10 * hm,
  },
  searchBox: { marginTop: 25 * hm, width: 315 * em, marginLeft: 30 * em, height: 52 * hm },
  location: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    alignItems: 'center',
  },
  listItem: {
    marginTop: 35 * hm,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    width: 315 * em,
  },
};

export default InputLocationScreen;
