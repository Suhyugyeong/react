import React from "react";
import PropTypes from "prop-types";

//채팅 유저 목록 컴포넌트 가정..
class UserList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.users.map((userID) => (
          <li key={userID}>{userID}</li>
        ))}
      </ul>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
