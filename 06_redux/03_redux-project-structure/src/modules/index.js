import menuReducer from "./MenuModule";
import userReducer from "./UserModule";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  menuReducer,
  userReducer,
});
export default rootReducer;
