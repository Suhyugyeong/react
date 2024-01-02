import React, { useState } from "react";
import TodoList from "./TodoList";
import { useCallback } from "react";

const App02 = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  //컴포넌트가 리랜더링될 때 불필요하게 함수가 다시 생성되지 않게 하기 위해서
  //하위 컴포넌트가 불필요하게 리랜더링되지 않게 하기 위해서
  //useCallback 으로 막는다
  const addTodo = useCallback(
    (todo) => {
      let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList]
  );

  //상태가 상위(App02)에서 유지 됨.. 그 상태 값을 변경하는 함수도 상위(App02)에 정의
  //이 함수를 호출하는 곳은 하위이므로 하위에 속성으로 전달
  const deleteTodo = useCallback(
    (id) => {
      let newTodoList = [...todoList];
      const index = todoList.findIndex((item) => item.id === id);
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>add</button>
      <br />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>todo count : {todoList.length}</div>
    </div>
  );
};

export default App02;
