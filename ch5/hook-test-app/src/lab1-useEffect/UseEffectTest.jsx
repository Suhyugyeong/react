import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("아이유");

  //컴포넌트 라이프사이클과 관련된 함수 등록을 위한 훅
  //mount, update
  // useEffect(()=>{
  //   console.log(`${name}님이 ${count}번 클릭... `)
  // })

  //useEffect 를 이용하면서 두번째 매개변수를 지정하면 그 값이 변경될때만..
  //특정 데이터(state, props) 변경과 관련된 라이프사이클 알고리즘 추상화가 좋다.
  // useEffect(() => {
  //   console.log(`이름 : ${name}`)
  // }, [name])

  // useEffect(() => {
  //   console.log(`count : ${count}`)
  // }, [count])

  //의존성 데이터를 빈 배열을 명시 -> mount 될때만..
  //빈 배열임으로 의존성 데이터는 초기값을 항상 가지게 된다. 즉 최초에만 실행된다.
  useEffect(() => {
    console.log(`${name}, ${count}`);
  }, []);

  return (
    <div>
      name :{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr />
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>
        {name} 님이 {count}번 클릭했습니다.
      </p>
    </div>
  );
};

export default UseEffectComponent;
