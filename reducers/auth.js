import { SET_TOKENS } from '../constants';

const initialState = {
  access_token: null,
  refresh_token: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKENS: {
      let newState = {...state};
      newState.access_token = action.payload.access_token;
      newState.refresh_token = action.payload.refresh_token;
      return newState;
    }
    default:
      return state;
  }
};

export default auth;
