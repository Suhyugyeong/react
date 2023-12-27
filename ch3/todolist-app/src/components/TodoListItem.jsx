//React 함수형 컴포넌트를 정의
import PropTypes from "prop-types";

const TodoListItem = (props) => {
  let itemClassName = "list-group-item";
  if (props.todoItem.done) itemClassName += " list-group-item-success";
  //props.todoItem.done이 true인 경우,
  //itemClassName에 "list-group-item-success"를 추가합니다. 이렇게 함으로써 완료된 항목은 다른 스타일을 가지게 됩니다.

  return (
    <li className={itemClassName}>
      {/* li 요소에 동적으로 결정된 클래스 이름을 적용합니다. */}
      <span
        className={props.todoItem.done ? "todo-done pointer" : "pointer"}
        onClick={() => props.toggleDone(props.todoItem.no)}
      >
        {props.todoItem.todo}
        {props.todoItem.done ? "(완료)" : ""}
      </span>
      <span
        className="float-end badge bg-secondary pointer"
        onClick={() => props.deleteTodo(props.todoItem.no)}
      >
        삭제
      </span>
    </li>
  );
};

TodoListItem.propTypes = {
  todoItem: PropTypes.object,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default TodoListItem;
