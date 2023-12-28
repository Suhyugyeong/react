import React from "react";

//에러처리 전문 컴포넌트
//이 하위 어디선가 발생한 에러를 처리한다..
class ErrorBoundary extends React.Component {
  state = {
    //state 변수명은 마음대로.. 에러발생상황과 에러 내용을 저장할 수 있는 상태로 준비
    hasError: false,
    errorMessage: "",
  };
  //에러 발생되면 자동 호출되는 함수..
  //이곳에서 리턴하는 값이 state 가 된다.
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }
  //에러 발생시 자동 호출.. 주로 로깅 역할..
  componentDidCatch(error, errorInfo) {
    //console 로그로 에러를 로깅했는데, 서버 전송할 수도 있다..
    console.log("error....");
    console.log("error name:", error.name);
    console.log("error message:", error.message);
    console.log("error stack:", errorInfo.componentStack);
  }

  render() {
    //화면 구성이지만.. 에러 전문 컴포넌트임으로.. 에러 발생시 유저에게 보여줘야
    //하는 화면이 주 목적..
    if (this.state.hasError) {
      return (
        <div>
          <h2>에러 발생</h2>
          <hr />
          <p>에러 메시지: {this.state.errorMessage}</p>
        </div>
      );
    }
    //에러가 발생하지 않았다면.. 나의 하위에 붙은 컴포넌트대로 화면이 나오면 된다.
    //나의 하위가 어떤 컴포넌트인가? 나는 모른다..
    return this.props.children;
  }
}

export default ErrorBoundary;
