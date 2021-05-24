import { combineReducers } from "redux";
import loginReducers from './loginReducer';
import signupReducer from './signupReducer';
import profileReducer from './profileReducer';
import demandReducer from './demandReducer';

const rootReducer = combineReducers({
    loginReducers: loginReducers,
    signupReducer: signupReducer,
    profileReducer: profileReducer,
    demandReducer: demandReducer,
});

export default rootReducer;