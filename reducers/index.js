import { combineReducers } from 'redux';
import login from "./login.js";

const rootReducer = combineReducers({
  login: login
});

export default rootReducer;
