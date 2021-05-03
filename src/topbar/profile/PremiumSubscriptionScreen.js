import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import TinyText from '../../text/TinyText';
import SmallText from '../../text/SmallText';

import CommonButton from '../../Components/button/CommonButton';
import CommonBackButton from '../../Components/button/CommonBackButton';
import PurchaseMenuCard from '../../adapter/PurchaseMenuCard';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import { RightArrowBlue } from '../../assets/svg/icons';
import CommentText from '../../text/CommentText';
const PremiumSubscriptionScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.logo}
          source={
            props.profileType === 'my'
              ? require('../../assets/images/img_logo_subscription.png')
              : require('../../assets/images/img_logo_subscription_blue.png')
          }
        />
        <View style={styles.containerTitle}>
          <TitleText text="Labul" style={styles.title} />
          <TitleText text=" Premium" style={styles.title} color={'#40CDDE'} />
        </View>
        <TitleText text="Commence à vendre" style={styles.subTitle} />
        <View style={styles.popView}>
          <View style={styles.cardContainer}>
            <PurchaseMenuCard
              style={styles.card}
              selected={props.profileType === 'my'}
              name="Light"
              price="0,90€"
              commentRadius="Rayon de 1Km autour."
              comment="Idéal pour vendre juste autour de soi"
            />
            <PurchaseMenuCard
              style={styles.card}
              selected={props.profileType === 'pro'}
              name="Pro"
              price="1,90€"
              commentRadius="Rayon de 1 à 3Km. "
              comment="Idéal pour un professionnel qui veut faire grimper son chiffre d’affaire"
            />
          </View>
          <Text style={styles.comment}>Abonnement <Text style={styles.commentBold}>sans engagement</Text> et <Text style={styles.commentBold}>résiliable</Text> depuis le store.</Text>
          <Text style={styles.guideline}>
            Inclus dans l'abonnement Light
          </Text>
          <CommentText text="Et si votre chiffre d'affaire augmentait considérablement pour le prix d'un café par mois." color="#1E2D60" style={styles.guideline2}></CommentText>
        </View>
      </ScrollView>
      <CommonBackButton onPress={() => Actions.pop()} dark={true} style={styles.backBtn} />
      <CommonButton
        style={[
          styles.purchaseBtn,
          {
            backgroundColor: props.profileType === 'my' ? '#40CDDE' : '#7398FD',
          },
        ]}
        text="M’abonner Labul Light - 0,90€"
        rightIcon={<TinyText text="/mois" style={{ fontSize: 8 * em }} color="#ffffff" />}
        onPress={() => setModalVisible(true)}
      />
      <Modal
        isVisible={modalVisible}
        backdropOpacity={0.9}
        style={styles.modal}
        backdropColor={'#1E2D60'}
        swipeDirection={'up'}>
        <View>
          <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
          <View style={styles.modalHeader}>
            <Text style={styles.modalName}>Payer</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCancel}>Annuler</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalList}>
            <View style={styles.modalListLeft}>
              <Image style={styles.modalCardImage} />
            </View>
            <View style={styles.modalListRight}>
              <SmallText color="#000000" text={'Carte de crédit\n1234 **** **** 3456'} />
              <View style={styles.modalArrowIcon}>
                <RightArrowBlue width={10 * em} height={16 * em} />
              </View>
            </View>
          </View>
          <View style={styles.modalList}>
            <View style={styles.modalListLeft}>
              <SmallText color="#76767A" text="CONTACT" />
            </View>
            <View style={styles.modalListRight}>
              <Text style={styles.modalCreditCard}>mathieu@labul.fr</Text>
              <View style={styles.modalArrowIcon}>
                <RightArrowBlue width={10 * em} height={16 * em} />
              </View>
            </View>
          </View>
          <View style={[styles.modalList, { borderBottomWidth: 0 }]}>
            <View style={styles.modalListLeft} />
            <View style={styles.modalListRight}>
              <SmallText color="#76767A" text={'Total'} />
              <SmallText color="#000000" text={'0.90 €'} style={{ marginRight: 16 * em }} />
            </View>
          </View>
        </View>
        <CommonButton
          text="Payer"
          style={styles.modalPayBtn}
          onPress={() => {
            Actions.premiumPurchased({ profileType: props.profileType });
            setModalVisible(false);
          }}
        />
      </Modal>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  scrollView: { backgroundColor: '#FFF' },
  purchaseBtn: { position: 'absolute', alignSelf: 'center', bottom: 25 * hm },
  backBtn: { position: 'absolute', left: 15 * em, top: 27 * hm },

  logo: {
    marginTop: 54.5 * hm,
    width: 230 * em,
    height: 121 * em,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15 * hm,
  },
  title: { fontFamily: 'CoconRegularTR', fontSize: 27 * em, lineHeight: 30 * em },
  containerTitle: { marginBottom: 0, flexDirection: 'row', justifyContent: 'center' },
  subTitle: {
    fontFamily: 'Lato-SemiBold',
    fontSize: 13 * em,
    fontWeight: '500',
    lineHeight: 17 * em,
    marginBottom: 25 * hm
  },
  popView: {

    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    height: 726 * em,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5 * hm,
    marginLeft: 22.5 * em,
    marginRight: 22.5 * em,
  },
  card: { width: 160 * em, height: 207 * em, marginLeft: 7.5 * em, marginRight: 7.5 * em },
  comment: { color: '#1E2D60', fontFamily: 'Lato-Medium', fontSize: 10 * em, lineHeight: 12 * em, marginTop: 10 * hm, marginBottom: 24 * hm, textAlign: 'center' },
  commentBold: { color: '#1E2D60', fontFamily: 'Lato-Black', fontSize: 10 * em },
  guideline: { fontFamily: 'Lato-Black', marginLeft: 30 * em, marginRight: 30 * em, fontSize: 21 * em, color: '#1E2D60', lineHeight: 18 * em },
  guideline2: { marginLeft: 30 * em, marginRight: 30 * em, textAlign: 'left' },

  modal: {
    backgroundColor: '#F9F9F9C7',
    marginTop: 192 * hm,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    flex: 1,
    justifyContent: 'space-between',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1 * em,
    alignItems: 'center',
    height: 44 * em,
    borderBottomColor: '#A4A4A6',
  },
  modalName: { lineHeight: 26 * em, fontSize: 22 * em, textAlign: 'left', marginLeft: 8 * em },
  modalCancel: { fontSize: 17 * em, marginRight: 16 * em, lineHeight: 17 * em, color: '#007AFF' },
  modalList: {
    marginLeft: 16 * em,
    height: 39.5 * em,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1 * em,
    borderBottomColor: '#A4A4A6',
  },
  modalListLeft: { width: 79 * em, flexDirection: 'row-reverse' },
  modalListRight: { flex: 1, marginLeft: 16 * em, flexDirection: 'row', justifyContent: 'space-between' },
  modalCardImage: { width: 40 * em, height: 26 * em, backgroundColor: 'blue' },
  modalArrowIcon: { marginTop: 6 * hm, marginRight: 16 * em },
  modalCreditCard: { fontSize: 12 * em, width: 114 * em, lineHeight: 14 * em },
  modalPayBtn: { alignSelf: 'center', marginBottom: 48 * hm },
};

export default PremiumSubscriptionScreen;
