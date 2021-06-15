import {TOGGLE_DARK_MODE} from '../constants';
import {
    RESET,
    APP_POSTING_REQUEST,
    APP_REQUEST_SUCCESS,
  } from '../actions/actionsTypes.js';
  import {REHYDRATE} from 'redux-persist';
  
  export type State = {
    storeRehydrated: false,
    data: Object,
    onActivity: boolean,
    isDarkMode:boolean
  };
  
  const initialState = {
    storeRehydrated: false,
    data: null,
    onActivity: false,
    isDarkMode: false,

  };


function userReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {...state, isDarkMode: !state.isDarkMode};
    case RESET:
      return initialState;

    case APP_POSTING_REQUEST:
      return {...state, onActivity: true};

    case APP_REQUEST_SUCCESS:
      return {...state, data: action.data, onActivity: false};

    default:
      return state;
  }
}

export default userReducer;
