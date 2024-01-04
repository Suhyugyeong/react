import { useState } from "react";
import App from "./App";
import {produce} from "immer";


const AppContainer = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, todo: "ES6학습", desc: "설명1", done: false },
    { id: 2, todo: "React학습", desc: "설명2", done: false },
    { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
    { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
  ]);

  const addTodo = (todo, desc) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, desc, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (id) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (id) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const updateTodo = (id, todo, desc, done) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index] = { ...draft[index], todo, desc, done };
    });
    setTodoList(newTodoList);
  };

  const callbacks = { addTodo, deleteTodo, updateTodo, toggleDone };
  const states = { todoList };

  return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;
