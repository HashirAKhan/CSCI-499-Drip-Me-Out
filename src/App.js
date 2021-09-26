import Header from './components/Header'
import ClothingForm from './components/ClothingForm'
import ClothingImage from './components/ClothingImage'
import Login from './components/Login'
import Home from './components/Home'
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
        <Route exact path="/clothingpage">
          <div className='container'>
          <div id="navbar">
             <a href="/" id="logout">Log Out</a>
          </div>
            <ClothingForm />
            <ClothingImage />
          </div>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
