import { LOGIN, LOGOUT } from '../constants';

export const addLogin = (logindata) => {
  return (dispatch) => {
    return dispatch({ type: LOGIN, data: logindata });
  }
};

export const deleteLogin = () => {
  return (dispatch) => {
    return dispatch({ type: LOGOUT });
  }
};


