import React from "react";
//파일에서 defaul로 export 시킨 것이 아니라 {}로, export 시킨 이름 그대로 사용
import { useMousePosition } from "./useMousePosition";
import { useClockTime } from "./useClockTime";

const CustomHookComponent = () => {
  const position = useMousePosition();
  const currentTime = useClockTime(1000, "HH:mm:ss");

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>
        moudr position : {position.x}, {position.y}
      </p>
      <hr />
      <p>current time : {currentTime}</p>
    </div>
  );
};

export default CustomHookComponent;
