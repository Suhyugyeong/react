import React, { useReducer, useState } from "react";
import { TodoActionCreator, TodoReducer } from "./myReducer";

let idNow = new Date().getTime();
const initialTodoList = [
  { id: idNow, todo: "운동" },
  { id: idNow + 1, todo: "독서" },
  { id: idNow + 2, todo: "영화" },
];
//useReducer 훅을 사용하여 TodoReducer 리듀서 함수와 초기 상태를 기반으로 상태 관리를 설정

const UseReducerComponent = () => {
  //todoList - reducer 에 의해 관리되는 상태
  //dispatch - reducer 에게 일을 시키기 위해 액션을 발생시키는 함수..
  const [todoList, dispatch] = useReducer(TodoReducer, initialTodoList);
  //dispatch는 React에서 사용되는 함수로서, 주로 useReducer 훅과 함께 사용됩니다.
  //이 함수는 리듀서(reducer)에게 액션(action)을 전달하여 상태(state)를 업데이트하도록 하는 역할을 합니다.

  //유저 글 입력 관리...
  const [todo, setTodo] = useState("");
  //todo는 현재 상태를 나타내는 변수이고, setTodo는 해당 상태를 업데이트하는 함수

  const addTodo = () => {
    //reducer 에게 액션을 발생시켜서.. reducer 에 의해 상태가 관리되게..
    //reducer 에게 일을 시키는 유일한 방법은 dispatch 로 액션을 발생...
    dispatch(TodoActionCreator.addTodo(todo));
    setTodo("");
  };
  const deleteTodo = (id) => {
    dispatch(TodoActionCreator.deleteTodo(id));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        //이벤트 핸들러인 onChange에서 수행되는 작업은 현재 입력 필드의 값이 변경될 때마다
        // 해당 값을 setTodo 함수를 사용하여 todo 상태에 업데이트하는 것뿐
        value={todo}
      />
      <button onClick={addTodo}>add todo</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {/* React에서 목록을 렌더링할 때 각 항목을 식별하기 위한 고유한 키(key)를 지정하는 것 */}
            {item.todo}
            <button onClick={() => deleteTodo(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerComponent;
