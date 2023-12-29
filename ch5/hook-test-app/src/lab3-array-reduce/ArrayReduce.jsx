// React 함수 컴포넌트로, Array의 reduce 메서드를 사용하여 배열의 요소들을 축소하고 총합 및 최댓값을 계산

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
    //total, member는 임의의 식별자
    total += member.point;
    return total;
  };

  //0는 초기값.. 처음 호출할때 total 매개변수에 전달..
  const total = members.reduce(reducer1, 0);
  // reduce 메서드를 members 배열에 적용
  //reduce 메서드는 배열의 각 요소를 순회하면서 하나의 결과를 누적하는 데 사용
  //reducer1 함수는 reduce 메서드에 제공되는 콜백 함수입니다
  //두 번째 인자인 0은 total 누산기의 초기값.

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
    //함수 내부에서는 현재 숫자(number)가 현재까지의 최댓값(max)보다 큰지를 비교하고,
    //크다면 현재 숫자를 새로운 최댓값으로 반환합니다. 그렇지 않으면 이전 최댓값을 그대로 반환합니다.
  };
  const max = numbers.reduce(reducer2, 0);
  //초기값은 0 초기값이 생략되면 배열의 첫 번째 요소가 사용됨..

  return (
    <div>
      <h2>Array Reduce</h2>
      <p>total : {total}</p>
      <p>max : {max}</p>
    </div>
  );
};

export default ArrayReduceComponent;

//reduce 함수는 배열의 각 요소에 대해 주어진 콜백 함수를 실행하면서 하나의 누적된 결과값을 반환하는 배열 메서드입니다. 이 메서드는 배열을 순회하면서 각 요소에 대해 콜백 함수를 호출하고,
// 이전에 계산된 결과와 현재 요소를 이용하여 새로운 결과를 만들어 나갑니다.
