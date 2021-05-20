import { PROFILE_DETAILS_ADD,PROFILE_DETAILS_UPDATE } from '../constants';
// import React, {useState, useEffect} from 'react';
// import firestore from '@react-native-firebase/firestore';

const initialState = {
  profileData: ''
}

const profileReducer=(state = initialState, action) => {
    

  switch (action.type) {

    case PROFILE_DETAILS_ADD:
      return { ...state, profileData: action.data };

    case PROFILE_DETAILS_UPDATE:
      return {
        ...state,
        profileData: {
          ...state.profileData,
          ...action.data
        }
      };
    //  return { ...state, profileData:state.profileData  };

 default:
      return state;
  }
}

export default profileReducer