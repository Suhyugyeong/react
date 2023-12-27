//불변성 체크 모듈, 상태 변경을 체크해서 해당 상태를 이용하는 컴포넌트만 re-rendering
//되게 처리해 주는 아주 좋은 모듈..
import { produce } from "immer";
//produce 함수는 이전 상태와 새로운 상태를 비교하여 변경된 부분을 자동으로 감지하고 업데이트합니다.
import React, { useState } from "react";
import App from "./App";

//하위 컴포넌트들을 위한 공통의 상태 유지 및 상태 변경을 목적으로 하는 컴포넌트
const AppContainer = () => {
  //실전이었으면.. 이 상태 데이터는 영속적으로(서버 연동등을 통해서)
  //이곳에서는 가상의 데이터로..
  const [todoList, setTodoList] = useState([
    { no: 1, todo: "react 학습1", done: false },
    { no: 2, todo: "react 학습2", done: false },
    { no: 3, todo: "react 학습3", done: true },
    { no: 4, todo: "react 학습4", done: false },
    //초기값으로 가상의 할 일 목록을 갖고 있습니다.
  ]);

  //액션(상태 변경 순간) 설계대로.. 상태값을 바꾸는 로직 작성..
  //어디선가 이 함수를 호출하면서 매개변수로 새로운 todo 데이터를 전달할 것이다.
  //기존 상태에 매개변수 상태를 하다 더 추가..
  const addTodo = (todo) => {
    //produce - immer 모듈의 api
    //첫번째 매개변수, 이전 상태
    //두번째 매개변수, 개발자 함수, 새로운 상태를 만드는 함수..
    //produce 에서 이전 상태와 새로운 상태를 비교해서 어느 부분이 바뀐건지를 판단.
    let newTodoList = produce(todoList, (draft) => {
      //produce 함수를 사용하여 불변성을 유지하면서 새로운 할 일을 추가한 새로운 상태를 생성하고,
      // 이를 setTodoList를 통해 적용합니다.
      //draft는 immer 라이브러리에서 제공하는 개념으로, 불변성을 유지하면서도 마치 변경 가능한 것처럼 동작하는 가상의 상태입니다.
      //produce 함수의 두 번째 매개변수로 전달되는 함수 내에서 draft를 사용하여 상태를 수정할 수 있습니다.
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
    //이때 immer의 내부 동작에 의해 새로운 상태가 이전 상태와 비교되어 변경된 부분만 업데이트되어 성능상 이점을 제공합니다
  };

  const deleteTodo = (no) => {
    //매개변수가 각 todo 를 식별하는 식별자..
    //이 식별자의 데이터가 배열에서 어느 위치에 있는지 획득..
    let index = todoList.findIndex((todo) => todo.no === no);
    //findIndex에 전달되는 테스트 함수로,
    //todo라는 매개변수를 받아 현재 todo의 no 속성이 주어진 no 인수와 일치하는지 확인합니다.
    //(todo) => todo.no === no: 이것은 현재 todo를 매개변수로 받는 콜백 함수입니다.
    // 현재 todo의 no 속성이 주어진 no와 일치하는지 확인합니다.
    //findIndex 메서드는 각 요소에 대해 콜백 함수를 적용하고 조건 (todo.no === no)이 true인 요소를 찾을 때까지 반복합니다.
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
      //draft 배열에서 splice 메서드를 사용하여 index 위치에서 1개의 요소를 제거합니다.
      //이로써 특정 인덱스의 할 일을 삭제하는 효과를 얻습니다.
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
      {/* App 컴포넌트를 렌더링하면서 상태 및 상태 변경 함수들을 App 컴포넌트에 props로 전달합니다. */}
    </div>
  );
};
export default AppContainer;
