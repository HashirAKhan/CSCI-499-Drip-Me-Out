import "../css/navbar.css"
import { useEffect } from 'react'

export default function Navbar() {
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
            <a href="/" id="logout">Log Out</a>
         </div>
         <div id="navbar2">
            <a href="/home" id="home">Home</a>
            <a href="/weather" id="weather">Weather</a>
            <a href="/customize" id="customize">Customize</a>
            <a href="/closet" id="closet">Closet</a>
         </div>
      </>
   )
}