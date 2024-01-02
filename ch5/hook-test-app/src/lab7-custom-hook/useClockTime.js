import { useEffect, useState } from "react";
import DateAndTime from "date-and-time";

//여러 컴포넌트에서 현재의 시간 정보가 필요하다는 가정
//시간 정보를 제공하는 custom hook을 만들겠다는 가정

const useClockTime = (interval, timeFormat) => {
  const [currntTime, setCurrentTime] = useState(
    DateAndTime.format(new Date(), timeFormat)
  );
  useEffect(() => {
    const handle = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), timeFormat));
    }, interval);
    return () => {
      window.clearInterval(handle);
    };
  }, []);
  return currntTime;

  //이렇게 useEffect쓰면 안 되죠! 랜더링 될 때마다 반복적, interval이 반복되기 때문에 반드시 []를 주세요
  //마운트 될 때 최초 한 번 []
  //willUnmount 시점에 clearInterval 줘야해!
};

export { useClockTime };
