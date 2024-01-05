import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Provider } from "react-redux";
import AppStore from "./redux/AppStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 어디선가 redux에 의해 상태가 관리되어야 하는 상위 컴포넌트로 provider 등록 
    대부분의 경우 앱의 root 컴포넌트로 등록..*/}
    <Provider store={AppStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
