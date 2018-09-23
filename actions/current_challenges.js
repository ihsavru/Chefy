import fetch from 'cross-fetch';
import { API_FAIL, SET_CURRENT_CHALLENGES } from '../constants';

const fetchCurrentChallenges = (username) => {
  const data = {
    username,
  };
  const promise = fetch('/firebase/fetch_challenges', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return promise;
};

export const setCurrentChallenges = username => (dispatch) => {
  fetchCurrentChallenges(username)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: SET_CURRENT_CHALLENGES,
        payload: data,
      });
    })
    .catch(response => (dispatch({ type: API_FAIL, data: response })));
};
