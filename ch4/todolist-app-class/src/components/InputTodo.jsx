import React, { useState } from "react";
import PropTypes from "prop-types";

class InputTodo extends React.Component {
  // const [todo, setTodo] = useState("")
  state = {
    todo: "",
  };

  addHandler = () => {
    this.props.addTodo(this.state.todo);
    // setTodo("")
    this.setState({ todo: "" });
  };

  enterInput = (e) => {
    if (e.key === "Enter") {
      this.addHandler();
    }
  };

  changeTodo = (e) => {
    // setTodo(e.target.value)
    this.setState({ todo: e.target.value });
  };

  render() {
    console.log("## InputTodo render...");
    return (
      <div className="row">
        <div className="col">
          <div className="input-group">
            <input
              id="msg"
              type="text"
              className="form-control"
              name="msg"
              placeholder="할일을 여기에 입력하세요."
              value={this.state.todo}
              onChange={this.changeTodo}
              onKeyUp={this.enterInput}
            />
            <span
              className="btn btn-primary input-group-addon"
              onClick={this.addHandler}
            >
              추가
            </span>
          </div>
        </div>
      </div>
    );
  }
}

InputTodo.propTypes = {
  addTodo: PropTypes.func,
};
export default InputTodo;
