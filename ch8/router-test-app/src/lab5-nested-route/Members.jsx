import React from "react";
import { useNavigate } from "react-router";

const Members = (props) => {
  //화면전환을 하면서 데이터를 전달함
  //location.state로 데이터를 전달
  //가정은.. 특정 화면으로 넘어갈 때 내가 어떤 url이었어, 라는 정보를 전달한다
  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm("홈으로 이동할까요?")) {
      //데이터를 포함해서..
      navigate("/", { state: { from: "/members" } });
    }
  };

  let imgstyle = { width: 90, height: 90 };
  let list = props.members.map((member) => {
    return (
      <div
        className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3"
        key={member.name}
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
      <button className="btn btn-secondary" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

export default Members;
