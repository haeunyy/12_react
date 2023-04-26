import { getMenu, getMenulist } from "../modules/MenuModule";
import { request } from "./API";

export function callGetMenuListAPI() {
  console.log("getMenuList api calls...");

  /* 반환되는 비동기 처리 함수가 dispatch의 매개변수로 전달하게 되면
    redux-thunk라는 미들웨어에서 호출된다.*/
  return async (dispatch, getState) => {
    /* axios 라이브러리를 이용한 데이터 요청 */
    /* 방식, 도메인 뒤에 들어갈 주소값 , 뒤에 넘기고 싶은 기타 데이터 ㄷ*/
    const result = await request("GET", "/menu");
    console.log("getMenuList result : ", result);

    /* dispatch의 매개변수로  action 객체를 전달하여 store에 state를 저장하게 한다.
     (리듀서 함수 호출 됨)*/
    dispatch(getMenulist(result));
  };
}

export function callGetMenuAPI(id) {
  console.log("getMenu api calls...");

  return async (dispatch, getState) => {
    const result = await request("GET", `/menu/${id}`);
    console.log("getMenu result : ", result);

    dispatch(getMenu(result));
  };
}
