//상태 관리를 위한 Redux 패턴을 사용
//Redux에서 액션은 상태 변화를 일으키는 객체로서, type 속성을 반드시 가져야 합니다
//immer 라이브러리의 produce 함수는 불변성(Immutability)을 유지하면서
//상태를 쉽게 업데이트할 수 있도록 도와주는 함수
//produce 함수는 첫 번째 매개변수로 전달된 객체를 변경할 수 있는 "draft" 객체로 변환합니다.
//이 draft 객체는 원본 객체와 구조가 같지만 변경이 가능한 객체입니다.
import { produce } from "immer";

//액션, component 에서 reducer 에게 전달하는 input
//상태관리를 해달라는 요청
//상태관리를 구분하기 위한 용도로 사용..
//특별한 작성규칙은 없다.. 구분하기 위한 문자열 정도..
export const TODO_ACTION = {
  //두 가지 액션 유형을 정의한 객체입니다.
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
  // Redux에서 payload는 액션이 어떤 데이터를 가지고 있는지를 나타내는데 사용
  //payload는 일반적으로 객체 형태를 가지며, 객체 내부의 속성은 액션에 필요한 데이터를 나타냅니다.
  deleteTodo: (id) => ({ type: TODO_ACTION.DELETE, payload: { id: id } }),
};

//reducer...
//어디선가 액션을 발생시키면.. 상태를 관리하고 상태를 리턴시키는..
//state - 이전 상태값, 참조, 변경하면 안된다..
//action - 발생된 action
export const TodoReducer = (state, action) => {
  switch (action.type) {
    //리듀서는 주로 switch 문을 사용하여 각 액션 유형에 대한 처리를 정의합니다.
    case TODO_ACTION.ADD:
      //기존 상태를 변경하는 것이 아니라 새로운 상태를 만들어서 리턴한 것이다.
      //immer 의 produce 함수를 사용하지 않아도 된다. immer 가 편하기는 하다..
      return produce(state, (draft) => {
        //produce 함수를 사용하여 불변성을 유지하면서 상태를 업데이트합니다.
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

//Redux는 상태 관리 라이브러리로서,
//JavaScript 애플리케이션에서 상태 관리를 효율적으로 할 수 있도록 도와주는 도구입니다.
//Redux의 핵심 개념은 상태를 예측 가능한 방식으로 관리하고 업데이트하는 것입니다.
//이를 위해 액션(Action), 리듀서(Reducer), 스토어(Store) 등의 개념을 사용합니다.
//액션은 상태 변화를 일으키는 객체이며, 액션 함수는 이러한 액션 객체를 생성하는 역할을 합니다.
//리듀서 함수는 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수를 말합니다. Redux에서 상태를 업데이트하는 로직을 담당하며, 불변성을 유지해야 합니다.

//produce함수를 사용해서 불변성을 유지하면서 상태를 업데이트하는 이유..
