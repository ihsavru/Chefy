import { SET_PROBLEMS } from '../constants';
import _ from 'lodash';

const initialState = {
  problemList: []
};

const challenges = (state = initialState, action) => {
  switch(action.type) {
    case SET_PROBLEMS: {
      let newState = {...state};
      newState.problemList[0] = action.payload.result.data.content;
      return newState;
    }
    default:
      return state;
  }
};

export default challenges;
