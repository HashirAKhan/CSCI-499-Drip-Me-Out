import Header from './components/Header'
import ClothingForm from './components/ClothingForm'
import ClothingImage from './components/ClothingImage'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/clothingpage">
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
    </Router>
  )
}

export default App
