import { BrowserRouter, Routers, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<Layout />} />
            <Route path="menu" element={<Layout />} />
          </Route>
        </Routers>
      </BrowserRouter>
    </>
  );
}

export default App;
