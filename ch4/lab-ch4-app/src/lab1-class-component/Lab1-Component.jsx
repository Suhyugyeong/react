import React from "react";
import TestComponent from "./Test1-component";
import PropsComponent from "./Test2-props";
import StateComponent from "./Test3-state";

class ClassComponent extends React.Component {
  // Test1과 동일함 component를 import했느냐 차이
  render() {
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
