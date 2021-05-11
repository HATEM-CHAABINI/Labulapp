import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import CommentText from '../../text/CommentText';
import TitleText from '../../text/TitleText';
import { navigationRef } from '../RootNavigation';
import CommonListItem from '../../adapter/CommonListItem';
import AvatarWithBadge from '../../Components/view/AvatarWithBadge';
import { NotificationGray } from '../../assets/svg/icons';
import { NotificationBlue } from '../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';

const notificationUsers = [
  {
    id: 0,
    avatar: require('../../assets/images/avatar.png'),
    userName: 'Amandine Bernard',
    date: '21:59',
    comment: 'A besoin un coup de main :',
    notification: 'Réparer une chaise',
  },
  {
    id: 1,
    avatar: require('../../assets/images/avatar.png'),
    userName: 'Amandine Bernard',
    date: '21:59',
    comment: 'A besoin un coup de main :',
    notification: 'Réparer une chaise',
  },
  {
    id: 2,
    avatar: require('../../assets/images/avatar.png'),
    userName: 'Amandine Bernard',
    date: '21:59',
    comment: 'A besoin un coup de main :',
    notification: 'Réparer une chaise',
  },
];
const MyNotificationsScreen = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
      <View style={styles.notificationIcon1}>
        <NotificationGray width={17.31 * em} height={17.31 * em} />
      </View>
      <View style={styles.notificationIcon2}>
        <NotificationGray width={8.31 * em} height={8.31 * em} />
      </View>
      <View style={styles.msgIcon}>
        <NotificationGray width={37 * em} height={37 * em} />
      </View>
      <CommonText text={'Tu n’as pas encore de notifications'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Bientôt tu vas recevoir des propositions autour de toi'}
        color={'#6A8596'}
        style={styles.explainTxt}
      />
    </TouchableOpacity>
  );

  const renderFlatList = ({ item }) => (
    <CommonListItem
      title={item.userName}
      titleStyle={styles.listItemUserName}
      subTitle={item.comment}
      subTitleStyle={styles.listItemComment}
      comment={item.notification}
      commentStyle={styles.listItemNotification}
      icon={
        <AvatarWithBadge
          avatar={item.avatar}
          badge={item.badge}
          avatarDiameter={40 * em}
          badgeDiameter={22 * em}
          style={{ marginRight: 15 * em }}
        />
      }
      style={styles.listItem}
      rightView={<CommentText text={item.date} style={styles.listItemDate} />}
      onPress={() => Actions.friendNeed()}
    />
  );
  const listView = <FlatList data={notificationUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerTxtBtn}>
          <TouchableOpacity
            onPress={() => {
              navigationRef.current.navigate('Activity');
            }}>
            <View style={styles.notificationBtn}>
              <NotificationBlue width={19 * em} height={22 * em} />
            </View>
          </TouchableOpacity>
        </View>
        <TitleText text={'Mes notifications'} style={styles.title} />
      </View>
      <View style={styles.body}>{isEmpty ? emptyView : listView}</View>
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
    fontFamily: 'Lato-Black',
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
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * em, fontFamily: 'Lato-Black' },
  listItemComment: { fontFamily: 'Lato-Regular', color: '#A0AEB8', lineHeight: 18 * em },
  listItemDate: { fontFamily: 'Lato-Medium', color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemNotification: { fontFamily: 'Lato-Medium', marginLeft: 55 * em, textAlign: 'left', color: '#1E2D60' },
};

export default MyNotificationsScreen;
