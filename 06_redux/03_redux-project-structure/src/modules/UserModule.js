import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {};

/* 액션 타입 */
const LOGIN = "user/LOGIN";

/* 액션 함수 */
export const {
  user: { login },
} = createActions({
  [LOGIN]: (res) => ({ res }),
});

/* 리듀서 함수 */
const userReducer = handleActions(
  {
    [LOGIN]: (state, { payload: { res } }) => {
      /* id password가 일치할 경우 res에 객체가 반환되지만 
      불일치하는 경우 undefined가 반환된다.*/
      if (res) localStorage.setItem("isLogin", true);
      else res = { message: "LOGIN_FAIL" };

      return res;
    },
  },
  initialState
);

/* 어디에 쓰이는 걸까 
: rootReducer 에 콤바인에 하나 더 추가 해서 씀
*/
export default userReducer;
