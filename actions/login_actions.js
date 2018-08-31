import * as types from "../constants";
import creds from "../config/auth.js";
import axios from 'axios';

export const authorizeApp = () => {
  const url = `https://api.codechef.com/oauth/authorize?response_type=code&client_id=${creds.client_id}&state=xyz&redirect_uri=http://localhost:3000/home`;
  let promise  = axios.get(url);
  console.log(promise);
  return {
    type: types.AUTHORIZE_USER,
    payload: promise
  }
}
