import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  // 2e8ffd08a9f12c95e7213a91216e9d2f

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* 설정되어 있는 path를 제외한 경로는 에러페이지로 연결한다. */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
