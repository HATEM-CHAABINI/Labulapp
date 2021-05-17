import { combineReducers } from "redux";
import loginReducers from './loginReducer';
import signupReducer from './signupReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    loginReducers:loginReducers,
    signupReducer:signupReducer,
    profileReducer:profileReducer,
});

export default rootReducer;