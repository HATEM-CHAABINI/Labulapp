import React from 'react';
import { Text, Image } from 'react-native';
import { em, hm } from '../../constants/consts';
import { TouchableOpacity } from 'react-native';
import CommonMediumButton from './CommonMediumButton';
import { ArrowRightWhite } from '../../assets/svg/icons';
import { KeyboardAvoidingView } from 'react-native';
import Cta from '../../assets/svg/icons/navigation/Cta';
import { View } from 'react-native-animatable';
const OkModal = (props) => {

  const resetModal= () => {
    props.closeModal(),
    props.hideDescription()
  };

  const presok=()=>{  
    props.okoModal(),
    props.showDescription(),
    props.closeModal()
  }
  return (
    <KeyboardAvoidingView

  keyboardVerticalOffset = {Platform.OS === "ios" ? 0: 30*hm} // adjust the value here if you need more padding
  // style = {{ flex: 1 }}
  behavior={"padding"}
  >

<View style={{paddingBottom:5*hm,flexDirection:'row', justifyContent:'space-between',marginRight:30*em,marginLeft:30*em,alignContent:'center',alignItems:'center'}}>
<TouchableOpacity onPress={ () =>  resetModal()}  >
  <Cta width={50 * em} height={50 * hm} />
</TouchableOpacity>
<TouchableOpacity onPress={() => presok()
// this[RBSheet + 2].close()
}
style={{
  overflow: 'hidden',
  borderRadius: 18 * em,
  height: 50 * hm,
  width: 255 * em,
  alignItems: 'center',
  backgroundColor: props.conceptColor,
  "opacity": 1,
  marginBottom: 10 * hm
}}
>
<View
  style={{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10 * em,
  }}>

  <Text style={{
    fontSize: 16 * em,
    color: '#FFFFFF',
    marginLeft: 10 * em,
    marginTop: 2 * hm, 
    fontFamily: 'Lato-Bold'
  }}>OK</Text>
</View>
</TouchableOpacity>

</View>
</KeyboardAvoidingView>

  );
};

const styles = {
  container: {
    flexDirection: 'row',
    borderRadius: 20 * em,
    paddingVertical: 20 * em,
    width: 163 * em,
    backgroundColor: '#40CDDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16 * em,

    lineHeight: 19 * em,
    color: '#FFFFFF',
    textAlign: 'center',
    marginRight: 13 * em,
  },
};

export default OkModal;
