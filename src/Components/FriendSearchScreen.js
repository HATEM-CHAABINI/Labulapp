// import React, { useState } from 'react';
// import { View } from 'react-native';
// import { em, hm } from '../constants/consts';
// import SearchBox from '../Search/SearchBox';
// import { FlatList } from 'react-native-gesture-handler';
// import SearchCommonListItem from '../adapter/SearchCommonListItem';
// import FriendCommonHeader from '../topbar/FriendCommonHeader';
// import User from '../model/user/User';
// import RelationshipType from '../model/user/RelationshipType';
// import { TouchableOpacity, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';

// const users = [
//   new User(
//     'Amandine Bernard',
//     require('../assets/images/avatar.png'),
//     [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
//     'user@labul.com'
//   ),
//   new User('Amélie Petit', require('../assets/images/avatar.png'), [RelationshipType.NEIGHBOR], 'user@labul.com'),
//   new User('Antoine Durand', require('../assets/images/avatar.png'), [RelationshipType.NEIGHBOR], 'user@labul.com'),
//   new User('Robert Dupont', require('../assets/images/avatar.png'), '', 'user@labul.com'),
//   new User('Julien Girar', require('../assets/images/avatar.png'), '', 'user@labul.com'),
// ];

// const FriendsSearchScreen = (props) => {
//   const [searchedUsers, getSearchResult] = useState(true);
//   const renderFlatList = ({ item }) => (
//     <SearchCommonListItem
//       text={item.name}
//       subText={item.relationship ? item.relationship.join('/') : undefined}
//       icon={item.photo}
//       style={styles.listItem}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       {/* <FriendCommonHeader title="Rechercher" /> */}
//       <View style={{ backgroundColor: 'white' }}>
//         <View style={{ paddingTop: hm * 40, paddingLeft: em * 30 }}>
//           <TouchableOpacity
//             onPress={() => Actions.pop()}>
//             <Fleche />
//           </TouchableOpacity>
//         </View>
//         <Text style={{ paddingTop: hm * 22, paddingLeft: em * 30, color: '#1E2D60', fontSize: 34 * em, fontFamily: 'lato-black' }}>Rechercher</Text>

//       </View>
//       <SearchBox
//         style={styles.searchbox}
//         onChangeText={(text) => {
//           if (text) {
//             getSearchResult(users);
//           } else {
//             getSearchResult([]);
//           }
//         }}
//       />
//       <FlatList data={searchedUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     alignItems: 'flex-start',
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     marginLeft: 30 * em,
//     marginBottom: 35 * hm,
//   },
//   searchbox: { marginTop: 25 * hm, height: 44 * hm, width: 315 * em, marginLeft: 30 * em, marginRight: 30 * em },
//   listItem: {
//     height: 42 * hm,
//     marginTop: 25 * hm,
//     paddingHorizontal: 30 * em,
//     width: 315 * em,
//   },
// };

// export default FriendsSearchScreen;




import React, { useEffect, useState } from 'react';
import { View,Image } from 'react-native';
import { em, hm } from '../constants/consts';
import SearchBox from '../Search/SearchBox';
import SearchCommonListItem from '../adapter/SearchCommonListItem';
import User from '../model/user/User';
import RelationshipType from '../model/user/RelationshipType';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native';



const FriendsSearchScreen = (props) => {
  const [search, setSearch] = useState([]);
  const [searchall, setSearchall] = useState([]);
  const [searched, setSearched] = useState('');

  useEffect(() => {

    firestore().collection('users').get().then(querySnapshot => {

      setSearch(
        querySnapshot.docs.map((doc) => ({ data: doc.data() }))
      )
      setSearchall(
        querySnapshot.docs.map((doc) => ({ data: doc.data() }))
      )
    });
  }, [])

  const RenderFlatList = ({ item }) => {
    return (
      <SearchCommonListItem
        text={item.data.firstName + " " + item.data.lastName}
        subText={item.data.email}
        icon={item.data.profilePic !== undefined && item.data.profilePic !== " " ? { uri: item.data.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }}
        style={styles.listItem}
        onPress={() => console.log("Click")
        }
      />
    )
  };
  const serchFilter = (text) => {
    if (text) {
      const newData = searchall.filter((item) => {
        const itemData = item.data.firstName ? item.data.firstName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      });
      setSearch(newData);
      setSearched(text);
    }
    else {
      setSearch([]);
      setSearched(text);
    }

  }
  const listView2 = (
    <>
      {search.map((item, index) => {
        return <RenderFlatList item={item} />
      })}
    </>
  );
  return (
    <>
      <View style={styles.container}>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ paddingTop: hm * 50, paddingLeft: em * 30 }}>
            <TouchableOpacity
              onPress={() => Actions.pop()}>
              <Fleche />
            </TouchableOpacity>
          </View>
          <Text style={{ paddingTop: hm * 22, paddingLeft: em * 30, color: '#1E2D60', fontSize: 30 * em, fontFamily: 'lato-black' }}>Rechercher un contact</Text>
        </View>
        <SearchBox
          style={styles.searchbox}
          value={searched}
          onChangeText={(text) => serchFilter(text)}
        />
        <ScrollView showsVerticalScrollIndicator={false}><View style={styles.container}>{listView2}</View></ScrollView>
        <Image source={require('../assets/img/robotlupe.png')} style={styles.avatar} />
      </View>
    </>
  );
};

const styles = {
  avatar:{
    height:322*hm,
    width:188*em,
    position: "absolute", bottom: 0, right: 0,
 

  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  title: {
    marginLeft: 30 * em,
    marginBottom: 35 * hm,
  },
  searchbox: { marginTop: 25 * hm, height: 44 * hm, width: 315 * em, marginLeft: 30 * em, marginRight: 30 * em },

  listItem: {
    height: 48 * hm,
    marginTop: 25 * hm,
    paddingHorizontal: 30 * em,
    width: 370 * em,
  },


};

export default FriendsSearchScreen;