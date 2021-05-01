import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import TitleText from '../../../../text/TitleText';
import { em, hexToRGB, hm } from '../../../../constants/consts';
import CommentText from '../../../../text/CommentText';
import CommonText from '../../../../text/CommonText';
import CommonButton from '../../../../Components/button/CommonButton';
import CommonBackButton from '../../../../Components/button/CommonBackButton';
import SmallText from '../../../../text/SmallText';
import { Actions } from 'react-native-router-flux';
import SellServiceType from '../../../../model/service/SellServiceType';
import SellService from '../../../../model/service/SellService';
import SeeMore from 'react-native-see-more-inline';
import FriendInvitePopupScreen from '../../../friends/popup/FriendInvitePopupScreen';

const ProSellScreen = (props) => {
  const [data] = useState(props.data);
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={data.coverImage} style={styles.cover} />

        <View style={styles.body}>
          <Image source={require('../../../../assets/images/avatar_curology.png')} style={styles.icon} />
          <CommentText style={styles.itemName} text="Curology" color={'#1E2D60'} />
          <CommentText style={styles.comment} text={data.slogan} color={'#1E2D60'} />
          <TitleText text={data.comment} style={styles.title} />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 * hm }}>
            <CommonText text={data.price} style={styles.price} color="#1E2D60" />
            <SmallText text={data.date} color="#A0AEB8" />
          </View>
          <SeeMore
            numberOfLines={4}
            seeLessText="Voir moins"
            seeMoreText="Continuer à lire"
            style={styles.content}
            linkColor="#40CDDE">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, ssed diam voluptua. At vero eos dsfsdfwefwef
          </SeeMore>
          <CommonButton
            style={styles.quizBtn}
            text="Modifier"
            textStyle={{ color: '#41D0E2' }}
            onPress={() => Actions.editProNeed()}
          />
          <CommonButton
            style={styles.inviteBtn}
            text="Partager"
            textStyle={{ color: '#41D0E2' }}
            onPress={() => setInvitePopupVisible(true)}
          />
          <View style={{ height: 130 * em }} />
        </View>
      </ScrollView>
      <CommonBackButton dark style={styles.backBtnView} />
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  backBtnView: {
    backgroundColor: '#ffffff',
    zIndex: 1,
    width: 44 * em,
    height: 44 * em,
    position: 'absolute',
    left: 15 * em,
    top: 27 * em,
    shadowColor: '#B3C6CF33',
    shadowOffset: {
      width: 0,
      height: 20 * em,
    },
    shadowOpacity: 1,
    shadowRadius: 40 * em,
    elevation: 3,
  },
  backBtn: { width: 44 * em, height: 44 * em, resizeMode: 'contain', zIndex: 1 },
  cover: { width: '100%', height: 312 * em },
  body: {
    marginTop: -41 * hm,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 30 * em,
  },
  icon: { width: 61 * hm, height: 61 * hm, marginTop: -30.5 * hm, alignSelf: 'center' },
  itemName: {
    marginTop: 5 * hm,
    height: 22 * em,
    fontSize: 18 * em,
    lineHeight: 23 * em,
    textAlign: 'left',
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
  },
  avatarBox: { width: 42 * em, flexDirection: 'row' },
  avatar: { width: 35.82 * em, height: 35.82 * em },
  badge: {
    backgroundColor: '#FFF4D9',
    borderRadius: 20 * em,
    width: 21 * em,
    height: 21 * em,
    marginLeft: -14.82 * em,
    alignSelf: 'flex-end',
    borderWidth: 2 * em,
    borderColor: '#ffffff',
  },
  comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginTop: 21 * hm },
  title: {
    height: 28 * em,
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginTop: 5 * hm,
    marginBottom: 10 * hm,
  },
  price: {
    fontSize: 18 * em,
    lineHeight: 21 * em,
    height: 21 * em,
    textAlign: 'left',
    textAlignVertical: 'center',
    marginRight: 10 * em,
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  quizBtn: { marginTop: 25 * em, backgroundColor: hexToRGB('#41D0E2', 0.2) },
  inviteBtn: { marginTop: 15 * em, backgroundColor: 'transparent', color: '#41D0E2' },
  content: {
    fontSize: 16 * em,
    // backgroundColor: 'red',
    color: '#6A8596',
    lineHeight: 25 * em,
    textAlign: 'left',
    fontFamily: 'Lato-Regular',
  },
};

export default ProSellScreen;
