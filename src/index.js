import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './components/Account.css'
import './components/Error.css'
import './components/Header.css'
import './components/Home.css'
import './components/Loader'
import './components/Pagination.css'
import './components/ReposEmpty.css'

import App from './App'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);