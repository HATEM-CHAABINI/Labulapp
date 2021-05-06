import { TOGGLE_DARK_MODE } from '../constants';

export const toggleDarkMode = () => {
    return dispatch => {
        dispatch({ type: TOGGLE_DARK_MODE })
    }
}