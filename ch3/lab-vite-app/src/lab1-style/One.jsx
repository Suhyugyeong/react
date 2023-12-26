//아래는 css 를 global 로 import 해서 사용한 것이다..
//어디선가 다른 곳에서 import 한 css 와 이름이 동일하다면.. 나중에 import 한 것이 적용
import "./one.css"

const One = () => {
  return (
    <div className="wrapper">
      <h3>Hello, I am One Component</h3>
    </div>
  )
}
export default One