// React에서 클래스 컴포넌트를 정의할 때, 컴포넌트가 React의 기능을 활용하려면
//React.Component 클래스를 상속받아야 합니다.
import React, { Component } from "react";
class Sample extends Component {
  //Component: React 라이브러리에서 제공하는 기본 클래스로, 모든 React 클래스 컴포넌트는 이 클래스를 상속받습니다.
  //component 클래스의 render()함수가 자동 호출되고, 이 함수에서 리턴하는 것이
  //이 component의 화면이 됨..
  render() {
    return (
      <div>
        <p>I am Sample Component</p>
      </div>
    );
  }
}

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h2>Class Component Test</h2>
        <Sample />
      </div>
    );
  }
}
export default TestComponent;

//extends React.Component랑 extends Component 둘의 차이 없음
