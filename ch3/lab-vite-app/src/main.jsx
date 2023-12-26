import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//global css... css 파일을 직접 import, 모든 jsx 에서 다 이용
import 'bootstrap/dist/css/bootstrap.css'

import CSSTest from './lab1-style/Lab1_CSSTest.jsx'
import StyledComponent from './lab2-styled-component/Lab2_StyledComponent.jsx'
import PropTypeComponent from './lab3-props-type/Lab3_propType.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CSSTest /> */}
    {/* <StyledComponent /> */}
    <PropTypeComponent />
  </React.StrictMode>,
)
