import React, { useState, useEffect } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, NativeModules, FlatList, ActivityIndicator, Alert } from 'react-native';
import { em, hexToRGB, hm } from '../../../constants/consts';
import ProfileInformationListItem from '../../../adapter/ProfileInformationListItem';
import ProfileCommonHeader from '../../../Components/header/ProfileCommonHeader';
import CommonButton from '../../../Components/button/CommonButton';
import CommentText from '../../../text/CommentText';
import CommonText from '../../../text/CommonText';
import { Actions } from 'react-native-router-flux';
import EditTitleComponent from '../myNeeds/EditTitleComponent'
import EditDescriptionComponent from '../myNeeds/EditDescriptionComponent'
import { CrossGray, EditAddPhoto, Family, Friend, Neighbor, All, BackArrowBlack } from '../../../assets/svg/icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Amis, Cancel, Famille, Tous, Voisins } from '../../../assets/svg/icons';

const updateUserPrfile = {
  avatar: require('../../../assets/images/avatar_curology.png'),
  cover: require('../../../assets/images/img_curology.png'),
  name: 'Curology',
  type: 'Professional',
  publications: { tips: 3, promotions: 2, events: 1 },
  services: ['Beauté', 'Soins'],
  badges: [],
  presentation:
    'Des soins de la peau personnalisés pour les besoins uniques de votre peau. Maintenant disponible dans un ensemble avec nettoyant et hydratant!',
};
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import EditTypeComponent from './EditTypeComponent'
import EditCategoryScreen from './EditCategoryScreen'
import EditSharePeople from './EditSharePeople'
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { deleteUserDemands } from "../../../services/firebase";
var ImagePicker = NativeModules.ImageCropPicker;
import { needTypeItems, needDailyItems, needFamilyItems, sellObjetItems, sellServiceItems, sellThemeData, givecategoryItems, organizeCategoryData } from '../../../constants/data'
import EditAddressScreen from './EditAddressScreen';
import CommonHeader from '../../../Components/header/CommonHeader';
import TitleText from '../../../text/TitleText';

