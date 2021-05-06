import { LOGIN, LOGOUT } from '../constants';

const initialState = {
  userDetails: ''
}

const loginReducer=(state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userDetails: action.data };
      
    case LOGOUT:
      return { ...state, userDetails: '' };
     
    default:
      return state;
  }
}

export default loginReducer