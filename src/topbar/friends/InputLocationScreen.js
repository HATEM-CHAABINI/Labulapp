import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Dimensions, } from 'react-native';
import { em, hm } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBox';
import CommentText from '../../text/CommentText';
import SearchCommonListItem from '../../adapter/SearchCommonListItem';
import FriendCommonHeader from '../../Components/header/FriendCommonHeader';
import SearchBoxLieu from '../../Components/other/SearchBoxLieu';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import GooglePlacesInput from '../../Components/GooglePlacesInput'
import { google_api } from '../../constants/consts'
Geocoder.init(google_api);

const InputLocationScreen = () => {
  const [searchedUsers, getSearchResult] = useState('');
  const [text,setText]=useState('')
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <TouchableOpacity   onPress={() => {
      setText(item.location);
     
    }} >
    <SearchCommonListItem
  
      location
      text={item.location}
      subText={item.comment}
      icon={item.ic_location}
      style={styles.listItem}
    />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FriendCommonHeader upperTitle="Filtrer" title="Lieu" />
      <View style={styles.ActionWrapper}>
      <GooglePlacesInput
              placeholder={"Rechercher par ville"}
              containerStyle={{
                backgroundColor: 'white',
                width: "100%",

              }}
              TextBtn={"Utiliser ma position"}
              borderBottomColor={'#41D0E2'}
              style={{ width: '80%', }}
              show={true}
              showadd={false}
              
              textInputStyle={{
                color: '#6A8596',
                fontSize: 16 * em,
                fontFamily: 'Lato-Regular',
              }}
              myLocationStyle={{ marginTop:25*hm,right:150*em }}
              myLocationIconColor={{color:'#40CDDE'}}
              myLocationColor={'#40CDDE'}
              value={text}

              changedValue={(val) => {
                console.log(val.adresse);
                setText(val)
               
              }}
            />
</View>
     </View>
  );
};

const styles = {
  ActionWrapper: {

    alignItems: "center",
    // paddingStart: 15*hm,
    paddingTop: 20 * hm,
    width: em * 375,
    height: Dimensions.get('window').height,
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    borderBottomEndRadius: 0 * em,
    borderBottomStartRadius: 0 * em,
    backgroundColor: "rgba(255, 255, 255, 255)"

  },
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
