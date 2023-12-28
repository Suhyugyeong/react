import PropTypes from "prop-types";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card card-body bg-light">
          <div className="title">Todo List App</div>
        </div>
        <div className="card card-default card-borderless">
          <div className="card-body">
            <InputTodo addTodo={this.props.addTodo} />

            <TodoList
              todoList={this.props.todoList}
              toggleDone={this.props.toggleDone}
              deleteTodo={this.props.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todoList: PropTypes.array,
  addTodo: PropTypes.func,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default App;
