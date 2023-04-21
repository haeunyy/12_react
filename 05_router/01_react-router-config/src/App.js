/* 추가 모듈로 인스톨한 패키지를 임포트 하였다. */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../02_navbar/src/components/Header";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 루트 경로로 요청시 Main 컴포넌트를 보여준다. */}
          {/* {<Route path="/" element={<Main />} />} */}
          {/* 인덱스로 설정해두면 루트 요청과 동일하다. */}
          <Route index element={<Main />} />

          <Route path="/about" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
