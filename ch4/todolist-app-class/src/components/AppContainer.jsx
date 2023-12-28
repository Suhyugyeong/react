import { produce } from "immer";

import React, { useState } from "react";
import App from "./App";

class AppContainer extends React.Component {
  state = {
    todoList: [
      { no: 1, todo: "react 학습1", done: false },
      { no: 2, todo: "react 학습2", done: false },
      { no: 3, todo: "react 학습3", done: true },
      { no: 4, todo: "react 학습4", done: false },
    ],
  };

  addTodo = (todo) => {
    let newTodoList = produce(this.state.todoList, (draft) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    // setTodoList(newTodoList);
    this.setState({ todoList: newTodoList });
    //상태값 변경 이건 class식이라 함수식과 다름
  };

  deleteTodo = (no) => {
    let index = this.state.todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(this.state.todoList, (draft) => {
      draft.splice(index, 1);
    });
    // setTodoList(newTodoList);
    this.setState({ todoList: newTodoList });
  };

  toggleDone = (no) => {
    let index = this.state.todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(this.state.todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    // setTodoList(newTodoList);
    this.setState({ todoList: newTodoList });
  };

  render() {
    //class식은 render를 해줘야해요
    return (
      <div>
        <App
          todoList={this.state.todoList}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          toggleDone={this.toggleDone}
          //왜 하나는 this.state고 나머지 셋은 this.일까??
        />
      </div>
    );
  }
}
export default AppContainer;
