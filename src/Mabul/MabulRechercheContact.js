import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ImageBackground, FlatList } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm, mabulColors } from '../constants/consts';
import { Actions } from 'react-native-router-flux';
import CommonText from '../text/CommonText';
import SearchBox from '../Components/other/SearchBox';
import CommentText from '../text/CommentText';
import CommonListItem from '../adapter/CommonListItem';
import CheckBox from '../Components/checkbox/CheckBox';
import { Amis, Cancel, Famille, Tous, Voisins } from '../assets/svg/icons';
import RelationshipType from '../model/user/RelationshipType';
import { myContacts } from '../topbar/profile/myCircles/MyCirclesTabScreen';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { TouchableOpacity } from 'react-native';
import OkModal from '../Components/button/OkModal';
import MabulPubButton from '../Components/button/MabulPubButton';
import ShareButton from '../Components/button/ShareButton';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { getUserProfile, fetchcoordinate, setUserData } from '../services/firebase'

const MabulRechercheContact = (props) => {
  const [demandData, setdemandData] = useState(props.data)
  const { alertData } = useSelector(state => state.alertReducer)
  const mabulService = props.mabulService;
  // console.log("FINAL ALERT DATA", alertData, demandData)
  const conceptColor = mabulColors[mabulService];
  const [vchecked, setvChecked] = useState(false);
  const [achecked, setaChecked] = useState(false);
  const [fchecked, setfChecked] = useState(false);
  const searchedText = useRef('')
  const [tchecked, settChecked] = useState(false);
  const [contactType, setcontactType] = useState()
  const [user, setuser] = useState()
  const [loadingSet, setloadingSet] = useState(false)

  const check = (id) => {
    setvChecked(false)
    setaChecked(false)
    setfChecked(false)
    settChecked(false)
    switch (id) {
      case 1:
        setvChecked(true)
        // setcontactType({ id: 1, type: 'mes voisins' })
        setcontactType({ type: 1, name: 'mes voisins' })
        break;
      case 2:
        setaChecked(true)
        setcontactType({ type: 2, name: 'mes amis' })
        break;
      case 3:
        setfChecked(true)
        setcontactType({ type: 3, name: 'ma famille' })
        break;
      case 4:
        settChecked(true)
        setcontactType({ type: 4, name: 'tous' })
        break;
    }
  }
  useEffect(() => {
    getUserProfile(auth().currentUser.uid).then(async (item) => {
      setuser(() => item)
    })
    if (searchedText.current.length > 0) {
      onSearch(searchedText.current)
    }
  }, [])
  const [usersList, setusersList] = useState([])
  const [allChecked, setallChecked] = useState(false)
  const [checked, setChecked] = useState(new Array(usersList.length).fill(false));
  const [selectedUser, setselectedUser] = useState([])
  const [allUser, setallUser] = useState([])
  const Sheet1 = useRef(null)

  const SelectedAvatarView = ({ avatar, userName, id, Email }) => (
    <View style={{ width: 60 * em, flexGrow: 1, alignSelf: 'baseline', marginRight: 10 * em }}>
      <ImageBackground
        source={avatar}
        style={{
          marginBottom: 5 * hm,
          width: 54 * em,
          height: 54 * em,
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            borderWidth: 2 * em,
            width: 20 * em,
            height: 20 * em,
            borderRadius: 10 * em,
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
          }}>
          <Cancel width={16 * em} height={16 * em}
            onPress={() => clearSingleUser(id, Email)}
          />
        </View>
      </ImageBackground>
      <CommentText text={userName} style={styles.selectedFullName} />
    </View>
  );
  const renderSelectedList = ({ item }) => <SelectedAvatarView 
  Email={item.data.email} 
  avatar={item.data.profilePic !== undefined && item.data.profilePic !== " " ?
   { uri: item.data.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }} 
   userName={item.data.firstName}
    id={item.data.uid} />;
  const clearSingleUser = (id, Email) => {
    const filteredUser = selectedUser.filter((user) => {
      return user.data.uid !== id
    })
    setselectedUser(filteredUser)
  }
  useEffect(() => {
    firestore().collection('users').get().then(querySnapshot => {
      console.log(querySnapshot.docs)

      setusersList(
        querySnapshot.docs.map((doc) => ({ data: doc.data() }))
      )
      setallUser(querySnapshot.docs.map((doc) => ({ data: doc.data() })))
    });
  }, [])

  // console.log("GDHSJGSJDHSGKD", usersList)
  const onSearch = async (search) => {
    console.log("jdjdjdjdjdjdj", allUser[0])
    let condition = new RegExp(search.toLocaleUpperCase())
    var result = await Promise.all(
      allUser.filter(function (item, i) {
        if (item.data.firstName && item.data.lastName) {
          return condition.test(item.data.firstName.toLocaleUpperCase()) || condition.test(item.data.lastName.toLocaleUpperCase())
        }
      })
    )
    searchedText.current = search
    setusersList(result)
    // console.log("RESULTSSSSS", result)
    if (search.length === 0) {
      setusersList(allUser)
    }
  };
  const onClear = () => {
    setusersList(allUser);
  };
  const saveData = async (data) => {
    var verif = true
    if (data.serviceType.name === "alerts" && mabulService === "Alerte") {
      firestore().collection('userAlerts').doc(auth().currentUser.uid)
        .collection(data.serviceType.name).add(data).then(async (res) => {
          const responce = firestore().collection('userAlerts').doc(auth().currentUser.uid).collection(data.serviceType.name).doc(res.id)
          const datas = await responce.get(); setloadingSet(false);
          Actions.myAlert({ alertData: datas.data(), data2: data, user: user, docId: res.id }), console.log("res ",);
          props.rb4()
        });
    }
    else {
      firestore().collection('userDemands').doc(auth().currentUser.uid)
        .collection(data.serviceType.name).add(data).then(async (res) => {
          const responce = firestore().collection('userDemands').doc(auth().currentUser.uid).collection(data.serviceType.name).doc(res.id)
          const datas = await responce.get();
          console.log(datas, "dhddbncnxcncncnncnc ", mabulService);
          setloadingSet(false);
          props.rb4()
          // this[RBSheet + 4].close()
          if (mabulService === 'organize') {
            Actions.myOrganize({ data: data, data2: datas.data(), user: user, docId: res.id, });
          } else if (mabulService === 'give') {
            Actions.myGive({ data: data, data2: datas.data(), user: user, docId: res.id, })
          } else if (mabulService === 'sell') {
            Actions.mySell({ data: data, data2: datas.data(), user: user, docId: res.id, })
          } else if (mabulService === 'need') {
            Actions.myNeed({ data: data, data2: datas.data(), user: user, docId: res.id, })
          }
        });
    }
  }
  const onSubmit = () => {
    setloadingSet(true)
    let data = {}

    if (props.shareEdit==true){
      props.rb4()

    }
    else{
    if (mabulService === 'organize') {
      data = Object.assign(demandData, { contactType: contactType, users: selectedUser, serviceType: { name: 'organize', code: 0, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })

    } else if (mabulService === 'give') {
      data = Object.assign(demandData, { contactType: contactType, users: selectedUser, serviceType: { name: 'give', code: 1, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })

    } else if (mabulService === 'sell') {
      data = Object.assign(demandData, { contactType: contactType, users: selectedUser, serviceType: { name: 'sell', code: 2, subCode: 40 }, status: { status: 'INPROGRESS', code: 102 } })

    } else if (mabulService === 'need') {

      data = Object.assign(demandData, { contactType: contactType, users: selectedUser, serviceType: { name: 'need', code: 3, subCode: 11 }, status: { status: 'INPROGRESS', code: 102 } })
    }

    if (mabulService === 'Alerte') {
      data = Object.assign(alertData, { contactType: contactType, users: selectedUser, serviceType: { name: 'alerts', code: 0, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })
      // console.log('data aa gra re', data)

    }
    // console.log("DATADATDADTAD", data)
    saveData(data);
  }
  }
  // console.log("CHECKEDDDDDD", checked)
  const handleRemove = (value) => {
    let filteredUsers = selectedUser.filter((user) => {
      return user.data.uid !== value.data.uid
    })
    setselectedUser(filteredUsers)
  }
  const handleChange = (value) => {
    let newArray = [...selectedUser]
    newArray.push(value)
    setselectedUser(newArray)
  }

  const renderCircleList = ({ item, index }) => {
    const selectedIds = selectedUser.map(
      (user) => user.data.uid
    );
    // console.log("264", selectedIds)
    return (
      <CommonListItem
        icon={<Image source={item.data.profilePic !== undefined && item.data.profilePic !== " " ? { uri: item.data.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }}
          style={{ width: 40 * em, height: 40 * em, marginRight: 15 * em }}
        />}
        title={item.data.firstName + ' ' + item.data.lastName}
        titleStyle={{ color: '#1E2D60', fontFamily: 'Lato-Black' }}
        rightView={
          <CheckBox
            oval
            pink={props.sort === RelationshipType.FAMILIY ? true : false}
            blue={props.sort === RelationshipType.FRIEND ? true : false}
            bgColor="#EF88B9"
            isChecked={selectedIds.includes(item.data.uid)}
            onClick={selectedIds.includes(item.data.uid)
              ? () => handleRemove(item)
              : () => handleChange(item)}
          />
        }
        style={styles.listItem}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBox style={styles.searchBox} comment="Rechercher un contact" smallText="Rechercher un contact" onSearch={() => Sheet1.current.open()} onClear={onClear} />
        <Text style={{ fontFamily: 'Lato-Italic', color: '#A0AEB8', fontSize: 13 * em, marginTop: 6 * hm }}>Choisis un ou plusieurs cercles, ou recherche un contact précis.</Text>
        {selectedUser.length !=0?
       <View style={{ height: 90 * em, marginTop: 25 * em, marginBottom: 25 * em }}>
       <FlatList horizontal={true} data={selectedUser} renderItem={renderSelectedList} keyExtractor={(i) => i.id} />
       </View>:
      <View style={{marginBottom:20*hm}}/>}
      <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
          <ShareButton text={"mes voisins"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(215,243,255,0.7)' }} leftIcon={<Voisins />} rightIcon={
            <CheckBox
              oval
              pink={props.sort === RelationshipType.FAMILIY ? true : false}
              blue={props.sort === RelationshipType.FRIEND ? true : false}
              bgColor="#EF88B9"
              isChecked={vchecked}
              onClick={() => {
                check(1)
                // const arr = [...checked];
                // arr[index] = !arr[index];
                // setChecked(arr);
              }}
            />
          } />
          <ShareButton text={"mes amis"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(255,244,217,0.62)' }} leftIcon={<Amis />} rightIcon={
            <CheckBox
              oval
              orange={true}
              bgColor="#FF9417"
              isChecked={achecked}
              onClick={() => {
                check(2)
                // const arr = [...checked];
                // arr[index] = !arr[index];
                // setChecked(arr);
              }}
            />
          } />
          <ShareButton text={"ma famille"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(255,23,103,0.11)' }} leftIcon={<Famille />} rightIcon={
            <CheckBox
              oval
              pink={true}
              bgColor="#EF88B9"
              isChecked={fchecked}
              onClick={() => {
                check(3)
                // const arr = [...checked];
                // arr[index] = !arr[index];
                // setChecked(arr);
              }}
            />
          } />
          <ShareButton text={"TOUS"} style={{ marginBottom: 10 * hm, backgroundColor: 'rgba(240,245,247,0.62)' }} leftIcon={<Tous />} rightIcon={
            <CheckBox
              oval
              gray={true}
              bgColor="#EF88B9"
              isChecked={tchecked}
              onClick={() => {
                check(4)
                // const arr = [...checked];
                // arr[index] = !arr[index];
                // setChecked(arr);
              }}
            />
          } />
        </View>
      </ScrollView>
      <MabulPubButton
        text={props.txt? props.txt: "Partager dans Labul"}
        color={props.conceptColor}
        style={styles.nextBtn}
        onPress={() =>
          onSubmit()
        }
      />
      <RBSheet
        ref={Sheet1}
        height={hm * 630}
        openDuration={250}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(209,226,237,0.9)'
          },
          container: {
            borderTopLeftRadius: 28 * em,
            borderTopRightRadius: 28 * em,
          }
        }}
      >
        <View style={{ paddingTop: 46 * hm, paddingBottom: hm * 25 }}>
          <Text style={{ alignSelf: 'center', color: '#1E2D60', fontSize: 16 * em, fontFamily: 'Lato-Medium' }}>Rechercher un contact</Text>
        </View>
        <View style={styles.container}>
          <SearchBox style={styles.searchBox} comment="Rechercher un contact" smallText="Rechercher un contact" onSearch={onSearch} onClear={onClear} />
          <Text style={{ fontFamily: 'Lato-Italic', color: '#A0AEB8', fontSize: 13 * em, marginTop: 6 * hm, marginBottom: 20 * hm }}>Choisis un ou plusieurs cercles, ou recherche un contact précis.</Text>
          <FlatList
            data={usersList}
            renderItem={renderCircleList}
            keyExtractor={(i) => i.id}
            style={{ marginTop: 0 * hm }} />
        </View>
        <OkModal hideDescription={() => { }} closeModal={() => Sheet1.current.close()} />
      </RBSheet>
    </View>
  );
};
const styles = {
  searchBox: { marginBottom: 5 * hm, height: 52 * hm },
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20 * em },
  title: { textAlign: 'left', marginTop: 23 * em, marginBottom: 17 * em },
  header: { marginTop: 39 * hm, alignSelf: 'flex-end' },
  selectedFullName: {right:4*em,fontSize: 12 * em, height: 30 * em, color: '#1E2D60', marginBottom: 0, fontFamily: 'Montserrat-Bold' },
  listItem: { marginBottom: 35 * em, marginTop: 2 * hm },
  nextBtn: {
    width: 315 * em,
    alignSelf: 'center',
    bottom: 17 * hm
  },
};
export default MabulRechercheContact;
