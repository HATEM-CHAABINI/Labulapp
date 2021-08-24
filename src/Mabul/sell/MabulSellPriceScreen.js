import React, { useRef, useState } from 'react';
import { View, Platform,Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, mabulColors, hexToRGB, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import MabulCommonHeader from '../MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../../Components/button/MabulNextButton';
// import MabulNextButton from 'src/Components/button/MabulNextButton';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../../redux/actions/demand'
import { Image } from 'react-native';
import CommonBigButton from '../../Components/button/CommonBigButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import { TouchableOpacity } from 'react-native';
import Fleche from '../../Components/Fleche';
import MabulRechercheContact from '../MabulRechercheContact';

const MabulSellPriceScreen = (props) => {
  const dispatch = useDispatch()
  const Sheet1 = useRef(null)
  const [price, setprice] = useState('')
  const { demandData } = useSelector((state) => state.demandReducer);

  const conceptColor = mabulColors.sell;
  const onSubmit = () => {
    console.log(price)
    dispatch(update_into_demand({ price: price }))
    Actions.mabulCommonAddPhoto({ mabulService: 'sell', process: 73 });
  }

  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={true}
        progressBarColor={conceptColor}
      />
      <View style={styles.body}>
        <View>
          <TitleText text={'Zones de diffusion'} style={styles.title} />
          <CommentText text="Choisissez une ou plusieurs zones de diffusion de votre annonce.
          Vous avez droit à 3 zones / semaine
" style={styles.comment} />
 
       
 <TitleText text={'Pour avoir plus de zones change ton abonnement par'} style={{ fontFamily:'Montserrat-Bold',   textAlign: 'left',fontSize:10*em}} />
 <TitleText text={'Premium'} style={{ fontFamily:'Montserrat-Italic', fontWeight:'bold',color:'#AA87E5', textAlign: 'left',fontSize:10*em,marginTop:4*hm}} />
 <Image source={require('../../assets/images/mapsell.png')}  style={{borderRadius:17*em,textAlign: 'center',marginTop:20*hm,height:250*hm,width:318*em}} />

        </View>
   
          <CommonBigButton
            color={conceptColor}
            text={"Je vends dans Labul"}
            style={{backgroundColor:conceptColor
            }}
            textStyle={{fontFamily:'Lato-Medium',fontSize:16*em}}

            disabled={price.length <= 0 ? true : false}
            onPress={() => {
              Sheet1.current.open()
            }}
          />
 <CommonBigButton
            color={conceptColor}
            text={"Choix des zones"}
            style={{marginBottom:30*hm,backgroundColor:"#F0F5F7",
            }}
            textStyle={{color:'#AA87E5'}}
            disabled={price.length <= 0 ? true : false}
            onPress={() => {
              // onSubmit()
            }}
          />

      </View>
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

<View style={{  marginLeft: em * 30,marginRight: em * 30,paddingTop: 46 * hm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity onPress={() =>  Sheet1.current.close()}  >
                <Fleche />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Sheet1.current.close()}  >

                <Text style={{ color: '#6A8596', fontSize: 14 * em, fontFamily: 'Lato-Medium' }} >Annuler</Text>
              </TouchableOpacity>

            </View>

  <View style={{ paddingTop: 20 * hm, }}>

    <Text style={{ marginLeft: em * 30, marginRight: em * 40, color: '#1E2D60', fontSize: 25 * em, fontFamily: 'Montserrat-Bold' }}>Je partage avec</Text>
  </View>

<MabulRechercheContact data={demandData} mabulService={"sell"} conceptColor={conceptColor} rb4={()=>Sheet1.current.close()}/>
  {/* <OkModal closeModal={ () =>  this[RBSheet + 4].close()}/> */}
</RBSheet>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    PaddingTop: 16 * hm,
  },
  header: {
    height: '12.45%',

  },
  body: {
    flex: 1,
    paddingLeft: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: {fontFamily: 'Lato-Italic',fontSize:11*em, width: 315 * em, textAlign: 'left', lineHeight: 15 * em, textAlignVertical: 'center', marginTop: 10 * hm },
  photoZone: {
    width: 315 * em,
    height: 121 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 35 * hm,
  },
  commentPhoto: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#6A8596',
  },
  icon: {
    width: 40 * em,
    height: 28 * em,
  },
  nextBtn: {
  },
  input: {
    marginTop: 44 * hm,
    fontSize: 49 * em,
    textAlign: 'center',
    color: '#A0AEB8',
  },
};

export default MabulSellPriceScreen;
