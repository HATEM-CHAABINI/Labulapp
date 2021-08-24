import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Flecheposition, Locate, LocationRed, Magnifier } from '../assets/svg/icons';
import { em, google_api, hm } from '../constants/consts';
import CommentText from '../text/CommentText';
Geocoder.init(google_api);
const GooglePlacesInput = (props) => {
    const ref = useRef();
    const [Location,setLocation]=useState('');
    const [address, setaddress] = useState(props.value)
    useEffect(() => {
        // ref.current?.setAddressText(address);
        getlocation()
    }, []);

    const getlocation = () => {

        Geolocation.getCurrentPosition(
            (position) => {


                Geocoder.from(position.coords.latitude, position.coords.longitude)
                    .then(json => {
                        var addressComponent = json.results[0].formatted_address;
                        // ref.current?.setAddressText(addressComponent);

                        props.changedValue({ address: addressComponent, coordinate: { latitude: position.coords.latitude, logitude: position.coords.longitude } })

                        setaddress(addressComponent)
                    })
                    .catch(error => { console.warn(error), alert(error.origin.error_message) });
            },
            (error) => {

                console.log(error.code, error.message);

            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }
    ///41D0E2

    return (
        <>
{console.log(Location)}
      <View style={[{ width: '100%', flexDirection: 'row', 
             zIndex: 1 , }, props.style]}>
                <View style={{ marginRight: 15 * em, top: '3%', }}>
                    <Magnifier width={20 * em} height={20 * em} />
                </View>
           
                <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder={props.placeholder}
                    minLength={1}
                    onPress={(data, details = null) => {
                        console.log("sdsdffsdf ", {
                            "address": data.description,
                            "coordinate": {
                                "latitude": details.geometry.location.lat,
                                "logitude": details.geometry.location.lng
                            }
                        });
                        props.changedValue(
                            {
                                address: data.description,
                                coordinate: {
                                    latitude: details.geometry.location.lat,
                                    logitude: details.geometry.location.lng
                                }
                            })

                    }}
                    fetchDetails={true}

                    styles={{
                       
                        listView:{
                                // backgroundColor:'red',
                                right:50*em,
                                width:'100%',
                                height:250*hm
                        },
                        row: {
                            height: 40*hm,
                            width: '100%',
                            marginBottom:25*hm,
 
                           },
                           separator:{
                                backgroundColor:'white'
                           },
                        textInputContainer: props.containerStyle,
                        textInput: props.textInputStyle,
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                            zIndex: 2001,

                        },
                        textInput: {
                            color:'#1E2D60',
                            // width:400*em,
                            color:"#6A8596",
                            borderBottomWidth: 2,
                            borderBottomColor: 
                            Location?
                            props.borderBottomColor  :'#BFCDDB', 
                          },
                    }}
                    textInputProps={{
                        placeholderTextColor:'#6A8596',
                        autoCorrect: false,
                        
                    onChangeText: (text) => { setLocation(text) }
                     
                      }}
                    // listViewDisplayed="auto"
                    returnKeyType={'search'}
                  
                    disableScroll={false}
                    
                    // predefinedPlacesAlwaysVisible={true}
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_4']}
                    query={{
                        key: `${google_api}`,
                        language: 'fr',
                        types: '(regions)'
                    }}
                    renderRow={(rowData,details) => {
                        const title = rowData.structured_formatting.main_text;
                        return (
                         <View 
                         style={{ flexDirection:'row',alignItems:'center'}}
                         >
                             <View style={{marginRight:15*em}}>
                             <Locate />
                             </View>
                          <Text style={{color:'#1E2D60', fontFamily:'Lato-Regular',fontSize: 16*em }}>{title}</Text>
                          {/* <Text style={{ fontSize: 14 }}>{address}</Text> */}
                         </View>
                         );
                        }}

                />
            </View>

            {props.show || props.show == undefined ?
                <View style={[{ flexDirection: 'row'},
                 props.myLocationStyle
                 ]}>
                    {props.myLocationIconColor === undefined ? 
                    <LocationRed width={16 * em} height={19 * hm} /> : 
                    <View style={{ top: 15 * hm }} />}
                    
                    {/* <CommentText text={props.TextBtn} color={props.myLocationColor === undefined ? "#F9547B" : props.myLocationColor} style={{ marginLeft: 10 * em }} onPress={() => { getlocation() }} /> */}
                    <TouchableOpacity style={{ position: 'absolute',}} onPress={() => {  ref.current?.setAddressText(address); }}>
                    <View style={{flexDirection:'row'}}>
                    <Flecheposition/>
                    <View style={{flexDirection:'column', marginLeft:13*em}}>
                        <Text style={{color:'#1E2D60', fontFamily:'Lato-Bold', fontSize:16*em}}>
                        Position actuelle
                        </Text>
                        <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                            }}>
                    <Text
                     numberOfLines={2} style={{
                        width: 250*em,
                        flexGrow: 1,
                        flex: 1,
                        color:'#A0AEB8', fontFamily:'Lato-Regular', fontSize:16*em, marginTop:5*hm
                }}>
                      {  address}
                        </Text>
                        </View>
                    </View>
                    </View>
{                 console.log("ooouuuuuuuhhh", address)}
                    </TouchableOpacity>
                </View>
   : null}


{props.showadd || props.showadd == undefined ?
                <View style={[{ flexDirection: 'row'}, props.myLocationStyle]}>
                                    
                    <CommentText text={props.TextBtn} color={props.myLocationColor === undefined ? "#F9547B" : props.myLocationColor} style={{ marginLeft: 10 * em,fontFamily: 'Lato-Regular',marginTop:10*hm }} onPress={() => { ref.current?.setAddressText(address); }} />
                   
                </View>
   : null}
        </>
    );
};

export default GooglePlacesInput;
