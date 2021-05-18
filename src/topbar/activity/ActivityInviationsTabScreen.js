import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import CircleDraw from '../../Components/view/CircleDraw';
import CommentText from '../../text/CommentText';
import { Actions } from 'react-native-router-flux';
import AvatarWithBadge from '../../Components/view/AvatarWithBadge';
import CommonListItem from '../../adapter/CommonListItem';
import Message from '../../model/message/Message';
import User from '../../model/user/User';
import { Groupe, Trace,Trace2 } from '../../assets/svg/icons';

const invitationMessages = [
  new Message(
    new User('Joseph Martin', require('../../assets/images/avatar.png')),
    'Nettoyage de ma voiture',
    require('../../assets/images/sample_cover_3.png'),
    'Salut ! Je t’invite à participer à Nettoyage de ma voiture.',
    false,
    '21:59'
  ),
  new Message(
    new User('Amandine Bernard', require('../../assets/images/avatar.png')),
    'Nettoyage de ma voiture',
    require('../../assets/images/sample_cover_2.png'),
    'Salut ! Je t’invite à participer à Nettoyage de ma voiture.',
    true,
    '21:59'
  ),
];

const ActivityInviationsTabScreen = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(false)}>
  
  <View style={{ position: 'absolute', left: 103.85 * em }}>
        <Trace width={22 * em} height={22 * hm} />
      </View>


        <View style={{ position: 'absolute', top: 10* hm, left: 190.35 * em }}>
        <Trace2 width={22 * em} height={22 * hm} />
      </View>

<View style={styles.msgIcon}>
        <Groupe width={37 * em} height={37 * hm} />
      </View>
      {/* <Image style={styles.msgIcon} /> */}
      <CommonText text={'Tu n’as pas d’invitations'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Ne t’inquiètes pas, quelqu’un de tes cercles t’invitera bientôt. Regarde les demandes autour de toi'}
        color={'#6A8596'}
        style={styles.explainTxt}
      />
    </TouchableOpacity>
  );
  const renderFlatList = ({ item }) => (
    <CommonListItem
      title={item.user.name}
      titleStyle={styles.listItemUserName}
      subTitle={item.lastText}
      subTitleStyle={styles.listItemComment}
      // comment={item.lastText}
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
            {/* <Image source={require('assets/images/ic_circle_pink.png')} style={{display:'none'}} /> */}
          </View>
        )
      }
      onPress={() => Actions.activityMessage({ activityType: 'invitation', message: item })}
    />
  );
  const listView = <FlatList data={invitationMessages} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;
  return (
    <View style={styles.container}>
      <View style={styles.view}>{isEmpty ? emptyView : listView}</View>
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#F0F5F7', paddingTop: 10 * hm },
  view: { flex: 1, backgroundColor: '#ffff', width: '100%', paddingTop: 25 * hm, paddingHorizontal: 30 * em },
  alertIcon: { display: 'none', width: 1 * em, height: 1 * em, resizeMode: 'contain' },
  emptyView: {
    marginTop: 74 * em,
    width: 315 * em,
    alignSelf: 'center',
  },
  msgIcon: { marginTop: 13.15 * em, alignSelf: 'center' },

  msgTxt: { fontFamily: 'Lato-Black', fontSize: 16 * em, marginTop: 15 * hm, textAlign: 'center', lineHeight: 23 * em },
  explainTxt: {
    fontFamily: 'Lato-Regular',
    fontSize: 14 * em,
    marginTop: 10 * hm,
    lineHeight: 23 * em,
    width: 289 * em,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listItem: {
    marginBottom: 35 * hm,
    width: 315 * em,
  },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * em, fontFamily: 'Lato-Black' },
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * em, width: 260 * em },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemLastText: { marginTop: 6 * hm, marginLeft: 55 * em, textAlign: 'left' },
};

export default ActivityInviationsTabScreen;
