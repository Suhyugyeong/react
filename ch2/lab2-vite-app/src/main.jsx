import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//css파일을 어디선가(꼭 index.jsx가 아니더라 해도) import하면 전역위치 (어느 jsx 파일이든 상관없이)에서든 사용 가능한..
import "bootstrap/dist/css/bootstrap.css";
//css 파일로, 보통 css를 html에서 <link>로 적용시킴
//근데 js에서 import 대상이 아니다
//CSS까지 마치 모듈처럼 필요한 css 파일을 import하기 위해 사용하는 기법을 제공함
//누가?? 모듈 번들러가 처리해줌
//React의 사상은 100% 자바스크립트로 컴포넌트 정의(JSX CSS 모듈로)

ReactDOM.createRoot(document.getElementById("root")).render(
  //App이라는 개발자가 만든 컴포넌트를 id가 root인 태그에 출력
  //<React.StrictMode> 는 개발 환경에서만 의미하고 build 시킬 때는 제거
  //개발 코드가 문제없는지를 한번 더 검증기 위해 컴포넌트를 내부적으로 두 번 로딩해줌
  //필요없으면 지워도 되지만, 알아서 사라짐..
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
