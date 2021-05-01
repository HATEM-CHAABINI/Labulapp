
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert ,Dimensions} from 'react-native';
import Carte from '../assets/icons/navigation-app/carte-active-22x22'
import Svg, { Defs, G, Path } from "react-native-svg";
import Board from '../assets/icons/navigation-app/Board'
import Pluscreerdemande from '../assets/icons/navigation-app/Pluscreerdemande';
import { em, HEIGHT, WIDTH } from '../constants';
import Calendrier1 from '../assets/icons/navigation-app/Calendrier1';
import Calendrier2 from '../assets/icons/navigation-app/Calendrier2';
import Messagerie2 from '../assets/icons/navigation-app/Messagerie2';
import SwitchSelector from 'react-native-switch-selector';

export default class Selector extends Component {

   

    render() {
        const { navigation } = this.props;
        
        console.log(navigation);
        return (
            
<View style={{flex:1,flexDirection: "row",paddingBottom:em*650,justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('Recherche')} >
<Lupe1 />
</TouchableOpacity>

<SwitchSelector 
          options={ [
            { label: 'Liste', value: '0' },
            { label: 'Carte', value: '1' },
            
          ]
          }
          hasPadding="true"
          initial={0}
          fontSize={12}
          textColor={"#6A8596"}
          selectedColor={'#FFFFFF'}
          buttonColor={'#1E2D60'}
          backgroundColor={"#FFFFFF"}
       style={{width:em*150}}
        
          onPress={value => 
            {if (value==0){
                navigation.navigate('HomePage')
            }
        else{               
            navigation.navigate('FriendsListScreen',{ navigation: navigation }            )
        }
    }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Filtre')} >

        <Filtre />
        </TouchableOpacity>

</View>
    );
}


}
