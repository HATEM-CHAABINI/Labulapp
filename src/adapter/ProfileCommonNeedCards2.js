import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em } from '../constants/consts';
import CommentText from '../text/CommentText';
import ServiceType from '../model/service/ServiceType';
import SellServiceType from '../model/service/SellServiceType';
import SmallText from '../text/SmallText';
import NeedStatusType from '../model/service/NeedStatusType';
import Moment from 'moment';
import { fetchPerticularDemand } from '../services/firebase'
const ProfileCommonNeedCard = (props) => {
    const { data } = props;
    useEffect(() => {
        console.log("data ", data);
        // fetchPerticularDemand().then((item) => {
        //     console.log(" item ", item);
        // })

    }, [])
    if (data.type === ServiceType.SELL) {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={[styles.container, props.style]}>
                    <Image source={{ uri: data.images[0].uri }} style={styles.cover} />
                    <View style={styles.textView}>
                        <SmallText text={data.slogan} style={{ fontFamily: 'Lato-Medium', marginBottom: 5 * em }} color={'#1E2D60'} />
                        <CommentText text={data.comment} style={styles.organName} color={'#1E2D60'} />
                        <View style={{ flexDirection: 'row' }}>
                            <CommentText text={data.price} style={{ fontFamily: 'Lato-SemiBold' }} color={'#1E2D60'} />
                            <CommentText
                                text={data.discountPrice}
                                style={{ fontFamily: 'Lato-Medium', marginLeft: 10 * em, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}
                                color={'#A0AEB8'}
                            />
                        </View>
                        {data.discountInfo && (
                            <SmallText text={data.discountInfo} style={{ fontFamily: 'Lato-Medium', marginTop: 15 * em }} color={'#A0AEB8'} />
                        )}
                        {data.subType === SellServiceType.EVENT && (
                            <SmallText text={'06 Fév · 14H00'} style={{ fontFamily: 'Lato-Medium', marginTop: 15 * em }} color={'#A0AEB8'} />
                        )}
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.container, props.style]}>
                <Image source={{ uri: data.images[0].uri }} style={styles.cover} />
                <View style={styles.textView}>
                    <SmallText text={Moment(data.demandStartDate.seconds * 1000).format('DD MMMM YYYY-HH:MM')} style={styles.date} color="#6A8596" />
                    <SmallText text={data.category !== undefined ? data.category.name : ''} style={styles.title} color={'#1E2D60'} />
                    <CommentText text={data.data.title} style={styles.organName} color={'#1E2D60'} />
                    <StatusView text={data.status} style={styles.status} status={data.status} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = {
    container: { flexDirection: 'row' },
    cover: { width: 95 * em, height: 141 * em, borderRadius: 18 * em },
    textView: { marginLeft: 15 * em, paddingTop: 15 * em, alignItems: 'flex-start', width: 205 * em },
    date: { fontFamily: 'Lato-Medium', fontSize: 12 * em, lineHeight: 14 * em },
    title: { fontFamily: 'Lato-Medium', fontSize: 12 * em, lineHeight: 16 * em, marginTop: 10 * em, marginBottom: 5 * em, textAlign: 'left' },
    organName: {
        fontFamily: 'Lato-Black',
        fontSize: 14 * em,
        lineHeight: 21 * em, textAlign: 'left',
        marginBottom: 15 * em
    },
    status: { marginTop: 15 * em },
    statusView: { borderRadius: 15 * em, paddingVertical: 4 * em, paddingHorizontal: 8 * em },
};
const statusStyle = [
    { id: NeedStatusType.INPROGRESS, title: 'En cours', color: '#40CDDE', backgroundColor: '#D9F6F9', fontFamily: 'Lato-medium', fontSize: '12*em' },
    { id: NeedStatusType.CANCELED, title: 'Annulée', color: '#6A8596', backgroundColor: '#F0F5F7', fontFamily: 'Lato-medium', fontSize: '12*em' },
    { id: NeedStatusType.WAITING, title: 'En attente', color: '#FEBD71', backgroundColor: '#FFF2E2', fontFamily: 'Lato-medium', fontSize: '12*em' },
    { id: NeedStatusType.PARTICPATED, title: 'Je participe', color: '#1BD39A', backgroundColor: '#D1F6EB', fontFamily: 'Lato-medium', fontSize: '12*em' },
    { id: NeedStatusType.REFUSED, title: 'Réfusé', color: '#F9547B', backgroundColor: '#FEDDE4', fontFamily: 'Lato-medium', fontSize: '12*em' },
];
const StatusView = (props) => {
    const status = statusStyle.find((element) => element.id === props.status.code);
    return (
        <View style={[styles.statusView, { backgroundColor: status.backgroundColor }]}>
            <SmallText
                text={status.title}
                color={status.color}
            />
        </View>
    );
};
export default ProfileCommonNeedCard;

