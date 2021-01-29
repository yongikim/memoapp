import { ReactNode, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from 'contexts/AuthContext'

interface AuthProps {
  children?: ReactNode
}

export function Private(props: AuthProps): JSX.Element {
  const authContext = useContext(AuthContext)

  const { children } = props

  return <>{authContext.state.auth ? children : <Redirect to={'/login'} />}</>
}
