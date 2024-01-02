import React from "react";

const TodoListItem = (props) => {
  console.log(`## TodoListItem : ${props.todoListItem.todo}`);
  return <li>{props.todoListItem.todo}</li>;
};

// export default TodoListItem

export default React.memo(TodoListItem);
