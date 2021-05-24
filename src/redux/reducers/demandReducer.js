import { DEMAND_OBJECT, DEMAND_OBJECT_UPDATE } from '../constants';
// import React, {useState, useEffect} from 'react';
// import firestore from '@react-native-firebase/firestore';

const initialState = {
    demandData: ''
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {

        case DEMAND_OBJECT:
            return { ...state, demandData: action.data };

        case DEMAND_OBJECT_UPDATE:
            return {
                ...state,
                demandData: {
                    ...state.demandData,
                    ...action.data
                }
            };


        default:
            return state;
    }
}

export default profileReducer