import Header from './components/Header'
import ClothingForm from './components/ClothingForm'
import ClothingImage from './components/ClothingImage'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/CSCI-499-Drip-Me-Out/">
          <Login />
        </Route>
        <Route path="/CSCI-499-Drip-Me-Out/home">
          <Home />
        </Route>
        <Route path="/CSCI-499-Drip-Me-Out/clothingpage">
          <div className='container'>
            <Header />
            <ClothingForm />
            <ClothingImage />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
