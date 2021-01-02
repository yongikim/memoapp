import { createContext, useReducer } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from 'notes/Notes'
import NewNote from 'notes/NewNote'
import Auth from 'Auth'
import Login from 'Login'
import { authInitState, authReducer, AuthAction } from 'AuthContext'

export const AuthContext = createContext({
  state: authInitState,
  dispatch: Function() as React.Dispatch<AuthAction>,
})

function App(): JSX.Element {
  const [state, dispatch] = useReducer(authReducer, authInitState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path={'/login'}>
            {/* TODO: wrap in <UserOnly /> */}
            <Login />
          </Route>
          <Auth>
            <Route exact path="/new" component={NewNote} />
            <Route exact path="/" component={Notes} />
          </Auth>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
