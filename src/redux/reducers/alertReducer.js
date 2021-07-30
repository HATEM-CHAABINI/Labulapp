import { ALERT_OBJECT, ALERT_OBJECT_UPDATE } from '../constants';
// import React, {useState, useEffect} from 'react';
// import firestore from '@react-native-firebase/firestore';

const initialState = {
    alertData: ''
}

const alertReducer = (state = initialState, action) => {


    switch (action.type) {

        case ALERT_OBJECT:
            return { ...state, alertData: action.data };

        case ALERT_OBJECT_UPDATE:
            return {
                ...state,
                alertData: {
                    ...state.alertData,
                    ...action.data
                }
            };


        default:
            return state;
    }
}

export default alertReducer