import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//고차함수..
//클래스 스타일의 컴포넌트를 매개변수로 받아서.. 그곳에 hook 함수를 속성으로 전달
const withSongParams = (Component) => {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
};

const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";

class SongDetail extends React.Component {
  //class component 에 생성자 선언이 필수는 아니지만..
  //선언한다면.. 매개변수를 선언하고, 그 매개변수가 props
  constructor(props) {
    //생성자 첫줄에서 꼭 super(props) 해주어야..
    super(props);
    //상태 데이터 초기화..
    this.state = { title: "", link: "", musician: "" };
  }

  componentDidMount() {
    const id = this.props.params.id;
    const song = this.props.songs.find(
      (song) => song.id == parseInt(id ? id : "", 10)
    );
    if (song) {
      this.setState({
        link: song.youtube_link ? YOUTUBE_LINK + song.youtube_link : "",
        title: song.title ? song.title : "",
        musician: song.musician ? song.musician : "",
      });
    } else {
      this.props.navigate("/songs");
    }
  }

  render() {
    return (
      <div className="mt-5">
        <h2>{this.state.title}</h2>
        <p>musician : {this.state.musician}</p>
        <p>
          <a href={this.state.link} target="new">
            Youtube
          </a>
        </p>
        <Link to="/songs">목록으로 가기</Link>
      </div>
    );
  }
}

//클래스 스타일의 컴포넌트를 hof 를 거쳐서 리턴되는 컴포넌트를 이용
export default withSongParams(SongDetail);
