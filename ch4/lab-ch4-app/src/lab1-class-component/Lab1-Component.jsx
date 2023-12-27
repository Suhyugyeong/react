import React from "react";
import TestComponent from "./Test1-component";

class ClassComponent extends React.Component {
  // Test1과 동일함 component를 import했느냐 차이
  render() {
    return (
      <div>
        <TestComponent />
      </div>
    );
  }
}
export default ClassComponent;
