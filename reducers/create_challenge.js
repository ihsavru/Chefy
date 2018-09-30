import _ from 'lodash';
import {
  GET_PROBLEMS_BY_CATEGORY,
  GET_PROBLEMS_BY_CODE,
  ADD_PROBLEM,
  REMOVE_PROBLEM,
  UPDATE_CHALLENGE_NAME,
  UPDATE_CHALLENGE_DURATION,
} from '../constants';

const initialState = {
  problemList: [],
  contest: {
    name: '',
    duration: {
      days: '00',
      hours: '03',
      minutes: '00',
    },
    problems: [],
    endTime: null,
  },
};

const challenges = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_PROBLEMS_BY_CODE: {
      newState.problemList = [action.payload.result.data.content];
      return newState;
    }
    case GET_PROBLEMS_BY_CATEGORY: {
      newState.problemList = _.concat(newState.problemList, action.payload.result.data.content);
      return newState;
    }
    case ADD_PROBLEM: {
      const newProblems = _.concat(newState.contest.problems, action.payload);
      newState.contest = {
        ...newState.contest,
        problems: newProblems,
      };
      return newState;
    }
    case REMOVE_PROBLEM: {
      const newProblems = _.without(newState.contest.problems, action.payload);
      newState.contest = {
        ...newState.contest,
        problems: newProblems,
      };
      return newState;
    }
    case UPDATE_CHALLENGE_NAME: {
      newState.contest = {
        ...newState.contest,
        name: action.payload,
      };
      return newState;
    }
    case UPDATE_CHALLENGE_DURATION: {
      let value = action.payload.value;
      if (action.payload.value.length === 1) {
        value = `0${action.payload.value}`;
      }
      if (action.payload.target === 'days') {
        newState.contest = {
          ...newState.contest,
          duration: {
            ...newState.contest.duration,
            days: value,
          },
        };
      } else if (action.payload.target === 'hours') {
        newState.contest = {
          ...newState.contest,
          duration: {
            ...newState.contest.duration,
            hours: value,
          },
        };
      } else if (action.payload.target === 'minutes') {
        newState.contest = {
          ...newState.contest,
          duration: {
            ...newState.contest.duration,
            minutes: value,
          },
        };
      }
      return newState;
    }
    default:
      return newState;
  }
};

export default challenges;
