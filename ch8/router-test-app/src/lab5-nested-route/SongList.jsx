import React from "react";
import { Link, Outlet } from "react-router-dom";

const SongList = (props) => {
  let list = props.songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          {song.title} ({song.musician})
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });

  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
      {/* 중첩 라우팅에 의해 결정된 컴포넌트가 나올 자리를 지정 */}
      <Outlet />
    </div>
  );
};

export default SongList;
