import React from "react";
import TodoListItemBody from "./TodoListItemBody";
import TodoListItemDeleteButton from "./TodoListItemDeleteButton";

const TodoListItem = (props) => {
  return (
    <li>
      <TodoListItemBody todoListItem={props.todoListItem} />
      <TodoListItemDeleteButton
        deleteTodo={props.deleteTodo}
        id={props.todoListItem.id}
      />
    </li>
  );
};

export default React.memo(TodoListItem);
