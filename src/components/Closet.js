import Navbar from './Navbar'
import { useEffect } from 'react'
import "../css/closet.css"

export default function Closet() {
   useEffect(() => {
      document.body.style.background = "url(https://i.ibb.co/6mxrnnY/rack.jpg)"
      document.body.style.backgroundSize = "cover"
      document.body.style.backgroundAttachment = "fixed"
      document.body.style.backgroundPosition = "center"
      
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
         
      });
      xhr.open("POST", "http://localhost:8080/closet");
      xhr.send();
   }, [])
   
   return (
      <>
         <Navbar />
         <div id="leftbox">
         </div>
         <div id="closetbutton">
            <a class="closet">Add Item</a>
         </div>
         <div id="closetbutton2"> 
            <a class="closet">View Saved Outfits</a>
         </div>
         {/* <div id="rightbox">
            text
         </div> */}
      </>
   )
}
