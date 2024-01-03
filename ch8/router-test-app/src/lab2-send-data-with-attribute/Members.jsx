import React from "react";

const Members = (props) => {
  //inline style .. js object이다..
  let imgstyle = { width: 90, height: 90 };
  //상위에서 전달한 데이터 갯수만큼 목록 구성
  let list = props.members.map((member) => {
    return (
      <div
        className="col-12 clo-xs-6 col-sm-6 col-md-4 con-lg-3"
        key={member.name}
      >
        <img src={member.photo} className="img-thumbnail" style={imgstyle} />
        <br />
        <h6>{member.name}</h6>
      </div>
    );
  });
  return (
    <div>
      <h2 className="m-4">members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Members;
