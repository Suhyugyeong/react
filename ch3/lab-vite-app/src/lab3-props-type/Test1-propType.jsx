import PropTypes from 'prop-types'
import Message from './Message'

//컴포넌트 선언.. 
const PropTypeTest1 = (props) => {
  return (
    <div>
      <h2>PropType Test1</h2>
      <p>id: {props.id}, num: {props.num}, bool: {props.bool}</p>
      <h3>object data</h3>
      <p>name: {props.obj['name']}, age: {props.obj['age']}</p>
      <h3>array data</h3>
      <p>
        {
          props.array.map(item => (
            <p>{item}</p>
          ))
        }
      </p>
      <button onClick={()=>props.fun(10, 20)}>function call</button>
    </div>
  )
}

//자신을 이용하는 곳에
//속성을 어떻게 전달해 달라고 한정짓고자 한다..
//proptypes 선언은 컴포넌트 외부에 선언되어야 한다..
PropTypeTest1.propTypes = {
  id: PropTypes.string.isRequired, 
  num: PropTypes.number,
  fun: PropTypes.func,
  bool: PropTypes.bool,
  obj: PropTypes.object,
  array: PropTypes.array
}

//복잡한 타입............ 
const PropTypeTest2 = (props) => {
  return (
    <div>
      <h2>PropTypeTest2</h2>
      <p>message: {props.message.msg}</p>
      <p>color: {props.color}</p>
      <p>width: {props.width}</p>
      <p>info: {props.info.color}, {props.info.weight}</p>
      <p>nums: {props.nums[0]}, {props.nums[1]}</p>
    </div>
  )
}

PropTypeTest2.propTypes = {
  message: PropTypes.instanceOf(Message),//객체의 타입까지 명시하고 싶을때.. 
  color: PropTypes.oneOf(['red', 'blue']),//값들중 하나.. 
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),//이 타입들중 하나와 맞는 데이터
  info: PropTypes.shape({//json object 인데.. 이런 키와 타입을 맞춘 object.. 
    color: PropTypes.string,
    weight: PropTypes.number
  }),
  nums: PropTypes.arrayOf(PropTypes.number)//배열인데, 배열의 데이터는 number 타입이어야 하고.. 
}

export { PropTypeTest1, PropTypeTest2 }