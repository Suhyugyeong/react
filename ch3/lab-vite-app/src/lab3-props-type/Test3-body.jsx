import PropTypes from 'prop-types'

//이 컴포넌트를 위부(상위)에서 사용한다.
//<PropBody a2={10} /> 으로 사용했다면.. 속성 값을 props.a2 로 받아서 이용하면 되고.. 
//<PropBody>hello</PropBody> 이렇게 사용할 수도 있다. 즉 컴포넌트 태그 사이에 body 를 추가했을 수도..
//body 도 상위에서 지정한 데이터이다.. 컴포넌트에서 그 body 가 필요할 수도.. 
const PropBody = (props) => {
  return (
    <div>
      <h2>Body Test</h2>
      <p>{props.title}</p>
      <p>
        {/* 상위에서 컴포넌트 body 에 추가한 문자열은 자동으로 props.children 에 들어간다.. */}
        {props.children}
      </p>
    </div>
  )
}

export default PropBody