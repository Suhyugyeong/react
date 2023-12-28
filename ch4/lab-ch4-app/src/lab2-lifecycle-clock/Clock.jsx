import React, { Component } from "react";
import DateAndTime from "date-and-time";

class Clock extends Component {
  state = {
    currentTime: new Date(),
    //Clock 컴포넌트의 초기 상태를 설정합니다.
    //currentTime 상태는 현재 시간을 나타내며, 초기값으로 현재 시간 객체(new Date())를 사용합니다.
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
  //컴포넌트가 마운트될 때(componentDidMount 단계) setInterval을 사용하여 매초마다 현재 시간을 업데이트하는 작업을 수행하고, 이때 생성된 간격 식별자(handle)를 Clock 컴포넌트의 상태에 저장합니다.
  // 이후 컴포넌트가 언마운트될 때(componentWillUnmount 단계) 이 간격을 제어하기 위해 clearInterval 함수에 handle을 전달하여 사용합니다.

  render() {
    return (
      <div className="boxStyle">
        {/* 첫번째 매개변수의 시간을 두번째 매개변수의 포멧대로 출력 */}
        <h3>
          {DateAndTime.format(this.state.currentTime, this.props.formatString)}
          {/*  현재 시간을 지정된 포맷에 맞게 문자열로 변환합니다.  */}
        </h3>
      </div>
    );
  }
}

export default Clock;
