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

const PropsTest2 = () => {
  //데이터..
  let list = [
    { no: 1, title: "I AM", artist: "IVE" },
    { no: 2, title: "퀸카", artist: "idle" },
  ];
  return (
    <div>
      <h2>List - Item 세분화</h2>
      <p>
        <MusicList music={list} />
      </p>
    </div>
  );
};

export default PropsTest2;
