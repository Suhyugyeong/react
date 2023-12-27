//화면만을 목적으로 하는 컴포넌트, 화면에서 발생하는 유저 이벤트시에..
//실제 데이터를 관리하는 상위 함수를 호출하는 역할..
const PresentationalComponent2 = (props) => {
  return (
    <div>
      {/* increment 가 함수명이 아니라.. increment 속성에 함수가 전달되었는데
        그 함수를 호출하라.. 
        결국 자식에서는 부모의 함수는 모른다. 함수가 전달된 속성만 안다.. */}
      <button onClick={props.increment}>increment</button>
    </div>
  );
};

export default PresentationalComponent2;
