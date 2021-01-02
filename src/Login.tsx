import axios from 'axios'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from 'App'

type UsersResponse = User[]

interface User {
  name: string
}

function Login(): JSX.Element {
  const authContext = useContext(AuthContext)
  const [userNames, setUserNames] = useState<string[]>([])
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

  const handleUsersButtonClick = (): void => {
    const url = '/users'
    const config = {
      withCredentials: true,
    }

    client.get<UsersResponse>(url, config).then((res) => {
      const users = res.data
      const userNames = users.map((user) => user.name)

      setUserNames(userNames)
    })
  }

  return (
    <>
      <p>{authContext.state.auth ? 'Logged in.' : 'Please login.'}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          value={email}
          placeholder="email"
          onChange={handleEmailChange}
        />
        <input
          name="password"
          type="text"
          value={password}
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button type="submit">login</button>
      </form>
      <div>
        <button onClick={handleUsersButtonClick}>Users</button>
        <p>{userNames}</p>
      </div>
      <Link to={'/'}>link</Link>
    </>
  )
}

export default Login
