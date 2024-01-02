import { useState, useMemo, useCallback } from "react";

//개발자 함수
const getTodoListCount = (todoList) => {
  console.log("##getTodoListCount", todoList.length);
  return todoList.length;
};

//컴포넌트 선언
//이 테스트의 근거는, 이 컴포넌트 상태가 2개이다
//상태값 변경시에 함수 호출, 함수 생성이 불필요하게 될 수 있다..
//유저가 글을 입력할 때 컴포넌트는 rerender되지만, 글 입력과 전혀 관련이 없는 함수가 반복적으로 호출되거나 생성되는 문제
//==>useMemo, useCallbak을 이용해 성능 최적화
const UseMemoCallbackComponent = () => {
  //state 선언
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState(""); //유저 입력, controlled component
  //todoList는 할 일 목록을 배열로 관리하고, todo는 사용자가 입력한 특정 할 일을 문자열로 관리합니다.

  //빈번하게 호출되는 함수를 useMemo()로
  //함수를 직접 호출하는 것이 아니라, useMemo의 리턴 값을 이용
  //이 값이 캐싱된 값으로 useMemo가 함수를 호출할지를 판단
  //두번째 매개변수 값이 변경된 경우 함수 호출하고 그 값을 캐싱..
  const memoCount = useMemo(() => getTodoListCount(todoList), [todoList]);
  //메모이제이션 : getTodoListCount 함수는 할 일 목록의 길이를 반환합니다. useMemo 훅을 사용하여 이 함수의 결과를 메모이제이션합니다. 즉, todoList가 변경될 때만 이 함수를 호출하고, 그 외의 경우에는 이전에 계산된 값을 사용합니다.
  //메모이제이션은 특정 값이 변하지 않았을 때 이전에 계산한 값을 재사용하는 것을 의미합니다.

  //이벤트 함수
  //컴포넌트가 rerendering될 때 불필요하게 생성되지 않게 하기 위해서..
  //즉, 유저 글 입력시에는 다시 생성될 필요가 없어서..
  const addTodo = useCallback(
    //useCallback훅을 사용해 메모이제이션 todoList가 변경될 때만 함수가 새로 생성되도록 합니다.
    (todo) => {
      //todo라는 인자를 받아오며, 이것이 추가할 할 일의 내용
      //... - spread operator(전개 연산자) : 객체 혹은 배열의 데이터를 쭉 나열..
      //과거의 상태를 변경한 것이 아니라 새로운 상태를 만들어서 적용
      let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList] //의존성 배열 정렬 : 여기서는 todoList가 의존성으로 설정되어 있으므로, todoList가 변경될 때마다 addTodo 함수가 다시 생성됩니다.
  );

  const deleteTodo = useCallback(
    (id) => {
      //여기서 id는 삭제할 할 일의 고유한 식별자가 되는거임..
      let index = todoList.findIndex((item) => item.id === id);
      let newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>add todo</button>
      <br />
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo}
            <button onClick={() => deleteTodo(item.id)}>delete</button>
          </li>
        ))}
      </ul>
      {/* useMemo() 이용 전 */}
      {/* <div>todo count : {getTodoListCount(todoList)}</div> */}
      {/* useMemo() 이용 */}
      <div>todo count : {memoCount}</div>
    </div>
  );
};

export default UseMemoCallbackComponent;

//useMemo 훅 사용:
// const memoCount = useMemo(() => getTodoListCount(todoList), [todoList]);
// useMemo는 함수의 결과를 메모이제이션하는 훅으로,
//두 번째 매개변수로 전달된 배열의 값이 변경될 때만 함수를 실행하고, 그 외에는 이전에 계산된 값을 사용합니다.
// 콜백 함수:
// () => getTodoListCount(todoList) 부분은 메모이제이션하려는 함수입니다.
//이 함수는 현재의 todoList를 인자로 받아와서 getTodoListCount 함수를 호출하고, 그 결과를 반환합니다.
// 의존성 배열:
// 두 번째 매개변수 [todoList]는 메모이제이션의 의존성 배열입니다.
// 이 배열에 포함된 값들 중 하나라도 변경되면, 메모이제이션된 함수를 다시 실행하여 새로운 값을 계산합니다.
// 여기서는 todoList가 의존성으로 지정되어 있으므로, todoList가 변경될 때만 새로운 getTodoListCount 결과를 계산하게 됩니다.