const EditNeedScreen = (props) => {
console.log('kdkdkdkdkdkddkdkkdkdkd',props.data2);
  const [userProfile] = useState(updateUserPrfile);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setisEndDatePickerVisible] = useState(false);

  const [images, setimages] = useState({ images: props.data2.images })

  const [demandType, setdemandType] = useState(props.data2.type)
  const [demandLieu, setdemandLieu] = useState(props.data2.address)
  const [demandCategory, setdemandCategory] = useState(props.data2.category)
  const [demandData, setdemandData] = useState(props.data2.data)

  const [startDate, setstartDate] = useState(props.data2.demandStartDate.seconds * 1000)

  const [titleModelVisible, settitleModelVisible] = useState(false);
  const [descriptionModelVisible, setdescriptionModelVisible] = useState(false);
  const [LieuModelVisible, setLieuModelVisible] = useState(false);
  const [endDate, setendDate] = useState(props.data2.demandEndDate)
  const [contactType, setcontactType] = useState(props.data2.contactType)
  const [editType, seteditType] = useState(false)
  const [editCategory, seteditCategory] = useState(false)
  const [shareModel, setshareModel] = useState(false)

  const [loading, setloading] = useState(false)
  const removeByAttr = function (arr, attr, value) {

    const findIndex = arr.findIndex(a => a.id === value)
    findIndex !== -1 && arr.splice(findIndex, 1)
    setTimeout(() => {
      setimages({ images: arr });
    }, 50);
  }



  const uploadeImage = async (imageArray) => {
    const imagesBlob = [];
    // setimages({ images: imagesBlob })
    if (imageArray.length > 3) {
      alert("Vous ne pouvez choisir que 3 photos max !!")
      return
    }

    await Promise.all(
      imageArray.map(async (image, index) => {
        const response = await fetch(image.path);
        const blob = await response.blob();
        const ref = storage().ref().child(`users/${auth().currentUser.uid}/demands/${Math.random().toString(36).substring(2, 12)}`)
        await ref.put(blob).then(async (result) => {
          await ref.getDownloadURL().then((result) => { imagesBlob.push({ uri: result, id: index }) })

        });
      }),

    );

    setimages({ images: imagesBlob })

    SaveData(imagesBlob)
  };





  const imageSelect = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      if (images.length > 3) {
        alert("Vous ne pouvez choisir que 3 photos max !!")
        return
      }
      setimages({ images: images })
      // uploadeImage(images)
    }).catch(e => alert(e));
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  console.log(startDate);


  const updateUserDemands = (id, data) => {


    firestore().collection('userDemands').doc(id).collection(props.data2.serviceType.name).doc(props.docId).update(data).then((res) => {
      Actions.pop(), setloading(false)
    }).catch((error) => {
      console.log(error); setloading(false)
    })

  }
  const SaveData = (imagesBlob) => {

    let data = {}
    if (startDate === props.data2.demandStartDate.seconds * 1000) {
      if (props.data2.serviceType.name === 'sell' || props.data2.serviceType.name === 'give' || props.data2.serviceType.name === 'organize') {
        data = {

          category: demandCategory,
          contactType: contactType,
          data: demandData,
          demandStartDate: props.data2.demandStartDate,
          images: imagesBlob,
        }
      }
      else {
        data = {
          type: demandType,
          category: demandCategory,
          contactType: contactType,
          data: demandData,
          demandStartDate: props.data2.demandStartDate,
          images: imagesBlob,
        }
      }

    } else {
      if (props.data2.serviceType.name === 'sell' || props.data2.serviceType.name === 'give' || props.data2.serviceType.name === 'organize') {
        data = {

          category: demandCategory,
          contactType: contactType,
          data: demandData,
          demandStartDate: startDate,
          images: imagesBlob,
        }
      }
      else {
        data = {
          type: demandType,
          category: demandCategory,
          contactType: contactType,
          data: demandData,
          demandStartDate: startDate,
          images: imagesBlob,
        }
      }
    }
    updateUserDemands(auth().currentUser.uid, data)
  }

  const deleteDemand = () => {
    Alert.alert(
      "Delete",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            deleteUserDemands(auth().currentUser.uid, props.data2.serviceType.name, props.docId).then((item) => {
              Actions.home()
            }).catch((error) => {
              console.log(error);
            })
          }
        }
      ]
    );

  }


  return (

    <ParallaxScrollView
    contentContainerStyle={styles.container}
    headerBackgroundColor="#333"
    backgroundColor="#ffffff"
    stickyHeaderHeight={81 * hm}
    parallaxHeaderHeight={139 * hm}
    backgroundSpeed={10}
    renderFixedHeader={() => (
      <CommonHeader
    
        onLeftPress={()=>Actions.pop()}
        leftView={
        <TouchableOpacity
        style={{
          position: 'absolute',
          paddingLeft: 15 * em,
          bottom:25*hm
        }}
        onPress={() => Actions.pop()}>
        <BackArrowBlack width={20 * em} height={18 * hm} />
      </TouchableOpacity>}
        rightTxtStyle={styles.rightTxt}
        loading={loading}
      />
    )}
    renderForeground={() => <TitleText text="Modifier demande" style={styles.title} />}
    renderStickyHeader={() => (
      <View key="sticky-header" style={{ marginTop: 40 * hm, alignItems: 'center' }}>
        <CommonText text="Modifier demande" color="#1E2D60" style={{ fontFamily: 'Lato-Bold' }} />
      </View>
    )}>
   


     
   {/* if (images.images.length > 0) {
              setloading(true)
              if (images.images === props.data2.images) {
                SaveData(images.images)
              } else {
                uploadeImage(images.images)
              }
            }
            else {
              alert("Need to select one pic!!")
            } */}


      {/* /////////////////// */}
      {props.data2.serviceType.name === 'sell' || props.data2.serviceType.name === 'give' || props.data2.serviceType.name === 'organize' ? null : <><ProfileInformationListItem
        caption={'Type de demande'}
        titleUpperCase
        value={demandType.itemName}
        style={styles.listItem}
        onPress={() => {
          seteditType(!editType);
        }}
      />
        <EditTypeComponent
          visible={editType}
          title={"Type de demande"}
          value={demandType}
          onPress={() => {
            seteditType(false);
          }}
          onChange={(item) => { setdemandType(item) }}
          type={needTypeItems}
        // data={profileDataCurrent}
        />
      </>
      }
      {/* ///////// */}

      <ProfileInformationListItem
        titleUpperCase
        caption={'Titre'}
        value={demandData.title}
        onPress={() => {

          settitleModelVisible(!titleModelVisible);
        }}
        style={styles.listItem}
      />

      {/* <EditTitleComponent
        visible={titleModelVisible}
        // itemKey={inputItemKey}
        // heading={"Titre"}

        value={demandData.title}
        txt={'Titre'}
        onPress={() => {
          settitleModelVisible(false)
        }}
        onChange={(item) => { setdemandData({ ...demandData, title: item }), settitleModelVisible(false) }}
      /> */}
<EditAddressScreen
        visible={titleModelVisible}
        txt={'Titre'}
        changeItem={'Titre'}
        value={demandData.title}
        onPress={() => {
          settitleModelVisible(false)        }}
          onChange={(item) => { setdemandData({ ...demandData, title: item }), settitleModelVisible(false) }}
          />





      <ProfileInformationListItem
        titleUpperCase
        caption={'Description'}
        heading={"Description"}
        title={'Description'}
        onPress={() => {

          setdescriptionModelVisible(!descriptionModelVisible);
        }}

        value={demandData.description}
        style={styles.listItem}
      />
      {/* <EditDescriptionComponent
        visible={descriptionModelVisible}

        changeItem={'Description'}
        value={demandData.description}
        title={'Description'}
        onPress={() => {
          setdescriptionModelVisible(false)
        }}
        onChange={(item) => { setdemandData({ ...demandData, description: item }), setdescriptionModelVisible(false) }}
      />
      */}

     <EditAddressScreen
        visible={descriptionModelVisible}

        txt={'Description'}
        value={demandData.description}
        title={'Description'}
        onPress={() => {
          setdescriptionModelVisible(false)
        }}
        onChange={(item) => { setdemandData({ ...demandData, description: item }), setdescriptionModelVisible(false) }}
         />
      {/* ///////////////// */}



     
<View style={styles.listItem}>
        <View style={{ flexDirection: 'row', marginBottom: 15 * em, justifyContent: 'space-between' }}>
          <CommentText text="Photos" color="#6A8596" />
          <CommentText text="3 maximum" color="#A0AEB8" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>

          {images.images.map((item) => {
            return (<ImageBackground
              imageStyle={{ borderRadius: 15 * em }}
              source={{ uri: item.path === undefined ? item.uri : item.path }}
              style={styles.photo}>
              <TouchableOpacity style={styles.cancel} onPress={() => { removeByAttr(images.images, 'id', item.id) }}>

                <CrossGray width={12 * em} height={12 * em} />

              </TouchableOpacity>

            </ImageBackground>)
          })}

          {images.images.length < 3 ? <TouchableOpacity
            imageStyle={{ borderRadius: 15 * em }}
            style={[
              styles.photo,
              {
                borderWidth: 2 * em,
                borderColor: '#BFCDDB',
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',

              },
            ]}
            onPress={() => { imageSelect() }}
          >
            <View style={styles.addPhoto}>
              <EditAddPhoto width={32.86 * em} height={23 * em} />
            </View>
            <CommentText text="Clique ici" color="#40CDDE" />
          </TouchableOpacity> : null}
        </View>
      </View>

      <ProfileInformationListItem
        titleUpperCase
        caption={'Lieu'}
        heading={"Lieu"}
        title={'Lieu'}
        onPress={() => {

          setLieuModelVisible(!LieuModelVisible);
        }}

        value={demandLieu}
        style={styles.listItem}
      />
      <EditAddressScreen
        visible={LieuModelVisible}
        txt={'Lieu'}
        changeItem={'Lieu'}
        value={demandLieu}
        title={'Lieu'}
        onPress={() => {
          setLieuModelVisible(false)        }}
        onChange={(item) => { setdemandLieu( item ), setLieuModelVisible(false) }}
      />
  <TouchableOpacity onPress={() => {
        setshareModel(!shareModel);
      }}>

        <ProfileInformationListItem
          titleUpperCase
          caption={'Partagé avec'}
          circleText={
            <>

              {contactType.type == 1 ? <Voisins width={28 * em} height={28 * em} /> :
                contactType.type == 2 ? <Amis width={28 * em} height={28 * em} /> :
                  contactType.type == 3 ? <Famille width={28 * em} height={28 * em} /> :
                    <Tous width={28 * em} height={28 * em} />
              }
              <CommonText text={contactType.name} color="#1E2D60" style={{ marginLeft: 10 * em, alignSelf: 'center' }} />
            </>
          }
          style={styles.listItem}

        />
      </TouchableOpacity>
      <EditSharePeople
        visible={shareModel}

        changeItem={'Partagé avec'}
        value={contactType}
        title={'Partagé avec'}
        onPress={() => {
          setshareModel(false)
        }}
        onChange={(item) => { setcontactType(item), setshareModel(false) }}
      />
       {/* ////////////// */}


<ProfileInformationListItem
        titleUpperCase
        caption={'Type de demande'}
        // value={'Bricolage/ jardinage'}
        value={demandCategory.name}
        style={styles.listItem}
        onPress={() => {
          seteditCategory(!editCategory);
        }}
      />
      <EditCategoryScreen
        visible={editCategory}
        title={"Type de demande"}
        value={demandCategory}
        onPress={() => {
          seteditCategory(false);
        }}
        onChange={(item) => { setdemandCategory(item) }}
        category={props.data2.serviceType.name === 'need' ?
          props.data2.belongsTo.id === 0 ? needFamilyItems : needDailyItems :
          props.data2.serviceType.name === 'sell' ? props.data2.belongsTo.id === 1 ? sellObjetItems : props.data2.belongsTo.id === 2 ? sellThemeData : sellServiceItems
            : props.data2.serviceType.name === 'give' ? givecategoryItems : props.data2.serviceType.name === 'organize' ? organizeCategoryData : []
        }

      />
       {/* ////////////// */}

       <ProfileInformationListItem
        titleUpperCase
        caption={'Catégorie'}
        // value={'Bricolage/ jardinage'}
        value={props.data2.belongsTo.name}
        style={styles.listItem}
        onPress={() => {
          seteditCategory(!editCategory);
        }}
      />
      <EditCategoryScreen
        visible={editCategory}
        title={"Catégorie"}
        value={props.data2.belongsTo}
        onPress={() => {
          seteditCategory(false);
        }}
        onChange={(item) => { setdemandCategory(item) }}
        category={props.data2.serviceType.name === 'need' ?
          props.data2.belongsTo.id === 0 ? needFamilyItems : needDailyItems :
          props.data2.serviceType.name === 'sell' ? props.data2.belongsTo.id === 1 ? sellObjetItems : props.data2.belongsTo.id === 2 ? sellThemeData : sellServiceItems
            : props.data2.serviceType.name === 'give' ? givecategoryItems : props.data2.serviceType.name === 'organize' ? organizeCategoryData : []
        }

      />
             {/* ////////////// */}

      <TouchableOpacity onPress={() => showDatePicker()}>


        <ProfileInformationListItem
          titleUpperCase
          caption={'Date'}
          noClick
          // value={'29 Fév · 14h00'}
          value={Moment(startDate).format('DD MMMM YYYY-hh:mm')}
          style={styles.listItem}
        />
      </TouchableOpacity>

     
{/* <FriendCancelParticipatePopupScreen
        visible={cancelParticipatePopupVisible}
        onPress={() => setcancelParticipatePopupVisible(false)}
        onStatus={(v) => setStatus(v)}
      /> */}


      <CommonButton
        text={'Supprimer ma demande'}
        style={styles.deleteBtn}
        textStyle={{ color: '#F9547B' }}
        onPress={() => { deleteDemand() }}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        // minimumDate={new(startDate)}
        date={new Date(startDate)}
        onConfirm={(item) => {
          // console.log(Moment.utc(item));

          setstartDate(item)
          hideDatePicker();
        }}
        onCancel={hideDatePicker}
      />

</ParallaxScrollView>
  );
};

