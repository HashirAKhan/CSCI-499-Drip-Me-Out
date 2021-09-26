import Header from './components/Header'
import ClothingForm from './components/ClothingForm'
import ClothingImage from './components/ClothingImage'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
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
            <Header />
            <ClothingForm />
            <ClothingImage />
          </div>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
