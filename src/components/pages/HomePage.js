import "../../css/homepage.css";
import { useHistory, Link } from "react-router-dom";
import dripIcon from "../../images/dripicon.png";
import closetImage from "../../images/customicon.png";
import wardrobeImage from "../../images/closeticon.png";

export default function Home() {
  const history = useHistory();
  function onClickWeather() {
    history.push(`/generateoutfit`);
  }
  function onClickCustomize() {
    history.push("/customize");
  }
  function onClickCloset() {
    history.push("/closet");
  }

  return (
    <>
      <div id="navbar">
        <Link to="/profile" className="navBarLink">
          Profile
        </Link>
        <a href="/" id="logout" className="navBarLink">
          Log out
        </a>
      </div>
      <div class="boxes" id="box1" onClick={onClickWeather}>
        <p>Drip Me Out</p>
        <img id="drip-icon" src={dripIcon} />
        <p class="smalltext">
          Generate an outfit based on your clothes and the current weather in
          the local area
        </p>
      </div>
      <div class="boxes" id="box2" onClick={onClickCustomize}>
        <p>Customize an Outfit</p>
        <img src={closetImage} />
        <p class="smalltext">
          Create your own outfit based on items you have in your closet
        </p>
      </div>
      <div class="boxes" id="box3" onClick={onClickCloset}>
        <p>My Closet</p>
        <img src={wardrobeImage} />
        <p class="smalltext">
          Browse and add items to your very own virtual closet
        </p>
      </div>
    </>
  );
}
