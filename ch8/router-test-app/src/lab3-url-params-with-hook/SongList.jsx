import React from "react";
import { Link } from "react-router-dom";

const SongList = (props) => {
  let list = props.songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          {song.title} ({song.musician})
        </Link>
      </li>
    );
  });

  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default SongList;
