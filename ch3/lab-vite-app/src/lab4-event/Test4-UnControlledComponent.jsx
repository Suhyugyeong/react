import React, { useState, useRef } from "react";
//주어진 코드는 React를 사용한 함수형 컴포넌트로,
//비제어 컴포넌트(Uncontrolled Component)를 구현한 것입니다.
//비제어 컴포넌트는 React의 상태(state)를 사용하지 않고,
//대신에 실제 DOM 요소에 직접적으로 접근하여 상호 작용하는 방식을 의미합니다.

//real dom에 들어가니까, 이 유저 입력값을 얻어내려면 real dom으로 가야한다..

const UncontrolledComponent = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState(0);
  const add = () => {
    //이벤트가 발생했을 때 유저가 입력한 데이터를 추출해야 한다
    //controlled component가 아니므로 virtual dom에서는 값을 얻어낼 수 없다
    //real dom으로 접근해야 한다..
    //elemX.current 현재 이 식별자로 식별되는 real dom current는 예약어구요
    let x1 = parseInt(elemX.current ? elemX.current.defaultValue : "", 10);
    let y1 = parseInt(elemY.current ? elemY.current.defaultValue : "", 10);
    if (isNaN(x1)) x1 = 0;
    if (isNaN(y1)) y1 = 0;
    setX(x1);
    setY(y1);
    setResult(x1 + y1);
  };

  //real dom의 식별자로 할당할 값
  const elemX = useRef(null);
  const elemY = useRef(null);

  return (
    <div>
      <h2>비제어 컴포넌트</h2>
      x : <input id="x" type="text" defaultValue={x} ref={elemX} />
      <br />
      y : <input id="y" type="text" defaultValue={y} ref={elemY} />
      <br />
      <button onClick={add}>add</button>
      result : {result}
    </div>
  );
};

export default UncontrolledComponent;
