import { produce } from "immer";
import { TODO_ACTION } from "./TodoActionCreator";

const initState = {
  todoList: [
    { id: 1, todo: "redux..", desc: "desc1", done: false },
    { id: 2, todo: "redux..2", desc: "desc2", done: false },
    { id: 3, todo: "redux..3", desc: "desc3", done: false },
    { id: 4, todo: "redux..4", desc: "desc4", done: false },
  ],
};

//redux에 action이 발생되면 실행되는 reducer
//엡의 상태를 action에 따라 표현하기 위한 목적
//1.pure function ==> 대단한 B/L 구현하는 곳이 아니다..
//2.state는 불변이다. 과거 state를 참조해서 새로운 state를 만드는 것이다. 과거 state를 직접변경하는게 아님

//redux에 action 발생시, redux에 의해 호출된다. 매개변수가 redux가 전달한 것이다..
//state - 과거의 상태데이터, 즉 action 발생 전에 앱에서 유지되던 데이터
//action - 현재 발생한 액션
const TodoReducer = (state = initState, action) => {
  let index;
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return produce(state, (draft) => {
        draft.todoList.push({
          id: new Date().getTime(),
          todo: action.payload.todo,
          desc: action.payload.desc,
          done: false,
        });
      });
    case TODO_ACTION.DELETE_TODO:
      index = state.todoList.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todoList.splice(index, 1);
      });
    case TODO_ACTION.TOGGLE_DONE:
      index = state.todoList.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todoList[index].done = !draft.todoList[index].done;
      });
    case TODO_ACTION.UPDATE_TODO:
      index = state.todoList.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todoList[index] = { ...action.payload };
      });
    default:
      return state;
  }
};

export default TodoReducer;
