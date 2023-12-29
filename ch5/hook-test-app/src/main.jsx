import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// import UseEffectComponent from './lab1-useEffect/UseEffectTest'
// import UseEffectComponent from "./lab2-useEffect-cleanup/UseEffectClock";
// import ArrayReduceComponent from "./lab3-array-reduce/ArrayReduce";
// import UseReducerComponent from "./lab4-useReducer/UseReducerTest";
//여기 위치가 좀 다를거임
import UseRefComponent from "./lab5-UseRef/UseRef";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEffectComponent /> */}
    {/* <ArrayReduceComponent /> */}
    {/* <UseReducerComponent /> */}
    <UseRefComponent />
  </React.StrictMode>
);
