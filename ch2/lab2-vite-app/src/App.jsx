import Test1 from "./Test1-JSX";
import Test2 from "./Test2-JSX";
import PropsTest1 from "./Test3-props";
import PropsTest2 from "./Test4-props";
import StateTest from "./Test5-state";

//함수 스타일의 컴포넌트 선언
//컴포넌트는 UI를 목적으로 한 JS 영역??
//개발자 확장자가 jsx인게 더 편하긴 함
const App = () => {
  const msg = "world";
  const addResult = (x, y) => {
    return (
      <div className="card card-body bg-light mb-3">
        {/* jsx내에서 동적 데이터(변수 등) 추가는 {} 중괄호를 이용한다.
        보간법이라고 함. jsx를 이용해 쉽게 js에서 동적 데이터를 포함한 화면을 준비하지 않으면,
        document.getElementById(), document.createElement()를 계속 써야하니까.. 얼마나 짜증남?*/}
        {x}+{y}={x + y}
      </div>
    );
  };
  return (
    <div className="container">
      <h2>Hello world</h2>
      <h3>hello {msg}</h3>
      <hr class="dash-style" />
      {/* 아까 만들어놓은 css... */}
      {addResult(10, 20)}
      {/* js 코드가 들어갈 땐 중괄호를 쓴다..! */}
      <Test1 />
      <Test2 />
      <PropsTest1 />
      <PropsTest2 />
      <StateTest />
    </div>
  );
};

export default App;
//export 필수
