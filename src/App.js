import Login from './components/Login'
import Home from './components/Home'
import AddClothing from './components/AddClothing'
import { HashRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/addclothing">
          <AddClothing />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
