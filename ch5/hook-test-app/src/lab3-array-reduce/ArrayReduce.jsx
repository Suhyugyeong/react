const ArrayReduceComponent = () => {
  //배열 데이터..
  const members = [
    { name: "홍길동", point: 1000 },
    { name: "김길동", point: 2000 },
    { name: "이길동", point: 3000 },
    { name: "박길동", point: 4000 },
  ];

  //멤버들의 전체 point 를 합계내주는 함수(reducer - reduce 에 등록해서 사용)
  //Array.reduce()에 등록하는 함수(reducer)는 매개변수가 두개
  //첫번째 매개변수 - 이전 함수 호출의 리턴값(기억하고 있다가 그 다음 호출시 전달)
  //==>과거의 값을 참조해서 알고리즘을 돌릴때 유용..
  const reducer1 = (total, member) => {
    total += member.point;
    return total;
  };

  //0는 초기값.. 처음 호출할때 total 매개변수에 전달..
  const total = members.reduce(reducer1, 0);

  // const a = () => {
  //   let sum = 0
  //   members.forEach((member) => {
  //     sum += member.point
  //   })
  //   return sum
  // }

  const numbers = [10, 100, 320, 430, 150];
  //데이터들중 max 값을 구하고 싶다..
  const reducer2 = (max, number) => {
    if (max > number) return max;
    else return number;
  };
  const max = numbers.reduce(reducer2, 0);

  return (
    <div>
      <h2>Array Reduce</h2>
      <p>total : {total}</p>
      <p>max : {max}</p>
    </div>
  );
};

export default ArrayReduceComponent;
