import React, { useState } from "react";
import PresentationalComponent1 from "./PresentationalComponent1";
import PresentationalComponent2 from "./PresentationalComponent2";

//container component
//화면을 목적으로 하지 않는다.
//공통의 데이터를 이용하는 자식 컴포넌트의 부모 역할이 주목적이다.
//자식들의 공통 데이터와 그 데이터를 위한 업무가 주 목적..
const ContainerComponent = () => {
  const [count, setCount] = useState(0);
  const myIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <PresentationalComponent1 count={count} />
      <PresentationalComponent2 increment={myIncrement} />
    </div>
  );
};

export default ContainerComponent;
