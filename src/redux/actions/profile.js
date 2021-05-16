import { PROFILE_DETAILS_ADD,PROFILE_DETAILS_UPDATE } from '../constants';

export const addProfile = (data) => {
  return (dispatch) => {
    return dispatch({ type: PROFILE_DETAILS_ADD, data: data });
  }
};

export const updateProfile = (data) => {
    return (dispatch) => {
      return dispatch({ type: PROFILE_DETAILS_UPDATE, data: data });
    }
  };