import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
