import React from 'react'
import { useEffect, useState } from 'react'
import CreatePost from './components/CreatePost'
import Posts from './components/Posts'
import SignUp from './components/SignUp'
function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    console.log('Current Token in State: ', token)
  }, [token])

  return (
    <div>
      <SignUp setToken={setToken} />
      <Posts token={token} />
      <CreatePost />
    </div>
  )
}

export default App
