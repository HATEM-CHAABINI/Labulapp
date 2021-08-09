import React,{useState,useEffect} from 'react';
import { em, WIDTH, hm } from '../../../constants/consts';
import ProfileModalHeader from'../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../../../textInput/ProfileCommonTextInput';
import CommonText from '../../../text/CommonText';
import SearchBox from '../../../Components/other/SearchBox';
import CommonCheckBox from '../../../Components/checkbox/CommonCheckBox';
import { StatusBar, View, Text, Platform,TouchableOpacity, Alert } from 'react-native';
import User from '../../../model/user/User';
import CheckBox from '@react-native-community/checkbox';
// import CheckboxList from 'rn-checkbox-list';
import _ from 'lodash'
import OkModalchange from '../../../Components/button/OkModalchange';
import TitleText from '../../../text/TitleText';
import { ScrollView } from 'react-native';
// import CheckBox from 'react-native-check-box'
const ProfileNameComponent = (props) => {
const [seleted, setseleted] = useState([])
const [value, setvalue] = useState({data:props.value})
const [loading, setloading] = useState(true)

const [selectedItem, setselectedItem] = useState(props.skill)

const onSearch = (search) => {

    setvalue({data:
      props.value.filter((data) => {
        return (
          data.name.toLowerCase().includes(search.toLowerCase())
        );
      })}
    );
  };
  const onClear = () => {
    
    setvalue({data:props.value});

  };


   const onChecked=(id)=>{
   
    const data = value.data
    const index = data.findIndex(x=>x.id===id);
    data[index].checked=!data[index].checked
    setvalue({data:data})

  }

  // const dataSave = () =>{
  //   if(seleted.length >0 )
  //   {
  //     if(seleted.length <=3)
  //     {
  //       props.setprofileDataCurrent({...props.profileDataCurrent,skill:seleted})
  //       props.onPress()
  //     }
  //      else{
  //       alert('Pas plus les 3!!')
  //     }
  //   }
  //   else if(seleted.length ===0 ){
  //     props.setprofileDataCurrent({...props.profileDataCurrent,skill:seleted})
  //       props.onPress()
  //   }
  // }
  useEffect(() => {
    if(seleted.length >0 )
    {
      if(seleted.length <=3)
      {
        props.setprofileDataCurrent({...props.profileDataCurrent,skill:seleted})
        props.onPress()
      }
       else{
        alert('Pas plus les 3!!')
      }
    }
    else if(seleted.length ===0 ){
      props.setprofileDataCurrent({...props.profileDataCurrent})
        props.onPress()
    }
    
  
   
   
  }, [seleted])

  useEffect(() => {
    setloading(true)
    let temp  = value.data
    let changed_data = []
    
    for (let i = 0; i < temp.length; i++) {
      if(_.findIndex(selectedItem,temp[i]) != -1)
      {
        changed_data.push({id:temp[i].id,name:temp[i].name,checked:true})
      }
      else{
        changed_data.push(temp[i])
      }
      
    }
    setvalue({data:changed_data})
    setloading(false)
    
  }, [])

  const getselecteditem =()=>{
    var keys = value.data.map((t)=>t.name)
    var checks = value.data.map((t)=>t.checked)
    let selecteds =[]
    for (let i = 0; i < checks.length; i++) {
      if (checks[i] == true) {
        selecteds.push({id:i,name:keys[i],checked:false})
      }
      
    }
   
    setseleted(()=>selecteds)
    // dataSave()

  }

  return (

    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      // swipeDirection={'up'}
      onBackButtonPress={() => {setvalue(()=>props.value),props.onPress()}}>
  
 <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View
        style={{
          width: 349 * em,
          height: 20 * hm,
          marginTop: -10 * hm,
          alignSelf: 'center',
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20 * em,
          borderTopRightRadius: 20 * em,
         }}
        opacity={0.5}
      />
    
   <View style={{flexDirection:'row',alignItems:'center'}}> 
      <TitleText text={"Mes atouts"} textAlign={"left"} style={{marginTop:55*hm,marginBottom:10*hm}}/>
         <Text style={{marginLeft:10*em,marginTop:55*hm,marginBottom:10*hm,color:'#6A8596',fontFamily:'Lato-Italic',fontSize:15*em}}>(3 max)</Text>
   </View>
        <SearchBox style={{ marginBottom: 15 * em, height: 44 * em, marginTop: 40 * em }} onSearch={onSearch} onClear={onClear} />
        <ScrollView>

  {!loading && value.data.map((val) => {

          return (
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:20}} 
        // onPress={()=>{onChecked(val.id)}}
        >
            <Text style={{fontSize:18,color:'#1E2D60',fontFamily: 'Lato-Bold', fontSize: 18 * em, lineHeight: 23 * hm, textAlign: 'left'}}>{val.name}</Text>
            <CheckBox 
             value={val.checked} 
             onValueChange={()=>{onChecked(val.id)}}
              style={{padding:20}}
        
                  boxType={'square'}

                  onFillColor={'#40CDDE'}
                  onTintColor={'white'}
                  onCheckColor={'white'}

                />
          </TouchableOpacity>
  );
        })
    }
          {/* <ProfileModalHeader
        title={props.title}
        style={styles.header}
        onCancelPress={() => {props.onPress()}}
        onFinishPress={ ()=>{getselecteditem()}}
      /> */}
              </ScrollView>

        <OkModalchange txt={"Ok"} conceptColor={"#40CDDE"} okoModal={getselecteditem} closeModal={props.onPress} style={{paddingBottom:15*hm,flexDirection:'row', justifyContent:'space-between',marginRight:0*em,marginLeft:0*em,alignContent:'center'}}/>
     </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 20.5 * hm,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    paddingHorizontal: 30 * em,
    borderTopRightRadius: 20 * em,
    borderTopLeftRadius: 20 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: { marginBottom: 10 * hm, marginTop: 27 * hm },
  input: { marginTop: 25 * hm, },
  forgotPsswd: { lineHeight: 18 * em, marginTop: 78 * hm, textAlign: 'center' },
  comment: { fontSize: 12 * em, lineHeight: 20 * em, marginTop: 15 * hm },
  listItem: { paddingHorizontal: 10 * em, marginBottom: 35 * hm },
};
export default ProfileNameComponent;
