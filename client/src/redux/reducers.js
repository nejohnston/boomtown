import { combineReducers } from "redux";
import itemsReducer from "./modules/items";
import profileReducer from "./modules/profile";
import authReducer from "./modules/auth";
import borrowedReducer from "./modules/borrowed";
import shareReducer from "./modules/share";

export default combineReducers({
  borrowed: borrowedReducer,
  items: itemsReducer,
  profile: profileReducer,
  auth: authReducer,
  share: shareReducer
});
