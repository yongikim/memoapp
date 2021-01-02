export const authInitState = {
  auth: false,
  loading: true,
}

interface AuthState {
  auth: boolean
  loading: boolean
}

type AuthActionType = 'LOADING' | 'AUTHORIZED' | 'UNAUTHORIZED'

export interface AuthAction {
  type: AuthActionType
}

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
