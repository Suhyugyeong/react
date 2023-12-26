import styles from './style'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'

const CSSTest = () => {
  return (
    <div className='container'>
      <h2>Css Global, Inline Css</h2>
      <button type='button' className='btn btn-primary'>Primary</button>
      <p style={styles.textStyle}>hello world</p>
      <hr style={styles.dashStyle}/>
      <One />
      <Two />
      <Three />
      <Four />
    </div>
  )
}

export default CSSTest