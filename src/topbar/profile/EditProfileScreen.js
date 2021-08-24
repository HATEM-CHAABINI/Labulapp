import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert, ActivityIndicator,TouchableOpacity } from 'react-native';
import { em, hm } from '../../constants/consts';
import ProfileInformationListItem from '../../adapter/ProfileInformationListItem';
import ProfileCommonHeader from '../../Components/header/ProfileCommonHeader';
import ProfileCommonModal from '../../Components/other/ProfileCommonModal';
import CommonButton from '../../Components/button/CommonButton';
import ProfileCommonAvatar from '../../Components/view/ProfileCommonAvatar';
import CommentText from '../../text/CommentText';
import { Actions } from 'react-native-router-flux';
import User from '../../model/user/User';
import { feedbackIcons } from '../../constants/icons';
import ImagePicker from 'react-native-image-crop-picker';
import firebase from 'firebase'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import ProfileNameComponent from './profileComponents/ProfileNameComponent'
import MyAvailabilityComponent from './profileComponents/MyAvailabilityComponent'
import MyPresentationComponent from './profileComponents/MyPresentationComponent'
import MyskillComponents from './profileComponents/MyskillComponents'
import { useSelector } from 'react-redux';
import { getUserProfile, getassest, deleteUser, deleteUserData } from '../../services/firebase'
import { useDispatch } from 'react-redux';
import { addProfile } from '../../redux/actions/profile';
import { Text } from 'react-native';
import OkModal from '../../Components/button/OkModal';
import OkModalchange from '../../Components/button/OkModalchange';

