import React, { useContext, useState } from "react";
import TodoContext from "../TodoComtext";
// import PropTypes from "prop-types";

const InputTodo = (props) => {
  const [todo, setTodo] = useState("");

  //context에 공개된 상태, 함수를 이용하겠다면 useContext를 이용
  //매개변수로 context 타입을 지정
  //앱 내에 context는 여러개 유지 가능
  const value = useContext(TodoContext);

  const addHandler = () => {
    // props.addTodo(todo);
    value.actions.addTodo(todo);
    setTodo("");
  };

  const enterInput = (e) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };

  const changeTodo = (e) => {
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
            placeholder="할일을 여기에 입력하세요."
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

// InputTodo.propTypes = {
//   addTodo: PropTypes.func,
// };
export default InputTodo;
