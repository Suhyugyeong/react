import React, { Component } from "react";

class Chatting extends Component {
  chatRef = React.createRef();
  // React의 ref는 DOM 요소나 클래스 컴포넌트에 대한 참조를 생성하는 데 사용됩니다.
  //real dom 을 핸들링하기 위한 식별자..
  //가급적 코드에서 real dom 을 직접 핸들링하지 않는 것이 좋지만..
  //real dom 에서 직접 작업해야 가능한 것들이 있다..
  //화면 구성 및 화면의 데이터와 관련없이.. 특정 영역을 스크롤 시키거나, 특정 input
  //에 포커스가 자동으로 들어가게 하려면.. real dom 에서 작업해야..

  //유저가 입력한 채팅 글을 상태 데이터로.. msgList
  //msg - controlled component 를 위해서..
  state = { msgList: [], msg: "" };

  //이벤트 콜백 함수, controlled component 를 위해서..
  setMsg = (e) => {
    //... - 자바스크립트 전개 연산자 (spread operator.. )
    //배열등 데이터를 여러건 가지고 있는 곳에 사용해서, 그 데이터를 쭉 풀어서 등록하고자 할때
    this.setState({ ...this.state, msg: e.target.value });
    //{ ...this.state }는 현재 상태 객체를 복사한 새로운 객체를 생성합니다.
    // 이를 통해 기존 상태를 변경하지 않으면서 새로운 상태를 만들 수 있습니다.
    // 새로운 상태 객체에 msg 속성을 추가하고 해당 값으로 e.target.value를 할당합니다.
    //이는 사용자의 입력에 따라 msg 속성을 업데이트
  };
  //이벤트 함수, 엔터키 입력 순간.. 채팅글 하나 등록..
  msgKeyup = (e) => {
    if (e.key === "Enter") {
      this.setState({
        msg: "",
        msgList: [...this.state.msgList, this.state.msg],
      });
    }
  };

  //자동 스크롤을 구현하려면 스크롤해야 하는 사이즈 계산이 되어야 한다..
  //채팅글이 나오는 부분이 화면에서 얼마의 사이즈를 확보하는지 획득 - offsetHeight
  //그곳에 들어가는 컨텐츠(글)이 전체 출력되기 위해서 얼마의 사이즈가 필요한지 획득
  //- scrollHeight
  //scrollHeight - offsetHeight

  //가상 dom update 후, real dom update 직전에 호출..
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 컴포넌트가 업데이트되기 전에 호출되는 메서드 중 하나입니다.
    //이 메서드는 렌더링이 일어나기 전에 이전 상태와 속성을 기반으로 "스냅샷"을 얻을 수 있는데,
    //주로 DOM 업데이트 직전에 특정 정보를 얻을 때 사용됩니다.
    //real dom 획득..
    const chat = this.chatRef.current;
    //화면이 업데이트가 되었는데, 채팅 글이 이전과 다른지 비교,
    //채팅글과 관련업는 부분때문에 화면이 re-render 될 수도 있어서..
    if (prevState.msgList !== this.state.msgList && chat !== null) {
      //컴포넌트가 마운트되지 않은 상태에서 ref를 참조하려고 하면 null이 반환됩니다.
      //따라서 chat !== null은 chat이 존재하고 마운트된 상태에서만 특정 동작을 수행하도록 하는 것으로 이해할 수 있습니다.
      //이 라이프사이클 함수에서 데이터를 리턴시키면
      //이 데이터가 real dom update 까지 완료한후 호출되는 componentDidUpdate()
      //함수의 매개변수로 전달된다..

      return chat.offsetHeight;
      //chat이 유효한 경우에는 chat.offsetHeight를 반환합니다.
      //이는 채팅창의 높이를 스냅샷으로 사용하고, 이 스냅샷은 componentDidUpdate 메서드에서 활용됩니다.
    }
    return 0;
    //return 0;이 호출되면 해당 업데이트 사이클 동안에는 스냅샷이 없다는 것을 의미합니다.
    //스냅샷이 없을 경우 componentDidUpdate 메서드의 세 번째 매개변수인 snapshot에는 0이 전달됩니다.
  }
  //3번째 매개변수가.. getSnapshotBeforeUpdate 에서 리턴시킨 값..
  componentDidUpdate(prevProps, prevState, snapshot) {
    const chat = this.chatRef.current;
    if (snapshot > 0 && chat !== null) {
      //스크롤 시킨다..
      chat.scrollTop = chat.scrollHeight - snapshot;
      //scrollTop은 스크롤바의 상단에서의 거리이고, scrollHeight는 스크롤이 있는 컨테이너의 총 높이입니다. snapshot은 이전에 getSnapshotBeforeUpdate에서 반환한 값으로, 스크롤 조정 전의 스크롤바의 위치를 나타냅니다.
      //이를 활용하여 새로운 메시지가 추가된 경우에 스크롤 위치를 유지하도록 조정합니다.
    }
  }

  render() {
    return (
      <div>
        <h2>채팅 목록</h2>
        {/* 채팅 글이 나오는 부분.. 이부분을 real dom 으로 제어해 스크롤 시키려고 ref 설정 */}
        <div
          id="a"
          ref={this.chatRef} //이게 있으니까 위에 ref를 썼죠..
          style={{
            width: 400,
            height: 120,
            overflow: "auto",
            border: "solid 1px black",
          }}
        >
          {/* 무언가가 반복적으로 출력, key 명시해야..  */}
          {this.state.msgList.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
          })}
        </div>
        <input
          type="text"
          value={this.state.msg}
          onChange={this.setMsg}
          onKeyUp={this.msgKeyup}
        />
      </div>
    );
  }
}

export default Chatting;
