import { ActionTypes } from "../constants/action-types";

export const setCharacter = (characters) => {
  return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
  };
};
