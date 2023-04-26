import { login } from "../modules/UserModule";
import { request } from "./API";

/* 로그인 정보 전달 받는 함수 */
export function callLoginAPI(loginInfo) {
  console.log("login api call...");

  /* callLoginAPI 호출하면 비동기 함수를 반환한다. 
  호출할 때 input의 value값(loginInfo)을 받는다.*/
  return async (dispatch, getState) => {
    const userList = await request("GET", "/user");

    /* id와 password 일치 여부 확인 
    서버에서 이루어져야 하는 로직이지만 여기에서는 코드로 임의 처리 */
    const result = await userList.find(
      /* filter는 배열을 반환받지만 find는 객체를 반환받는다.*/
      (user) => user.id === loginInfo.id && user.password === loginInfo.password
    );

    console.log("login result : ", result);

    dispatch(login);
  };
}
