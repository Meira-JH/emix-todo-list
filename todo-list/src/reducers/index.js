import { combineReducers } from "redux";
import taskList from './taskList'

const rootReducer = combineReducers({
  taskList: taskList,
  });

export default rootReducer