import React from "react";

const Members = (props) => {
  let imgstyle = { width: 90, height: 90 };
  let list = props.members.map((member) => {
    //각 멤버에 대해 <div> 엘리먼트를 생성합니다.
    return (
      <div
        className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3"
        key={member.name}
        //key prop은 React에서 컴포넌트를 업데이트할 때 사용되는 고유한 식별자로 member.name이 사용되어 각 멤버를 식별합니다.
      >
        <img src={member.photo} className="img-thumbnail" style={imgstyle} />
        <br />
        <h6>{member.name}</h6>
        <br />
      </div>
    );
  });
  return (
    <div>
      <h2 className="m-4">Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Members;
