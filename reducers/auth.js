import { SET_TOKENS, SET_USER } from '../constants';

const initialState = {
  access_token: null,
  refresh_token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKENS: {
      const newState = { ...state };
      newState.access_token = action.payload.access_token;
      newState.refresh_token = action.payload.refresh_token;
      return newState;
    }
    case SET_USER: {
      const newState = { ...state };
      newState.fullname = action.payload.result.data.content.fullname;
      newState.username = action.payload.result.data.content.username;
      return newState;
    }
    default:
      return state;
  }
};

export default auth;
