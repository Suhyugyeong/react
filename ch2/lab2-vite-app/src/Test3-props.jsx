const PropsTest1 = () => {
  let name = "kim";
  let user = {
    name: "lee",
    age: 10,
  };
  return (
    <div className="container">
      <h2>Props Test1</h2>
      {/* props 데이터 전달 안 했을 때 */}
      <Sub1 />
      {/* I am Sub1, name:, age */}
      {/* 하위에 데이터 전달은 속성으로, 하위에서는 속성명으로 데이터를 이용한당 */}
      <Sub1 name={name} />
      {/* I am Sub1, name:kim, age */}
      <Sub1 name={name} age="10" />
      {/* I am Sub1, name:kim, age10 */}
      {/* 객체 전달 */}
      <Sub2 user={user} />
      {/* I am Sub2, name:lee, age:10 */}
      <Sub3 name="park" addr="seoul" age="30" email="a@a.com" />
      {/* I am Sub3, name:park, age:30, addr:seoul, email:a@a.com */}
      <Sub4 name="yoo" addr="busan" age="40" email="b@b.com" />
      {/* I am Sub4, name: yoo, age: 40, addr: busan, email:b@b.com */}
      {/* 객체를 전달할 때 Sub2처럼 객체를 직접 전달하면,
            하위에서 props.객체명.변수명 이렇게 씀
            객체를 전달할 때 전개연산자(spread operator - ... 데이터를 여러개 분해해서 쭉 나열해줌
            아래처럼 전개연산자로 전달하면 데이터를 객체 하나 전달한게 아니라, 분해되어 여러개의 데이터 우리의 경우는 2개가 전달되는 것이다) */}
      <Sub5 {...user} />
      {/* I am Sub5, name:lee, age:10 */}
    </div>
  );
};

const Sub1 = (props) => {
  return (
    <p>
      I am Sub1, name:{props.name}, age{props.age}
    </p>
  );
};
const Sub2 = (props) => {
  return (
    <p>
      I am Sub2, name:{props.user.name}, age:{props.user.age}
    </p>
  );
};
//여러 속성 값을 받기 위해 props를 선언하고 props.name 등으로 이용이 가능하지만,
//매개변수에 {}을 선언하고 여러개의 변수를 나열해서 매핑시킬 수도 있음
//속성이 선언된 순서와 {} 변수의 순서가 다르다.. 순서는 의미없음
//속성명에 해당되는 변수에 대입되므로,
const Sub3 = ({ name, age, addr, email }) => {
  return (
    <p>
      I am Sub3, name:{name}, age:{age}, addr:{addr}, email:{email}
    </p>
  );
  //일부러 순서 다르게 설정함
};
//props를 이용하지 않고 {}로 받는데, 속성명과 {}의 변수명이 다르다면,
//{name}은 {name:name}의 축약형이다..
//{속성명:변수명}
const Sub4 = ({ name: name1, age: age1, addr: addr1, email: email1 }) => {
  return (
    <p>
      I am Sub4, name: {name1}, age: {age1}, addr: {addr1}, email:{email1}
    </p>
  );
};
const Sub5 = (props) => {
  return (
    <p>
      I am Sub5, name:{props.name}, age:{props.age}
    </p>
  );
};

export default PropsTest1;
