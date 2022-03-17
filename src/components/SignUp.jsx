import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { registerUser } from '../api'

const SignUp = ({ setToken }) => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h2>Sign up!</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const result = await registerUser(username, password)
          localStorage.setItem('token', result.data.token)
          setToken(result.data.token)
          history.push('/posts')
        }}
      >
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
