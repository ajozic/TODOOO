import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login/Login'
import SignUp from "./SignUp/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import TodoTest from "./Plain/TodoTest";

const App = () => {
  return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/test">
              <TodoTest />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}
export default App;
