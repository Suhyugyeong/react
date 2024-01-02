import React from "react";

const TodoListItem = (props) => {
  console.log(`## TodoListItem : ${props.todoListItem.todo}`);
  return (
    <li>
      <span>{props.todoListItem.todo}</span>
      <button onClick={() => props.deleteTodo(props.todoListItem.id)}>
        delete
      </button>
    </li>
  );
};

export default React.memo(TodoListItem);
