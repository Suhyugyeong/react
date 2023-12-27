import React, { Component } from "react";
class Sample extends Component {
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