require('firebase/firestore')
require('firebase/firebase-storage')
const updatedMyProfile = new User(
  'Mathieu Torin',
  require('../../assets/images/tab_profile_off.png'),
  '',
  null,
  'mathieu@labul.com',
  'Je suis disponible le soir et le week-end',
  'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
  ['Bricoleur', 'Jardinier'],
  4,
  7,
  17,
  24,
  6,
  2,
  feedbackIcons,
  '+590 6 90 874 258',
  'ABYMES 97139 Guadeloupe'
);
const EditProfileScreen = (props) => {
  const dispatch = useDispatch()
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfile, setUserProfileOnChanged] = useState(props.userProfile);
  const [nameModal, setnameModal] = useState(false)
  const [availabilityModal, setavailabilityModal] = useState(false)
  const [presentationModal, setpresentationModal] = useState(false)
  const [myskillModal, setmyskillModal] = useState(false)
  const [loading, setloading] = useState(false)
  const { profileData } = useSelector((state) => state.profileReducer);
  const [loadingSet, setloadingSet] = useState(false)
  const [deleteUseLoading, setdeleteUseLoading] = useState(false)
  // const { profileData } = useSelector((state) => state.loginReducer);
  // console.log(props.assest)
  const [skillsList, setskillsList] = useState(props.assest)
  const [profileDataCurrent, setprofileDataCurrent] = useState(
    {
      profilePic: profileData.profilePic === undefined ? '' : profileData.profilePic,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      availability: profileData.availability === undefined ? '' : profileData.availability,
      presentation: profileData.presentation === undefined ? '' : profileData.presentation,
      skill: profileData.skill
    })

  const [image, setimage] = useState(profileData.profilePic ? profileData.profilePic : null)
  const imageOptions = () => {
    Alert.alert(
      'Image',
      'Choisissez l\'option que vous aimez',
      [
        { text: 'Annuler', onPress: () => { }, style: 'cancel' },
        { text: 'Choisissez parmi gallary.', onPress: () => choosePhotoFromLibreary() },
        { text: 'Cliquez sur une image.', onPress: () => takePhotoFromCamera() },
      ],
      { cancelable: true }

    );
  }

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      with: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        uploadeImage(image.path)
      });
  }

  const choosePhotoFromLibreary = () => {
    ImagePicker.openPicker({
      with: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        uploadeImage(image.path)
      });
  }

  const uploadeImage = async (img) => {
    setloading(true)
    try {
      const childPath = `users/${auth().currentUser.uid}/profilePic/0`
      const response = await fetch(img)
      const blob = await response.blob()
      const task = storage().ref().child(childPath).put(blob);
      const taskProgress = (snapshot) => {
        console.log(`transferFile : ${snapshot}`)

      }

      const error = (snapshot) => {
        console.log(snapshot)
        setloading(false)
      }
      const taskCompleted = () => {

        task.snapshot.ref.getDownloadURL()
          .then((snap) => {

            setprofileDataCurrent({ ...profileDataCurrent, profilePic: snap })
            setimage(() => snap);
            setloading(false)
          }).catch((e) => { console.log(e) })
      }
      task.on("state_changed", taskProgress, error, taskCompleted)
    }
    catch (e) {
      console.log(e)
      setloading(false)
    }

  }

  const saveProfile = (data) => {
    setloadingSet(true)
    firestore().collection('users').doc(auth().currentUser.uid).update(
      {
        profilePic: image,
        firstName: profileDataCurrent.firstName,
        lastName: profileDataCurrent.lastName,
        availability: profileDataCurrent.availability,
        presentation: profileDataCurrent.presentation,
        skill: profileDataCurrent.skill,

      })

    setTimeout(() => {
      getUserProfile(auth().currentUser.uid).then((res) => {

        dispatch(addProfile(res))
        setloadingSet(false)
        Actions.profileOverview({ userProfile: updatedMyProfile })
      })
    }, 500);
  }
  const deleteUserr = () => {
    Alert.alert(
      'Supprimer le compte',
      'Voulez-vous vraiment supprimer votre compte?',
      [
        {
          text: 'Annuler',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Supprimer', onPress: () => {
            setdeleteUseLoading(true)
            deleteUserData(profileData.uid).then(res => {
              if (res) {
                deleteUser().then(res => {
                  setdeleteUseLoading(true),
                    Alert.alert(
                      'Succès',
                      'Votre compte a été supprimé avec succès',
                      [

                        { text: 'OK', onPress: () => { dispatch(addProfile('')) } },
                      ]
                    );
                })
              }
            })
          }
        },]);
  }


  return (
    <>
    <ProfileCommonHeader
      title="Editer mon profil"
      onCancel={() => Actions.pop()}
      onFinish={() => { saveProfile() }}
      loading={loadingSet}
    >
      <View style={{
        width: '100%',
    paddingHorizontal: 30 * em,
    backgroundColor: '#ffffff'}}>
        {loading ? <ActivityIndicator size='small' color='#1E2D60' style={styles.avatar} /> : <ProfileCommonAvatar
          initialSize={36 * em}
          fullName={profileDataCurrent.firstName + ' ' + profileDataCurrent.lastName}
          style={styles.avatar}
          icon={image === null ? '' : { uri: image }}
          borderWidth={3 * em}
        />}
        <CommentText text="Changer ma photo de profil" style={styles.addPhotoBtn} color="#40CDDE" onPress={() => imageOptions()} />
      </View>

      <ProfileInformationListItem
        caption={'Mon nom'}
        value={profileDataCurrent.firstName + ' ' + profileDataCurrent.lastName}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(5);
          setnameModal(!nameModal);
        }}
      />

    
      <ProfileInformationListItem
        caption={'Ma présentation'}
        placeholder={!profileDataCurrent.presentation ? true : false}
        value={
          profileDataCurrent.presentation ||
          'Salut ! Je suis …\nPrésente toi ici. Ce texte sera affiché pour vous invitations et apparaitra sur ta page profil. Soit court, avent et efficace. Vivons ensemble !'
        }
        noClick={true}
        flech={true}
        style={styles.listItem}
        onPress={() => {
          setInputItemKey(7);
          setpresentationModal(!presentationModal);
        }}
      />
      <Text style={{marginTop:4*hm, paddingHorizontal: 30 * em,color:'#6A8596',fontSize:11*em,fontFamily:'Lato-Italic'}}>Les 100 premiers caractères feront office de ta présentation)</Text>
    
  <ProfileInformationListItem
        caption={'Mes atouts (3 max)'}
        placeholder
        noClick={true}
        flech={true}
        value={'Sélectionne les compétences où tu es plus l’aise'}
        style={styles.listItem}
        options={profileDataCurrent.skill !== null ? profileDataCurrent.skill : []}
        onPress={() => {
          setInputItemKey(8);
          setmyskillModal(!myskillModal);
        }}
      />
       
       
       
 



      {deleteUseLoading ? <ActivityIndicator size='small' color='#F9547B' style={styles.deleteBtn} /> : <CommonButton
        text={'Supprimer mon compte'}
        textStyle={{ color: '#F9547B' }}
        style={styles.deleteBtn}
        onPress={() => { deleteUserr() }}
      />}
      <MyskillComponents
        visible={myskillModal}
        itemKey={inputItemKey}
        title={'Mes atouts (3 max)'}
        value={props.assest}

        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setmyskillModal(false);
        }}
        skill={profileDataCurrent.skill}
        data={profileDataCurrent}
      />
      <ProfileNameComponent
        visible={nameModal}
        itemKey={inputItemKey}
        title={'Mon nom'}
        firstName={profileDataCurrent.firstName}
        lastName={profileDataCurrent.lastName}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setnameModal(false);
        }}
      />
      <MyAvailabilityComponent
        visible={availabilityModal}
        itemKey={inputItemKey}
        title={'Ma disponibilité'}
        value={profileDataCurrent.availability}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setavailabilityModal(false);
        }}
      />
      <MyPresentationComponent
        visible={presentationModal}
        itemKey={inputItemKey}
        title={'Ma présentation'}
        value={profileDataCurrent.presentation}
        profileDataCurrent={profileDataCurrent}
        setprofileDataCurrent={setprofileDataCurrent}
        onPress={() => {
          setpresentationModal(false);
        }}
      />


    </ProfileCommonHeader>
          
<View style={{bottom:10*hm,flexDirection:'row', justifyContent:'center'}}>
<TouchableOpacity onPress={() => Actions.pop() }
style={styles.okstyle}
>
<View
  style={styles.textView}>
  <Text style={styles.textstyle}>Enregistrer modifications</Text>
</View>
</TouchableOpacity>

</View>
</>
  );
};

const styles = {
  container: {
    backgroundColor: '#F0F5F7',
  },
  itemTitle: {
    height: 18 * em,
    lineHeight: 18 * em,
    marginLeft: 30 * em,
    marginTop: 25 * hm,
  },
  listItem: {
    width: '100%',
    marginTop: 10 * hm,
    paddingVertical: 25 * hm,
    paddingHorizontal: 30 * em,
    backgroundColor: '#ffffff',
  },
  avatar: { width: 92 * em, height: 92 * em, marginTop: 25 * hm, marginBottom: 10 * hm, alignSelf: 'center', },
  addPhotoBtn: { fontFamily: 'Lato-Regular' ,marginBottom: 25 * hm, lineHeight: 21 * em },
  deleteBtn: {
    marginTop: 5 * hm,
    marginBottom: 25 * hm,
    lineHeight: 19 * em,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },textstyle:{  
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
    marginBottom: 10 * hm},
};

export default EditProfileScreen;
