import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";
import mapReducer from "./dataReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  map: mapReducer,
});

export default rootReducer;
