import "../css/home.css"
import { useEffect } from 'react'

export default function Home() {

   useEffect(() => {
      document.body.style.background = "url(https://i.ibb.co/T2JzMkn/anotherrack.jpg)"
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
         <div class="boxes" id="box1">
            <p>Drip Me Out</p>
            <p class="smalltext">Have an outfit created for you based on the weather and your preferences</p>
         </div>
         <div class="boxes" id="box2">
            <p>Customize an Outfit</p>
            <p class="smalltext">Create your own outfit based on items you have in your closet</p>
         </div>
         <div class="boxes" id="box3">
            <p>My Closet</p>
            <p class="smalltext">Browse and add items to your very own virtual closet</p>
         </div>
         <div id="dripmeout">
            <p>Drip Me Out is lorem ipsum dolor sit amet.</p>
         </div>
      </>
   )
}
