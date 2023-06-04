import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";
import mapReducer from "./dataReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  map: mapReducer,
  auth: authReducer
});

export default rootReducer;
