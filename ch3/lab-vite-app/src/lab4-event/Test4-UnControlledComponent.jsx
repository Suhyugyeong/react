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
    //elemX의 ref 객체의 current 속성을 참조한다..
    //parseInt 반환된 문자열을 ...10 진수 정수로 변환한다..
    //삼항 연산자를 사용하여 첫 번째 입력 필드의 ref 객체가 존재하면
    //(elemX.current이 truthy한 경우) elemX.current.defaultValue를 반환하고,
    //그렇지 않으면 빈 문자열("")을 반환합니다.
    let y1 = parseInt(elemY.current ? elemY.current.defaultValue : "", 10);
    if (isNaN(x1)) x1 = 0;
    //parseInt는 변환할 수 없는 문자열이 주어지면 NaN을 반환함
    if (isNaN(y1)) y1 = 0;
    setX(x1);
    setY(y1);
    setResult(x1 + y1);
  };

  //real dom의 식별자로 할당할 값
  const elemX = useRef(null);
  const elemY = useRef(null);
  //useRef를 사용하여 새로운 Ref 객체를 생성하고, 이 객체를 elemX라는 변수에 할당하는 것을 의미합니다. 초기 값으로 null이 지정되어 있습니다.
  //useRef로 생성된 Ref 객체는 .current 속성을 통해 현재 참조하고 있는 값을 가지고 있습니다. 예를 들어, elemX.current는 현재 참조하고 있는 DOM 요소를 나타냅니다. 초기에는 null이므로, 실제 DOM 요소에 대한 참조를 할당하기 전에는 elemX.current는 null입니다.

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
