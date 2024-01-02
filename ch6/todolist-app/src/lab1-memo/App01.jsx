import React, { useState } from "react";
import TodoList from "./TodoList";

const App01 = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (todo) => {
    let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
    setTodoList(newTodoList);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>add</button>
      <br />
      <TodoList todoList={todoList} />
      <div>todo count : {todoList.length}</div>
    </div>
  );
};

export default App01;
