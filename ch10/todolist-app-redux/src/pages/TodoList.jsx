import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import TodoActionCreator from "../redux/TodoActionCreator";
import { connect } from "react-redux";

const TodoList = ({ todoList, deleteTodo, toggleDone }) => {
  let todoItems = todoList.map((item) => {
    return (
      <TodoItem
        key={item.id}
        todoItem={item}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />
    );
  });
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

// export default TodoList;

//함수명은 임의, 매개변수가 redux에 의해 관리되는 상태
const mapStateToProps = (state) => ({
  //state.todoList - todoList는 reducer에 등록한 상태의 이름과 맞추고
  //todoList: -component에서 사용할 이름..
  //컴포넌트가 이용하는 redux의 상태가 여러개라면 쭉 나열..
  todoList: state.todoList,
});

//함수명 임의, 매개변수는 redux에 액션을 발생시킬 수 있는 dispatcher 객체
const mapDisPatchToProps = (dispatch) => ({
  //아래의 함수가 컴포넌트에 속성으로 추가
  //컴포넌트에서 함수를 호출하면 액션 발생..

  deleteTodo: (id) => dispatch(TodoActionCreator.deleteTodo({ id })),
  toggleDone: (id) => dispatch(TodoActionCreator.toggleDone({ id })),
});

//Hof
//TodoList라는 컴포넌트에 .. mapStateToProps, mapDispatchToProps의 값들을 속성으로 추가해서
//redux를 이용하게 해주는 hof
export default connect(mapStateToProps, mapDisPatchToProps)(TodoList);
