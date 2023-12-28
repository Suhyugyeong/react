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
            // 클릭 이벤트가 발생했을 때 this.setState를 호출하여 컴포넌트의 상태(state)를 변경하는 역할
            //{ change: !this.state.change }: setState 메서드에 전달되는 객체로, {key : value}임
            //현재 change라는 상태 속성의 값을 반전시켜서 업데이트하고 있습니다.
            //이렇게 함으로써 change의 값이 토글되어 변합니다.
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
