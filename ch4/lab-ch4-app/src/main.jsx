import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import ClassComponent from "./lab1-class-component/Lab1-Component";
import ClockApp from "./lab2-lifecycle-clock/Lab2-Component";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassComponent /> */}
    <ClockApp />
  </React.StrictMode>
);
