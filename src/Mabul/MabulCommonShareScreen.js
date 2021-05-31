import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm, mabulColors } from '../constants/consts';
import CommonText from '../text/CommonText';
import MabulCommonHeader from './MabulCommonHeader';
import CommonButton from '../Components/button/CommonButton';
import { Family, Friend, Neighbor, All, CheckBlue } from '../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../redux/actions/demand'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const MabulCommonShareScreen = ({ mabulService, process }) => {
  const dispatch = useDispatch()
  const { demandData } = useSelector((state) => state.demandReducer);
  const conceptColor = mabulColors[mabulService];
  const [vchecked, setvChecked] = useState(false);
  const [achecked, setaChecked] = useState(false);
  const [fchecked, setfChecked] = useState(false);
  const [tchecked, settChecked] = useState(false);
  const [contactType, setcontactType] = useState()
  const [loadingSet, setloadingSet] = useState(false)
  const check = (id) => {
    setvChecked(false)
    setaChecked(false)
    setfChecked(false)
    settChecked(false)
    switch (id) {
      case 1:
        setaChecked(true)
        setcontactType({ type: 2, name: 'mes amis' })
        break;
      case 2:
        setvChecked(true)
        setcontactType({ type: 1, name: 'mes voisins' })
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
  const saveData = (data) => {

    console.log("data ", data);
    console.log("auth().currentUser.uid ", auth().currentUser.uid);
    if (mabulService === 'organize') {
      firestore().collection('userDemands').doc(auth().currentUser.uid)
        .collection('organize').doc().set(data).then((res) => { setloadingSet(false); Actions.myOrganize({ data: data }), console.log("res ", res); });

    } else if (mabulService === 'give') {
      firestore().collection('userDemands').doc(auth().currentUser.uid)
        .collection('give').doc().set(data).then((res) => { setloadingSet(false); Actions.myGive({ data: data }) });

    } else if (mabulService === 'sell') {
      firestore().collection('userDemands').doc(auth().currentUser.uid)
        .collection('sell').doc().set(data).then((res) => { setloadingSet(false); Actions.mySell({ data: data }) });

    } else {

      firestore().collection('userDemands').doc(auth().currentUser.uid)
        .collection('needs').doc().set(data).then((res) => { setloadingSet(false); Actions.myNeed({ data: data }) });
    }


    // mabulService === 'organize'
    //   ? Actions.myOrganize({ data: data })
    //   : mabulService === 'give'
    //     ? Actions.myGive({ data: data })
    //     : mabulService === 'sell'
    //       ?
    //       Actions.mySell({ data: data })
    //       // firestore().collection('userDemands').doc(auth().currentUser.uid)
    //       // .collection('sell').doc().set(data).then((res) => { setloadingSet(false)})
    //       : firestore().collection('userDemands').doc(auth().currentUser.uid)
    //         .collection('needs').doc().set(data).then((res) => { setloadingSet(false) }), Actions.myNeed({ data: data });

  }

  const onSubmit = () => {
    setloadingSet(true)
    let data = Object.assign(demandData, { contactType: contactType })
    saveData(data);


  }
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Je partage avec'} style={styles.title} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity activeOpacity={1}
              style={[
                vchecked ? styles.iconViewClicked : styles.iconView,
                // { marginBottom: index === 2 ? 40 * em : 0 },
              ]}
              onPress={() => check(2)}>
              {vchecked ? <CheckBlue width={48 * em} height={48 * em} /> : <Neighbor width={48 * em} height={48 * em} />}
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                achecked ? styles.iconViewClicked : styles.iconView,
                // { marginBottom: index === 2 ? 40 * em : 0 },
              ]}
              onPress={() => check(1)}>
              {achecked ? <CheckBlue width={48 * em} height={48 * em} /> : <Friend width={48 * em} height={48 * em} />}
              <CommonText text="mes amis" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                fchecked ? styles.iconViewClicked : styles.iconView,
                // { marginBottom: index === 2 ? 40 * em : 0 },
              ]}
              onPress={() => check(3)}>
              {fchecked ? <CheckBlue width={48 * em} height={48 * em} /> : <Family width={48 * em} height={48 * em} />}
              <CommonText text="Ma famille" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[
                tchecked ? styles.iconViewClicked : styles.iconView,
                // { marginBottom: index === 2 ? 40 * em : 0 },
              ]}
              onPress={() => check(4)}>
              {tchecked ? <CheckBlue width={48 * em} height={48 * em} /> : <All width={48 * em} height={48 * em} />}
              <CommonText text="tous" color="#6A8596" style={{ marginTop: 15 * em }} />
            </TouchableOpacity>
          </View>
        </View>
        <CommonButton
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="Publier"
          onPress={() => {
            onSubmit()
          }}
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
    // marginTop: 16 * em,
  },
  header: {
    height: '12.45%',

  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
    marginBottom: 35 * hm,

  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },
  photoZone: {
    width: 315 * em,
    height: 121 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 35 * em,
  },
  commentPhoto: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#6A8596',
  },
  iconViewClicked: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * em,
    height: 176 * em,
    paddingHorizontal: 15 * em, backgroundColor: '#fff',

    ...Platform.select({
      ios: {
        borderRadius: 20 * em,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * em,
    height: 176 * em,

  },
  btn: {
    marginBottom: 30 * em,
    backgroundColor: '#38C2FF',
  },

};

export default MabulCommonShareScreen;
