import Login from './components/Login'
import Home from './components/Home'
import AddClothing from './components/AddClothing'
import Weather from './components/Weather'
import SignUp from './components/SignUp'
import { HashRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
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
          <Route exact path="/addclothing">
            <AddClothing />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </HashRouter >
    );
  }
}

export default App
