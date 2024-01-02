import React from "react";
import { connectClockTime } from "./connectClockTime";
import { connectMousePos } from "./connectMousePos";
//우리가 만드는 컴포넌트
const Child = (props) => {
  return (
    <div>
      <h2>High Order Component</h2>
      {/* 우리 컴포넌트 내에 시간이 출력, 마우스 위치가 출력
        그런데 이 부분이 여러 컴포넌트의 공통 부분이라는 가정을 해보자..
        high order component로 구현하고, 이용할 것 */}
      <p>current time: {props.currentTime}</p>
      <p>
        mouse position: {props.position.x},{props.position.y}
      </p>
    </div>
  );
};

//우리가 이용하고자 하는 컴포넌트(Child)를 직접 사용하는 것이 아니라,
//hof 함수를 거쳐서 공통 코드가 추가된 컴포넌트를 이용하고자 한다
export default connectMousePos(connectClockTime(Child, "HH:mm:ss", 1000));

//export default Child
//==><Child/>

// export default connectClockTime(Child, 'HH:mm:ss', 1000)
//==><Child currentTime={currentTime} />

//export default connectMousPos(connectClockTime(Child, 'HH:mm:ss', 1000))
//==><Child currentTime={currentTime} position={position} />
