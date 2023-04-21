import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*** 
앱 기본 설정 (향후 동일)
1. 불필요한 파일들을 제거하고 App.js와 index.js 파일만 남겨둔다.
2. index.js 파일의 기본 상태를 아래와 같이 만들어 화면 랜더링을 확인한다. 
***/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
