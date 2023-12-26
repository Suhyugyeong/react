import PropTypes, { checkPropTypes } from 'prop-types'

const PropTypeTest3 = (props) => {
  let result = 0
  switch (props.oper){
    case '+':
      result = props.x + props.y 
      break
    case '*':
      result = props.x * props.y
      break 
    default:
      result = 0
  }

  return (
    <div>
      <h3>연산 방식 : {props.oper}</h3>
      <hr/>
      <div>
        {props.x} {props.oper} {props.y} = {result}
      </div>
    </div>
  )
}

//상위에서 전달한 속성값을 아래의 함수를 거쳐서 유효한 값인지를 판단하고 싶다...
//두번째 매개변수는 이 함수를 호출하게 한 속성 명 ==> 여러 속성에 이 함수 재사용 가능하다..
//세번째 매개변수는 이 함수로 판단하고자 하는 컴포넌트명.. ==> 여러 컴포넌트에서 재사용 가능하다.. 
const calcChecker = (props, propName, componentName) => {
   if(propName === 'oper'){
    //이 속성 값 뽑아서.. 
    if(props[propName] !== '+' && props[propName] !== '*'){
      //+, * 가 아니라면.. 에러(잘못된 데이터 지정)
      //Error 리턴.. 이 내용의 에러가 콘솔에 출력..
      return new Error(`${propName} 의 속성값은 반드시 '+', '*' 이어야 합니다. (at ${componentName})`)
    }
    
   }
   if(propName === 'y'){
    let y = props[propName]
    if(y>100 || y<0 || y%2 !== 0){

      return new Error(`${propName} 속성 값은 0이상 100이하의 짝수만 허용합니다.`)
    }
  }
}

PropTypeTest3.propTypes = {
  x: PropTypes.number,
  y: calcChecker,//함수를 거쳐서 유효성 검증 되게..
  oper: calcChecker
}
PropTypeTest3.defaultProps = {
  //속성이 isRequired 가 아니라면.. 필수 속성이 아니다.. 상위에서 데이터 전달을 안할 수도 있다..
  //그때 기본값을 선언하고 싶다면.. 
  x: 100,
  y: 20,
  oper: '+'
}

export default PropTypeTest3