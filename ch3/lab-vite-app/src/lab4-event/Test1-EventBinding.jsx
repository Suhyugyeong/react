//외부 모듈에서 export한 것을 사용하기 위해서 import한다
//import A from "a" => export default ~~로 공개된 것
// import {A,B} from "a" => export {A,B} 여러개 공개된 것
// import A,{B,C} from "a" => export default A; export{B,C} 디폴트로 받는건 에이, 나머지는 여러개 공개된 것
import React, { useState } from "react";

const EventBinding = () => {
  //state data 선언
  const [count, setCount] = useState(0);

  //event callback 함수
  const increment = () => {
    //이벤트가 발생하면 state 데이터를 변경시키고 화면이 re-render되도록
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Event Binding Test</h2>
      <p> count : {count}</p>
      <div>
        {/* 외부함수를 이벤트 콜백함수로 */}
        <button onClick={increment}>증가</button>
        {/* 익명함수 등록 */}
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          감소
        </button>
      </div>
    </div>
  );
};

export default EventBinding;
//이렇게 해서 외부에 공개시켜주고
