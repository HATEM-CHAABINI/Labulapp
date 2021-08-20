import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { em, hexToRGB, hm } from '../../../constants/consts';
import ProfileInformationListItem from '../../../adapter/ProfileInformationListItem';
import ProfileCommonHeader from '../../../Components/header/ProfileCommonHeader';
import CommonButton from '../../../Components/button/CommonButton';
import ProfileCommonAvatar from '../../../Components/view/ProfileCommonAvatar';
import CommentText from '../../../text/CommentText';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import { DeleteRed, ProAddCover } from '../../../assets/svg/icons';
import { feedbackIcons } from '../../../constants/icons';
import RBSheet from "react-native-raw-bottom-sheet";
import OkModal from '../../../Components/button/OkModal';
import Reinput from "reinput"
import OkModalchange from '../../../Components/button/OkModalchange';
import MyPresentationComponent from '../profileComponents/MyPresentationComponent'
import ModalEdit from './ModalEdit/ModalEdit';
import CommonListItem from '../../../adapter/CommonListItem';

const updateUserPrfile = {
  avatar: require('../../../assets/images/avatar_curology.png'),
  cover: require('../../../assets/images/img_curology.png'),
  name: 'Curology',
  type: 'Professional',
  publications: { tips: 3, promotions: 2, events: 1 },
  services: ['Beauté', 'Soins'],
  badges: feedbackIcons,
  presentation:
    'Des soins de la peau personnalisés pour les besoins uniques de votre peau. Maintenant disponible dans un ensemble avec nettoyant et hydratant!',
};
const EditProProfileScreen = (props) => {
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  
  const [profileDataCurrent, setprofileDataCurrent] = useState(
    {
     presentation: '',
    })
    const [EntrepriseModal, setEntrepriseModal] = useState(false)
    const [LocalisationModal, setLocalisationModal] = useState(false)
    const [HoraireModal, setHoraireModal] = useState(false)
    const [ContactModal, setContactModal] = useState(false)
    const [SiteModal, setSiteModal] = useState(false)
    const [PresentationModal, setPresentationModal] = useState(false)

  const [userProfile, setUserProfileOnChanged] = useState(props.userProfile);
  return (
    <ProfileCommonHeader
      title="Editer mon profil"
      onCancel={() => Actions.pop()}
      onFinish={() => Actions.proProfileOverview({ userProfile: updateUserPrfile })}>
      <ImageBackground style={styles.bgView} source={userProfile.cover} blurRadius={8}>
        <View
          style={
            userProfile.cover
              ? [
                styles.bgViewFilter,
                {
                  backgroundColor: 'rgba(30, 45, 96, 0.64)',
                },
              ]
              : styles.bgViewFilter
          }>
          <View style={[styles.addCoverBtn, { tintColor: userProfile.cover ? '#FFFFFF' : '#40CDDE' }]}>
            <ProAddCover width={27.79 * em} height={28 * em} />
          </View>
          <CommentText 
          style={{fontFamily: 'Lato-Regular'}}
            text={!userProfile.cover ? 'Ajouter une photo de couverture' : 'Changer photo de couverture'}
            color={userProfile.cover ? '#FFFFFF' : '#40CDDE'}
          />
        </View>
      </ImageBackground>
      <View style={[styles.listItem, { marginTop: 0, paddingVertical: 0 }]}>
        <ProfileCommonAvatar
          pro
          borderWidth={3 * em}
          fullName={userProfile.name}
          style={styles.avatar}
          icon={userProfile.avatar}
        />
        <CommentText text="Ajouter mon logo" style={styles.addPhotoBtn} color="#40CDDE" />
      </View>
      <ProfileInformationListItem
        caption={'Nom de l’entreprise'}
        placeholder={!profileDataCurrent.presentation ? true : false}
        value={
          'Le Bar à T-Shirt' }
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setEntrepriseModal(!EntrepriseModal);
        }}
      />

<ProfileInformationListItem
        caption={'Localisation'}
        placeholder={!profileDataCurrent.presentation ? true : false}
        value={
          'Impasse Sysiphe Immeuble Mahogany, Derriere Autour de Bébé Baie Mahault, 97122, Guadeloupe' }
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setLocalisationModal(!LocalisationModal);
        }}
      />

<ProfileInformationListItem
        caption={'Horaires'}
        placeholder={!profileDataCurrent.presentation ? true : false}
        value={
          'Ouvert du lundi au vendredi \nDe 14h à 16h ' }
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setHoraireModal(!HoraireModal);
        }}
      />
