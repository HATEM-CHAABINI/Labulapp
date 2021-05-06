import { SIGNUP_DETAILS } from '../constants';

export const SignupData = (signupData) => {
  return (dispatch) => {
    return dispatch({ type: SIGNUP_DETAILS, data: signupData });
  }
};




