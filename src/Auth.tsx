import { ReactNode, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from 'App'

interface AuthProps {
  children?: ReactNode
}

function Auth(props: AuthProps): JSX.Element {
  const authContext = useContext(AuthContext)

  const getUserId = () => {
    const client = axios.create({
      baseURL: process.env['REACT_APP_API_BASE_URL'],
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    })
    const url = '/auth/user_id'
    const config = {
      withCredentials: true,
    }

    return client.get(url, config)
  }

  useEffect(() => {
    getUserId()
      .then(() => {
        authContext.dispatch({ type: 'AUTHORIZED' })
      })
      .catch(() => {
        authContext.dispatch({ type: 'UNAUTHORIZED' })
      })
  }, [])

  if (authContext.state.loading) {
    return <p>loading...</p>
  }

  const { children } = props

  return <>{authContext.state.auth ? children : <Redirect to={'/login'} />}</>
}

export default Auth
