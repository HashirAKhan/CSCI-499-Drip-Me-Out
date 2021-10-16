import Login from './components/LoginPage'
import Home from './components/HomePage'
import AddClothing from './components/AddClothingPage'
import Weather from './components/WeatherPage'
import SignUp from './components/SignUpPage'
import Closet from './components/ClosetPage'
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
