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
      </div>
    );
  }
}

export default ClockApp;
