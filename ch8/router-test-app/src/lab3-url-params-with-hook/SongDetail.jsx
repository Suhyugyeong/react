import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//SongList 에서 항목 클릭시 출력되는 컴포넌트..
//SongList 에서 유저가 클릭한 항목의 데이터를 전달받아야 한다.
//params 방법을 이용
const SongDetail = (props) => {
  //자신이 실행된 url path 조건에서 데이터 추출..
  //"/songs/:id" 조건에 의해 실행된다는 가정..
  const { id } = useParams();
  //Link 는 컴포넌트, 유저에게 화면(링크모양)을 제공하는 컴포넌트
  //직접 코드에서 url 을 조정할 수 있는 api 도 필요..
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";

  //props 로 전체 노래 목록 데이터가 전달될 것이고..
  //그중에 어느 노래인지를 url param 으로 전달..
  //전체 목록중에서 url param 에 해당되는 데이터를 추출해서 사용..
  useEffect(() => {
    const song = props.songs.find(
      (song) => song.id == parseInt(id ? id : "", 10)
    );
    if (song) {
      setLink(song.youtube_link ? YOUTUBE_LINK + song.youtube_link : "");
      setTitle(song.title ? song.title : "");
      setMusician(song.musician ? song.musician : "");
    } else {
      //url param이 이상한것이 들어와서.. 그 param 에 해당되는 song 정보가 없다면
      //화면을 강제적으로 목록으로 돌린다..
      //유저에게 Link 로 화면을 제공하고 유저가 클릭해서 화면을 전환하는 것이 아니라
      //코드에서 필요한 순간 화면 전환..
      navigate("/songs");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>musician : {musician}</p>
      <p>
        <a href={link} target="new">
          Youtube
        </a>
      </p>
      <Link to="/songs">목록으로 가기</Link>
    </div>
  );
};

export default SongDetail;
