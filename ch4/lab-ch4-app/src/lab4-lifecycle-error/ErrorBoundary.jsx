import React from "react";

// 에러 처리를 위한 에러 경계(Error Boundary)를 구현한 클래스
//이 하위 어디선가 발생한 에러를 처리한다..
class ErrorBoundary extends React.Component {
  state = {
    //state 변수명은 마음대로.. 에러발생상황과 에러 내용을 저장할 수 있는 상태로 준비
    hasError: false,
    errorMessage: "",
  };
  //static 키워드를 사용하여 정적 메서드로 선언된 함수입니다.
  //클래스의 인스턴스를 생성하지 않고도 클래스 이름을 통해 직접 호출할 수 있는 메서드를 정적 메서드라고 합니다.
  // 정적 메서드나 속성은 클래스의 인스턴스화 없이 직접 클래스 이름을 통해 접근할 수 있습니다.
  //이는 클래스의 인스턴스와는 관련이 없는 기능이나 데이터를 제공할 때 유용합니다.
  //에러 발생되면 자동 호출되는 함수..
  //이곳에서 리턴하는 값이 state 가 된다.
  //getDerivedStateFromError 메서드의 첫 번째 매개변수는 관례적으로 error라는 변수명을 사용
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
      //hasError라는 상태 변수의 값이 true일 때 해당 조건이 참이 됩니다.
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
    //hasError 상태를 확인하여 에러가 발생한 경우 에러 메시지를 출력하고,
    //그렇지 않으면 자식 컴포넌트를 그대로 렌더링합니다.
    return this.props.children;
  }
}

export default ErrorBoundary;
