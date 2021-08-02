import FriendDetailScreen from "./FriendDetailScreen";
import FriendGiveBadgeScreen from "./FriendGiveBadgeScreen";
import React, {Component} from 'react';
import { View } from "react-native-animatable";
import { Actions } from "react-native-router-flux";
import { CheckGreen } from "../assets/svg/svg/icons";
import { Text } from 'react-native';
import { em, hm } from "../constants";

export default class WaitingScreen extends Component {
     componentDidMount(){
          // Start counting when the page is loaded
          this.timeoutHandle = setTimeout(()=>{
               {Actions.pop()}
          }, 2000);
     }
 
     componentWillUnmount(){
          clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
     }
 
     render() {
 
     return (
          <View
         style={{flex:1,width:"100%",height:"100%",backgroundColor:'rgba(30, 45, 96, 0.90)'}} >
        <View style={{ justifyContent: 'center', //Centered horizontally
       alignItems: 'center', //Centered vertically
       flex:1}}>
         <CheckGreen/>
         <Text style={{fontFamily:'Lato-Bold',fontSize:24*em,color:'white',marginTop:10*hm}}>Demande envoyé</Text>
         <Text style={{fontFamily:'Lato-Medium',fontSize:16*em,color:'white',marginTop:10*hm,textAlign:'center'}}>{'Votre demande de participation \n a bien été envoyé.'}</Text>

         </View>
         </View>
     );
   }
 
 
 }