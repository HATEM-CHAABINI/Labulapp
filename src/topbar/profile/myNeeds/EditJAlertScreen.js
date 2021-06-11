
import React, { useState, useEffect } from 'react';
import { em, hm } from '../../../constants/consts';
import ProfileModalHeader from '../../../Components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import { StatusBar, View, Text, FlatList, TouchableOpacity } from 'react-native';
import TitleText from '../../../text/TitleText';
import CheckBox from '../../../Components/checkbox/CheckBox';
import { useSelector, useDispatch } from 'react-redux'
import { update_into_demand } from '../../../redux/actions/demand'


export default (props) => {

    const [value, setvalue] = useState(props.value)
    const [loading, setloading] = useState(false)
    const [alertType, setAlertType] = useState(props.value)
    const dispatch = useDispatch();
    const [checked, setChecked] = useState();

    const options = [
        { id: 0, title: 'Accident' },
        { id: 1, title: 'Route barrée' },
        { id: 2, title: 'Travaux' },
    ];
    useEffect(() => {
        setloading(false)
        setChecked(props.value)
    }, [props.value])
    const onSubmit = () => {
        props.onChange(checked)
        props.onPress()
    }
    const renderOptions = ({ item, index }) => {
        var elevation = !checked ? 0 : 2;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[
                    checked === index ? styles.optionBoxClicked : styles.optionBox,
                    { marginBottom: index === 2 ? 40 * em : 0 },
                ]}
                // onPress={() => { dispatch(update_into_demand({ type: item })), setChecked(item.id),console.log('hello',item.id) }}>
                onPress={() => setChecked(item.title)}>
                <TitleText
                    style={styles.optionCaption}
                    text={item.title}
                />
                <CheckBox
                    oval
                    red
                    single
                    isChecked={checked === item.title}
                    singleSelection={true}
                    // onClick={() => (dispatch(update_into_demand({ type: item })), setChecked(item.id))}
                    onClick={() => setChecked(item.title)}
                />
            </TouchableOpacity>
        );
    };


    return (
        <Modal
            isVisible={props.visible}
            backdropOpacity={0.8}
            style={styles.container}
            backdropColor={'#1E2D60'}
            swipeDirection={'up'}
            onBackButtonPress={() => props.onPress()}>
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
                loading={loading}
                setloading={setloading}
                onCancelPress={() => { props.onPress() }}
                onFinishPress={() => { onSubmit() }}
            />
            <View style={styles.body}>
                <FlatList
                    data={options}
                    renderItem={renderOptions}
                    keyExtractor={(i) => i.id}
                    keyExtractor={(props) => props.id}
                />
            </View>
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
    descerrorText: {
        fontSize: 12 * em,
        bottom: 0,
        // marginBottom: 4 * hm,
        color: "red",
    },
    header: { marginBottom: 10 * hm, marginTop: 27 * hm },
    input: { marginTop: 25 * hm },

    header: {
        height: '12.45%',
    },
    body: { paddingHorizontal: 30 * em },
    title: {
        width: 315 * em,
        textAlign: 'left',
        marginTop: 35 * em,
        lineHeight: 38 * em,
    },
    circleSortView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10 * em,
        marginBottom: 19 * em
    },
    optionBox: {
        marginHorizontal: 10 * em,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 78 * em,
        alignItems: 'center',
        marginTop: 10 * em,
        borderRadius: 20 * em,
        paddingHorizontal: 15 * em,
    },
    optionBoxClicked: {
        marginHorizontal: 10 * em,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 78 * em,
        alignItems: 'center',
        marginTop: 10 * em,
        borderRadius: 20 * em,
        paddingHorizontal: 15 * em, backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#254D5612',
                shadowOffset: {
                    width: 0,
                    height: 8 * hm,
                },
                shadowRadius: 20 * em, shadowOpacity: 1,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    optionCaption: {
        fontSize: 18 * em,
        lineHeight: 23 * em,
        color: '#1E2D60',
    },
};







