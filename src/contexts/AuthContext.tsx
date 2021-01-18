import { ReactNode, createContext, useReducer } from 'react'
import { authReducer } from 'reducers/AuthReducer'

interface AuthProps {
  children?: ReactNode
}

export interface AuthState {
  auth: boolean
  loading: boolean
}

export interface AuthAction {
  type: AuthActionType
}

type AuthActionType = 'LOADING' | 'AUTHORIZED' | 'UNAUTHORIZED'

export const authInitState = {
  auth: false,
  loading: true,
}

export const AuthContext = createContext({
  state: authInitState,
  dispatch: Function() as React.Dispatch<AuthAction>,
})

export function AuthContextProvider(props: AuthProps): JSX.Element {
  const [state, dispatch] = useReducer(authReducer, authInitState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}
