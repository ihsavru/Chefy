import { SET_TOKENS } from "../constants";

export const setTokens = tokens => {
  return {
    type: SET_TOKENS,
    payload: tokens,
  };
};
