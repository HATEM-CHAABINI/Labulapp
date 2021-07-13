import { SIGNUP_DETAILS } from '../constants';

const initialState = {
  signupData: ''
}

const signupReducer=(state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_DETAILS:
      let data = state.signupData
      return {signupData:{ ...data,...action.data }};
      default:
      return state;
  }
}

export default signupReducer