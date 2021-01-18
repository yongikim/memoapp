import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from 'notes/Notes'
import NewNote from 'notes/NewNote'
import { Private } from 'Private'
import Login from 'Login'
import { AuthContext } from 'contexts/AuthContext'
import AuthService from 'services/AuthService'

function MemoApp(): JSX.Element {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    AuthService.getUserId()
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
        <Private>
          <Route exact path="/new" component={NewNote} />
          <Route exact path="/" component={Notes} />
        </Private>
      </Switch>
    </Router>
  )
}

export default MemoApp
