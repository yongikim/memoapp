import axios from 'axios'
import { useState, useContext } from 'react'
import { AuthContext } from 'App'
import { Redirect } from 'react-router-dom'

function Login(): JSX.Element {
  const authContext = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const url = '/auth'
    const data = {
      email,
      password,
    }
    const config = {
      withCredentials: true,
    }

    client
      .post(url, data, config)
      .then(() => {
        authContext.dispatch({ type: 'AUTHORIZED' })
      })
      .catch(() => {
        authContext.dispatch({ type: 'UNAUTHORIZED' })
      })
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setEmail(e.currentTarget.value)
  }

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault()
    setPassword(e.currentTarget.value)
  }

  const client = axios.create({
    baseURL: process.env['REACT_APP_API_BASE_URL'],
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  })

  if (authContext.state.auth) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>MemoApp</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="email"
                type="email"
                value={email}
                placeholder="email"
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                value={password}
                placeholder="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div>
              <button type="submit">login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
