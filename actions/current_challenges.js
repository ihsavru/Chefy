import fetch from 'cross-fetch';
import { API_FAIL, SET_CURRENT_CHALLENGES, START_CHALLENGE } from '../constants';

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

const postStartTime = (challenge, username) => {
  let newChallenge = { ...challenge };
  let seconds = newChallenge.duration.days * 24 * 60 * 60;
  seconds += newChallenge.duration.hours * 60 * 60;
  seconds += newChallenge.duration.minutes * 60;
  newChallenge.endTime = Date.now() + seconds * 1000;
  const data = {
    username: username,
    challenge: newChallenge,
  };
  const promise = fetch('/firebase/start_challenge', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return promise;
};

export const startChallenge = (challenge, username) => (dispatch) => {
  postStartTime(challenge, username)
    .then(data => data.json())
    .then((data) => {
      dispatch({
        type: START_CHALLENGE,
        payload: data,
      });
    });
};
