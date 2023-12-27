import React, { useState } from "react";

const AsyncStateChange = () => {
  const [count, setCount] = useState(0);
  //현재상태값 count
  const asyncIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    //일부러 순차적으로 동일 상태를 여러번 변경, 비동기적 상태 변경이 된다..
  };
  const syncIncrement = () => {
    //state의 setter 함수에 매개변수로 함수를 지정하면 함수가 끝날 때까지 대기, 동기적 처리
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h2>비동기 상태 변경</h2>
      <p>count : {count}</p>
      <div>
        <button onClick={asyncIncrement}>async increment</button>
        <button onClick={syncIncrement}>sync increment</button>
      </div>
    </div>
  );
};
export default AsyncStateChange;
