import React, { useState } from 'react'
import { useHttp } from './hooks/http.hook'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { Error } from './components/Error'
import { Account } from './components/Account'

function App() {
  const { request } = useHttp()
  const [currentPage, setCurrentPage] = useState('')
  const [user, setUser] = useState('')
  const [repoOwnerInfo, setrepoOwnerInfo] = useState({})

  const viewPage = page => {
    if (page === 'Error') {
      return <Error />
    }

    if (page === 'Account') {
      return <Account repoOwnerInfo={repoOwnerInfo} />
    }

    return <Home />
  }

  const changeHandler = e => setUser(e.target.value)

  const pressHandler = async e => {
    if (e.key === 'Enter') {
      const repoOwner = await request(`https://api.github.com/users/${user}`)

      if (repoOwner.message === 'Not Found') {
        return setCurrentPage('Error')
      }

      setCurrentPage('Account')
      setrepoOwnerInfo(repoOwner)
    }
  }

  return (
    <div className="wrapper">
      <Header
        changeHandler={changeHandler}
        pressHandler={pressHandler}
      />

      <div className="main">
        {viewPage(currentPage)}
      </div>

    </div>
  );
}

export default App
