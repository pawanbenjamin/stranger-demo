import React from 'react'
import { useEffect, useState } from 'react'
import SignUp from './components/SignUp'
function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    console.log(token)
  }, [token])

  return (
    <div>
      <SignUp setToken={setToken} />
    </div>
  )
}

export default App
