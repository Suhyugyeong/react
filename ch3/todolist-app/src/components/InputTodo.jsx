import React, { useState } from "react";
import PropTypes from "prop-types";

const InputTodo = (props) => {
  //이 컴포넌트는 화면을 주목적으로 하는 presentational component다
  //그런데 presentational component만을 위한 상태가 필요할 수도 있다
  //여러 컴포넌트의 공통 상태, 그 상태 관리 업무가 있다면 container component를 설게하고,
  //그곳에 구현.. 하지만, 단일 component만을 위한 상태가 있다면 그 상태는 그 component에서..
  //controlled component를 만드려면, 유저 입력부분이 state로 제어되어야 해서
  const [todo, setTodo] = useState("");

  const addHandler = () => {
    //유저 입력 후에 최종 todoList를 추가하고자하는 이벤트 발생시 호출
    //todoList는 상위에서 관리.. 상위의 함수를 호출해서 상태 유지되게끔
    props.addTodo(todo);
    //화면에 유저 입력 글을 지운다
    //constrolled component이기 때문에 입력글을 표현하는 상태 값을 ""로 만들어 지울 수 있다
    setTodo("");
  };
  const enterInput = (e) => {
    //유저가 키보드에서 enter키를 누른 순간의 이벤트를 처리해서 상위에서 상태유지되게끔
    if (e.key === "Enter") {
      addHandler();
    }
  };

  const changeTodo = (e) => {
    //유저가 input에서 글을 입력하는 순간
    setTodo(e.target.value);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            id="msg"
            type="text"
            className="form-control"
            name="msg"
            placeholder="할 일을 여기에 입력하세요."
            value={todo}
            onChange={changeTodo}
            onKeyUp={enterInput}
          />
          <span
            className="btn btn-primary input-group-addon"
            onClick={addHandler}
          >
            추가
          </span>
        </div>
      </div>
    </div>
  );
};
InputTodo.propTypes = {
  addTodo: propTypes.func,
};
export default InputTodo;
