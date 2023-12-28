import React from "react";

class StateComponent extends React.Component {
  //상태 데이터 선언.. 및 초기값 지정..
  state = {
    change: true,
  };

  render() {
    return (
      <div>
        <h2>State Test</h2>
        <button
          onClick={() => {
            //상태 변경.. 클래스 컴포넌트에서 상태(state) 변경은 setState() 함수로..
            //setState() 호출하면 상태 변경되고, re-render, 비동기 처리..
            this.setState({ change: !this.state.change });
          }}
        >
          click me
        </button>
        {this.state.change ? <p>Hello</p> : <p>World</p>}
      </div>
    );
  }
}

export default StateComponent;
