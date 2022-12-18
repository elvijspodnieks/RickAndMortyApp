import { ActionTypes } from "../constants/action-types";
const intialState = {
  characters: [],
};

export const charactersReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CHARACTERS:
      return { ...state, characters: payload };
    default:
      return state;
  }
};
