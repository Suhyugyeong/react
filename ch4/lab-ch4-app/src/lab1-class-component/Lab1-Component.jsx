import React from "react";
import TestComponent from "./Test1-component";
import PropsComponent from "./Test2-props";
import StateComponent from "./Test3-state";

//React 클래스 컴포넌트인 ClassComponent를 정의하고 있음.
//React.Component 를 상속하는게 필수적 과정이다..
class ClassComponent extends React.Component {
  //ClassComponent 클래스를 선언하고, 이 클래스는 React.Component 클래스를 확장(상속)합니다.
  // React에서 컴포넌트를 만들 때 기본적으로 React.Component를 상속받아야 합니다.
  //이를 통해 ClassComponent 클래스는 React 컴포넌트의 기능과 생명주기 메서드를 상속받게 됩니다.
  //React 컴포넌트를 만들 때 항상 React.Component를 상속받아야 하는 이유는 React가 제공하는 컴포넌트의 기능을 활용하기 위해서입니
  // Test1과 동일함 component를 import했느냐 차이
  render() {
    // React 클래스 컴포넌트에서 필수적으로 구현해야 하는 메서드인 render 메서드
    return (
      <div>
        <TestComponent />
        <PropsComponent />
        <StateComponent />
      </div>
    );
  }
}
export default ClassComponent;

//React 컴포넌트의 생명주기 메서드는 컴포넌트가 생성되고 업데이트되며 파괴되는 일련의 단계에서 호출되는 메서드들을 말합니다.
//React v17 이후부터는 클래스 컴포넌트의 생명주기 메서드가 deprecated되고,
// 함수형 컴포넌트에서는 훅(Hook)을 사용하는 추세입니다.
// 함수형 컴포넌트에서는 useEffect 훅 등을 통해 비슷한 작업을 수행할 수 있습니다.
