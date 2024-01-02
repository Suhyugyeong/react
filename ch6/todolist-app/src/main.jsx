import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App01 from "./lab1-memo/App01";
import App02 from "./lab2-callback/App02";
import App03 from "./lab3-memo-2nd/App03";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App01 /> */}
    {/* <App02 /> */}
    <App03 />
  </React.StrictMode>
);
