import { ReactNode, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from 'contexts/AuthContext'

interface AuthProps {
  children?: ReactNode
}

export function Private(props: AuthProps): JSX.Element {
  const authContext = useContext(AuthContext)

  if (authContext.state.loading) {
    return <p>loading...</p>
  }

  const { children } = props

  return <>{authContext.state.auth ? children : <Redirect to={'/login'} />}</>
}