<ProfileInformationListItem
        caption={'Contact'}
        placeholder={!profileDataCurrent.presentation ? true : false}
        value={
          '+590 690 74 38 58' }
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setContactModal(!ContactModal);
        }}
      />
<ProfileInformationListItem
        caption={'Site web'}
        placeholder={!profileDataCurrent.presentation ? true : false}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setSiteModal(!SiteModal);
        }}
      />


  
      <ProfileInformationListItem
        caption={'Présentation de l’entreprise'}
        placeholder
        value={'Le Bar à t-shirt est une entreprise spécialisée en impression textile personnalisée. Vous pouvez y imprimer tous vos textiles en un temps record. Laissez vous tenter par la créativité'}
        style={styles.listItem}
        options={userProfile.specs}
        onPress={() => {
          setInputItemKey(8);
          setPresentationModal(!PresentationModal);
        }}
      />
            
<View style={{bottom:10*hm,flexDirection:'row', justifyContent:'center'}}>
<TouchableOpacity onPress={() => "" }
style={styles.okstyle}
>
<View
  style={styles.textView}>
  <Text style={styles.textstyle}>Enregistrer modifications</Text>
</View>
</TouchableOpacity>

</View>
      <CommonButton
      //text1
        text={'Supprimer mon compte'}
        style={styles.deleteBtn}
        textStyle={{ color: '#F9547B' }}
        onPress={() => setDeleteModalVisible(true)}
      />

<ModalEdit
        visible={EntrepriseModal}
        itemKey={inputItemKey}
        title={'Nom de l’entreprise'}
        text={'Nom de l’entreprise'}
        value={profileDataCurrent.presentation}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setEntrepriseModal(false);
        }}
      />
      <ModalEdit
        visible={LocalisationModal}
        itemKey={inputItemKey}
        title={'Localisation'}
        text={'Adresse complet'}
        value={profileDataCurrent.presentation}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setLocalisationModal(false);
        }}
      />
   
  <ModalEdit
    hor={true}
        visible={HoraireModal}
        itemKey={inputItemKey}
        title={'Horaires'}
        text={'Horaires d’ouverture'}
        value={profileDataCurrent.presentation}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setHoraireModal(false);
        }}
      />

<ModalEdit
contact={true}
        visible={ContactModal}
        itemKey={inputItemKey}
        title={'Contact'}
        keyboardType={"numeric"}
        text={'Numéro de téléphone'}
        value={profileDataCurrent.presentation}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setContactModal(false);
        }}
      />
        <ModalEdit
        visible={SiteModal}
        itemKey={inputItemKey}
        title={'Site web'}
        text={'Site web'}
        value={profileDataCurrent.presentation}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setSiteModal(false);
        }}
      />
        <ModalEdit
        visible={PresentationModal}
        itemKey={inputItemKey}
        title={'Présentation'}
        text={'Présentation de l’entreprise'}
        value={profileDataCurrent.presentation}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setPresentationModal(false);
        }}
      />





