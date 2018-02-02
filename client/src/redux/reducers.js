import { combineReducers } from "redux";
import itemsReducer from "./modules/items";
import profileReducer from "./modules/profile";
import authReducer from "./modules/auth";
import borrowedReducer from "./modules/borrowed";

export default combineReducers({
  borrowed: borrowedReducer,
  items: itemsReducer,
  profile: profileReducer,
  auth: authReducer
});
