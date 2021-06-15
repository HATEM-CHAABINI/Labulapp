import {TOGGLE_DARK_MODE} from '../constants';
import {postingRequest, requestSuccess} from './formUtil';
import firestore from '@react-native-firebase/firestore';

const RESOURCE = 'APP';

export const toggleDarkMode = () => {
  return dispatch => {
    dispatch({type: TOGGLE_DARK_MODE});
  };
};

// get project informations (politic && cgu)  from tab projectInformations
export function getInfoProject() {
  return async function (dispatch, getState) {
    let result = null;
    dispatch(postingRequest(RESOURCE));
    firestore()
      .collection('projectInformations')
      .get()
      .then(snapshot => {
        snapshot._docs.forEach(doc => {
          doc._data.id = doc.id;
          return (result = doc._data);
        });
        console.log("get info app success",result);
        const data= dispatch(
          requestSuccess(result, 'get info app success', RESOURCE),
        );
        console.log("data",data);
        return data;
      });
  };
}
