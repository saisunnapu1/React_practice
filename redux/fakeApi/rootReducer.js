import { combineReducers } from "redux";
import reducer from "./Reducer";

const rootReducer = combineReducers({
  users: reducer
});
export default rootReducer;
