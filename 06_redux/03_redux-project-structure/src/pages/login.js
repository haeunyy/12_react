/* 로그인을 누르면 보이는 페이지 */

import LoginForm from "../components/form/LoginForm";

function Login() {
  /* 로그인 폼을 더 쪼개서 작성한다. */
  return (
    <>
      <h1>로그인 페이지</h1>
      <LoginForm />
    </>
  );
}

export default Login;
