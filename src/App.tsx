import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from 'notes/Notes'
import NewNote from 'notes/NewNote'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/new" component={NewNote} />
      </Switch>
    </Router>
  )
}

export default App
