//BrowserRouter 의 이름으로 react-router-dom 에서 export
//BrowserRouter 으로 사용해도 되고 as 로 이름을 바꾸어 사용해도 되고..
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import SongList from "./SongList";
import Members from "./Members";

const App01 = () => {
  return (
    <Router>
      {/* 어디에선가(대부분 앱의 root 부분 - 다른곳에 있어도 되고..) 
      라우팅과 관련된 정보를 등록만 해주면 알아서 이 정보를 보고 라우팅 해준다.*/}
      <div className="container">
        {/* Router 하위에 꼭 Route 만 들어가는 것이 아니라.. 필요하다면
        다른 컴포넌트로 구성 가능..  */}
        <Header />
        <Routes>
          {/* http://localhost:5173/ */}
          <Route path="/" element={<Home />} />
          {/* path 교체 -> url 변경 이벤트 감지 -> path 추출 -> path 에 맞는 component 출력
          http://localhost:5173/about */}
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/songs" element={<SongList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App01;
