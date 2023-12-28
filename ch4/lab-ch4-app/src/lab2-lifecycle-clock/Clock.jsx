import React, { Component } from "react";
import DateAndTime from "date-and-time";

class Clock extends Component {
  state = {
    currentTime: new Date(),
  };

  //setInterval() 의 리턴값, interval 을 식별해서 제어할 수 있게 0 이상의 숫자
  //리턴해준다..
  handle = 0;

  //componentDidMount 에서 등록한 무언가는 이 컴포넌트가 unmount 되면 필요 없는
  //경우가 많다.. 서버 연결 - unmount 되면 연결해제, setInterval - 일을 멈추게
  componentDidMount = () => {
    this.handle = setInterval(() => {
      console.log("## setInterval....");
      this.setState({ currentTime: new Date() });
    }, 1000);
  };

  //unmount 될때 interval 을 멈추어서 불필요하게 움직이지 않게..
  componentWillUnmount = () => {
    clearInterval(this.handle);
  };

  render() {
    return (
      <div className="boxStyle">
        {/* 첫번째 매개변수의 시간을 두번째 매개변수의 포멧대로 출력 */}
        <h3>
          {DateAndTime.format(this.state.currentTime, this.props.formatString)}
        </h3>
      </div>
    );
  }
}

export default Clock;
