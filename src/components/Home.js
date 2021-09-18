import "../css/home.css"
import { useHistory } from "react-router-dom"

export default function Home() {
   let history = useHistory()

   function onClick(){
      history.push("/")
   }

   return (
      <div id="page">
         <div id="navbar">
            <p id="logout" onClick={onClick}>Log Out</p>
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
      </div>
   )
}
