// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '@dnb/eufemia/style'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
