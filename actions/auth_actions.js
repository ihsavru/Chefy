import fetch from 'cross-fetch';
import { SET_TOKENS, SET_USER, API_FAIL } from '../constants';

export const setTokens = tokens => ({
  type: SET_TOKENS,
  payload: tokens,
});

const fetchUser = (accessToken) => {
  const promise = fetch('https://api.codechef.com/users/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return promise;
};

export const setUser = tokens => dispatch => (
  fetchUser(tokens.access_token)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: SET_USER,
        payload: data,
      });
    })
    .catch(response => (dispatch({ type: API_FAIL, data: response })))
);
