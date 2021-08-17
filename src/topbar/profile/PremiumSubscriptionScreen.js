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
import { Promotion, RightArrowBlue } from '../../assets/svg/icons';
import CommentText from '../../text/CommentText';
import Bonplan from '../../assets/svg/icons/devenirpro/Bonplan';
import Rayon from '../../assets/svg/icons/devenirpro/Rayon';
import Visibilite from '../../assets/svg/icons/devenirpro/Visibilite';
import Economie from '../../assets/svg/icons/devenirpro/Economie';
import Evenement from '../../assets/svg/icons/devenirpro/Evenement';
import Contact from '../../assets/svg/icons/devenirpro/Contact';
import Commerce from '../../assets/svg/icons/devenirpro/Commerce';
import { Labulpremium } from '../../assets/svg/svg/icons';
const PremiumSubscriptionScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ProfileType,setProfileType]=useState(props.profileType)
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Labulpremium
          style={styles.logo}
         
        />
        <View style={styles.containerTitle}>
          <Text style={styles.title} >Labul </Text>
          <Text style={styles.titleBleu} >Premium</Text>
        </View>
        <Text style={styles.subTitle} >Commence à vendre</Text>
        <View style={styles.popView}>
          <View style={styles.cardContainer}>
            <TouchableOpacity onPress={()=>setProfileType('my')}>
            <PurchaseMenuCard
              style={styles.card}
              selected={ProfileType === 'my'}
              name="Light"
              price="0,90€"
              commentRadius="Rayon de 1Km autour."
              comment="Idéal pour vendre juste autour de soi"
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setProfileType('pro')}>

            <PurchaseMenuCard
              style={styles.card}
              selected={ProfileType === 'pro'}
              name="Pro"
              price="1,90€"
              commentRadius="Rayon de 1 à 3Km. "
              comment="Idéal pour un professionnel qui veut faire grimper son chiffre d’affaire"
            />
                        </TouchableOpacity>

          </View>
          <Text style={styles.comment}>Abonnement <Text style={styles.commentBold}>sans engagement</Text> et <Text style={styles.commentBold}>résiliable</Text> depuis le store.</Text>
          <Text style={styles.guideline}>
            Inclus dans l'abonnement Light
          </Text>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ marginLeft: 34 * em, flexDirection: 'row', marginBottom: 22 * hm }}>
              <Rayon width={17 * em} height={24 * hm} />
              <Text style={{ marginLeft: 19 * em, fontFamily: 'Lato-Bold', fontSize: 14 * em, color: "#1E2D60" }}>
                Dans un rayon de 1Km
            </Text>
            </View>
            <View style={{ marginLeft: 32 * em, flexDirection: 'row', marginBottom: 23 * hm }}>
              <Visibilite width={22 * em} height={21 * hm} />
              <Text style={{ marginLeft: 16 * em, fontFamily: 'Lato-Bold', fontSize: 14 * em, color: "#1E2D60" }}>
                Forte visibilité
              </Text>
            </View>
            <View style={{ marginLeft: 33 * em, flexDirection: 'row', marginBottom: 26 * hm }}>
              <Economie width={22 * em} height={21 * hm} />
              <Text style={{ marginLeft: 15 * em, fontFamily: 'Lato-Bold', fontSize: 14 * em, color: "#1E2D60" }}>
                Economie de frais de communication
              </Text>
            </View>
            <View style={{ marginLeft: 32 * em, flexDirection: 'row', marginBottom: 23 * hm }}>
              <Bonplan width={22 * em} height={22 * hm} />
              <Text style={{ marginLeft: 16 * em, fontFamily: 'Lato-Bold', fontSize: 14 * em, color: "#1E2D60" }}>
                Annonce Bon plans
              </Text>
            </View>
            <View style={{ marginLeft: 32 * em, flexDirection: 'row', marginBottom: 20 * hm }}>
              <Promotion width={22 * em} height={22 * hm} />
              <Text style={{ marginLeft: 16 * em, fontFamily: 'Lato-Bold', fontSize: 14 * em, color: "#1E2D60" }}>
                Annonce Promotion
              </Text>
            </View>
            <View style={{ marginLeft: 33 * em, flexDirection: 'row', marginBottom: 26 * hm }}>
              <Evenement width={20 * em} height={22 * hm} />
              <Text style={{ marginLeft: 17 * em, fontFamily: 'Lato-Bold', fontSize: 14 * em, color: "#1E2D60" }}>
                Annonce Évènement payant
              </Text>
            </View>
            <View style={{ marginLeft: 32 * em, flexDirection: 'row', marginBottom: 48 * hm }}>
              <Contact width={22 * em} height={20 * hm} />
              <Text style={{ marginLeft: 16 * em, fontFamily: 'Lato-Bold', fontSize: 14 * em, color: "#1E2D60" }}>
                Mise en contact direct avec sa cible
              </Text>
            </View>
            <View style={{ alignItems: 'center', height: 200 * hm }}>
              <Commerce style={{ marginBottom: 10 * hm }} width={30 * em} height={32 * hm} />
              <Text style={{ marginBottom: 10 * hm, fontFamily: 'Lato-Bold', fontSize: 18 * em, color: '#1E2D60' }}>Le commerce de proximité réinventé</Text>
              <Text style={{ textAlign: 'center', width: 313 * em, fontFamily: 'Lato-Medium', fontSize: 14 * em, color: '#1E2D60' }}>Le forfait light est parfait pour tous ceux qui veulent vendre simplement et rapidement dans à + de 1km à la ronde.</Text>
            </View>
          </View>
          {/* <CommentText text="Et si votre chiffre d'affaire augmentait considérablement pour le prix d'un café par mois." color="#1E2D60" style={styles.guideline2}></CommentText> */}



        </View>
      </ScrollView>
      <CommonBackButton onPress={() => Actions.pop()} dark={true} style={styles.backBtn} />
      <CommonButton
        style={[
          styles.purchaseBtn,
          {
            backgroundColor: ProfileType === 'my' ? '#40CDDE' : '#1E2D60',
          },
        ]}
        text= { ProfileType === 'my' ?"M’abonner Labul Pro - 0,90€/mois":"M’abonner Labul Pro - 1,90€/mois"}
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
            Actions.premiumPurchased({ profileType: ProfileType});
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
  backBtn: { position: 'absolute', left: 15 * em, paddingTop: 48 * hm },

  logo: {
    marginTop: 72 * hm,
    width: 230 * em,
    height: 121 * em,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15 * hm,
  },
  title: { fontFamily: 'Cocon-Regular', fontSize: 27 * em, lineHeight: 30 * em, color: '#1E2D60' },
  titleBleu: { fontFamily: 'Cocon-Regular', fontSize: 27 * em, lineHeight: 30 * em, color: '#40CDDE' },
  containerTitle: { marginBottom: 0, flexDirection: 'row', justifyContent: 'center' },
  subTitle: {
    fontFamily: 'Lato-SemiBold',
    fontSize: 13 * em,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 17 * em,
    marginBottom: 24 * hm
  },
  popView: {

    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    //height: 500 * hm,
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
  guideline: { fontFamily: 'Lato-Black', marginLeft: 30 * em, marginRight: 30 * em, fontSize: 21 * em, color: '#1E2D60', lineHeight: 18 * em, marginBottom: 19 * hm },
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
