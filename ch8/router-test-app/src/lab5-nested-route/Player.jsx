import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";

const Player = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  useEffect(() => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    const song = props.songs.find((song) => song.id == id);

    if (song) {
      setYoutubeLink(song.youtube_link ? song.youtube_link : "");
      setTitle(song.title ? song.title : "");
    } else {
      navigate("/songs");
    }
  });
  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link className="menu" to="/songs">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">{title}</span>
        </div>
        <div className="player">
          <div>
            <Youtube
              videoId={youtubeLink}
              opts={{
                width: "320",
                height: "240",
                playerVars: { autoplay: 1 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
