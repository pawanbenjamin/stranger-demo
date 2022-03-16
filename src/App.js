import React from 'react'
import { useEffect, useState } from 'react'

import Posts from './components/Posts'
import SignUp from './components/SignUp'

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    if (localStorageToken) {
      setToken(localStorageToken)
    }
  }, [token])

  return (
    <div>
      <SignUp setToken={setToken} />
      <Posts token={token} />
    </div>
  )
}

export default App
