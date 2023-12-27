import PropTypes from "prop-types";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const App = (props) => {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">Todo List App</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          <InputTodo addTodo={props.addTodo} />
          <TodoList
            todoList={props.todoList}
            toggleDone={props.toggleDone}
            deleteTodo={props.deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  todoList: PropTypes.array,
  addTodo: PropTypes.func,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default App;
