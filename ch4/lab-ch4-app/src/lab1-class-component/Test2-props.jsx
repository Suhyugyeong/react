import React from "react";
import PropTypes from "prop-types";

class PropsComponent extends React.Component {
  myFun(x, y) {
    console.log(`myFun call: ${x + y}`);
  } //이건 클래스 멤버 함수임
  user = {
    name: "kim",
    age: 20,
  };
  array = ["hello", "world"];
  render() {
    //여기서 리턴시킨 값이 화면에 보이는거임
    return (
      <div>
        <h2>Props Test</h2>
        <PropsSubComponent
          id="kim"
          num={10}
          bool={true}
          fun={this.myFun}
          obj={this.user}
          array={this.array}
        />
      </div>
    );
  }
}
class PropsSubComponent extends React.Component {
  render() {
    return (
      <div>
        <p>
          {/* 함수형 컴포넌트를 선언하면 상위 컴포넌트가 전달한 데이터를 받는 변수를 props가 아닌 임의 이름으로 선언해도 되지만,
           클래스 컴포넌트로 만들면 우리가 선언하지 않아도 내부적으로 props로 선언되어 상위 데이터가 담겨져 있음
           this,props로 이용 필수*/}
          id: {this.props.id}, num: {this.props.num}, bool:{this.props.bool}
        </p>
        <p>
          name:{this.props.obj["name"]}, age:{this.props.obj["age"]}
        </p>
        <p>
          {this.props.array.map((item) => (
            <p>{item}</p>
          ))}
        </p>
        <p>
          <button
            onClick={() => {
              this.props.fun(10, 20);
            }}
          >
            function call
          </button>
        </p>
      </div>
    );
  }
}

//proptype 명시는 클래스 밖에서
PropsSubComponent.propTypes = {
  id: PropTypes.string.isRequired,
  num: PropTypes.number,
  fun: PropTypes.func,
  bool: PropTypes.bool,
  obj: PropTypes.object,
  array: PropTypes.array,
};

//실전에서는 하나의 컴포넌트를 하나의 파일에 넣어서 유지/보수 쉽게 한다..

export default PropsComponent;
