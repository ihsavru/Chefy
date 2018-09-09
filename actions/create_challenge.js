import fetch from 'cross-fetch';
import Cookies from 'js-cookie';
import {
  API_FAIL,
  GET_PROBLEMS_BY_CODE,
  GET_PROBLEMS_BY_CATEGORY,
  ADD_PROBLEM, REMOVE_PROBLEM,
  UPDATE_CHALLENGE_NAME,
  ADDED_CHALLENGE,
} from '../constants';

const fetchProblemByCode = (contestCode, problemCode) => {
  const promise = fetch(`https://api.codechef.com/contests/${contestCode}/problems/${problemCode}?fields=body`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
  });
  return promise;
};

export const loadProblemByCode = (contestCode, problemCode) => (dispatch) => {
  fetchProblemByCode(contestCode, problemCode)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: GET_PROBLEMS_BY_CODE,
        payload: data,
      });
    })
    .catch(response => (dispatch({ type: API_FAIL, data: response })));
};

const fetchProblemsByCategory = (category) => {
  const promise = fetch(`https://api.codechef.com/problems/${category}?fields=problemName,problemCode,accuracy&limit=20`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
  });
  return promise;
};

export const loadProblemsByCategory = category => (dispatch) => {
  fetchProblemsByCategory(category)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: GET_PROBLEMS_BY_CATEGORY,
        payload: data,
      });
    });
};

export const addProblem = problem => (dispatch) => {
  dispatch({
    type: ADD_PROBLEM,
    payload: problem,
  });
};

export const removeProblem = problem => (dispatch) => {
  dispatch({
    type: REMOVE_PROBLEM,
    payload: problem,
  });
};

export const updateChallengeName = challengeName => (dispatch) => {
  dispatch({
    type: UPDATE_CHALLENGE_NAME,
    payload: challengeName,
  });
};

const postChallenge = (challenge, username) => {
  const data = {
    challenge,
    user: username,
  };

  const promise = fetch('/firebase/create_challenge', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return promise;
};

export const createChallenge = (challenge, username) => (dispatch) => {
  postChallenge(challenge, username)
    .then(dispatch({
      type: ADDED_CHALLENGE,
    }));
};
