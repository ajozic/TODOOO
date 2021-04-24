import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login/Login'
import TodoMain from "./Todo/TodoMain";

const App = () => {
  return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/todo">
              <TodoMain />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}
export default App;
