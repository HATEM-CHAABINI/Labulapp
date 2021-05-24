import { DEMAND_OBJECT_UPDATE, DEMAND_OBJECT } from '../constants';

export const add_into_demand = (data) => {
    return (dispatch) => {
        return dispatch({ type: DEMAND_OBJECT, data: data });
    }
};

export const update_into_demand = (data) => {
    return (dispatch) => {
        return dispatch({ type: DEMAND_OBJECT_UPDATE, data: data });
    }
};