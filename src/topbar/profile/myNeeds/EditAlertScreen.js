import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { em, hexToRGB } from '../../../constants/consts';
import ProfileInformationListItem from '../../../adapter/ProfileInformationListItem';
import ProfileCommonHeader from '../../../Components/header/ProfileCommonHeader';
import CommonButton from '../../../Components/button/CommonButton';
import CommonText from '../../../text/CommonText';
import { Actions } from 'react-native-router-flux';
import { Family, Friend, Neighbor, All } from '../../../assets/svg/icons';
import { deleteUserAlerts } from '../../../services/firebase'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import EditJAlertScreen from './EditJAlertScreen';
import EditShareScreen from './EditShareScreen';
import EditDescriptionScreen from './EditDescriptionScreen';
import EditAddressScreen from './EditAddressScreen';
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
}
const EditAlertScreen = (props) => {
  const [typeModalVisible, settypeModalVisible] = useState(false);
  const [addressModalVisible, setaddressModalVisible] = useState(false);
  const [descriptionModalVisible, setdescriptionModalVisible] = useState(false);
  const [belongsModalVisible, setbelongsModalVisible] = useState(false);
  // const [inputItemKey, setInputItemKey] = useState(1);
  const [loading, setloading] = useState(false);
  const [userProfile] = useState(updateUserPrfile);
  const [description, setDescription] = useState(props.alertData.description)
  const [address, setAddress] = useState(props.alertData.address)
  const [alertType, setAlertType] = useState(props.alertData.type)
  const [checked, setChecked] = useState(props.alertData.type);
  const [contactType, setcontactType] = useState(props.alertData.contactType)
  const [user, setUser] = useState(props.user)

  const updateUserDemands = (id, data) => {
    firestore().collection('userAlerts').doc(id).collection(props.alertData.serviceType.name).doc(props.docId).update(data).then((res) => {
      Actions.pop(),

        setloading(false)
    }).catch((error) => {
      console.log(error); setloading(false)
    })
  }


  const saveData = () => {
    let data = {}
    data = {
      type: checked,
      address: address,
      description: description,
      belongsTo: contactType,
    },
      updateUserDemands(auth().currentUser.uid, data)
    console.log()
  }

  const deletealert = () => {
    Alert.alert(
      "Supprimer",
      "Es-tu sûr?",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            deleteUserAlerts(auth().currentUser.uid, props.alertData.serviceType.name, props.docId).then((item) => {
              Actions.home()
            }).catch((error) => {
              console.log(error);
            })
          }
        }
      ],
    );
  }

  return (
    <ProfileCommonHeader title="Modifier alerte" onCancel={() => Actions.pop()} loading={loading} onFinish={() => { setloading(true), saveData() }}>
      <ProfileInformationListItem
        caption={'Type d’alerte'}
        titleUpperCase
        value={checked.title}
        style={styles.listItem}
        onPress={() => {
          // setInputItemKey(1);
          settypeModalVisible(!typeModalVisible);
        }}
      />
      <EditJAlertScreen
        visible={typeModalVisible}
        changeItem={'Type d’alerte'}
        value={alertType.title}
        // text={checked.title}
        title={'Type d’alerte'}
        onPress={() => {
          settypeModalVisible(false)
        }}
        onChange={(item) => { setChecked({ ...checked, title: item }), settypeModalVisible(false) }}
      />
      <ProfileInformationListItem
        titleUpperCase
        caption={'Où'}
        value={address}
        style={styles.listItem}
        onPress={() => {
          // setInputItemKey(2);
          setaddressModalVisible(!addressModalVisible);
        }}
      />
      <EditAddressScreen
        visible={addressModalVisible}
        changeItem={'Où'}
        // value={address? address: props.alertData.address }
        value={address}
        // coordinate={address}
        title={"Ma localisation"}
        onPress={() => {
          setaddressModalVisible(false)
        }}
        onChange={(item) => { setAddress(item), setaddressModalVisible(false) }}
      />
      <ProfileInformationListItem
        titleUpperCase
        caption={'Description'}
        value={description.description}
        style={styles.listItem}
        onPress={() => {
          // setInputItemKey(3);
          setdescriptionModalVisible(!descriptionModalVisible);
        }}
      />
      <EditDescriptionScreen
        visible={descriptionModalVisible}
        changeItem={'Description'}
        value={description.description}
        title={'Description'}
        onPress={() => {
          setdescriptionModalVisible(false)
        }}
        onChange={(item) => { setDescription({ ...description, description: item }), setdescriptionModalVisible(false) }}
      />
      <TouchableOpacity
        onPress={() => {
          //  setInputItemKey(4);
          setbelongsModalVisible(!belongsModalVisible);
        }}>
        <ProfileInformationListItem
          titleUpperCase
          caption={'Partagé avec'}
          circleText={
            <>
              {contactType.type == 1 ? <Neighbor width={28 * em} height={28 * em} /> :
                contactType.type == 2 ? <Friend width={28 * em} height={28 * em} /> :
                  contactType.type == 3 ? <Family width={28 * em} height={28 * em} /> :
                    <All width={28 * em} height={28 * em} />
              }
              <CommonText text={contactType.name} color="#1E2D60" style={{ marginLeft: 10 * em, alignSelf: 'center' }} />
            </>
          }
          style={styles.listItem}
        />
      </TouchableOpacity>
      <EditShareScreen
        visible={belongsModalVisible}
        changeItem={'Partagé avec'}
        value={contactType}
        title={'Partagé avec'}
        onPress={() => {
          setbelongsModalVisible(false);
        }}
        onChange={(item) => { setcontactType(item), setbelongsModalVisible(false) }}
      />
      <CommonButton
        text={'Supprimer mon alerte'}
        style={styles.deleteBtn}
        textStyle={{ color: '#F9547B' }}
        onPress={() => { deletealert() }}
      />
    </ProfileCommonHeader>
  );
};

const styles = {
  container: { backgroundColor: '#F0F5F7' },
  bgView: { marginTop: 10 * em, height: 184 * em, backgroundColor: hexToRGB('#40CDDE10', 0.1) },
  photo: {
    width: 95 * em,
    height: 95 * em,
    borderRadius: 15 * em,
    resizeMode: 'cover',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
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
export default EditAlertScreen;
