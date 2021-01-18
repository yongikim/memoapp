import { AuthAction, AuthState } from 'contexts/AuthContext'

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'AUTHORIZED':
      return {
        ...state,
        auth: true,
        loading: false,
      }
    case 'UNAUTHORIZED':
      return {
        ...state,
        auth: false,
        loading: false,
      }
    default:
      return state
  }
}
