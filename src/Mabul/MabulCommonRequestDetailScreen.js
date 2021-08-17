import React, { useRef, useState } from 'react';
import { View, Image, Text, KeyboardAvoidingView, Switch } from 'react-native';
import TitleText from '../text/TitleText';
import { hexToRGB, em, mabulColors, hm } from '../constants/consts';
import CommentText from '../text/CommentText';
import MabulCommonHeader from './MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../Components/button/MabulNextButton';
import { Edit, Edit1, Edit2, Edit3, Document, Document1, Document2, Document3 } from '../assets/svg/icons';
import Reinput from "reinput"
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../redux/actions/demand'
import { useFormik } from 'formik';
import RBSheet from "react-native-raw-bottom-sheet";
import Cta from '../assets/svg/icons/navigation/Cta';
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native';
import Fleche from '../Components/Fleche';
import OkModal from '../Components/button/OkModal';
import MabulAddPhoto from './MabulAddPhoto';
import MabulCommonAddPhotoScreen from './MabulCommonAddPhotoScreen';
import { ScrollView } from 'react-native';
import MabulPubButton from '../Components/button/MabulPubButton';
import MabulCommonDateSettingScreen from './MabulCommonDateSettingScreen';
import MabulAddDate from './MabulAddDate';
import MabulAddLieu from './MabulAddLieu';
import MabulRechercheContact from './MabulRechercheContact';
// import { TextInput } from 'react-native';
import { date } from 'yup/lib/locale';
import { TextInput } from 'react-native-paper';
import moment from 'moment';
const title = {
  organize: 'Donne un titre à ton apéro',
  sell: 'Donne un titre à ta vente',
  give: 'Donne un titre à ta demande',
  need: 'Donne un titre à ta demande',
};
const MabulCommonRequestDetailScreen = (props) => {
  const Sheet1 = useRef(null)
  const Sheet2 = useRef(null)
  const Sheet3 = useRef(null)
  const Sheet4 = useRef(null)
  const Sheet5 = useRef(null)
  const Sheet6 = useRef(null)



  const dispatch = useDispatch()
  const { demandData } = useSelector((state) => state.demandReducer);

  console.log('redux  data', demandData)
  const [prixOne, setPrixOne] = useState('')
  const [prixTwo, setPrixTwo] = useState('')

  const [prix, setPrix] = useState('')
  const [allowPrix, setAllowPrix] = useState(false)

  const [descriptionn, setDescriptionn] = useState('')
  const [allowdescription, setAllowDescription] = useState(false)
  const [photos, setPhotos] = useState(false)
  const [prevoir, setPrevoir] = useState('')
  const [allprevoir, setAllprevoir] = useState(false)
  const [dates, setDates] = useState(false);
  const [locations, setLocations] = useState(false);
  const [error, setError] = useState('')

  const [errortitle, setErrorTitle] = useState('')
  const [errorDescription, setErrorDescription] = useState('')
  const [errorDate, setErrorDate] = useState('')
  const [errorPhoto, setErrorPhotos] = useState('')
  const [erroraddress, setErrorAddress] = useState('')
  const [errorPrevoir, setErrorPrevoir] = useState('')
  const [errorPrix, setErrorPrix] = useState('')

  const [title, setTitle] = useState('')

  const [isDate, setDate] = useState(new Date());
  const [isEndDate, setisEndDate] = useState('');
  const [addresss, setAddresss] = useState(demandData.address);
  const [Promo, setPromo] = useState(false);
  const [Promooo, setPromooo] = useState(false);
  const [SwitchOblig, setSwitchOblig] = useState(true)

  const setPromos = (promo) => {
    setPromo(promo)
    setPromooo(!Promooo)
  }
  const titles = (e) => {
    setErrorTitle('')
    setTitle(e)
  }
  const date = () => {
    setErrorDate('')
    setDates(true)
  }
  const location = () => {
    setErrorAddress('')
    setLocations(true)
  }
  const photo = () => {
    setErrorPhotos('')
    setPhotos(true)
  }
  const prexpreone = (e) => {
    setErrorPrix('')
    setPrixOne(e)
    setAllowPrix(false)
  }
  const prexpretwo = (e) => {
    setErrorPrix('')
    setPrixTwo(e)
    setAllowPrix(false)
  }

  const prexprecr = (e) => {
    setErrorPrix('')
    setPrix(e)
    setAllowPrix(false)
  }
  const prexpre = () => {
    setErrorPrix('')
    setAllowPrix(true)
  }
  const hideprix = () => {
    setPrix('')
    setAllowPrix(false)
  }

  const precr = (e) => {
    setErrorPrevoir('')
    setPrevoir(e)
    setAllprevoir(false)
  }
  const pre = () => {
    setErrorPrevoir('')
    setAllprevoir(true)
  }

  const descr = (e) => {
    setErrorDescription('')
    setDescriptionn(e)
    setAllowDescription(false)
  }
  const des = () => {
    setErrorDescription('')
    setAllowDescription(true)
  }

  const hide = () => {
    setDescriptionn('')
    setAllowDescription(false)
  }
  const hidepriviour = () => {
    setPrevoir('')
    setAllprevoir(false)
  }

  const initialValues = {
    // title: '',
    // description: '',
    // address: '',
    // coordinate: {},
    prix: 0,
    promo: 0,
    // prevoir:''    
  };
  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Obligatoire')
  });
  // const changeDate=(date)=>{
  //   setDate(date)
  // }
  const onSubmit = values => {
    if (title == '') {
      setErrorTitle('Obligatoire')
    }
    // else if (descriptionn == "") {
    //   setErrorDescription('Obligatoire')
    // }
    // else if (prevoir == "" && mabulService === 'organize') {
    //   // else if (prevoir=="" ){
    //   setErrorPrevoir('Obligatoire')
    // }
    // else if (dates == "") {
    //   setErrorDate('Obligatoire')
    // }
    // else if (allowPrix == "" && mabulService === 'sell') {
    //   setErrorPrix('Obligatoire')
    // }
    // else if (photos == "") {
    //   setErrorPhotos('Obligatoire')
    // }
    // else if (locations == "") {
    //   setErrorAddress('Obligatoire')
    // }

    else {
      if (mabulService === 'organize') {
        dispatch(update_into_demand({ data: { description: descriptionn, title: title }, prevoir: prevoir }))
      }
      else if (mabulService === 'sell') {
        dispatch(update_into_demand({ data: { description: descriptionn, title: title }, prix: !Promooo ? prix : `${prixOne}-${prixTwo}` }))
      }
      else {
        dispatch(update_into_demand({ data: { description: descriptionn, title: title } }))
      }
      mabulService === 'sell'
        ? Actions.mabulSellPrice({ mabulService: props.mabulService, process: 90 })
        : Sheet4.current.open()
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  setdatea = (date) => {
    setDate(date)
  }
  setdatee = (date) => {
    setisEndDate(date)
  }
  setadresse = (add, coor) => {

    formik.setFieldValue('address', add)
    formik.setFieldValue('coordinate', coor)
  }

  const conceptColor = mabulColors[props.mabulService];
  var iconEdit = Edit2(styles.icon);
  var iconDocument = Document2(styles.icon);
  if (props.mabulService === 'give') {
    iconEdit = Edit3(styles.icon);
    iconDocument = Document3(styles.icon);
  } else if (props.mabulService === 'sell') {
    iconEdit = Edit1(styles.icon);
    iconDocument = Document1(styles.icon);
  } else if (props.mabulService === 'need') {
    iconEdit = Edit(styles.icon);
    iconDocument = Document(styles.icon);
  }
  const mabulService = props.mabulService;
  const [isFocused, setFocused] = useState(false);
  const [text, setText] = React.useState('');

  return (
    <View style={{
      // marginBottom:-50,
      flex: 1, backgroundColor: '#F0F5F7', zIndex: 999,
    }}>
      <MabulCommonHeader style={[styles.header, { zIndex: 999, backgroundColor: '#ffffff', }]} percent={props.process}
        isNoBackBtn={true}
        progressBarColor={conceptColor} />
      <View style={styles.body}>
        <ScrollView style={{ paddingBottom: 5 * hm }}>

          <TextInput
            style={{ fontSize: 17 * em, height: 76 * hm, paddingLeft: 40 * em, marginTop: 10 * hm, backgroundColor: '#FFFFFF' }}
            label={
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 * em, color: "#6A8596" }}>{mabulService == "sell" ? 'Écris le nom de ce que tu vends ' : 'Écrit un titre '}</Text>
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16 * em, color: conceptColor }}>*</Text>
              </View>
            }
            underlineColor='#fff'
            theme={{
              fonts: {
                regular: {
                  fontFamily: 'Montserrat-Bold'
                }
              }, colors: { text: '#1E2D60', primary: 'white' }
            }}
            selectionColor="#49CDDD"
            underlineColor='white'
            autoFocus={true}
            value={title}
            onChangeText={(e) => titles(e)}

          />
          {/* <TextInput
                    style={{ height: 76 * hm, paddingLeft: 40 * em,  marginTop: 10 * hm, backgroundColor: '#FFFFFF' }}
                    label={mabulService=="sell"?'Écris le nom de ce que tu vends ':'Écrit un titre '}
                    autoFocus={true}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    underlineActiveColor="#FFFFFF"
                    underlineColor="#FFFFFF"
                    activeColor={conceptColor}
                    labelActiveColor="#6A8596"
                    labelColor="#6A8596"
                    paddingBottom={25 * em}
                    value={title}
                    onChangeText={(e) => titles(e)}
     /> */}
          <Text style={styles.descerrorText}>{errortitle}</Text>
          <Text style={{ paddingLeft: 40 * em, color: '#6A8596', fontSize: 11 * em, fontFamily: 'Lato-Italic', marginBottom: 10 * hm }}>(68 caractères maximum)</Text>



          {
            mabulService === 'need' || mabulService === 'give' ?
              <>
                <TouchableOpacity
                  style={[styles.ActionButton, { height: 90 * hm }]}
                  onPress={() => Sheet1.current.open()}
                >
                  <Text style={styles.contentDesc}>Description</Text>

                  {!allowdescription ?
                    <Text style={styles.contentDescSub} >Cela permet à ton entourage de mieux comprendre ta demande</Text>
                    :
                    <Text style={styles.contentDescSubb} >{descriptionn}</Text>
                  }
                </TouchableOpacity>
                <Text style={styles.descerrorText}>{errorDescription}</Text></> : <></>}


          {
            mabulService === 'sell' ?
              <>
                <TouchableOpacity
                  style={[styles.ActionButton, { height: 90 * hm, marginTop: 10 * hm, }]}
                  onPress={() => Sheet6.current.open()}
                >
                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 30 * em }}>
                    <Text style={[styles.contentDesc, { paddingRight: 180 * em }]}>Ajoute un prix</Text>

                    <Flechedroite width={14 * em} height={14 * hm} />
                  </View>
                  {!allowPrix ?
                    <Text style={styles.contentDescSub} >Ex : 5,00 €</Text>
                    :
                    !Promooo ? <Text style={styles.contentDescSubb} >{prix} €</Text> : <Text style={styles.contentDescSubb} >{prixOne}-{prixTwo}</Text>
                  }
                </TouchableOpacity>
                <Text style={styles.descerrorText}>{errorPrix}</Text>
              </>
              :
              <></>
          }

          {
            mabulService !== 'give' ?
              <>
                <TouchableOpacity
                  style={[styles.ActionButton, { height: 70 * hm }]}
                  onPress={() => Sheet2.current.open()}
                >
                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 30 * em }}>
                    <Text style={[styles.contentDesc, { paddingRight: 180 * em }]}>Ajouter une date</Text>
                    <Flechedroite width={14 * em} height={14 * hm} />
                  </View>
                  <Text style={styles.contentDescSubb} >{moment(demandData.demandStartDate).format('Do MMM YYYY , h:mm:ss a')}</Text>
                </TouchableOpacity>
                <Text style={styles.descerrorText}>{errorDate}</Text></> : <></>
          }


          {
            mabulService === 'organize' ?
              <>
                <TouchableOpacity
                  style={[styles.ActionButton, { height: 90 * hm, }]}
                  onPress={() => Sheet5.current.open()}
                >
                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 30 * em }}>
                    <Text style={[styles.contentDesc, { paddingRight: 180 * em }]}>À prévoir</Text>
                    <Flechedroite width={14 * em} height={14 * hm} />
                  </View>

                  {!allprevoir ?
                    <Text style={styles.contentDescSub} >Les participants doivent ramener</Text>
                    :
                    <Text style={styles.contentDescSubb} >{prevoir}</Text>
                  }
                </TouchableOpacity>
                <Text style={styles.descerrorText}>{errorPrevoir}</Text>







                <View
                  style={[styles.ActionButton, { height: 90 * hm, marginTop: 0 * hm, }]} >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.contentDesc, { marginBottom: 10 * hm }]}>Lieu</Text>
                    <TouchableOpacity onPress={() => Sheet3.current.open()}>
                      <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 * em, color: conceptColor, marginRight: 30 * em }}>Modifier</Text>
                    </TouchableOpacity>
                  </View>
                  {!demandData.address ?
                    <Text style={{ color: "#1E2D60", fontFamily: "Lato-Regular", fontSize: 16 * em, marginLeft: 40 * em }}>{"ABYMES 97139 \nGuadeloupe"}</Text>
                    :
                    <Text style={{ color: "#1E2D60", fontFamily: "Lato-Regular", fontSize: 16 * em, marginLeft: 40 * em }}>{demandData.address}</Text>
                  }
                </View>
                <Text style={styles.descerrorText}>{erroraddress}</Text>




                <TouchableOpacity
                  style={[styles.ActionButton, { height: 90 * hm }]}
                  onPress={() => Sheet1.current.open()}
                >
                  <Text style={styles.contentDesc}>Description</Text>

                  {!allowdescription ?
                    <Text style={styles.contentDescSub} >Cela permet à ton entourage de mieux comprendre ta demande</Text>
                    :
                    <Text style={styles.contentDescSubb} >{descriptionn}</Text>
                  }
                </TouchableOpacity>
                {<Text style={styles.descerrorText}>{errorDescription}</Text>}


              </>
              :
              <></>
          }










          <View style={[styles.ActionButton, { paddingBottom: 20 * hm }]}>
            <View style={{ flexDirection: 'row', marginTop: 20 * hm, justifyContent: 'space-between' }}>
              <Text style={styles.contentDesc}>Photos</Text>
              <Text style={[styles.contentDesc, { color: '#A0AEB8', marginRight: 30 * em, fontSize: 12 * em }]}>(3 max)</Text>
            </View>
            <Text style={[styles.contentDescSub, { marginTop: 10 * hm }]} >Les photos aident à mieux cerner ta demande.</Text>

            <MabulAddPhoto requiredPhoto={() => photo()} conceptColor={conceptColor} />
          </View>
          <Text style={styles.descerrorText}>{errorPhoto}</Text>



          {
            mabulService === 'organize' ?
              <></>
              :
              <>
                <View
                  style={[styles.ActionButton, { height: 90 * hm, marginTop: 10 * hm, }]} >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.contentDesc, { marginBottom: 10 * hm }]}>Lieu</Text>
                    <TouchableOpacity onPress={() => Sheet3.current.open()}>
                      <Text style={{ fontFamily: 'Lato-Regular', fontSize: 14 * em, color: conceptColor, marginRight: 30 * em }}>Modifier</Text>
                    </TouchableOpacity>
                  </View>
                  {!demandData.address ?
                    <Text style={{ color: "#1E2D60", fontFamily: "Lato-Regular", fontSize: 16 * em, marginLeft: 40 * em }}>{"ABYMES 97139 \nGuadeloupe"}</Text>
                    :
                    <Text style={{ color: "#1E2D60", fontFamily: "Lato-Regular", fontSize: 16 * em, marginLeft: 40 * em }}>{demandData.address}</Text>
                  }
                </View>
                <Text style={styles.descerrorText}>{erroraddress}</Text>
              </>}



          {
            mabulService === 'give' ?
              <>
                <TouchableOpacity
                  style={[styles.ActionButton, { height: 70 * hm, marginTop: 10 * hm, }]}
                  onPress={() => Sheet2.current.open()}
                >
                  <View style={{ flexDirection: "row", justifyContent: 'space-between', marginRight: 30 * em }}>
                    <Text style={[styles.contentDesc, { paddingRight: 180 * em }]}>Ajouter une date</Text>
                    <Flechedroite width={14 * em} height={14 * hm} />
                  </View>
                  {/* <Text style={styles.contentDescSubb} >{moment(demandData.demandStartDate).format('Do MMM YYYY , h:mm:ss a')}</Text> */}
                </TouchableOpacity>
                <Text style={styles.descerrorText}>{errorDate}</Text></> : <></>}




        </ScrollView>
      </View>
      <View style={{ flex: 0.1 }}>

        <RBSheet ref={Sheet1}
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
            <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Description</Text>
          </View>

          <View style={styles.container}>
            <Reinput style={{ paddingTop: 15 * em, marginRight: 30 * em, marginLeft: 30 * em }}
              label={`Cela permet à ton entourage de mieux comprendre
ta demande`}
              underlineColor="#BFCDDB"
              textAlign={"left"}
              multiline={true}
              activeColor={conceptColor}
              labelActiveColor="#6A8596"
              labelColor="#6A8596"
              labelActiveTop={-38}
              height={30 * hm}
              paddingBottom={10 * em}
              value={descriptionn}
              onChangeText={(e) => descr(e)}
            />
          </View>
          <OkModal conceptColor={conceptColor} showDescription={() => des()} hideDescription={() => hide()} okoModal={() => Sheet1.current.close()} closeModal={() => Sheet1.current.close()} />
        </RBSheet>

        <RBSheet ref={Sheet2}
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

            <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Date</Text>
          </View>

          <View style={styles.container}>
            <MabulAddDate
              requiredDate={() => date()}
              conceptColor={conceptColor} closeModal={() => Sheet2.current.close()}
            />
          </View>
        </RBSheet>


        <RBSheet ref={Sheet3}
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
            <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Lieu</Text>
          </View>
          <View style={styles.container}>
            <MabulAddLieu
              hideDescription={() => { }}
              requiredLocation={() => location()}
              conceptColor={conceptColor}
              setadresse={setadresse}
              closeModal={() => Sheet3.current.close()}
            />
          </View>
          {/* <OkModal conceptColor={conceptColor} 
          // showDescription={() =>location()} 
          // hideDescription={() =>location()}
          // hideDescription={() =>hide()}
          okoModal={ () =>Sheet3.current.close()} closeModal={ () =>  Sheet3.current.close()}/> */}
        </RBSheet>

        <RBSheet ref={Sheet4}

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

          <View style={{ marginLeft: em * 30, marginRight: em * 30, paddingTop: 46 * hm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Sheet4.current.close()}  >
              <Fleche />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Sheet4.current.close()}  >

              <Text style={{ color: '#6A8596', fontSize: 14 * em, fontFamily: 'Lato-Medium' }} >Annuler</Text>
            </TouchableOpacity>

          </View>

          <View style={{ paddingTop: 20 * hm, }}>

            <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Je partage avec</Text>
          </View>

          <MabulRechercheContact data={demandData} mabulService={mabulService} conceptColor={conceptColor} rb4={() => Sheet4.current.close()} />
          {/* <OkModal closeModal={ () =>  this[RBSheet + 4].close()}/> */}
        </RBSheet>


        <RBSheet ref={Sheet5}

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
            <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>À prévoir</Text>
          </View>
          <View style={styles.container}>
            <Reinput style={{ paddingTop: 15 * em, marginRight: 30 * em, marginLeft: 30 * em }}
              label={`Écris ce que ton invité ramène …`}
              underlineColor="#BFCDDB"
              multiline={true}
              fontFamily={'HelveticaNeue'}
              activeColor={conceptColor}
              labelActiveColor="#6A8596"
              labelColor="#6A8596"
              labelActiveTop={-38}
              height={30 * hm}
              paddingBottom={10 * em}
              // value={formik.values.prevoir}
              // onBlur={formik.handleBlur('prevoir')}
              // onChangeText={formik.handleChange('prevoir')}
              value={prevoir}
              onChangeText={(e) => precr(e)}
            />
            {/* {formik.errors.prevoir && formik.touched.prevoir && <Text style={styles.descerrorText}>{formik.errors.prevoir}</Text>} */}


            <Text style={{ marginLeft: 30 * em, bottom: 20 * hm, fontFamily: 'HelveticaNeue', fontSize: 12 * em, color: '#A0AEB8' }} >Sépare chaque mot avec des virgules</Text>


            <View style={styles.SwitchbuttonWrapper}>


              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.SwitchTitle}>Obligatoire</Text>
              </View>

              <Switch
                trackColor={{ false: "white", true: conceptColor }}
                thumbColor={true ? "white" : conceptColor}

                value={SwitchOblig}
                onValueChange={() => { setSwitchOblig(!SwitchOblig) }}

              />

            </View>
          </View>
          <OkModal conceptColor={conceptColor}
            //  onPress={formik.handleSubmit} 
            hideDescription={() => hidepriviour()}
            showDescription={() => pre()}
            okoModal={() => Sheet5.current.close()} closeModal={() => Sheet5.current.close()} />
        </RBSheet>

        <RBSheet ref={Sheet6}

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

            <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Prix</Text>
          </View>

          <View style={styles.container}>

            {Promo ?
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ marginLeft: 30 * em, textAlign: 'center', fontSize: 14 * em, fontFamily: 'Lato-Regular', color: "#6A8596", marginBottom: 10 * hm }}>Ajoutez un prix </Text>

                  <TextInput placeholder="5€"
                    style={[{ width: 148 * em, marginLeft: 30 * em }, styles.BoxPrice]}
                    theme={{
                      colors: { text: '#A0AEB8', primary: 'white' }
                    }}
                    selectionColor="#49CDDD"
                    underlineColor='white'
                    // value={formik.values.prix}
                    // onBlur={formik.handleBlur('prix')}
                    // onChangeText={formik.handleChange('prix')}
                    value={prixOne}
                    onChangeText={(e) => prexpreone(e)}
                  />
                </View>

                <View>
                  <Text style={{ marginRight: 30 * em, textAlign: 'center', fontSize: 14 * em, fontFamily: 'Lato-Regular', color: "#6A8596", marginBottom: 10 * hm }}>Ajoutez un prix </Text>

                  <TextInput placeholder="3,99€" style={[{ width: 148 * em, marginRight: 30 * em }, styles.BoxPrice]}
                    theme={{
                      colors: { text: '#A0AEB8', primary: 'white' }
                    }}
                    selectionColor="#49CDDD"
                    underlineColor='white'
                    // value={formik.values.promo}
                    // onBlur={formik.handleBlur('promo')}
                    // onChangeText={formik.handleChange('promo')}
                    value={prixTwo}
                    onChangeText={(e) => prexpretwo(e)}
                  />
                </View>
              </View>
              :
              <View>
                <Text style={{ textAlign: 'center', fontSize: 14 * em, fontFamily: 'Lato-Regular', color: "#6A8596", marginBottom: 10 * hm }}>Ajoutez un prix </Text>
                <TextInput placeholder="5€"

                  // underlineColor='red'

                  theme={{
                    colors: { text: '#A0AEB8', primary: 'white' }
                  }}
                  selectionColor="#49CDDD"
                  underlineColor='white'

                  style={[{ width: 310 * em },
                  styles.BoxPrice]}
                  value={formik.values.prix}
                  // onBlur={formik.handleBlur('prix')}
                  // onChangeText={formik.handleChange('prix')}
                  value={prix}
                  onChangeText={(e) => prexprecr(e)}
                />
              </View>
            }

            <View style={styles.SwitchbuttonWrapper}>


              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.SwitchTitle}>Activer promotion</Text>
              </View>

              <Switch
                trackColor={{ false: "white", true: conceptColor }}
                thumbColor={Promo ? "white" : "white"}
                value={Promo}
                onValueChange={(Promo) => setPromos(Promo)}
              />

            </View>
            <Text style={{ bottom: 50 * hm, color: conceptColor, fontFamily: 'Lato-Semibold', fontSize: 18 * em, marginLeft: 30 * em }}>Une promo sur ce prix ?</Text>

          </View>
          <OkModal
            hideDescription={() => hideprix()}
            showDescription={() => prexpre()}
            conceptColor={conceptColor} okoModal={() => Sheet6.current.close()} closeModal={() => Sheet6.current.close()} />
        </RBSheet>
        {Platform.OS !== "ios" ?
          <MabulPubButton
            text={"Publier"}
            color={title.length == 0 ? hexToRGB(conceptColor, 0.5) : hexToRGB(conceptColor)}
            style={styles.nextBtn}
            onPress={() => onSubmit()}
          // onPress={formik.handleSubmit}
          /> : <></>}
      </View>
      {Platform.OS === "ios" ?
        <MabulPubButton
          text={"Publier"}
          color={title.length == 0 ? hexToRGB(conceptColor, 0.5) : hexToRGB(conceptColor)}
          style={[styles.nextBtn, { marginTop: -50 * hm }]}
          onPress={() => onSubmit()}
        // onPress={formik.handleSubmit}
        /> : <></>}

    </View>
  );
};

