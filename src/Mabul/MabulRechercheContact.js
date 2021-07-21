import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, FlatList } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm,mabulColors } from '../constants/consts';
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
import { getUserProfile,fetchcoordinate } from '../services/firebase'
const usersData = [
  {
    sort: 'families',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../assets/images/avatar.png'),
  },

  {
    sort: 'families',
    userName: 'Robert Richard',
    relationship: 'Ma famille',
    avatar: require('../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../assets/images/avatar.png'),
  },

  {
    sort: 'friends',
    userName: 'Amélie Petit',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amélie Petit',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('../assets/images/avatar.png'),
  },

  {
    sort: 'neighbours',
    userName: 'Amélie',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('../assets/images/avatar.png'),
  },

  {
    sort: 'neighbours',
    userName: 'Antoine Durand',
    relationship: 'Mon voisin',
    avatar: require('../assets/images/avatar.png'),
  },
];
const selectedList = [
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('../assets/images/avatar.png'),
  },
];

const SelectedAvatarView = ({ avatar, userName }) => (
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
        <Cancel width={16 * em} height={16 * em} />
      </View>
    </ImageBackground>
    <CommentText text={userName} style={styles.selectedFullName} />
  </View>
);

const MabulRechercheContact = (props) => {
  
  const [demandData, setdemandData] = useState(props.data)

  const mabulService= props.mabulService;

  const conceptColor = mabulColors[mabulService];
  const [vchecked, setvChecked] = useState(false);
  const [achecked, setaChecked] = useState(false);
  const [fchecked, setfChecked] = useState(false);
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
        setcontactType({ type: 1, name: 'mes voisins' })
        break;

      case 2:
        setaChecked(true)
        setcontactType({ type: 2, name: 'mes amis' })
        break;
      case 3:
        setfChecked(true)
        setcontactType({ type: 3, name: 'mes famille' })
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

  }, [])
  const [usersList, setusersList] = useState({ data: usersData })
  const [allChecked, setallChecked] = useState(false)
  const [checked, setChecked] = useState(new Array(usersData.length).fill(false));
  const renderSelectedList = ({ item }) => <SelectedAvatarView avatar={item.avatar} userName={item.userName} />;
  const onSearch = (search) => {
    setusersList({
      data:
      usersData.filter((data) => {
          return (
            data.userName.toLowerCase().includes(search.toLowerCase())
          );
        })
    }
    );
  };
  const onClear = () => {
    setusersList({ data: usersData });
  };


  const saveData = async (data) => {

    var verif = true
     
    
    
                  // do{
                    // setdemandData({ ...demandData, title: "dddddd" })
                    // console.log(demandData);

                  //  console.log(data.coordinate.logitude,"30= ",data.coordinate.latitude) 
    // let result = await fetchcoordinate(data.coordinate.latitude,data.coordinate.logitude)
    // .then(async (item) => {
    
    //         if(item== true)
    //         {
    //           console.log("trueeee");
    //            data.coordinate.latitude = data.coordinate.latitude-0.002
    //           console.log("2= ",data.coordinate.latitude)}
    //           else{
    //             console.log("falseeeee");
    //             console.log("3= ",data.coordinate.latitude)
    //             verif = false
    //             return data.coordinate.latitude
    //           }
    //         })
                  // }while (verif==true) 
            // console.log(verif,"resullllllttt====== ",data.coordinate.latitude);
    
        firestore().collection('userDemands').doc(auth().currentUser.uid)
          .collection(data.serviceType.name).add(data).then(async (res) => {
    
            const responce = firestore().collection('userDemands').doc(auth().currentUser.uid).collection(data.serviceType.name).doc(res.id)
    
            const datas = await responce.get();
            console.log(datas,"dhddbncnxcncncnncnc    ",mabulService);

            setloadingSet(false);
            this[RBSheet + 4].close()
            if (mabulService==='Alerte'){
              // let data = {}
                firestore().collection('userAlerts').doc(auth().currentUser.uid)
                .collection(data.serviceType.name).add(data).then(async (res) => {
                  const responce = firestore().collection('userAlerts').doc(auth().currentUser.uid).collection(data.serviceType.name).doc(res.id)
                  const datas = await responce.get(); setloadingSet(false);
                  Actions.myAlert({ alertData: datas.data(), data2: data, user: user, docId: res.id }), console.log("res ",);
                });
            }
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
      const onSubmit = () => {
        console.log(mabulService," jjjsjsjsjsjsqqssseerrfvviiicceee");
        setloadingSet(true)
        let data = {}
        if (mabulService === 'organize') {
          data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'organize', code: 0, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })
    
        } else if (mabulService === 'give') {
          data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'give', code: 1, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })
    
        } else if (mabulService === 'sell') {
          data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'sell', code: 2, subCode: 40 }, status: { status: 'INPROGRESS', code: 102 } })
    
        } else if (mabulService === 'need') {
    
          data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'need', code: 3, subCode: 11 }, status: { status: 'INPROGRESS', code: 102 } })
        }
  
        if(mabulService === 'Alerte'){
          data = Object.assign(demandData, { contactType: contactType, serviceType: { name: 'alerts', code: 0, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })
          console.log('data aa gra re',data)
      
        }
        saveData(data);
      }
  const renderCircleList = ({ item, index }) => {
    return (
      <CommonListItem
        icon={<Image source={item.avatar}
         style={{ width: 40 * em, height: 40 * em, marginRight: 15 * em }} 
         />}
        title={item.userName}
        titleStyle={{ color: '#1E2D60', fontFamily: 'Lato-Black' }}
        rightView={
          <CheckBox
            oval
            pink={props.sort === RelationshipType.FAMILIY ? true : false}
            blue={props.sort === RelationshipType.FRIEND ? true : false}
            bgColor="#EF88B9"
            isChecked={checked[index]}
            onClick={() => {
              const arr = [...checked];
              arr[index] = !arr[index];
              setChecked(arr);
            }}
          />
        }
        style={styles.listItem}
      />
    );
  };
  return (
    <View style={styles.container}>
    <ScrollView>
        <SearchBox style={styles.searchBox} comment="Rechercher un contact" smallText="Rechercher un contact" onSearch={()=>this[RBSheet + 1].open()} onClear={onClear} />
     <Text style={{fontFamily:'Lato-Italic',color:'#A0AEB8',fontSize:13*em,marginTop:6*hm}}>Choisis un ou plusieurs cercles, ou recherche un contact précis.</Text>
      <View style={{ height: 90 * em, marginTop:25 * em, marginBottom: 25 * em }}>
        <FlatList horizontal={true} data={selectedList} renderItem={renderSelectedList} keyExtractor={(i) => i.id} />
      </View>
   <View style={{flex:2,flexDirection:'column',justifyContent:'center',alignSelf:'center'}}>



<ShareButton text={"mes voisins"} style={{ marginBottom:10*hm ,backgroundColor: 'rgba(215,243,255,0.7)'}} leftIcon={<Voisins/>} rightIcon={
       
         <CheckBox
            oval
            pink={props.sort === RelationshipType.FAMILIY ? true : false}
            blue={props.sort === RelationshipType.FRIEND ? true : false}
            bgColor="#EF88B9"
            isChecked={true}
            onClick={() => {
              const arr = [...checked];
              arr[index] = !arr[index];
              setChecked(arr);
            }}
          />
        }/>



<ShareButton text={"mes amis"} style={{ marginBottom:10*hm ,backgroundColor: 'rgba(255,244,217,0.62)'}} leftIcon={<Amis/>} rightIcon={
       
       <CheckBox
          oval
          orange={true}
          bgColor="#FF9417"
          
          isChecked={true}
          onClick={() => {
            const arr = [...checked];
            arr[index] = !arr[index];
            setChecked(arr);
          }}
        />
      }/>



<ShareButton text={"ma famille"} style={{ marginBottom:10*hm ,backgroundColor: 'rgba(255,23,103,0.11)'}} leftIcon={<Famille/>} rightIcon={
       
       <CheckBox
          oval
          pink={true}
          bgColor="#EF88B9"
          isChecked={true}
          onClick={() => {
            const arr = [...checked];
            arr[index] = !arr[index];
            setChecked(arr);
          }}
        />
      }/>




<ShareButton text={"TOUS"} style={{ marginBottom:10*hm ,backgroundColor: 'rgba(240,245,247,0.62)'}} leftIcon={<Tous/>} rightIcon={
       
       <CheckBox
          oval
          gray={true}
          bgColor="#EF88B9"
          isChecked={true}
          onClick={() => {
            const arr = [...checked];
            arr[index] = !arr[index];
            setChecked(arr);
          }}
        />
      }/>
</View>

    </ScrollView>


    <MabulPubButton
        text={"Partager dans Labul"}
          color={props.conceptColor}
          style={styles.nextBtn}
          onPress={()=> 
            onSubmit()
          }
        />



    <RBSheet
  ref={ref => {
    this[RBSheet + 1] = ref;
  }}
  height={hm * 630}

  openDuration={250}
  customStyles={{
    wrapper:{
      backgroundColor: 'rgba(209,226,237,0.9)'
    },
    container: {
      borderTopLeftRadius: 28 * em,
      borderTopRightRadius: 28 * em,
    
    }
  }}
>
  <View style={{ paddingTop: 46 * hm, paddingBottom: hm * 25 }}>

    <Text style={{ alignSelf:'center', color: '#1E2D60', fontSize: 16 * em, fontFamily: 'Lato-Medium' }}>Rechercher un contact</Text>
  </View>

  <View style={styles.container}>


  <SearchBox style={styles.searchBox} comment="Rechercher un contact" smallText="Rechercher un contact" onSearch={onSearch} onClear={onClear} />
     <Text style={{fontFamily:'Lato-Italic',color:'#A0AEB8',fontSize:13*em,marginTop:6*hm,marginBottom:20*hm}}>Choisis un ou plusieurs cercles, ou recherche un contact précis.</Text>
     
       <FlatList
          data={usersList.data}
       
          renderItem={renderCircleList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 0 * hm }} />
  





  </View>
  <OkModal closeModal={ () =>  this[RBSheet + 1].close()}/>
</RBSheet>

  </View>
  );
};

const styles = {
  searchBox: { marginBottom: 5 * hm, height: 52 * hm },

  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20 * em },
  title: { textAlign: 'left', marginTop: 23 * em, marginBottom: 17 * em },
  header: { marginTop: 39 * hm, alignSelf: 'flex-end' },
  selectedFullName: { fontSize: 12 * em, height: 30 * em, color: '#1E2D60', marginBottom: 0, fontFamily: 'Lato-Bold' },
  listItem: { marginBottom: 35 * em,marginTop:2*hm },
  nextBtn: {
width:315*em,
    alignSelf: 'center',
   bottom:17*hm
  },
};

export default MabulRechercheContact;
