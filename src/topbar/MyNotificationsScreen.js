import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { em, hm } from '../constants/consts';



const MyNotificationsScreen = () => {
  const [isEmpty, setIsEmpty] = useState(true);

 
  return (
    <View style={styles.container}>
           <Text>MyNotificationsScreen</Text>

    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#EDF2F5',
  },
  notificationIcon1: { position: 'absolute', left: 103.85 * em, transform: [{ rotate: '45deg' }] },
  notificationIcon2: { position: 'absolute', top: 17.31 * hm, left: 190.35 * em, transform: [{ rotate: '-45deg' }] },
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginBottom: 10 * hm,
  },
  notificationBtn: { alignSelf: 'flex-end', marginRight: 30 * em, marginTop: 39 * hm },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * hm,
    marginBottom: 25 * hm,
  },
  body: {
    backgroundColor: '#ffffff',
    width: '100%',
    flex: 1,
    paddingHorizontal: 30 * em,
    paddingTop: 25 * hm,
  },
  emptyView: {
    marginTop: 109 * hm,
    width: 315 * em,
    // height: 148.15 * em,
    alignSelf: 'center',
  },
  msgIcon: { marginTop: 13.15 * hm, alignSelf: 'center' },
  msgTxt: {
    marginTop: 15 * hm,
    textAlign: 'center',
    // fontFamily: 'Lato-Black',
    lineHeight: 23 * em,
  },
  explainTxt: {
    marginTop: 10 * hm,
    lineHeight: 23 * em,
    width: 289 * em,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listItem: { marginBottom: 35 * hm, width: '100%' },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * em
  // , fontFamily: 'Lato-Black' 
},
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * em },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemNotification: { marginLeft: 55 * em, textAlign: 'left', color: '#1E2D60' },
};

export default MyNotificationsScreen;
