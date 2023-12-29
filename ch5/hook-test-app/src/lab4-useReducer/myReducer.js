import { produce } from "immer";

//액션, component 에서 reducer 에게 전달하는 input
//상태관리를 해달라는 요청
//상태관리를 구분하기 위한 용도로 사용..
//특별한 작성규칙은 없다.. 구분하기 위한 문자열 정도..
export const TODO_ACTION = {
  ADD: "addTodo",
  DELETE: "deleteTodo",
};

//ActionCreator..
//액션을 조금더 쉽게 사용하기 위한 액션 생성자 역할..
//필수는 아니지만.. 대부분 정의해서 사용한다..
//특별 작성규칙이 있지는 않다..
export const TodoActionCreator = {
  //어디선가 액션을 만들고자 할때 이 함수를 호출한다..
  //type - action 의 구분자
  //payload - reducer 에게 전달되는 데이터..
  addTodo: (todo) => ({ type: TODO_ACTION.ADD, payload: { todo: todo } }),
  deleteTodo: (id) => ({ type: TODO_ACTION.DELETE, payload: { id: id } }),
};

//reducer...
//어디선가 액션을 발생시키면.. 상태를 관리하고 상태를 리턴시키는..
//state - 이전 상태값, 참조, 변경하면 안된다..
//action - 발생된 action
export const TodoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTION.ADD:
      //기존 상태를 변경하는 것이 아니라 새로운 상태를 만들어서 리턴한 것이다.
      //immer 의 produce 함수를 사용하지 않아도 된다. immer 가 편하기는 하다..
      return produce(state, (draft) => {
        draft.push({ id: new Date().getTime(), todo: action.payload.todo });
      });
    // return [...state, {id: new Date().getTime(), todo: action.payload.todo}]
    case TODO_ACTION.DELETE:
      let index = state.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.splice(index, 1);
      });
    default:
      return state;
  }
};
