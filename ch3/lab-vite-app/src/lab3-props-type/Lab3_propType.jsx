//외부 파일에서 export default A; 로 공개되어 있다면... 
//default 로 공개하는 것은 하나만.. 
//import AA from '~~' 형태로 받을 수 있다.. 이름을 바꾸어 받아도 된다..

//외부 파일이 export { A, B, C} 로 공개한다면.. 여러개를 외부에 공개..
//import { A, B } from '~~~' 로 이용해야, 이름 바꿀 수 없다. 필요한 것만 import 하면 된다..

import { PropTypeTest1, PropTypeTest2 } from "./Test1-propType";
import Message from "./Message";
import PropTypeTest3 from "./Test2-propType";
import PropBody from "./Test3-body";

const PropTypeComponent = () => {
  const myFun = (x, y) => {
    console.log(`myFun call: ${x + y}`)
  }
  const user = {
    name: 'kim',
    age: 20
  }
  const array = ['hello', 'world']

  const msgObj = new Message('lee', 'hello lee')

  return (
    <div>
      <PropTypeTest1 id="kim" num={10} bool={true} fun={myFun} obj={user} array={array} />

      <PropTypeTest2 message={msgObj} color={'blue'} width={10} info={{ color: 'red', weight: 30 }} nums={[10, 20]} />
    
      <PropTypeTest3 />

      <PropBody title='안녕하세요'>반갑습니다.</PropBody>
    </div>
  )
}

export default PropTypeComponent