import "../css/navbar.css"
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
   const history = useHistory();
   function onClickHome() {
      history.push("/home");
   }
   function onClickWeather() {
      history.push("/weather")
   }
   function onClickCustomize() {
      history.push("/customize")
   }
   function onClickCloset() {
      history.push("/clothingpage")
   }

   useEffect(() => {
      document.body.style.background = "url(https://i.ibb.co/KVTT444/globe.jpg)"
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
         <div id="navbar2">
            <a href="/home" id="home">Home</a>
            <a href="/weather" id="weather">Weather</a>
            <a href="/customize" id="customize" onClick={onClickCustomize}>Customize</a>
            <a href="/clothingpage" id="closet" onClick={onClickCloset}>Closet</a>
         </div>
      </>
   )
}