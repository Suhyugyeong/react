import { useState } from "react";

//상위에서 전달하는 데이터를 props로 받아서 화면에 출력만 하는 stateless component
const MusicItem = (props) => {
  let item = props.item;
  return (
    <li className="list-group-item">
      {item.no} - {item.title} ({item.artist})
    </li>
  );
};

const MusicList = (props) => {
  const list = props.music;
  let items = list.map((item, index) => {
    return <MusicItem key={item.no} item={item} />;
  });
  return <ul className="list-group">{items}</ul>;
};

//상태를 유지하고, 상태값 변경 로직을 가지며, 상태값을 바꾸어 화면 갱신 rerender한다
//stateful component 만들꺼
const StateTest = () => {
  //상태는 꼭 useState()로 선언해야
  //useState()의 매개변수는 초기값
  //useState()의 리턴은 배열,
  //첫번째는 상태 데이터 참조, 일반 변수로 선언
  //두번째는 상태 변경, 함수스타일로 선언
  //상태 데이터를 읽고, 변경하는 api(이름)은 개발자가 정의
  let [list, setList] = useState([
    { no: 1, title: "I AM", artist: "IVE" },
    { no: 2, title: "퀸카", artist: "idle" },
    { no: 3, title: "퀸카2", artist: "idle2" },
    { no: 4, title: "퀸카3", artist: "idle3" },
  ]);
  //하나의 컴포넌트에서 useState()로 상태는 여러개 선언 가능
  const [count, setCount] = useState(0);
  //유저 이벤트 발생시에 호출될 개발자 임의 함수
  const changeList = () => {
    //상태값 변경
    list.unshift(list.pop());
    //상태값 변경에 의해 rerender되는 순간,
    //꼭 setter 함수를 이용해야 내부적으로 rerender가 됨
    setList([...list]);
  };
  return (
    <div>
      <h2>State Test</h2>
      <p>
        <MusicList music={list} />
      </p>
      <p>{count}</p>
      <button onClick={changeList}>change list</button>
      <button onClick={() => setCount(count + 1)}>change count</button>
    </div>
  );
};

export default StateTest;
