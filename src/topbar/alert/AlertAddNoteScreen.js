import React, { useRef, useState } from 'react';
import { View, Image, Text,KeyboardAvoidingView ,Switch } from 'react-native';
import { hexToRGB, em, mabulColors, hm } from '../../constants/consts';
import MabulCommonHeader from '../../Mabul/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { Edit, Edit1, Edit2, Edit3, Document, Document1, Document2, Document3 } from '../../assets/svg/icons';
import Reinput from "reinput"
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
import { useFormik } from 'formik';
import RBSheet from "react-native-raw-bottom-sheet";
import * as Yup from 'yup'
import { TouchableOpacity } from 'react-native';
import Fleche from '../../Components/Fleche';
import OkModal from '../../Components/button/OkModal';
import MabulAddPhoto from '../../Mabul/MabulAddPhoto';
import { ScrollView } from 'react-native';
import MabulPubButton from '../../Components/button/MabulPubButton';
import MabulAddDate from '../../Mabul/MabulAddDate';
import MabulAddLieu from '../../Mabul/MabulAddLieu';
import MabulRechercheContact from '../../Mabul/MabulRechercheContact';
import { TextInput } from 'react-native';
const AlertAddNoteScreen = (props) => {
  const conceptColor = '#F9547B';
 
   // const { demandData } = useSelector((state) => state.demandReducer);
   const dispatch = useDispatch()
   const [Promo, setPromo] = useState(false);
   const initialValues = {
     title: '',
     description: '',
     address: '',
     coordinate: {},
   };
   const validationSchema = Yup.object({
  
    description: Yup.string()
      .required('Obligatoire')
    ,
  });
  const Sheet1 = useRef(null)
  const Sheet2 = useRef(null)
  const Sheet3 = useRef(null)


  const onSubmit = values => {

    Sheet3.current.open()
      
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  setadresse=(add,coor)=>{

    formik.setFieldValue('address',add )
    formik.setFieldValue('coordinate',coor )
  }
   const mabulService = "Alerte";
 
   return (
     <View style={{
       flex: 1,     backgroundColor:'#F0F5F7', zIndex: 999,
     }}>
       <MabulCommonHeader style={[styles.header, { zIndex: 999, backgroundColor: '#ffffff', }]}      percent={props.process}
         isNoBackBtn={true}
         progressBarColor={conceptColor} />
      
     
    
 
       <View style={styles.body}>
        <ScrollView style={{  paddingBottom: 5 * hm }}>
         
         
           
    
           <TouchableOpacity
             style={[styles.ActionButton, { height: 90 * hm }]}
             onPress={() => Sheet1.current.open()}
           >
         
             <Text style={styles.contentDesc}>Description</Text>
             <Text style={styles.contentDescSub} >Cela permet à ton entourage de mieux comprendre ta demande</Text>
           </TouchableOpacity>
   
 <View
             style={[styles.ActionButton, { height: 90 * hm ,marginTop:10*hm,}]}
            
           >
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
               
 
               <Text style={[styles.contentDesc,{marginBottom:10*hm}]}>Lieu</Text>
               <TouchableOpacity   onPress={() => Sheet2.current.open()}>
               <Text style={{fontFamily:'Lato-Regular',fontSize:14*em,color:conceptColor,marginRight:30*em}}>Modifier</Text>
 </TouchableOpacity>
               </View>
  <Text style={{color:"#1E2D60",fontFamily:"Lato-Regular",fontSize:16*em,marginLeft:40*em}}>ABYMES 97139 Guadeloupe</Text>
 
               </View>
               </ScrollView>
         
        
       </View>
     
       <View style={{ flex: 0.1 }}>
 
       <RBSheet ref={Sheet1} 
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
             value={formik.values.description}
             onBlur={formik.handleBlur('description')}
             onChangeText={formik.handleChange('description')}
 />        
   
 
 
 
 
 
   </View>
   <OkModal conceptColor={conceptColor} okoModal={ () =>  Sheet1.current.close()} closeModal={ () =>  Sheet1.current.close()}/>
 </RBSheet>
 
 
 
 
 
 
 <RBSheet ref={Sheet2} 
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
   <MabulAddLieu conceptColor={conceptColor} setadresse={this.setadresse} closeModal={ () =>  Sheet2.current.close()}/>
  </View>
 </RBSheet>
 
 
 

<RBSheet ref={Sheet3} 
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
              <TouchableOpacity onPress={() => Sheet3.current.close()}  >
                <Fleche />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Sheet3.current.close()}  >

                <Text style={{ color: '#6A8596', fontSize: 14 * em, fontFamily: 'Lato-Medium' }} >Annuler</Text>
              </TouchableOpacity>

            </View>

  <View style={{ paddingTop: 20 * hm, }}>

    <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Je partage avec</Text>
  </View>

<MabulRechercheContact data={props.item} mabulService={mabulService} conceptColor={conceptColor}/>
  {/* <OkModal closeModal={ () =>  this[RBSheet + 4].close()}/> */}
</RBSheet>
 
 <MabulPubButton
         text={"Publier"}
           color={hexToRGB(conceptColor)}
           style={styles.nextBtn}
           onPress={()=> 
            onSubmit()
            // console.log(mabulService)
          }
         />
 </View>
 
     </View>
   );
 };
 
 const styles = {
   BoxPrice:{ backgroundColor:"#F0F5F7",height:80*hm,borderRadius:20*em,justifyContent:'center',alignSelf:'center',textAlign:'center',fontSize:25*em,fontFamily:"Lato-Regular"},
   SwitchTitle: {
     flex: 1,
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
     paddingTop:90*hm
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
   contentDescSub:{marginTop:3*hm,fontFamily:'Lato-Italic',fontSize:12*em,color:'#A0AEB8',paddingLeft:40*em}
 
 };
export default AlertAddNoteScreen;

