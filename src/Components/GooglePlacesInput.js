import React, { useEffect, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { google_api, em, hm } from '../constants/consts'
import { Magnifier, CrossCircle, LocationRed } from '../assets/svg/icons';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import CommentText from '../text/CommentText';
Geocoder.init(google_api);
const GooglePlacesInput = (props) => {
    const ref = useRef();
    const [address, setaddress] = useState(props.value)
    useEffect(() => {
        ref.current?.setAddressText(address);
    }, []);

    const getlocation = () => {

        Geolocation.getCurrentPosition(
            (position) => {


                Geocoder.from(position.coords.latitude, position.coords.longitude)
                    .then(json => {
                        var addressComponent = json.results[0].formatted_address;
                        ref.current?.setAddressText(addressComponent);

                        props.changedValue({ address: addressComponent, coordinate: { latitude: position.coords.latitude, logitude: position.coords.longitude } })


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
            <View style={[{ width: '100%', flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: props.borderBottomColor ? props.borderBottomColor : 'grey', zIndex: 10 }, props.style]}>
                <View style={{ marginRight: 15 * em, top: '3%', }}>
                    <Magnifier width={20 * em} height={20 * em} />
                </View>
                <GooglePlacesAutocomplete
                    ref={ref}
                    placeholder={props.placeholder}
                    minLength={2}
                    onPress={(data, details = null) => {


                        props.changedValue(
                            {
                                address: data.description,
                                coordinate: {
                                    latitude: details.geometry.location.lat,
                                    logitude: details.geometry.location.lng
                                }
                            })

                        // valueChange()
                    }}
                    styles={{
                        textInputContainer: props.containerStyle,
                        textInput: props.textInputStyle,
                        predefinedPlacesDescription: {
                            color: '#1faadb',
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
            <View style={[{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '90%', }, props.myLocationStyle]}>
                    <LocationRed width={16 * em} height={19 * em} />
                    <CommentText text={'Utiliser ma position'} color="#F9547B" style={{ marginLeft: 10 * em }} onPress={() => { getlocation() }} />

                </View>
            {props.show || props.show == undefined ? <KeyboardAvoidingView style={{ position: 'absolute', alignSelf: 'center', }} >
                <View style={[{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row', marginTop: '90%', }, props.myLocationStyle]}>
                    <LocationRed width={16 * em} height={19 * em} />
                    <CommentText text={'Utiliser ma position'} color="#F9547B" style={{ marginLeft: 10 * em }} onPress={() => { getlocation() }} />

                </View>
            </KeyboardAvoidingView> : null}
        </>
    );
};

export default GooglePlacesInput;
