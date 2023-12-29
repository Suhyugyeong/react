import React, { useReducer, useState } from "react";
import { TodoActionCreator, TodoReducer } from "./myReducer";

let idNow = new Date().getTime();
const initialTodoList = [
  { id: idNow, todo: "운동" },
  { id: idNow + 1, todo: "독서" },
  { id: idNow + 2, todo: "영화" },
];

const UseReducerComponent = () => {
  //todoList - reducer 에 의해 관리되는 상태
  //dispatch - reducer 에게 일을 시키기 위해 액션을 발생시키는 함수..
  const [todoList, dispatch] = useReducer(TodoReducer, initialTodoList);

  //유저 글 입력 관리...
  const [todo, setTodo] = useState("");

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
        value={todo}
      />
      <button onClick={addTodo}>add todo</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo}
            <button onClick={() => deleteTodo(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducerComponent;
