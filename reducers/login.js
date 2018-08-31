import { AUTHORIZE_USER } from "../constants";

const initialState = {
  token: ''
}

const login = (state = initialState, action) => {
  switch(action.type) {
    case AUTHORIZE_USER: {
      const newState = {...state};
      return newState;
    }

    default:
      return state;
  }
}

export default login;
