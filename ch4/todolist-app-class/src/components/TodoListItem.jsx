import React from "react";
import PropTypes from "prop-types";

class TodoListItem extends React.Component {
  render() {
    console.log("##TodoListItem render...");
    let itemClassName = "list-group-item";
    if (this.props.todoItem.done) itemClassName += " list-group-item-success";

    return (
      <li className={itemClassName}>
        <span
          className={this.props.todoItem.done ? "todo-done pointer" : "pointer"}
          onClick={() => this.props.toggleDone(this.props.todoItem.no)}
        >
          {this.props.todoItem.todo}
          {this.props.todoItem.done ? "(완료)" : ""}
        </span>
        <span
          className="float-end badge bg-secondary pointer"
          onClick={() => this.props.deleteTodo(this.props.todoItem.no)}
        >
          삭제
        </span>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  todoItem: PropTypes.object,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default TodoListItem;
