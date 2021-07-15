import React from 'react';
import { View, Image, Text,KeyboardAvoidingView } from 'react-native';
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
import Cta from '../assets/svg/icons/navigation/Cta'
import * as Yup from 'yup'
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
const title = {
  organize: 'Donne un titre à ton apéro',
  sell: 'Donne un titre à ta vente',
  give: 'Donne un titre à ta demande',
  need: 'Donne un titre à ta demande',
};
const MabulCommonRequestDetailScreen = (props) => {
  // const { demandData } = useSelector((state) => state.demandReducer);
  const dispatch = useDispatch()
  const initialValues = {
    title: '',
    description: ''
  };
  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Obligatoire')
    ,
    description: Yup.string()
      .required('Obligatoire')
    ,
  });
  const onSubmit = values => {

    dispatch(update_into_demand({ data: values }))
    console.log('suiiivivvvvvvvvvv');
    mabulService === 'sell'
      ? Actions.mabulSellPrice({ mabulService: props.mabulService, process: 67 })
      : Actions.mabulCommonAddPhoto({
        mabulService: props.mabulService,
        process: mabulService === 'need' ? 53 : mabulService === 'organize' ? 40 : 74,
      });
  };
  const formik = useFormik({
    // initialValues,
    onSubmit,
    // validationSchema,
  });
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
  return (
    <View style={{
      flex: 1,     backgroundColor:'#F0F5F7', zIndex: 999,
    }}>
      <MabulCommonHeader style={[styles.header, { zIndex: 999, backgroundColor: '#ffffff', }]}      percent={props.process}
        isNoBackBtn={true}
        progressBarColor={conceptColor} />
     
    
   

      <View style={styles.body}>
       <ScrollView style={{  paddingBottom: 5 * hm }}>
        
          <Reinput style={{height:76*hm,paddingLeft:40*em, paddingTop: 20 * hm, marginTop:10*hm,backgroundColor:'#FFFFFF' }}
            label='Écrit un titre '
            autoFocus={true}
            // icon={iconEdit}
            underlineActiveColor="#FFFFFF"
            underlineColor="#FFFFFF"
            activeColor={conceptColor}
            labelActiveColor="#6A8596"
            labelColor="#6A8596"
            paddingBottom={25 * em}
         />
          <Text style={{paddingLeft:40*em,color:'#6A8596',fontSize:11*em,fontFamily:'Lato-Italic',marginTop:5*hm,marginBottom:10*hm}}>(68 caractères maximum)</Text>
   
   
   
          <TouchableOpacity
            style={[styles.ActionButton, { height: 90 * hm }]}
            onPress={() => this[RBSheet + 1].open()}
          >
        
            <Text style={styles.contentDesc}>Description</Text>
            <Text style={styles.contentDescSub} >Cela permet à ton entourage de mieux comprendre ta demande</Text>
          </TouchableOpacity>
   
   
          <TouchableOpacity
            style={[styles.ActionButton, { height: 90 * hm ,marginTop:10*hm,}]}
            onPress={() => this[RBSheet + 2].open()}
          >
            <View style={{  flexDirection: "row" ,justifyContent:'space-between',marginRight:30*em }}>
              <Text style={[styles.contentDesc,{paddingRight:180*em}]}>Ajouter une date</Text>
              <Flechedroite width={14 * em} height={14 * hm} />
            </View>
              </TouchableOpacity>

        <View style={[styles.ActionButton, { height: 199 * hm ,marginTop:10*hm,}]}>
       <View style={{flexDirection:'row',marginTop:20*hm,justifyContent:'space-between'}}>
       <Text style={styles.contentDesc}>Photos</Text>
       <Text style={[styles.contentDesc,{color:'#A0AEB8',marginRight:30*em}]}>(3 max)</Text>
        </View>
            <Text style={[styles.contentDescSub,{marginTop:10*hm}]} >Les photos aident à mieux cerner ta demande.</Text>
        
<MabulAddPhoto  conceptColor={conceptColor}/>


</View>
<View
            style={[styles.ActionButton, { height: 90 * hm ,marginTop:10*hm,}]}
           
          >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              

              <Text style={[styles.contentDesc,{marginBottom:10*hm}]}>Lieu</Text>
              <TouchableOpacity   onPress={() => this[RBSheet + 3].open()}>
              <Text style={{fontFamily:'Lato-Regular',fontSize:14*em,color:'#40CDDE',marginRight:30*em}}>Modifier</Text>
</TouchableOpacity>
              </View>
 <Text style={{color:"#1E2D60",fontFamily:"Lato-Regular",fontSize:16*em,marginLeft:40*em}}>ABYMES 97139 Guadeloupe</Text>

              </View>
              </ScrollView>
        
       
      </View>
    
      <View style={{ flex: 0.1 }}>

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

    <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Description</Text>
  </View>

  <View style={styles.container}>


  <Reinput style={{ paddingTop: 15 * em ,marginRight:30*em,marginLeft:30*em}}
            label={`Cela permet à ton entourage de mieux 
comprendre ta demande`}
            underlineColor="#BFCDDB"
            multiline={true}
            activeColor={conceptColor}
            labelActiveColor="#6A8596"
            labelColor="#6A8596"
            labelActiveTop={-38}
            height={30*hm}
            paddingBottom={10 * em}
/>        
  





  </View>
  <OkModal closeModal={ () =>  this[RBSheet + 1].close()}/>
</RBSheet>


<RBSheet
  ref={ref => {
    this[RBSheet + 2] = ref;
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

    <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Date</Text>
  </View>

  <View style={styles.container}>
<MabulAddDate conceptColor={conceptColor}/>
 </View>
  <OkModal closeModal={ () =>  this[RBSheet + 2].close()}/>
</RBSheet>




<RBSheet
  ref={ref => {
    this[RBSheet + 3] = ref;
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

    <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Lieu</Text>
  </View>

  <View style={styles.container}>
<MabulAddLieu conceptColor={conceptColor}/>
 </View>
  <OkModal closeModal={ () =>  this[RBSheet + 3].close()}/>
</RBSheet>



<RBSheet
  ref={ref => {
    this[RBSheet + 4] = ref;
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

<View style={{  marginLeft: em * 30,marginRight: em * 30,paddingTop: 46 * hm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this[RBSheet + 4].close()}  >
                <Fleche />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this[RBSheet + 4].close()}  >

                <Text style={{ color: '#6A8596', fontSize: 14 * em, fontFamily: 'Lato-Medium' }} >Annuler</Text>
              </TouchableOpacity>

            </View>

  <View style={{ paddingTop: 20 * hm, }}>

    <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Je partage avec</Text>
  </View>

<MabulRechercheContact conceptColor={conceptColor}/>
  {/* <OkModal closeModal={ () =>  this[RBSheet + 4].close()}/> */}
</RBSheet>




<MabulPubButton
        text={"Publier"}
          color={hexToRGB(conceptColor)}
          style={styles.nextBtn}
          onPress={()=> this[RBSheet + 4].open()}
        />
</View>

    </View>
  );
};

const styles = {
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
    bottom: 30 * hm,
    left: 40 * hm,
    color: "red",
  },
  body: {
    backgroundColor:'#F0F5F7',
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
    width:315*em,
    alignSelf: 'center',
   bottom:10*hm
  },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 39 * em },
  contentDesc:{fontFamily:'Lato-Regular',fontSize:16*em,color:'#6A8596',paddingLeft:40*em},
  contentDescSub:{fontFamily:'Lato-Italic',fontSize:12*em,color:'#A0AEB8',paddingLeft:40*em}

};


export default MabulCommonRequestDetailScreen;