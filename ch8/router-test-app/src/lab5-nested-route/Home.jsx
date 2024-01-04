import React, { useState } from "react";
import { useLocation } from "react-router";

const Home = (props) => {
  //누가 나를 실행시켰는지 모르지만, 나를 실행시킨 곳에서 전달한 데이터를 추출할 거임
  const location = useLocation();
  const state = location.state;
  const from = state ? state.from : ""; //전달한 데이터
  return (
    <div className="card card-body">
      <h2>Home</h2>
      나는 아마도 {from !== "" ? <h3>{from}</h3> : ""} 에서 실행시킨 듯...
    </div>
  );
};

export default Home;
