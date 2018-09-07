import fetch from 'cross-fetch';
import {API_FAIL, SET_PROBLEMS} from '../constants';
import Cookies from 'js-cookie';

const fetchProblemByCode = (contestCode, problemCode) => {
  let promise = fetch(`https://api.codechef.com/contests/${contestCode}/problems/${problemCode}?fields=body`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('access_token')}`
      }
    });
  return promise;
}

export const loadProblemByCode = (contestCode, problemCode) => dispatch => {
  fetchProblemByCode(contestCode, problemCode)
    .then(data => data.json())
    .then(data => {
      dispatch({
        type: SET_PROBLEMS,
        payload: data
      });
    })
    .catch(response => (dispatch({ type: API_FAIL, data: response })));
}
