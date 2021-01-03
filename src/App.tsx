import { createContext, useReducer, useEffect, useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from 'notes/Notes'
import NewNote from 'notes/NewNote'
import Auth from 'Auth'
import Login from 'Login'
import { authInitState, authReducer, AuthAction } from 'AuthContext'
import axios from 'axios'

export const AuthContext = createContext({
  state: authInitState,
  dispatch: Function() as React.Dispatch<AuthAction>,
})

function App(): JSX.Element {
  const [state, dispatch] = useReducer(authReducer, authInitState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Sub />
    </AuthContext.Provider>
  )
}

function Sub() {
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
    return <p>Loading...</p>
  }

  return (
    <Router>
      <Switch>
        <Route exact path={'/login'}>
          <Login />
        </Route>
        <Auth>
          <Route exact path="/new" component={NewNote} />
          <Route exact path="/" component={Notes} />
        </Auth>
      </Switch>
    </Router>
  )
}

export default App
