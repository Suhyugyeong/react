import React, { useState } from "react";
import Clock from "./Clock";

//ch1에서는 class로 만들었음(값을 바꿀땐 setState) 여기서는 함수로! 둘의 차이 구분해봐요
const UseEffectComponent = () => {
  const [formatString, setFormatString] = useState("HH:mm:ss");
  //HH를 사용하면 시간이 24시간 형식으로 표시되고, hh를 사용하면 12시간 형식으로 표시됩니다.
  const [clockVisible, setClockVisible] = useState(false);
  return (
    <div>
      <h2>시계</h2>
      <button onClick={() => setClockVisible(!clockVisible)}>toggle</button>
      <hr />
      {clockVisible ? <Clock formatString={formatString} /> : ""}
      {/* 삼항연산자가 조건문인건 맞지만, 보간법을 이용해서 결과가 나오기 때문에 가능한 */}
    </div>
  );
};
export default UseEffectComponent;
