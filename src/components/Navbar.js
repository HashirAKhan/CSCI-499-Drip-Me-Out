import "../css/navbar.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

export default function Navbar() {
   // const history = useHistory();
   // function onClickHome() {
   //    history.push("/home");
   // }
   // function onClickWeather() {
   //    history.push("/weather");
   // }
   // function onClickCustomize() {
   //    history.push("/customize")
   // }
   // function onClickCloset() {
   //    history.push("/closet")
   // }

   useEffect(() => {
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
            {/* <a href="/#/" id="logout">Log Out</a> */}
            {/* Use "CSCI-499-Drip-Me-Out/" before href link when using BrowserRouter */}
            <Link to="/" id="logout">Logout</Link>
         </div>
         <div id="navbar2">
            {/* Use "CSCI-499-Drip-Me-Out/" before href link when using BrowserRouter */}
            <Link to="/home" id="home">Home</Link>
            <Link to="/generateoutfit" id="generate">Generate</Link>
            <Link to="/customize" id="customize">Customize</Link>
            <Link to="/closet" id="closet">Closet</Link>
            {/* <a href="/#/home" id="home">Home</a>
            <a href="/#/weather" id="weather">Weather</a>
            <a href="/#/customize" id="customize">Customize</a>
            <a href="/#/closet" id="closet">Closet</a>
            <Link to="/home">Home</Link> */}
         </div>
      </>
   )
}
