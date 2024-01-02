import React from "react";

//하나의 컴포넌트로 개발되는 것이 맞는 상황에서(화면설계, component 설계)
//랜더링 최적화를 위해 하나의 컴포넌트가 빈번하게 리랜더링되는데..
//내용이 너무 많다면.. 리랜더링 되어야 하는 부분과 그렇지 않아도 되는 부분을
//분리해서 개발..
const TodoListItemBody = (props) => {
  console.log("## TodoListItemBody..");
  return <span>{props.todoListItem.todo}</span>;
};

export default React.memo(TodoListItemBody);
