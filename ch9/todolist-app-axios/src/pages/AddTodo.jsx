import { useState } from "react";
import { useNavigate } from "react-router";
//useNavigate는 React Router v6에서 제공되는 훅 중 하나로, 라우터에서의 프로그래밍적인 네비게이션을 가능케 하는 역할을 합니다.
//이 훅을 사용하면 컴포넌트 내에서 라우터의 상태를 변경하여 페이지를 이동할 수 있습니다.
//useNavigate는 함수를 반환하며, 반환된 함수를 호출하면 해당 경로로 이동합니다.
//이를 통해 컴포넌트 내에서 라우터를 조작하여 동적인 네비게이션을 수행할 수 있습니다.

const AddTodo = ({ callbacks }) => {
  const navigate = useNavigate(); //이 함수는 React Router의 라우터를 프로그래밍적으로 제어하여 다른 페이지로 이동하는 데 사용됩니다.

  let [todo, setTodo] = useState("");
  let [desc, setDesc] = useState("");

  const addTodoHandler = () => {
    //괄호 () 안에 아무 매개변수도 선언하지 않은 경우에는 함수 내부에서 외부에서 전달된 인자(argument)를 사용할 필요가 없다는 것을 나타냅니다.
    if (todo.trim() === "" || desc.trim() === "") {
      alert("반드시 할일, 설명을 입력해야 합니다.");
      return;
    }
    callbacks.addTodo(todo, desc);
    // callbacks 객체에 있는 addTodo 함수를 호출하여 입력된 할일과 설명을 전달합니다. 이 함수는 부모 컴포넌트로부터 전달된 콜백 함수로 보이며, 새로운 할일을 추가하는 데 사용됩니다.
    navigate("/todos");
    //라우터를 사용하여 "/todos" 경로로 이동합니다. 이는 할일 목록을 표시하는 페이지로 이동하는 것으로 보입니다.
  };

  return (
    <>
      <div className="row">
        <div className="col p-3">
          <h2>할일 추가</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="todo">할일 :</label>
            <input
              type="text"
              className="form-control"
              id="todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">설명 :</label>
            <textarea
              className="form-control"
              rows={3}
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={addTodoHandler}
            >
              추 가
            </button>
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={() => navigate("/todos")}
            >
              취 소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;

//여기서 callbacks 객체를 사용하는 것은 AddTodo 컴포넌트가 부모 컴포넌트에서 전달받은 함수를 호출하여 부모 컴포넌트의 상태나 동작을 변경하려는 것입니다. 이는 자식 컴포넌트에서 부모 컴포넌트에게 정보를 전달하거나 부모 컴포넌트의 동작을 수행하기 위한 일반적인 패턴입니다.
//() 괄호 안에 매개변수를 선언하지 않았다? 이 경우, 함수 내에서 외부에서 전달된 인자를 사용하는 것이 아니라, 함수 스코프 내부에서 정의된 변수나 외부에서 접근 가능한 변수 등을 활용할 수 있습니다.
//이와 같은 방식은 함수가 외부에서 전달된 인자를 사용하지 않고, 함수 내부에서 직접 접근 가능한 변수 등을 활용하는 경우에 사용됩니다. 함수가 외부에서 어떤 값을 필요로하지 않는 경우에는 매개변수를 생략하는 것이 자연스럽습니다.
