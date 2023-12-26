import { useState } from 'react'
import Footer from './Footer'
import { BasicButton, UnderLineButton, WhiteUnderLineButton } from './Buttons'

const StyledComponent = () => {
  //컴포넌트 상태 표현.. 
  const [theme, setTheme] = useState('basic')

  return (
    <div>
      <BasicButton>Basic</BasicButton>
      <UnderLineButton>UnderLine</UnderLineButton>
      <WhiteUnderLineButton>White UnderLine</WhiteUnderLineButton>
      <Footer theme={theme}/>
    </div>
  )
}

export default StyledComponent