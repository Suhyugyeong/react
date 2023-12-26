import styled from 'styled-components'

//동적 스타일링을 적용해 button 컴포넌트를 만드는 함수 button` `
const BasicButton = styled.button`
  background-color: purple;
  color: yellow;
  padding: 5px 10px 5px 10px;
  margin: 5px;
`

const UnderLineButton = styled(BasicButton)`
  text-decoration: underline;
`

const WhiteUnderLineButton = styled(UnderLineButton)`
  color: white;
`

//여러개를 한꺼번에 export... 
export { BasicButton, UnderLineButton, WhiteUnderLineButton }


