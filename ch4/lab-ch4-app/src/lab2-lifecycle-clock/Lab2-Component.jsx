import React from "react";
import Clock from "./Clock";

class ClockApp extends React.Component {
  state = {
    clockVisible: false,
  };
  render() {
    return (
      <div>
        <h2>간단한 시계</h2>
        <button
          onClick={() =>
            this.setState({ clockVisible: !this.state.clockVisible })
          }
        >
          toggle
        </button>
        <hr />
        {this.state.clockVisible ? <Clock formatString={"HH:mm:ss"} /> : ""}
        {/* true일 때는 Clock 컴포넌트가 렌더링되고, false일 때는 아무것도 렌더링되지 않습니다.  */}
      </div>
    );
  }
}

export default ClockApp;
