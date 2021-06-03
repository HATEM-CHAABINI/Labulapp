import React, { useState, useEffect } from 'react';
import { em, WIDTH, hm } from '../../../constants/consts';
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from '../../../textInput/ProfileCommonTextInput';
import CommonText from '../../../text/CommonText';
import SearchBox from '../../../Components/other/SearchBox';
import CommonCheckBox from '../../../Components/checkbox/CommonCheckBox';
import { StatusBar, View, Text, Platform, TouchableOpacity, Alert, ScrollView } from 'react-native';
import User from '../../../model/user/User';
import CheckBox from '@react-native-community/checkbox';
// import CheckboxList from 'rn-checkbox-list';
import _ from 'lodash'
// import CheckBox from 'react-native-check-box'
const ProfileNameComponent = (props) => {

    const [value, setvalue] = useState({ data: props.category })
    const [loading, setloading] = useState(true)
    const [selectedItem, setselectedItem] = useState(props.value)

    const onChecked = (id) => {


        let temp = value.data
        let changed_data = []

        for (let i = 0; i < temp.length; i++) {

            if (id === temp[i].id) {
                changed_data.push({ id: temp[i].id, itemName: temp[i].itemName, checked: true })
            }
            else {
                changed_data.push({ id: temp[i].id, itemName: temp[i].itemName, checked: false })
            }

        }
        setvalue({ data: changed_data })

    }



    useEffect(() => {
        setloading(true)
        let temp = value.data
        let changed_data = []

        for (let i = 0; i < temp.length; i++) {

            if (selectedItem.id === temp[i].id) {
                changed_data.push({ id: temp[i].id, itemName: temp[i].itemName, checked: true })
            }
            else {
                changed_data.push({ id: temp[i].id, itemName: temp[i].itemName, checked: false })
            }

        }
        setvalue({ data: changed_data })
        setloading(false)

    }, [])

    const getselecteditem = () => {
        var keys = value.data.map((t) => t.itemName)
        var checks = value.data.map((t) => t.checked)
        let selecteds = {}
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                selecteds = { id: i, name: keys[i], }

            }

        }


        props.onChange(selecteds)
        props.onPress()
    }

    return (
        <Modal
            isVisible={props.visible}
            backdropOpacity={0.8}
            style={styles.container}
            backdropColor={'#1E2D60'}
            swipeDirection={'up'}
            onBackButtonPress={() => { setvalue(() => props.value), props.onPress() }}>
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
            <ProfileModalHeader
                title={props.title}
                style={styles.header}
                onCancelPress={() => { props.onPress() }}
                onFinishPress={() => { getselecteditem() }}
            />

            <ScrollView>


                {!loading && value.data.map((val) => {

                    return (
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }} onPress={() => { onChecked(val.id) }}>
                            <Text style={{ fontSize: 18, color: '#1E2D60', fontFamily: 'Lato-Bold', fontSize: 18 * em, lineHeight: 23 * hm, textAlign: 'left' }}>{val.itemName}</Text>
                            <CheckBox value={val.checked} onValueChange={() => { onChecked(val.id) }} style={{ padding: 20 }} />
                        </TouchableOpacity>
                    );
                })
                }
            </ScrollView>


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