const styles = {
  commonHeader: { position: 'absolute', marginBottom: 23 * hm, marginTop: 40 * hm },
  title: {
    marginLeft: 30 * em,
    lineHeight: 38 * hm,
    backgroundColor: '#ffffff',
    // marginBottom: 25 * hm,
    textAlign: 'left',
    marginTop: 81 * hm,
    fontFamily: 'Lato-Black'
  },
  rightTxt: { fontFamily:'Lato-Bold',fontSize:16*em,color: '#40CDDE',  marginRight: 12 * em },
  container: { backgroundColor: '#F0F5F7' },
  bgView: { marginTop: 10 * em, height: 184 * em, backgroundColor: hexToRGB('#40CDDE10', 0.1) },
  photo: {
    width: 95 * em,
    height: 95 * em,
    borderRadius: 15 * em,
    resizeMode: 'cover',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginHorizontal: '2%'
  },
  addPhoto: { width: 33 * em, height: 23 * em, marginBottom: 5.5 * em },
  cancel: {
    width: 26 * em,
    height: 26 * em,
    borderRadius: 13 * em,
    marginBottom: 4 * em,
    marginRight: 4 * em,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCoverBtn: { width: 28 * em, height: 28 * em, position: 'absolute', top: 47 * em },
  itemTitle: { height: 18 * em, lineHeight: 18 * em, marginLeft: 30 * em, marginTop: 25 * em },
  listItem: {
    width: '100%',
    marginTop: 10 * em,
    paddingVertical: 25 * em,
    paddingHorizontal: 30 * em,
    backgroundColor: '#ffffff',
  },
  avatar: { width: 92 * em, height: 92 * em, marginBottom: 10 * em, alignSelf: 'center', marginTop: -46 * em },
  addPhotoBtn: { marginBottom: 25 * em, lineHeight: 21 * em },
  deleteBtn: {
    marginTop: 25 * em,
    marginBottom: 25 * em,
    lineHeight: 19 * em,
    alignSelf: 'center',
    backgroundColor: 'transparent',
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
  modalContent: { fontSize: 13 * em, lineHeight: 18 * em, color: '#000000', marginBottom: 16 * em },
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
};

export default EditNeedScreen;
