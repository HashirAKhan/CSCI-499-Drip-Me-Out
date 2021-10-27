import "../css/homepage.css"
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import dripIcon from "../images/dripmeouticon.png"
import closetImage from "../images/customimage.png"
import wardrobeImage from '../images/wardrobeicon.png'

export default function Home() {
   const history = useHistory();
   function onClickWeather() {
      history.push(`/weather`);
   }
   function onClickCustomize() {
      history.push("/customize")
   }
   function onClickCloset() {
      history.push("/closet")
   }
   useEffect(() => {
      //https://i.ibb.co/h8RZwhY/base.jpg
      //https://i.ibb.co/T2JzMkn/anotherrack.jpg
      document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
      document.body.style.backgroundSize = "cover"
      document.body.style.backgroundAttachment = "fixed"
      document.body.style.backgroundPosition = "center"
      return () => {
         document.body.style.background = "url('../closet_image.jpg')"
      }
   }, []);

   return (
      <>
         <div id="navbar">
            <a href="/" id="logout">Log Out</a>
         </div>
         <div class="boxes" id="box1" onClick={onClickWeather}>
            <p>Weather</p>
            <img id="drip-icon" src= {dripIcon} />
            <p class="smalltext">Enter zip code to see current weather with conditons, high, and low</p>
         </div>
         <div class="boxes" id="box2" onClick={onClickCustomize}>
            <p>Customize an Outfit</p>
            <img src= {closetImage} />
            <p class="smalltext">Create your own outfit based on items you have in your closet</p>
         </div>
         <div class="boxes" id="box3" onClick={onClickCloset}>
            <p>My Closet</p>
            <img src= {wardrobeImage} />
            <p class="smalltext">Browse and add items to your very own virtual closet</p>
         </div>
         <div id="dripmeout">
            <p>Drip Me Out is lorem ipsum dolor sit amet.</p>
         </div>
      </>
   )
}
