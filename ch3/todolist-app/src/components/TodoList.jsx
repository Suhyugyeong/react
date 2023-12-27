import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
//할 일 항목을 TodoListItem에서 렌더링

const TodoList = (props) => {
  //데이터 갯수 만큼 하위 컴포넌트 준비..
  let items = props.todoList.map((item) => {
    //map 함수의 콜백 함수는 세 개의 인자를 받습니다: 현재 요소, 현재 인덱스, 그리고 배열 전체.
    //item은 현재 배열 요소를 나타내는 변수로 사용되었고,
    //이를 통해 각 할 일 항목에 대한 작업을 수행하고 TodoListItem 컴포넌트로 전달하고 있습니다.
    //동일한 컴포넌트가 여러개 나열된다면.. 컴포넌트를 식별하기 위한 key 를 명시해줘야..
    //key 는 우리 코드의 알고리즘과는 전혀 관련이 없다..
    return (
      <TodoListItem
        key={item.no}
        todoItem={item}
        deleteTodo={props.deleteTodo}
        toggleDone={props.toggleDone}
      />
      //props.todoList 배열에 대해 map 함수를 사용하여 각 할 일 항목을 TodoListItem 컴포넌트로 변환합니다.
      // 변환된 각 항목을 TodoListItem 컴포넌트로 렌더링합니다.
      //key prop은 React에서 목록을 렌더링할 때 각 항목을 식별하기 위한 유일한 키입니다.
      //여기서는 item.no를 사용하고 있습니다.
    );
  });

  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">{items}</ul>
        {/*  위에서 생성한 items를 자식으로 포함시킵니다. */}
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

//부모 컴포넌트에서 전달된 함수들을 이용하여 할 일 항목의 삭제 및 완료 토글 기능을 수행할 수 있습니다.
