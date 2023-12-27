import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  //데이터 개수만큼 하위 컴포넌트 준비
  let items = props.todoList.map((item) => {
    //주의.. 동일한 컴포넌트가 여러개 나열된다면, 컴포넌트를 식별하기 위한 key를 명시해주어야 한다
    //key는 우리 코드의 알고리즘과는 전혀 관련이 없다..
    return (
      <TodoListItem
        key={item.no}
        todoItem={item}
        deleteTodo={props.deleteTodo}
        toggleDone={props.toggleDone}
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

TodoList.propTypes = {
  todoList: PropTypes.array,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default TodoList;
