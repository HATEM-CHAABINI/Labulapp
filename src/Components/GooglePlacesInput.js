import React, { useEffect, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { google_api, em, hm } from '../constants/consts'
import { Magnifier, CrossCircle, LocationRed, Flecheposition } from '../assets/svg/icons';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import CommentText from '../text/CommentText';
Geocoder.init(google_api);
const GooglePlacesInput = (props) => {
    const ref = useRef();
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
            <View style={[{ width: '100%', flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: props.borderBottomColor ? props.borderBottomColor : 'grey', zIndex: 1 , }, props.style]}>
                <View style={{ marginRight: 15 * em, top: '3%', }}>
                    <Magnifier width={20 * em} height={20 * em} />
                </View>
                <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder={props.placeholder}
                    minLength={2}
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

                    styles={{
                        
                        textInputContainer: props.containerStyle,
                        textInput: props.textInputStyle,
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                            zIndex: 2001,

                        },
                    }}

                    fetchDetails={true}
                    predefinedPlacesAlwaysVisible={true}
                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_4']}
                    query={{
                        key: `${google_api}`,
                        language: 'fr',
                        types: '(regions)'
                    }}
                    

                />

            </View>

            {props.show || props.show == undefined ?
                <View style={[{ flexDirection: 'row'}, props.myLocationStyle]}>
                    {props.myLocationIconColor === undefined ? <LocationRed width={16 * em} height={19 * hm} /> : <View style={{ top: 15 * hm }} />}
                    
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
                                    
                    <CommentText text={props.TextBtn} color={props.myLocationColor === undefined ? "#F9547B" : props.myLocationColor} style={{ marginLeft: 10 * em,fontFamily: 'HelveticaNeue',marginTop:10*hm }} onPress={() => { ref.current?.setAddressText(address); }} />
                   
                </View>
   : null}
        </>
    );
};

export default GooglePlacesInput;
