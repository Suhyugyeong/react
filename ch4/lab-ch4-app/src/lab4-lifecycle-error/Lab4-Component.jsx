import React from "react";
import Chatting from "./Chatting";
import ErrorBoundary from "./ErrorBoundary";
import UserList from "./UserList";

class ChatApp2 extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div>
          {/* 정상 상황 테스트..  */}
          {/* <UserList users={['gildong','kim']}/> */}
          {/* 에러 상황 테스트.. */}
          <UserList users={"gildong"} />
          <Chatting />
        </div>
      </ErrorBoundary>
    );
  }
}

export default ChatApp2;
