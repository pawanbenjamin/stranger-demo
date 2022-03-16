import React from 'react'
import { useEffect, useState } from 'react'
import { fetchMe } from './api'

import Posts from './components/Posts'
import SignUp from './components/SignUp'

function App() {
  const [token, setToken] = useState('')
  const [userObj, setUserObj] = useState({})

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    async function getMe() {
      const data = await fetchMe(localStorageToken)
      setUserObj(data.data)
    }
    if (localStorageToken) {
      setToken(localStorageToken)
      getMe()
    }
  }, [token])

  console.log(userObj)

  return (
    <div>
      <SignUp setToken={setToken} />
      <Posts token={token} userObj={userObj} />
    </div>
  )
}

export default App
