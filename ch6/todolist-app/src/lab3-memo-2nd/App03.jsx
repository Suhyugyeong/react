import React, { useState } from "react";
import TodoList from "./TodoList";
import { useCallback } from "react";

const App03 = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = useCallback(
    (todo) => {
      let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList]
  );

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

export default App03;
