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
      //immer 라이브러리의 produce 함수를 사용하여 불변성을 유지하면서 새로운 배열을 생성
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    // setTodoList(newTodoList);
    this.setState({ todoList: newTodoList });
    //상태값 변경 이건 class식이라 함수식과 다름
  };

  deleteTodo = (no) => {
    let index = this.state.todoList.findIndex((todo) => todo.no === no);
    // findIndex는 JavaScript 언어에서 기본으로 제공되는 배열 메서드 중 하나
    let newTodoList = produce(this.state.todoList, (draft) => {
      //draft는 원본 배열(this.state.todoList)의 변경을 허용하는 임시적인 작업 영역입니다. produce 함수는 이 작업 영역에서 변경된 내용을 추적하고 적절한 불변성을 유지한 새로운 배열을 생성합니다.
      //produce랑 draft의 개념이 아직 잘...
      draft.splice(index, 1);
      //splice 메서드를 사용하여 배열에서 특정 인덱스(index)의 요소를 1개 제거합니다.
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
