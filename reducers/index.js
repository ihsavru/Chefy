import { combineReducers } from 'redux';
import auth from './auth';
import challenges from './create_challenge';

const rootReducer = combineReducers({
  auth,
  challenges,
});

export default rootReducer;
