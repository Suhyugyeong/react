//불변성 체크 모듈로 상태 변경을 체크해서 해당 상태를 이용하는 컴포넌트만 rerendering

import { produce } from "immer";
import React, { useState } from "react";
import App from "./App";

//하위 컴포넌트를 위한 공통의 상태 유지 및 상태 변경을 목적으로  하는 컴포넌트
const AppContainer = () => {
  //실전이었으면 이 상태 데이터는 영속적으로(서버 연동 등을 통해서)
  //이곳에서는 가상의 데이터로
  const [todoList, setTodoList] = useState([
    { no: 1, todo: "react 학습1", done: false },
    { no: 2, todo: "react 학습2", done: false },
    { no: 3, todo: "react 학습3", done: true },
    { no: 4, todo: "react 학습4", done: false },
  ]);

  //액션(상태변경순간) 설계대로 상태값을 바꾸는 로직 작성
  //어디선가 이 함수를 호출하면서 매개변수로 새로운 todo 데이터를 전달할 것이다.
  //기존 상태에 매개변수 상태를 하나 더 추가
  const addTodo = (todo) => {
    //produce - immer 모듈의 API
    //첫번째 매개변수, 이전 상태
    //두번째 매개변수, 개발자 함수, 새로운 상태를 만드는 함수..
    //produce에서 이전 상태와 새로운 상태를 비교해서 어느 부분이 바뀐건지를 판단
    let newTodoList = produce(todoList, (draft) => {});
    draft.push({ no: new Date().getTime(), todo: todo, done: false });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no) => {
    //매개변수가 각 todo를 식별하는 식별자
    //이 식별자의 데이터가 배열에서 어느 위치에 있는지 획득
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };
  const toggleDone = (no) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };
  return (
    <div>
      <App
        todoList={todoList}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />
    </div>
  );
};

export default AppContainer;
