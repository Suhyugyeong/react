//css 파일을 import 한 것이지만.. global 로 import 한 것이 아니라.. 모듈로 
import styles from './three.module.css'

const Three = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Hello, I am Three Component</h3>
    </div>
  )
}

export default Three