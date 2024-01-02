import React from "react";

const TodoListItemDeleteButton = (props) => {
  console.log("## TodoListItemDeleteButton");
  return <button onClick={() => props.deleteTodo(props.id)}>delete</button>;
};

export default React.memo(TodoListItemDeleteButton);
