import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";

/* createStore deprecated 되어 있으나 구동에 문제는 없으며 
이름을 명시적으로 legacy_createStore as createStore로 작성하면 사라진다. 
deprecated 시킨 이유는 향후 @reduxjs/toolkit를 이용해서 사용하라고 
명확하게 권고하기 위해서이다. */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, ReduxLogger))
);

export default store;
