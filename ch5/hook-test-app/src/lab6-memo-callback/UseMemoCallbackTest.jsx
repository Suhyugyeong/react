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

  //빈번하게 호출되는 함수를 useMemo()로
  //함수를 직접 호출하는 것이 아니라, useMemo의 리턴 값을 이용
  //이 값이 캐싱된 값으로 useMemo가 함수를 호출할지를 판단
  //두번째 매개변수 값이 변경된 경우 함수 호출하고 그 값을 캐싱..
  const memoCount = useMemo(() => getTodoListCount(todoList), [todoList]);

  //이벤트 함수
  //컴포넌트가 rerendering될 때 불필요하게 생성되지 않게 하기 위해서..
  //즉, 유저 글 입력시에는 다시 생성될 필요가 없어서..
  const addTodo = useCallback(
    (todo) => {
      //... - spread operator(전개 연산자) : 객체 혹은 배열의 데이터를 쭉 나열..
      //과거의 상태를 변경한 것이 아니라 새로운 상태를 만들어서 적용
      let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }];
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    (id) => {
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
