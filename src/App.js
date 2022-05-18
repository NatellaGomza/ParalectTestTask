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
  const [candidateInfo, setCandidateInfo] = useState({})

  const viewPage = page => {
    if (page === 'Error') {
      return <Error />
    }

    if (page === 'Account') {
      return <Account candidateInfo={candidateInfo} />
    }

    return <Home />
  }

  const changeHandler = e => setUser(e.target.value)

  const pressHandler = async e => {
    if (e.key === 'Enter') {
      const candidate = await request(`https://api.github.com/users/${user}`)

      if (candidate.message === 'Not Found') {
        return setCurrentPage('Error')
      }

      setCurrentPage('Account')
      setCandidateInfo(candidate)
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
