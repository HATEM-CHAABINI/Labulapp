import React, { useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBoxAlert';
import CommentText from '../../text/CommentText';
import SearchCommonListItem from '../../adapter/SearchCommonListItem';
import MabulCommonHeader from '../../Components/header/MabulCommonHeader';
import MabulNextButton from '../../Components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
import { LocationRed } from '../../assets/svg/icons';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';

const AlertAddressScreen = (props) => {
  const conceptColor = '#F9547B';

  const [searchedUsers, getSearchResult] = useState('');
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} subText={item.address} icon={item.ic_location} style={styles.listItem} />
  );
  return (
    <View style={styles.container}>

      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />


      <View style={styles.body}>

        <TitleText text={'Où ?'} style={styles.title} />

        <SearchBox
          style={styles.searchBox}
          comment="Rechercher une addresse"
          onChangeText={() => {
            getSearchResult([
              {
                id: 0,
                userName: 'Le Gosier',
                ic_location: require('../../assets/images/ic_location.png'),
              },
              {
                id: 1,
                userName: 'Gosier Guadeloupe',
                ic_location: require('../../assets/images/ic_location.png'),
              },
              {
                id: 2,
                userName: 'Beaumanoir, Le Gosier',
                address: 'Route de Beaumanoir, Le Gosier',
                ic_location: require('../../assets/images/ic_location.png'),
              },
            ]);
            setlocationViewVisible('none');
          }}
        />
        <View style={[styles.location, { display: locationViewVisible }]}>
          {/* <LocationRed width={16 * em} height={19 * em} /> */}
          <CommentText text={'Utiliser ma position'} color="#F9547B" style={{ marginLeft: 10 * em }} />
        </View>
        {/*
        <FlatList
          data={searchedUsers}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 25 * hm }}
        /> */}
        {/* </View> */}

        <MabulNextButton
          color={conceptColor}
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="Suivant"
          onPress={() => Actions.alertAddNote({ process: 60 })}
        />

      </View>

    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#ffffff' },
  header: { height: '10.3%', alignItems: 'flex-start', },
  body: { flex: 1, width: '100%', paddingHorizontal: 30 * em, justifyContent: 'flex-start', alignItems: 'flex-start', },
  commonHeader: { marginTop: 27 * hm },
  title: { textAlign: 'left', marginTop: 35 * hm, lineHeight: 38 * em },
  searchBox: { marginTop: 16 * hm, height: 53 * em },
  location: { alignSelf: 'center', marginTop: 15 * hm, alignItems: 'center', flexDirection: 'row' },
  listItem: { height: 38 * hm, marginTop: 35 * hm },
  btn: {
    position: 'absolute',
    width: 163 * em,
    alignSelf: 'flex-end',
    bottom: 30 * hm,
    right: 30 * em,
    backgroundColor: '#38C2FF',
  },
};

export default AlertAddressScreen;
