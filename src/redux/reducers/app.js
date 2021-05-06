import { TOGGLE_DARK_MODE} from "../constants";

let initialState = {
    isDarkMode: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return { ...state, isDarkMode: !state.isDarkMode }
        default:
            return state;
    }
}

export default userReducer;