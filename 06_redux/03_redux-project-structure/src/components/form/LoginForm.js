/*로그인 더 쪼갠 페이지*/

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callLoginAPI } from "../../api/UserAPICalls";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const result = useSelector((state) => state.useSelector);
  const isLogin = !!localStorage.getItem("isLogin"); // !! 형변환을 위함 string => boolean

  console.log("result : ", result);

  /* input 태그 입력 값 state 관리 */
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  /*로그인 버튼 클릭시 동작 
  이를 위해서 모듈을 별도로 관리한다. */
  const onClickHandler = () => {
    dispatch(callLoginAPI(loginInfo));
  };

  /* 로그인 후 성공/실패 동작 */
  useEffect(() => {
    /* 이동을 위한 hook 사용 */
    if (isLogin) {
      navigate("/");
    } else if (result?.message) {
      alert("아이디와 비밀번호를 확인해주세요");
      setLoginInfo({
        id: "",
        password: "",
      });
    }
  }, [result]);

  return (
    <>
      <div>
        <label>ID : </label>
        <input
          type="text"
          name="id"
          onChange={onChangeHandler}
          value={loginInfo.id}
        />
        <label>PASSWORD : </label>
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={loginInfo.password}
        />
        <button onClick={onClickHandler}>로그인</button>
      </div>
    </>
  );
}
export default LoginForm;
