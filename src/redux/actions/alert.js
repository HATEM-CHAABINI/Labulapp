import { ALERT_OBJECT, ALERT_OBJECT_UPDATE } from '../constants';

export const add_into_alert = (data) => {
    return (dispatch) => {
        return dispatch({ type: ALERT_OBJECT, data: data });
    }
};

export const update_into_alert = (data) => {
    return (dispatch) => {
        return dispatch({ type: ALERT_OBJECT_UPDATE, data: data });
    }
};