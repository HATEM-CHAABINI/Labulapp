
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

export default class Menu extends Component {

   

    render() {
      
        return (
            
            <View style={{
              
                flexDirection: 'column'
            }}>

                <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    width: 70,
                    height: 70,
                    bottom: (Dimensions.get('window').height/ 375)*20,
                   


                }}>

                        <View style={[styles.button]}>
                        <Board />

                        <View style={{  position: 'absolute',
                    bottom: em*10,
                    height: 80,flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                        <Pluscreerdemande width={30} height={30} />
</View>
                        </View>
                </View>
                <View 

                style={{

                    position: 'absolute',
                    bottom: 0,
                    height: 80,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 50
                }}
                >
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                        <Carte width={30} height={30} />
</TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:40

                    }}>
                        <TouchableOpacity
                            onPress={() => { Alert.alert("click") }}  >
                                <Calendrier2 width={30} height={30}/>
                    
                       
                        </TouchableOpacity>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:em*120,
                        }}>

                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Messagerie2  width={30} height={30}/>
                       
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:em*40,
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Image
                                    source={require('../assets/img/homepage/compte-utilisateur.png')}

                                    style={{  width: 30, height: 30 }}
                                  
                                />
                     
                            </TouchableOpacity>
                           
                        </View>

                    {/* </View> */}
                </View>
            </View>
        );
    }

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
       
        position: 'absolute',
        top: (Dimensions.get('window').height/ 375)*20,
        right: 0,
        left: 5,
    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});