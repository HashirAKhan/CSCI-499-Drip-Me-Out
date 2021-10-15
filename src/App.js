import Login from './components/Login'
import Home from './components/Home'
import AddClothing from './components/AddClothing'
import Weather from './components/Weather'
import SignUp from './components/SignUp'
import Closet from './components/Closet'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
          <Route exact path="/closet">
            <Closet />
          </Route>
          <Route exact path="/addclothing">
            <AddClothing />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router >
    );
  }
}

export default App
