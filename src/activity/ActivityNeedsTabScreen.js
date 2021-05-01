import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import CommentText from 'view/components/text/CommentText';
import { FlatList, TouchableOpacity } from 'react-native';
import CommonListItem from 'view/components/adapter/CommonListItem';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import { Actions } from 'react-native-router-flux';
import { MessageBackground, MessageGray } from 'assets/svg/icons';
import Message from 'model/message/Message';
import User from 'model/user/User';

const needMessages = [
  new Message(
    new User('Amandine Bernard', require('assets/images/avatar.png')),
    'Récolter des figues',
    require('assets/images/sample_cover_9.png'),
    'Bonjour Mathieu, je voudrai savoir si c…',
    false,
    '21:59'
  ),
  new Message(
    new User('Joseph Martin', require('assets/images/avatar.png')),
    'Récolter des figues',
    require('assets/images/sample_cover_9.png'),
    'Je vous remercie d’avance',
    true,
    'Lun'
  ),
  new Message(
    new User('Amélie Petit', require('assets/images/avatar.png')),
    'Universitaire',
    require('assets/images/sample_cover_10.png'),
    'D’accord, merci Mathieu',
    true,
    'Lun'
  ),
];

const ActivityNeedsTabScreen = (props) => {
  const [isEmpty, setIsEmpty] = useState(!props.route.params.selected);
  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
      <View style={{ position: 'absolute', left: 103.85 * em }}>
        <MessageBackground width={17.31 * em} height={17.31 * em} />
      </View>
      <View style={{ position: 'absolute', top: 17.31 * em, left: 190.35 * em, transform: [{ rotate: '270deg' }] }}>
        <MessageBackground width={8.31 * em} height={8.31 * em} />
      </View>

      <View style={styles.msgIcon}>
        <MessageGray width={37 * em} height={37 * em} />
      </View>
      <CommonText text={'Tu n’as pas de messages'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Parle que si tu participes dans une demande sur Labul, la messagerie est dédiée qu’aux demandes'}
        color={'#6A8596'}
        style={styles.explainTxt}
      />
    </TouchableOpacity>
  );
  const renderFlatList = ({ item }) => (
    <CommonListItem
      title={item.user.name}
      titleStyle={styles.listItemUserName}
      subTitle={item.service.title}
      subTitleStyle={styles.listItemComment}
      comment={item.lastText}
      commentStyle={[styles.listItemLastText, { color: item.checked ? '#6A8596' : '#40CDDE' }]}
      icon={
        <AvatarWithBadge
          avatar={item.user.photo}
          badge={item.service.coverImage}
          avatarDiameter={40 * em}
          badgeDiameter={22 * em}
          style={{ marginRight: 15 * em }}
        />
      }
      style={styles.listItem}
      rightView={
        item.checked ? (
          <CommentText text={item.date} style={styles.listItemDate} />
        ) : (
          <View>
            <CommentText text={item.date} style={styles.listItemDate} />
            <Image source={require('assets/images/ic_circle_pink.png')} style={styles.alertIcon} />
          </View>
        )
      }
      onPress={() => Actions.activityMessage({ activityType: 'needs', message: item })}
    />
  );
  const listView = <FlatList data={needMessages} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;
  return (
    <View style={styles.container}>
      <View style={styles.view}>{isEmpty ? emptyView : listView}</View>
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#F0F5F7', paddingTop: 10 * hm },
  view: { flex: 1, backgroundColor: '#ffff', width: '100%', paddingTop: 25 * hm, paddingHorizontal: 30 * em },
  emptyView: {
    marginTop: 74 * hm,
    width: 315 * em,
    alignSelf: 'center',
  },
  msgIcon: { marginTop: 13.15 * em, alignSelf: 'center' },
  msgTxt: {
    fontFamily: 'Lato-Black',
    marginTop: 15 * em,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 23 * em,
  },
  explainTxt: {
    marginTop: 10 * hm,
    lineHeight: 23 * em,
    width: 289 * em,
    textAlign: 'center',
    alignSelf: 'center',
  },
  alertIcon: {
    resizeMode: 'contain',
    tintColor: '#F9547B',
    width: 10 * em,
    height: 10 * em,
    alignSelf: 'flex-end',
    marginTop: 10 * hm,
    marginRight: 2 * em,
  },
  listItem: {
    marginBottom: 35 * hm,
    width: '100%',
  },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * em, fontFamily: 'Lato-Black' },
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * em },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemLastText: { marginTop: 6 * hm, marginLeft: 55 * em, textAlign: 'left' },
};

export default ActivityNeedsTabScreen;
