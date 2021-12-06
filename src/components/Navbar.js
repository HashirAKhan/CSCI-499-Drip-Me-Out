import "../css/navbar.css";
import { Link } from "react-router-dom";
import userIcon from "../images/usericon.png";

export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <Link to="/" className="navBarLink">
          Log out
        </Link>
      </div>
      <div id="navbar2">
        <Link to="/home" id="home">
          Home
        </Link>
        <Link to="/generateoutfit" id="generate">
          Generate
        </Link>
        <Link to="/customize" id="customize">
          Customize
        </Link>
        <Link to="/closet" id="closet">
          Closet
        </Link>
        <Link to="/profile" id="user">
          Profile
        </Link>
      </div>
    </>
  );
}
