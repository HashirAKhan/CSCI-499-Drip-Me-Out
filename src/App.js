import AddClothing from "./components/pages/AddClothingPage";
import Closet from "./components/pages/ClosetPage";
import Customize from "./components/pages/CustomizePage";
import GenerateOutfit from "./components/pages/GenerateOutfitPage";
import Home from "./components/pages/HomePage";
import Layer from "./components/pages/LayerPage";
import Login from "./components/pages/LoginPage";
import Profile from "./components/pages/ProfilePage";
import SaveOutfit from "./components/pages/SaveOutfitPage";
import SignUp from "./components/pages/SignUpPage";
import ViewEdit from "./components/pages/ViewEditPage";
import ViewOutfit from "./components/pages/ViewOutfitPage";
import Weather from "./components/pages/WeatherPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      email: "",
      password: "",
      top: [],
      bottom: [],
      shoes: [],
      dress: [],
      layer: "",
    };
  }

  handleEmail = (email) => {
    this.setState({
      login: true,
      email: email,
    });
  };

  handlePassword = (password) => {
    this.setState({
      password: password,
    });
    alert(this.state);
  };

  // Child = () => {
  //   let layer = useParams();
  //   // this.setState({
  //   //   layer: layer,
  //   // });
  // };

  handleLoginInfo = (email, password) => {
    this.setState({
      login: true,
      email: email,
      password: password,
    });
    localStorage.setItem(`toplayer`, "");
    localStorage.setItem(`bottomlayer`, "");
    localStorage.setItem(`shoelayer`, "");
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login loginInfo={this.handleLoginInfo} />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/closet">
            <Closet user={this.state} />
          </Route>
          <Route exact path="/addclothing" component={AddClothing} />
          <Route exact path="/signup">
            <SignUp email={this.handleEmail} password={this.handlePassword} />
          </Route>
          <Route exact path="/viewoutfits">
            <ViewOutfit user={this.state} />
          </Route>
          <Route exact path="/viewedit" component={ViewEdit} />
          <Route exact path="/generateoutfit" component={GenerateOutfit} />
          <Route exact path="/saveoutfit" component={SaveOutfit} />
          <Route exact path="/customize">
            <Customize user={this.state.email} />
          </Route>
          <Route exact path="/layer/:layer">
            <Layer info={this.state} />
          </Route>
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
