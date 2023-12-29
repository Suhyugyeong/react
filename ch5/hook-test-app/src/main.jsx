import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// import UseEffectComponent from './lab1-useEffect/UseEffectTest'
import UseEffectComponent from "./lab2-useEffect-cleanup/UseEffectClock.";
import ArrayReduceComponent from "./lab3-array-reduce/ArrayReduce";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffectComponent /> */}
    <ArrayReduceComponent />
  </React.StrictMode>
);
