import { combineReducers } from "redux";
import loginReducers from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
    loginReducers:loginReducers,
    signupReducer:signupReducer,
});

export default rootReducer;