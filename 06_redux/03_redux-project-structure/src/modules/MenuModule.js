import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {};

/* 액션 타임 */
const GET_MENULIST = "menu/GET_MENULIST";
const GET_MENU = "menu/GET_MENU";

/* 액션 함수*/
export const {
  menu: { getMenulist, getMenu },
} = createActions({
  [GET_MENULIST]: (res) => ({
    /* return 값이 payload에 들어간다.*/
    menuList: res,
    [GET_MENU]: (res) => ({ menu: res }),
  }),
});

/* 리듀서 함수 */
const menuReducer = handleActions(
  {
    [GET_MENULIST]: (state, { payload }) => {
      return payload;
    },
  },
  {
    [GET_MENU]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

/* 다른 모듈에서 export해서 사용하겠다. */
export default menuReducer;
