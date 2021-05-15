import React, { useState } from 'react';
import { View, FlatList, Image, StatusBar, TouchableOpacity, Text } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonText from '../text/CommonText';
import TitleText from '../text/TitleText';
import CommonButton from '../Components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import User from '../model/user/User';
import SearchBox from '../Search/SearchBox';
import RelationshipType from '../model/user/RelationshipType';
import Modal from 'react-native-modal';
import SearchCommonListItem from '../adapter/SearchCommonListItem';
import ProfileCommonHeader from './header/ProfileCommonHeader';
import CircleHeader from './header/CircleHeader';

const users = [
    new User(
        'Amandine Bernard',
        require('../assets/images/avatar.png'),
        [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
        'user@labul.com'
    ),
    new User('Amélie Petit', require('../assets/images/avatar.png'), [RelationshipType.NEIGHBOR], 'user@labul.com'),
    new User('Antoine Durand', require('../assets/images/avatar.png'), [RelationshipType.NEIGHBOR], 'user@labul.com'),
    new User('Robert Dupont', require('../assets/images/avatar.png'), '', 'user@labul.com'),
    new User('Julien Girar', require('../assets/images/avatar.png'), '', 'user@labul.com'),
];

const SearchContact = (props) => {

    const [searchedUsers, getSearchResult] = useState(true);
    const renderFlatList = ({ item }) => (
        <SearchCommonListItem
            text={item.name}
            subText={item.relationship ? item.relationship.join('/') : undefined}
            icon={item.photo}
            style={styles.listItem}
        />
    );
    return (
        <Modal
            isVisible={props.visible}
            backdropOpacity={0.8}
            style={styles.container}
            backdropColor={'#1E2D60'}
            swipeDirection={'up'}
            onBackButtonPress={() => props.onPress()}>
            <StatusBar opa backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />

            <CircleHeader title="Rechercher" onCancelPress={() => props.onPress()} style={styles.header} />
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
            <View style={styles.body}>
                <SearchBox
                    style={styles.searchbox}
                    onChangeText={(text) => {
                        if (text) {
                            getSearchResult(users);
                        } else {
                            getSearchResult([]);
                        }
                    }}
                />
                <FlatList data={searchedUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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
        borderTopRightRadius: 10 * em,
        borderTopLeftRadius: 10 * em,
        flex: 1,
        justifyContent: 'flex-start',
    },
    header: { marginLeft: 0 * em, marginBottom: 10 * hm, marginTop: 27 * hm },
    body: { paddingHorizontal: 30 * em, alignItems: 'center', flex: 1 },
    title: {
        marginTop: 15 * hm
        // , fontFamily: 'Lato-Black'
    },
    searchbox: { marginTop: 25 * hm, height: 44 * hm, width: 315 * em, marginLeft: 30 * em, marginRight: 30 * em },
    listItem: {
        height: 42 * hm,
        marginTop: 35 * hm,
        paddingHorizontal: 30 * em,
        width: 315 * em,
    },
};
export default SearchContact;
