import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import SongList from "./SongList";
import Members from "./Members";
// import SongDetail from "./SongDetail";
import Player from "./Player";

const App05 = () => {
  const [members] = useState([
    { name: "Kim", photo: "photos/Mag.png" },
    { name: "Lee", photo: "photos/JPike.jpg" },
    { name: "Park", photo: "photos/King.png" },
    { name: "Hong", photo: "photos/Sam.png" },
    { name: "Jung", photo: "photos/Tim.png" },
    { name: "Kang", photo: "photos/Toby.jpg" },
  ]);

  const [songs] = useState([
    {
      id: 1,
      title: "Fallin' for you",
      musician: "Colbie callet",
      youtube_link: "PABUl_EX_hw",
    },
    {
      id: 2,
      title: "Can't hurry love",
      musician: "The supremes",
      youtube_link: "EJDPhjQft04",
    },
    {
      id: 3,
      title: "Landslide",
      musician: "Dixie chicks",
      youtube_link: "V2N7gYom9-A",
    },
    {
      id: 4,
      title: "Can't let go",
      musician: "Linda ronstadt",
      youtube_link: "P-EpGKXmoe4",
    },
    {
      id: 5,
      title: "Doctor my eyes",
      musician: "Jackson Browne",
      youtube_link: "7JlFKS_1oZk",
    },
    {
      id: 6,
      title: "We gotta get you a woman",
      musician: "Todd Rundgren",
      youtube_link: "EyUjbBViAGE",
    },
    {
      id: 7,
      title: "Hip to my heart",
      musician: "Band Perry",
      youtube_link: "vpLCFnD9LFo",
    },
    {
      id: 8,
      title: "Rolling in the deep",
      musician: "Adele",
      youtube_link: "EvK8pDK6IQU",
    },
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title={"뉴진스"} />} />
          <Route path="/members" element={<Members members={members} />} />
          {/* 라우팅 정보를 중첩 시켜서.. outer 안에 inner 나오게.. */}
          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route path=":id" element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App05;
