import Login from "./components/pages/LoginPage";
import Home from "./components/pages/HomePage";
import AddClothing from "./components/pages/AddClothingPage";
import Weather from "./components/pages/WeatherPage";
import SignUp from "./components/pages/SignUpPage";
import Closet from "./components/pages/ClosetPage";
import ViewOutfit from "./components/pages/ViewOutfitPage";
import GenerateOutfit from "./components/pages/GenerateOutfitPage";
import ViewEdit from "./components/pages/ViewEditPage";
import SaveOutfit from "./components/pages/SaveOutfitPage";
import Customize from "./components/pages/CustomizePage";
import TopLayer1 from "./components/pages/TopLayer1Page";
import ShoeLayer from "./components/pages/ShoeLayerPage";
import BottomLayer1 from "./components/pages/BottomLayer1Page";
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

  handleLoginInfo = (email, password) => {
    this.setState({
      login: true,
      email: email,
      password: password,
    });

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      const closetJSON = JSON.parse(xhr.responseText);
      for (let i = 0; i < closetJSON.closet.length; i++) {
        const item = JSON.parse(closetJSON.closet[i]);
        const category = item.category;
        if (category === "Coats") {
          this.setState({
            top: [...this.state.top, item],
          });
        } else if (category === "Hoodies/Sweaters/Jackets") {
          this.setState({
            top: [...this.state.top, item],
          });
        } else if (category === "Long Sleeve T-shirt") {
          this.setState({
            top: [...this.state.top, item],
          });
        } else if (category === "Short Sleeve T-shirt") {
          this.setState({
            top: [...this.state.top, item],
          });
        } else if (category === "Sleeveless Top") {
          this.setState({
            top: [...this.state.top, item],
          });
        } else if (category === "Pants") {
          this.setState({
            bottom: [...this.state.bottom, item],
          });
        } else if (category === "Shorts/Skirt") {
          this.setState({
            bottom: [...this.state.bottom, item],
          });
        } else if (category === "Open Toed Shoes") {
          this.setState({
            shoes: [...this.state.shoes, item],
          });
        } else if (category === "Close Toed Shoes") {
          this.setState({
            shoes: [...this.state.shoes, item],
          });
        } else if (category === "Rain Boots") {
          this.setState({
            shoes: [...this.state.shoes, item],
          });
        } else if (category === "Dress") {
          this.setState({
            dress: [...this.state.dress, item],
          });
        }
      }
    });
    xhr.open("POST", "http://localhost:8080/closet");
    const data = JSON.stringify({
      email: localStorage.getItem("email"),
    });
    xhr.send(data);
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
          <Route exact path="/toplayer1">
            <TopLayer1 />
          </Route>
          <Route exact path="/bottomlayer1">
            <BottomLayer1 />
          </Route>
          <Route exact path="/shoelayer">
            <ShoeLayer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
