import React from "react";
import PropTypes from "prop-types";

//PureComponent 를 상속받아 컴포넌트 선언..
//Component 의 서브 클래스이고, shouldComponentUpdate() 함수가 오버라이드되어
//props, state 객체비교 알고리즘이 이미 되어 있는 클래스..
class TodoListItem extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.todoItem !== this.props.todoItem) return true
  //   else return false
  // }

  render() {
    console.log("## TodoListItem render... ");

    let itemClassName = "list-group-item";
    if (this.props.todoItem.done) itemClassName += " list-group-item-success";

    return (
      <li className={itemClassName}>
        <span
          className={this.props.todoItem.done ? "todo-done pointer" : "pointer"}
          onClick={() => this.props.toggleDone(this.props.todoItem.no)}
        >
          {this.props.todoItem.todo}
          {this.props.todoItem.done ? "(완료)" : ""}
        </span>
        <span
          className="float-end badge bg-secondary pointer"
          onClick={() => this.props.deleteTodo(this.props.todoItem.no)}
        >
          삭제
        </span>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  todoItem: PropTypes.object,
  toggleDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
export default TodoListItem;
