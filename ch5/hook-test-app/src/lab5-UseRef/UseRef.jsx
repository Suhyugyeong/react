import React, { useState, useRef } from "react";

const UseRefComponent = () => {
  //상태 데이터.. re-rendering 시에 데이터 유지, 값 바뀌면 re-rendering
  const [name, setName] = useState("홍길동");
  //데이터가 변경된다고 re-rendering 될 필요는 없다.
  //그런데 re-rendering 된다고 하더라도 값이 유지되었으면 좋겠다..
  const refTel = useRef("010-1111-2222");
  //매개변수에 null, 임의 식별자 전달. 이 값으로 brower dom 접근..
  const elName = useRef(null);

  const changeFocus = () => {
    //특정 input 요소에 자동으로 포커스가 가게끔...
    //포커스 조정은 browser dom 을 조정해야된다. virtual dom 으로는 불가하다..
    if (elName.current) elName.current.focus();
  };

  return (
    <div>
      name :{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={elName}
      />
      <br />
      <div>name state : {name}</div>
      <hr />
      {/* uncontrolled component 이다.. 
      constrolled component 는 state 에 의해 제어되는 태그.. 
      유저가 입력한 값을 변수에 담아놓기는 해야겠다.. 
      그런데.. 그 값이 변경될때마다.. 화면이 re-rendering 될 필요는 없어 보인다.. 
      다른 애(name) 때문에 re-rendering 될때, 데이터는 유지가 되어야 하고.. */}
      tel{" "}
      <input type="text" onChange={(e) => (refTel.current = e.target.value)} />
      <br />
      <div>tel ref : {refTel.current}</div>
      <br />
      <button onClick={changeFocus}>focus 이동</button>
    </div>
  );
};

export default UseRefComponent;
