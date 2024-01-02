import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  console.log("## TodoList");
  return (
    <ul>
      {
        // props.todoList.map((item) => {
        //   <TodoListItem key={item.id} todoListItem={item} />
        // })
        //() => { return 명시적..}
        //() => () : single expression function, 함수의 내용이 한줄. 한줄의 결과가
        //return 없이도 그대로 return
        props.todoList.map((item) => (
          <TodoListItem key={item.id} todoListItem={item} />
        ))
      }
    </ul>
  );
};

//아래처럼 사용하면.. 상위 컴포넌트가 리랜더링(글입력시)될때
//불필요하게 자신도 리랜더링(글 입력 순간의 데이터를 활용하지 않음에도 불구하고)
// export default TodoList

//React.memo - high order component
//자신의 props, state 가 변경되지 않는한 자신은 리랜더링 되지 않는 코드가 추가된다.
export default React.memo(TodoList);
