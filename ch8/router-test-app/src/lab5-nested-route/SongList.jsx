import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";

const SongList = (props) => {
  //useMatch() - 매개변수에 path 패턴을 지정하고 이 패턴에 만족해서 실행된 것인지를 판단
  //만족하면 path 정보를 넘겨줌
  //주로 outer component가 inner component가 실행될 때 패턴인지를 파악해서 구체적인 정보를 뽑아서..
  //다양한 UI적 처리를 할 때 이용함

  const pathMatch = useMatch("/songs/:id"); //자기 밑에 뭔가 하위까지 같이 나오는거임
  let param_id = -1;
  if (pathMatch) {
    //이걸 쓰는 이유는 /songs혹은 /songs/1일 경우도 있기 때문에
    param_id = parseInt(pathMatch.params.id, 10);
  }

  let list = props.songs.map((song) => {
    let cn = "list-group-item";
    cn += param_id === song.id ? " list-group-item-secondary" : "";
    return (
      <li className={cn} key={song.id}>
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
