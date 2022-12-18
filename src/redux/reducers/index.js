import { combineReducers } from "redux";
import { charactersReducer } from "./characterReducers";
const reducers = combineReducers({
  allCharacters: charactersReducer,
});
export default reducers;
