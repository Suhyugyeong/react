const Test1 = () => {
  let msg1 = <b>Hello</b>; //JSX 표현식
  let msg2 = "<b>World</b>"; //그냥 일반 문자열

  return (
    <div className="container">
      <h2>JSX Test</h2>
      <p>hello {msg1}</p>
      <p>hello {msg2}</p>
      <hr className="dash-style" />
      <p>
        hello <span dangerouslySetInnerHTML={{ __html: msg2 }} />
      </p>
    </div>
  );
};

export default Test1;
