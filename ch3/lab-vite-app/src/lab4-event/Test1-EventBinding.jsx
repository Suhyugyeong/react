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
  //event callback 함수 등록, 이벤트 객체 및 이벤트 발생한 곳의 데이터를 전달 받아서
  //함수명.bind(this) 형식으로 이벤트 함수가 호출될 때, 이벤트 객체는 마지막 매개변수로 전달된다
  const incrementStep = (no, e) => {
    setCount(count + no);
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
      <div>
        {/* 이벤트 함수를 호출하면서 데이터 전달을 하고 싶은거임 */}
        <button
          onClick={(e) => {
            incrementStep(2, e);
          }}
        >
          increment, step2
        </button>
        <button onClick={incrementStep.bind(this, 3)}>increment, step3</button>
        {/* bind는 JavaScript에서 함수의 컨텍스트를 영구적으로 지정하는 메서드입니다. React에서 bind는 주로 이벤트 핸들러 함수에서 사용됩니다.

React 클래스 컴포넌트에서 메서드는 기본적으로 자체 바인딩되지 않습니다. 이는 메서드 내에서 this가 컴포넌트 인스턴스를 가리키지 않을 수 있기 때문에 문제가 발생할 수 있습니다. bind를 사용하면 메서드가 항상 올바른 인스턴스를 가리키도록 할 수 있습니다. 
bind를 사용하여 컴포넌트 인스턴스와 연결되었습니다. 이렇게 함으로써, 버튼이 클릭되었을 때 handleClick 내에서 this를 사용할 때 항상 올바른 인스턴스에 접근할 수 있습니다.*/}
      </div>
    </div>
  );
};

export default EventBinding;
//이렇게 해서 외부에 공개시켜주고
