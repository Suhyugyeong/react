const CountryList = () => {
  let list = [
    { no: 1, country: "일본", visited: false },
    { no: 2, country: "중국", visited: false },
    { no: 3, country: "미국", visited: true },
    { no: 4, country: "영국", visited: true },
  ];
  let countries = list.map((item, index) => {
    //반복적으로 랜더링되는 컴포넌트에는 꼭 key 속성을 명시해야함
    //rendering 최적화를 위해서
    //key값은 유일성이 확보되는 값으로, 유일성을 확보하기 위해서 단순 index로 지정해도 되지만
    //프로그래밍적으로 의미있는 데이터를 저장할 것을 권장
    //key 속성은 화면과 전혀 관련없고, 리액트 내부에서 랜더링 최적화를 위해 사용함
    return (
      <li
        key={item.no}
        className={item.visited ? "list-group-item active" : "list-group-item"}
      >
        {item.country}
      </li>
    );
  });
  return <ul className="list-group">{countries}</ul>;
};

export default CountryList;
