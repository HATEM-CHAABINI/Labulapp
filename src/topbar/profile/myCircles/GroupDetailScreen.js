import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CirclesCommonListItem from '../../../adapter/CirclesCommonListItem';
import CommonBackButton from '../../../Components/button/CommonBackButton';
import { em, hm } from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
import { myContacts } from './MyCirclesTabScreen';
import UserOptionPopupScreen from './UserOptionPopupScreen';

const GroupDetailScreen = (props) => {
 
  const [userOptionVisible, setUserOptionVisible] = useState(null);
  const renderFlatList = ({ item, index }) => {
    // if (item.groupID && item.groupID.includes(props.data.id)) {
      return (
        <CirclesCommonListItem
          name={`${item.data.firstName} ${item.data.lastName}`}
          subName={item.data.RelationshipType}
          icon={item.data.profilePic !== undefined && item.data.profilePic !== " " ?
          { uri: item.data.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }} 
          style={[styles.listItem, { marginBottom: index === myContacts.length - 1 ? 100 * hm : 35 * hm }]}
          onPress={() => setUserOptionVisible(item.data)}
        />
      );
    // }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CommonBackButton dark />
        <CommonText text={props.data.groupName} style={styles.headerTitle} />
      </View>
      <FlatList data={props.data.users} renderItem={renderFlatList} keyExtractor={(i) => i.id} style={styles.body} />
      <UserOptionPopupScreen data={userOptionVisible} onPress={() => setUserOptionVisible(null)} />
    </View>
  );
};
export default GroupDetailScreen;
const styles = {
  container: { flex: 1, backgroundColor: '#F0F5F7' },
  listItem: {
    height: 42 * hm,
    marginBottom: 35 * hm,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    width: 315 * em,
  },
  body: { backgroundColor: '#ffffff', paddingTop: 35 * hm },
  header: {
    paddingLeft: 15 * em,
    height: 81 * hm,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10 * hm,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingTop:20*hm
  },
  headerTitle: { marginLeft: 10 * em, fontSize: 18 * em, color: '#1E2D60' },
};
