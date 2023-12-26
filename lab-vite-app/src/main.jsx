//일반적으로 앱의 진입점 파일
//주로 ReactDOM.render()를 사용하여 React 컴포넌트를 실제 DOM에 연결
//전체 앱의 구조와 초기화에 관한 설정을 담는다.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
