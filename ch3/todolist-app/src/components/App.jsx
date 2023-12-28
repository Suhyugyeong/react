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
          {/* 할 일을 입력하는 컴포넌트인 InputTodo 컴포넌트를 렌더링하고, addTodo라는 콜백 함수를 InputTodo 컴포넌트에 전달합니다. */}
          <TodoList
            todoList={props.todoList}
            toggleDone={props.toggleDone}
            deleteTodo={props.deleteTodo}
            // TodoList 컴포넌트를 렌더링하고, todoList, toggleDone, deleteTodo라는 세 가지 콜백 함수를 TodoList 컴포넌트에 전달합니다
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
