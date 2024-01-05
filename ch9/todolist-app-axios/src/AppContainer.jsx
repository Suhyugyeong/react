import { useEffect, useState } from "react";
import App from "./App";
import { produce } from "immer";

import axios from "axios";

const BASEURI = "http://localhost:8000/todolist/gdhong";

const AppContainer = () => {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, todo: "ES6학습", desc: "설명1", done: false },
  //   { id: 2, todo: "React학습", desc: "설명2", done: false },
  //   { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
  //   { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
  // ]);

  //앱 전역에서 사용하는 state 데이터 선언, 초기는 빈 배열, 서버 연동으로
  //데이터 획득..
  let [todoList, setTodoList] = useState([]);

  //서버에서 데이터를 획득하는 역할의 함수..
  //함수내에서 await 를 사용하려면 함수 선언부분에 async 명시되어야
  const fetchTodoList = async () => {
    setTodoList([]);
    try {
      const response = await axios.get(BASEURI);
      setTodoList(response.data);
    } catch (e) {
      if (e instanceof Error) console.log("조회 실패 : " + e.message);
      else console.log("조회 실패 : " + e);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  //callback 은 하위에서 함수를 호출해서 서버 연동이 발생한 후에..
  //하위 컴포넌트가 처리해야할 업무가 있을 수 있다. 그 업무의 함수를 3번째
  //매개변수로 전달해주면 호출해 주겠다.
  const addTodo = async (todo, desc, callback) => {
    try {
      //url, request method, 전송 데이터 모두 서버와 맞추어야..
      const response = await axios.post(BASEURI, { todo, desc });
      if (response.data.status === "success") {
        let newTodoList = produce(todoList, (draft) => {
          draft.push({ ...response.data.item, done: false });
        });
        setTodoList(newTodoList);
        callback(); //하위 컴포넌트가 원하는 작업이 실행되게..
      } else {
        console.log("등록 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) console.log("등록 실패 : " + e.message);
      else console.log("등록 실패 : " + e);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${BASEURI}/${id}`);
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft.splice(index, 1);
        });
        setTodoList(newTodoList);
      } else {
        console.log("등록 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) console.log("삭제 실패 : " + e.message);
      else console.log("삭제 실패 : " + e);
    }
  };

  const toggleDone = async (id) => {
    try {
      //update 를 위해 서버에 넘겨야하는 데이터
      let todoItem = todoList.find((todo) => todo.id === id);
      const response = await axios.put(`${BASEURI}/${id}`, {
        ...todoItem,
        done: !todoItem.done,
      });

      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
      } else {
        console.log("toggle 수정 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) console.log("toggle 수정 실패 : " + e.message);
      else console.log("toggle 수정 실패 : " + e);
    }
  };

  const updateTodo = async (id, todo, desc, done, callback) => {
    try {
      const response = await axios.put(`${BASEURI}/${id}`, {
        todo,
        desc,
        done,
      });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index] = { ...draft[index], todo, desc, done };
        });
        setTodoList(newTodoList);
        callback();
      } else {
        console.log("update 실패 : " + response.data.message);
      }
    } catch (e) {
      if (e instanceof Error) console.log("update 실패 : " + e.message);
      else console.log("update 실패 : " + e);
    }
  };

  const callbacks = { addTodo, deleteTodo, updateTodo, toggleDone };
  const states = { todoList };

  return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;