const styles = {
  BoxPrice: { borderTopLeftRadius: 20 * em, borderTopRightRadius: 20 * em, backgroundColor: "#F0F5F7", height: 80 * hm, borderRadius: 20 * em, justifyContent: 'center', alignSelf: 'center', textAlign: 'center', fontSize: 25 * em, fontFamily: "Lato-Regular" },
  SwitchTitle: {
    flex: 1,
    fontFamily: 'HelveticaNeue',
    color: "#6A8596",
    // fontFamily: 'Helvetica-Regular',
    fontSize: 14 * em,
    // paddingLeft: 15 * em,
    // paddingRight: 25 * em,
  },
  SwitchbuttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30 * em,
    paddingRight: 30 * em,
    paddingTop: 90 * hm
  },
  ActionButton: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    }, ButtonWrapper: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 15 * em,
      paddingRight: 15 * em,
    },
    circleIconOverlay: {
      width: 34 * em,
      height: 34 * hm,
      borderRadius: 17 * em,
      alignItems: 'center',
      justifyContent: 'center',
    }, contentTitle: {
      flex: 1,
      color: "#251b4d",
      fontSize: 14 * em,
      paddingLeft: 15 * em,
      paddingRight: 15 * em,
    }

  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '12.45%',

  },
  descerrorText: {
    fontSize: 12 * em,
    bottom: 20 * hm,
    left: 40 * hm,
    color: "red",
    // marginTop: 15 * hm,
  },
  body: {
    backgroundColor: '#F0F5F7',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    width: 300 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
    fontSize: 28 * em,
    fontWeight: 'bold',
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * hm },
  listItem: {
    height: 43 * em,
    marginTop: 25 * em,
  },
  icon: { width: 19 * em, height: 22 * em, marginRight: 20 * em },
  listCaption: { color: '#6A8596' },
  listComment: { fontSize: 13 * em, lineHeight: 17 * em, color: '#6A8596' },
  nextBtn: {
    width: 315 * em,
    alignSelf: 'center',
    bottom: 15 * hm,
    // marginTop:-50*hm,
    height: 58 * hm,
    opacity: 1,


  },
  nextBtna: {
    width: 315 * em,
    alignSelf: 'center',
    bottom: 10 * hm,
    marginTop: -50 * hm,
    height: 58 * hm,
    opacity: 0.5,

  },
  input: {

  },
  etoile: { position: 'absolute', paddingLeft: 210 * em, zIndex: 9949 },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 39 * em },
  contentDesc: { fontFamily: 'Lato-Regular', fontSize: 16 * em, color: '#6A8596', paddingLeft: 40 * em },
  contentDescSub: { marginTop: 3 * hm, fontFamily: 'Lato-Italic', fontSize: 12 * em, color: '#A0AEB8', paddingLeft: 40 * em },
  contentDescSubb: { marginTop: 3 * hm, fontFamily: 'Lato-Italic', fontSize: 12 * em, color: "#1E2D60", paddingLeft: 40 * em }
};
export default MabulCommonRequestDetailScreen;