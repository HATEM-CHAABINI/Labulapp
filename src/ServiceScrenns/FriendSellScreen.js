import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm } from '../constants/consts';
import CommentText from '../text/CommentText';
import CommonButton from '../Components/button/CommonButton';
import CommonBackButton from '../Components/button/CommonBackButton';
import FriendInvitePopupScreen from '../Components/FriendInvitePopupScreen';
import { Actions } from 'react-native-router-flux';
import NeedStatusType from '../model/service/NeedStatusType';
// import SeeMore from 'react-native-see-more-inline';
import ReadMore from 'react-native-read-more-text';
import { Text } from 'react-native';


const FriendSellScreen = () => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('../assets/images/sample_cover_2_big.png')} style={styles.cover} />

        <View style={styles.body}>
          <Image source={require('../assets/images/sample_ic_plant.png')} style={styles.icon} />
          <CommentText style={styles.itemName} text="Arbre de vie" color={'#1E2D60'} />
          <CommentText style={styles.comment} text="Je vends Objet Entretien de la maison" color={'#1E2D60'} />
          <TitleText text={'Spray cuisine 100% Bio'} style={styles.title} />
          <CommentText text={'5,00 €'} style={styles.price} color="#1E2D60" />
          <ReadMore


            numberOfLines={3}
            renderTruncatedFooter={this._renderTruncatedFooter}
            renderRevealedFooter={this._renderRevealedFooter}
          // onReady={this._handleTextReady}
          >


            <Text style={styles.content}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, ssed diam voluptua. At vero eos dsfsdfwefwef
        </Text>
          </ReadMore>
          <CommonButton
            style={styles.quizBtn}
            text="Intéressé"
            onPress={() => Actions.friendNeed({ status: NeedStatusType.WAITING })}
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

_renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{ color: '#40CDDE', fontSize: 14 * em }} onPress={handlePress}>
      Continuer à lire    </Text>
  );
}

_renderRevealedFooter = (handlePress) => {
  return (
    <Text style={{ color: '#40CDDE', fontSize: 14 * em }} onPress={handlePress}>
      Voir moins
    </Text>
  );
}
const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  backBtnView: {
    shadowColor: '#B3C6CF33',
    shadowOffset: {
      width: 0,
      height: 20 * em,
    },
    shadowOpacity: 1,
    shadowRadius: 40 * em,
    elevation: 3,
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: 15 * em,
    top: 27 * hm,
  },

  backBtn: { width: 44 * em, height: 44 * em, resizeMode: 'contain', zIndex: 1 },
  cover: {
    width: '100%',
    height: 312 * em,
  },
  body: {
    marginTop:41 * em,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 30 * em,
  },
  icon: {
    width: 61 * em,
    height: 61 * em,
    marginTop: -30.5 * hm,
    alignSelf: 'center',
  },
  itemName: {
    marginTop: 5 * hm,
    fontSize: 18 * em,
    lineHeight: 23 * em,
    textAlign: 'left',
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontFamily: 'Lato-Black',
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
    fontFamily: 'Lato-Black',
    marginBottom: 10 * hm,
  },
  price: { fontSize: 18 * em, lineHeight: 21 * em, height: 21 * em, textAlign: 'left', textAlignVertical: 'center' },
  contentBox: { flexDirection: 'row', justifyContent: 'flex-start' },
  content: {
    fontSize: 16 * em,
    color: '#6A8596',
    lineHeight: 25 * em,
    textAlign: 'left',
    marginTop: 3 * hm,
    // fontFamily: 'Lato-Regular',
  },
  quizBtn: { color: '#41D0E2', marginTop: 25 * hm },
  inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent', color: '#41D0E2' },

  btnBox: {
    paddingLeft: 26 * em,
    paddingRight: 26 * em,
    paddingTop: 15 * hm,
    paddingBottom: 22 * hm,
  },
};

export default FriendSellScreen;
