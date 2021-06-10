
import React, { useState, useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import SearchBox from '../../Components/other/SearchBox';
import MabulCommonHeader from '../../Mabul/MabulCommonHeader';
import CommonButton from '../../Components/button/CommonButton';
import { AlertWhite } from '../../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';
import CheckBox from '../../Components/checkbox/CheckBox';
import CommonListItem from '../../adapter/CommonListItem';
import _ from 'lodash'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { getUserProfile } from '../../services/firebase';
const usersLista = [
  // { id: 0.1, userName: 'Tous',tous:true },
  {
    id: 0,
    userName: 'Amandine Bernard',
    avatar: require('../../assets/images/avatar.png'),
    checked: true,
  },
  {
    id: 1,
    userName: 'Amélie Petit',
    avatar: require('../../assets/images/avatar.png'),
    checked: false,
  },
  {
    id: 2,
    userName: 'Antoine Durand',
    avatar: require('../../assets/images/avatar.png'),
    checked: true,
  },
  {
    id: 3,
    userName: 'Robert Dupont',
    avatar: require('../../assets/images/avatar.png'),
    checked: true,
  },
  {
    id: 4,
    userName: 'Julien Girard',
    avatar: require('../../assets/images/avatar.png'),
    checked: true,
  },
  {
    id: 5,
    userName: 'Julien Google Translate',
    avatar: require('../../assets/images/avatar.png'),
    checked: true,
  },
];

const AlertShareScreen = (props) => {
  const conceptColor = '#F9547B';
  const { demandData } = useSelector((state) => state.demandReducer);
  const { profileData } = useSelector((state) => state.profileReducer);
  const [allChecked, setallChecked] = useState(false)
  const [usersList, setusersList] = useState({ data: usersLista })
  const [user, setuser] = useState(profileData)
  const [optionCheck, setOptionCheck] = useState([]);
  const [checked, setChecked] = useState(new Array(usersList.length).fill(false));
  const [loadingSet, setloadingSet] = useState(false)
  const [vchecked, setvChecked] = useState(false);
  const [achecked, setaChecked] = useState(false);
  const [fchecked, setfChecked] = useState(false);
  const [tchecked, settChecked] = useState(false);
  const [contactType, setcontactType] = useState()

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

  const removeByAttr = function (arr, attr, value) {
    const findIndex = arr.findIndex(a => a.id === value)
    findIndex !== -1 && arr.splice(findIndex, 1)
    setTimeout(() => {
      setOptionCheck(arr);
    }, 50);
  }

  useEffect(() => {
    let temp = usersLista
    let changed_data = []
    for (let i = 0; i < temp.length; i++) {
      changed_data.push({ id: temp[i].id, userName: temp[i].userName, checked: false, avatar: temp[i].avatar })
    }
    setusersList({ data: changed_data })
  }, [])

  useEffect(() => {
    const data = usersList.data
    let neww = []
    if (allChecked) {
      for (let i = 0; i < data.length; i++) {
        neww.push({ id: data[i].id, userName: data[i].userName, checked: true, avatar: data[i].avatar })
      }
      setusersList({ data: neww })
    }
    else {
      for (let i = 0; i < data.length; i++) {
        neww.push({ id: data[i].id, userName: data[i].userName, checked: false, avatar: data[i].avatar })
      }
      setusersList({ data: neww })
    }
  }, [allChecked])


  useEffect(() => {
    getUserProfile(auth().currentUser.uid).then(async (item) => {
      setuser(() => item)
    })
  }, [])

  const dataSave = (selecteds) => {
    let data = {}
    data = Object.assign(demandData, { invited: selecteds, contactType: contactType, serviceType: { name: 'alerts', code: 0, subCode: 0 }, status: { status: 'INPROGRESS', code: 102 } })
    // console.log('data aa gra re',data)
    firestore().collection('userAlerts').doc(auth().currentUser.uid)
      .collection(data.serviceType.name).add(data).then(async (res) => {
        const responce = firestore().collection('userAlerts').doc(auth().currentUser.uid).collection(data.serviceType.name).doc(res.id)
        const datas = await responce.get(); setloadingSet(false);
        Actions.myAlert({ alertData: datas.data(), data2: data, user: user, docId: res.id }), console.log("res ",);
      });
  }

  const getselecteditem = () => {

    setloadingSet(true)
    var keys = usersList.data.map((t) => t.userName)
    var checks = usersList.data.map((t) => t.checked)
    var avatar = usersList.data.map((t) => t.avatar)
    let selecteds = []
    for (let i = 0; i < checks.length; i++) {
      if (checks[i] == true) {
        selecteds.push({ id: i, userName: keys[i], checked: true, avatar: avatar[i] })
      }
    }

    setOptionCheck(() => selecteds)
    dataSave(selecteds)
    // Actions.myAlert()
  }
  const onChecked = (id, all) => {
    const data = usersList.data
    const index = data.findIndex(x => x.id === id);
    data[index].checked = !data[index].checked
    setOptionCheck({ data: data })
  }

  const onSearch = (search) => {
    setusersList({
      data:
        usersLista.filter((data) => {
          return (
            data.userName.toLowerCase().includes(search.toLowerCase())
          );
        })
    }
    );
  };
  const onClear = () => {
    setusersList({ data: usersLista });
  };
  const renderCircleList = ({ item }) => {

    return (
      <CommonListItem
        icon={<Image source={item.avatar} style={{ width: 40 * em, height: 40 * em, marginRight: 15 * em }} />}
        style={styles.listItem}
        title={item.userName}
        titleStyle={{ color: '#1E2D60', fontFamily: 'Lato-Bold', fontSize: 16 * em }}
        rightView={
          <CheckBox
            oval
            red
            isChecked={item.checked}
            onClick={() => {
              onChecked(item.id)
            }}
          />}
      />);
  };

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Partager avec'} style={styles.title} />
        <SearchBox style={styles.searchBox} comment="Rechercher un contact" smallText="Rechercher un contact" onSearch={onSearch} onClear={onClear} />
        <FlatList
          data={usersList.data}
          ListHeaderComponent={() => {
            return (<CommonListItem
              style={[styles.listItem, { paddingTop: 10 * hm }]}
              title={'tous'}
              titleStyle={{ color: '#1E2D60', fontFamily: 'Lato-Bold', fontSize: 16 * em }}
              rightView={
                <CheckBox
                  oval
                  red
                  isChecked={allChecked}
                  onClick={() => {
                    setallChecked(!allChecked)

                  }}
                />
              }
            />)
          }}
          renderItem={renderCircleList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 70 * hm }} />
        <CommonButton
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="J’alerte"
          textStyle={{ marginLeft: 12.52 * em }}
          leftIcon={<AlertWhite width={27.21 * em} height={22.03 * em} />}
          onPress={() => { getselecteditem() }}
          loading={loadingSet}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '12.45%',
  },
  body: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  commonHeader: { marginTop: 27 * hm },
  title: {
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
  },
  searchBox: { marginBottom: -35 * hm, marginTop: 15 * hm, height: 52 * hm },
  location: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    alignItems: 'center',
    flexDirection: 'row',
  },

  listItem: { width: '90%', marginBottom: 35 * hm },
  btn: {
    width: 315 * em,
    alignSelf: 'center',
    marginBottom: 30 * hm,
  },
  optionCaption: {
    fontSize: 18 * em,
    lineHeight: 23 * em,
    color: '#1E2D60',
  },
};

export default AlertShareScreen;
