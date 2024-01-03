import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { TodoProvider } from "./TodoComtext";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* context에 데이터를 공개하는 컴포넌트를 그 데이터를 활용하는 모든 컴포넌트의 상위가 되도록 등록
    일반적으로 context 데이터를 앱 전역을 위한 Global 데이터인 경우가 많아서 보통 앱의 root 컴포넌트로 등록함 */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
