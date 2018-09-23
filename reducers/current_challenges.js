import _ from 'lodash';
import { SET_CURRENT_CHALLENGES } from '../constants';

const initialState = {
  challenges: [],
};

const currentChallenges = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SET_CURRENT_CHALLENGES: {
      newState.challenges = _.cloneDeep(action.payload.challenges);
      return newState;
    }
    default:
      return newState;
  }
};

export default currentChallenges;