<Modal
      isVisible={deleteModalVisible}
      backdropOpacity={0.8}
      style={{margin: 0, flex: 1, justifyContent: 'flex-end'}}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => setDeleteModalVisible(false)}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View style={{alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    paddingBottom: 12 * em,}}>
      <CommonListItem
          style={{  height: 70 * hm,
            paddingHorizontal: 25 * em,
            justifyContent: 'center',
            borderTopWidth: 1 * hm,
            borderColor: '#B3C6CF33',
            width: '100%',}}
          title={"Supprimer mon compte"}
          subTitle={"Tu est sûr de vouloir supprimer ton compte ? Cette action est irréversible."}
          subTitleStyle={{textAlign:'center', color: '#1E2D60' ,fontFamily:'Lato-Regular',fontSize:14*em}}
          titleStyle={{textAlign:'center', color: '#1E2D60' ,fontFamily:'Lato-Bold',fontSize:16*em}}
         
       />
        <CommonListItem
   style={{  height: 70 * hm,
    paddingHorizontal: 25 * em,
    justifyContent: 'center',
    borderTopWidth: 1 * hm,
    borderColor: '#B3C6CF33',
    width: '100%',}}
          title="Supprimer mon compte Pro"
          titleStyle={{ textAlign:'center',color: '#FC3867' ,fontFamily:'Lato-Regular'}}
          // rightView={<DeleteRed width={22 * em} height={22 * em} />}
          onPress={() => {
            setDeleteModalVisible(false);
            Actions.home();}}
       />
      </View>
      <CommonButton
        text="Annuler"
        style={{  marginTop: 16 * hm,
          backgroundColor: '#ffffff',
          alignSelf: 'center',
          width: 315 * em,
          marginBottom: 23 * hm,}}
        textStyle={{ color: '#1E2D60' }}
        onPress={() => {
          setUserProfileOnChanged(updateUserPrfile);
          setDeleteModalVisible(false);}
        }
      />
    </Modal>

      {/* <Modal
        isVisible={deleteModalVisible}
        backdropColor={'#04040F66'}
        backdropOpacity={1}
        swipeDirection={'up'}
        onBackButtonPress={() => setDeleteModalVisible(false)}>
        <StatusBar backgroundColor="#04040F66" barStyle="light-content" />
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Supprimer mon compte</Text>
          <Text style={styles.modalContent}>
            Êtes-vous sûr de vouloir supprimer ton compte ? Cette action est irréversible.
          </Text>
          <View style={styles.modalBtnBox}>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setUserProfileOnChanged(updateUserPrfile);
                setDeleteModalVisible(false);
              }}>
              <Text style={styles.modalBtnTxt}>Annuler</Text>
            </TouchableOpacity>
            <View style={styles.modalLine} />
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setDeleteModalVisible(false);
                Actions.home();
              }}>
              <Text style={styles.modalBtnTxt}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </Modal> */}
      {/* <ProfileCommonModal
        visible={modalVisible}
        itemKey={inputItemKey}
        onChange={(val) => setUserProfileOnChanged(val)}
        onPress={() => {
          setModalVisible(false);
        }}
      /> */}
      
    </ProfileCommonHeader>
  );
};

const styles = {
  container: {
    backgroundColor: '#F0F5F7',
  },
  bgView: {
    marginTop: 10 * em,
    height: 184 * em,

    backgroundColor: hexToRGB('#40CDDE10', 0.1),
  },
  bgViewFilter: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCoverBtn: { width: 28 * em, height: 28 * em, position: 'absolute', top: 47 * em },
  itemTitle: {
    height: 18 * em,
    lineHeight: 18 * em,
    marginLeft: 30 * em,
    marginTop: 25 * em,
  },
  listItem: {
    width: '100%',
    marginTop: 10 * em,
    paddingVertical: 25 * em,
    paddingHorizontal: 30 * em,
    backgroundColor: '#ffffff',
  },
  avatar: { width: 92 * em, height: 92 * em, marginBottom: 10 * em, alignSelf: 'center', marginTop: -46 * em },
  addPhotoBtn: {fontFamily: 'Lato-Regular', marginBottom: 25 * em, lineHeight: 21 * em },
  deleteBtn: {
    marginTop: 5 * hm,
    marginBottom: 25 * hm,
    lineHeight: 19 * em,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: '#F9547B',
  },
  modalView: {
    height: 140 * em,
    width: 270 * em,
    backgroundColor: '#F8F8F8D1',
    borderRadius: 14 * em,
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalTitle: { fontSize: 17 * em, lineHeight: 22 * em, marginTop: 20 * em, color: '#000000' },
  modalContent: {
    fontSize: 13 * em,
    lineHeight: 18 * em,
    color: '#000000',
    marginBottom: 16 * em,
    textAlign: 'center',
  },
  modalBtnBox: { flexDirection: 'row', flex: 1 },
  modalBtn: {
    borderColor: '#3F3F3F',
    borderTopWidth: 0.5 * em,
    flexGrow: 135,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBtnTxt: { color: '#007AFF', fontSize: 17 * em, lineHeight: 22 * em },
  modalLine: { backgroundColor: '#3F3F3F', width: 0.5 * em, flexGrow: 1 },
textstyle:{  
    fontSize: 16 * em,
    color: '#FFFFFF',
    marginLeft: 10 * em,
    marginTop: 2 * hm, 
    fontFamily: 'Lato-Medium'},
  textView:{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10 * em,},
  okstyle:{
    overflow: 'hidden',
    borderRadius: 18 * em,
    height: 50 * hm,
    width: 315 * em,
    alignItems: 'center',
    justifyContent:'center'
    ,
    backgroundColor: "#40CDDE",
    "opacity": 1,
    marginBottom: 10 * hm},};

export default EditProProfileScreen;
