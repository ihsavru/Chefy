import fetch from 'cross-fetch';
import Cookies from 'js-cookie';
import shortid from 'shortid';
import {
  API_FAIL,
  GET_PROBLEMS_BY_CODE,
  GET_PROBLEMS_BY_CATEGORY,
  ADD_PROBLEM, REMOVE_PROBLEM,
  UPDATE_CHALLENGE_NAME,
  UPDATE_CHALLENGE_DURATION,
  CHALLENGE_CREATED,
  SET_PROBLEM_DETAILS,
  CLEAR_PROBLEM_DETAILS,
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

const fetchMoreProblems = (category, offset) => {
  const promise = fetch(`https://api.codechef.com/problems/${category}?fields=problemName,problemCode,accuracy&limit=20&offset=${offset}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
  });
  return promise;
};

export const loadMoreProblems = (category, offset) => (dispatch) => {
  fetchMoreProblems(category, offset)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: GET_PROBLEMS_BY_CATEGORY,
        payload: data,
      });
    });
};

const fetchProblemDetails = (problemCode, contestCode = 'PRACTICE') => {
  const promise = fetch(`https://api.codechef.com/contests/${contestCode}/problems/${problemCode}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('access_token')}`,
    },
  });
  return promise;
};

export const setProblemDetails = (problemCode, contestCode) => (dispatch) => {
  fetchProblemDetails(problemCode, contestCode)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: SET_PROBLEM_DETAILS,
        payload: data,
      });
    });
};

export const clearProblemDetails = () => (dispatch) => {
  dispatch({
    type: CLEAR_PROBLEM_DETAILS,
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

export const updateChallengeDuration = (target, value) => (dispatch) => {
  const data = {
    target,
    value,
  };
  dispatch({
    type: UPDATE_CHALLENGE_DURATION,
    payload: data,
  });
};

const postChallenge = (challenge, username) => {
  challenge.id  = shortid.generate();
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
    .then(() => {
      dispatch({
        type: CHALLENGE_CREATED,
      });
    });
};
