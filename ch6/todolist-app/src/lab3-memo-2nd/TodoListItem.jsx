import React from "react";

const TodoListItem = (props) => {
  console.log(`## TodoListItem : ${props.todoListItem.todo}`);
  return (
    <li>
      <span>{props.todoListItem.todo}</span>
      <button onClick={() => props.deleteTodo(props.todoListItem.id)}>
        delete
      </button>
    </li>
  );
};

//memo 함수의 두번째 매개변수에 rerendering할 것인지를 결정하는 개발자 로직을 가지는 함수를 추가해서 해결할 것!
//아래의 코드만으로 신규 항목이 출력될 때 기존 화면에 나오는 항목을 위한 컴포넌트는 리랜더링이 되지 않는다..=> 좋음!!
//단, 문제가 있음..
//React.memo()의 두번째 매개변수는 주의해서 사용해야 한다!!
//항목의 중간을 삭제하게 되면 그 하위에 있는 모든 것이 다 제거되는 문제가 발생!!(삭제, 제거 작업이 있는 경우는 이 상황을 고려)
//두번째 매개변수를 이용하면 그 컴포넌트에 자신들이 생성될때 사용했던 props가 고정으로 지정되게 되고,
//중간을 삭제하면 자신 이후에 추가된 컴포넌트의 정보가 없어서 그 하위까지 같이 삭제된다..
export default React.memo(TodoListItem, (prevProps, nextProps) => {
  return prevProps.todoListItem === nextProps.todoListItem;
});
