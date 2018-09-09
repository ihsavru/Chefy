import _ from 'lodash';
import {
  GET_PROBLEMS_BY_CATEGORY,
  GET_PROBLEMS_BY_CODE,
  ADD_PROBLEM,
  REMOVE_PROBLEM,
  UPDATE_CHALLENGE_NAME,
  CREATE_CHALLENGE,
} from '../constants';

const initialState = {
  problemList: [],
  contest: {
    problems: [],
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
      newState.problemList = _.cloneDeep(action.payload.result.data.content);
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
    default:
      return newState;
  }
};

export default challenges;
