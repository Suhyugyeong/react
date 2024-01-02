import { useEffect, useState } from "react";

//여러 컴포넌트에서 마우스 위치값이 필요하다 (항상 여러 컴포넌트에서 필요해야 의미가 있다!!)
//마우스 위치값을 얻기 위해서는 유저의 mousemove 이벤트를 잡아야 하는데
//보통의 경우 컴포넌트 mount시에 이벤트 등록, unmount 시에 이벤트 해제
//컴포넌트 라이프사이클로 제어를 해주어야 하는데, 이 부분을 공통코드로 본 것이다

//함수명, 함수 작성 규칙에 별도로 정의된 것은 없다..
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setPosition({ x: e.pageX, y: e.pageY });
    window.addEventListener("mousemove", onMove);
    return () => {
      //cleanup 함수
      window.removeEventListener("mousemove", onMove);
    };
  }, []);
  return position;
};
export { useMousePosition };
