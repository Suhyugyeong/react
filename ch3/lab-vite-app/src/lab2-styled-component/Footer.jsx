import styled from 'styled-components'

//나의 컴포넌트를 어디서 사용할지는 모르겠다.. 
//상위가 속성으로 전달하는 값을 이용해 동적 스타일링이 적용된 컴포넌트를 만들고 싶다..
const Footer = (props) => {
  //div 는 div 컴포넌트를 만드는 함수이다.. `` 부분은 div 함수 호출하면서 전달하는 매개변수이다.
  //div 컴포넌트만 사용하겠다면 <div /> 로 쓰면 되지만..
  //동적 스타일링이 적용된 div 컴포넌트를 만들고 싶어서 div` `
  const FooterBox = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: ${(p1) => (props.theme === 'basic' ? 'skyblue' : 'yellow')} ;
    text-align: center;
  `
  return <FooterBox theme={props.theme}>React Styled Component Test</FooterBox>
}

export default Footer