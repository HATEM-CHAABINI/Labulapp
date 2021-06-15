import {combineReducers} from 'redux';
import loginReducers from './loginReducer';
import signupReducer from './signupReducer';
import profileReducer from './profileReducer';
import demandReducer from './demandReducer';
import userReducer from './app';

const rootReducer = combineReducers({
  loginReducers,
  signupReducer,
  profileReducer,
  demandReducer,
  userReducer
});

export default rootReducer;
