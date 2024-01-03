// import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import TodoContext from "../TodoComtext";
import { useContext } from "react";

const TodoList = () => {
  const value = useContext(TodoContext);

  let items = value.state.todoList.map((item) => {
    return (
      <TodoListItem
        key={item.no}
        todoItem={item}
        deleteTodo={value.actions.deleteTodo}
        toggleDone={value.actions.toggleDone}
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
};

// TodoList.propTypes = {
//   todoList: PropTypes.array,
//   toggleDone: PropTypes.func,
//   deleteTodo: PropTypes.func,
// };
export default TodoList;
