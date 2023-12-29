import React from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

class TodoList extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.todoList !== this.props.todoList) return true
  //   else return false
  // }

  render() {
    console.log("## TodoList render...");

    let items = this.props.todoList.map((item) => {
      return (
        <TodoListItem
          key={item.no}
          todoItem={item}
          deleteTodo={this.props.deleteTodo}
          toggleDone={this.props.toggleDone}
        />
      );
    });

    return (
      <div className="row">
        <div className="col">
          <ul className="list-group">{items}</ul>
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default TodoList;
