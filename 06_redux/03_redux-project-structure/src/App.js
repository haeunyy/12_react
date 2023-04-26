import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./layouts/layout";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Login from "./pages/login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="menu">
            <Route index element={<Menu />} />
            <Route path=":id" element={<MenuDetail />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
