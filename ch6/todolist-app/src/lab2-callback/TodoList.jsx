import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  console.log("## TodoList");
  return (
    <ul>
      {props.todoList.map((item) => (
        <TodoListItem
          key={item.id}
          todoListItem={item}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  );
};
//React.memo를 사용했음에도 불구하고 글 입력시에 불필요하게 컴포넌트가 리랜더링 되고 있다!!
//상위에서 함수를 속성으로 전달하다보니, 상위가 리랜더링되면서 함수가 새로 생성된다. 즉, 상위의 props가 변경되었다고 본다
//=> 상위 리랜더링시 상위의 함수가 불필요하게 생성되지 않고 useCallback() hook을 이용
export default React.memo(TodoList);
