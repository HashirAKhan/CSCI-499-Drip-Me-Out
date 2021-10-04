import "../css/weather.css"
import Navbar from "./Navbar"
import Button from "./Button"

export default function Weather() {
   function onClick(){
      let input = document.getElementById("userinput").value;
   }
   
   return (
      <>
         <Navbar />
         <div id="body">
            <p>Enter zip code</p>
            <input id="userinput"></input>
            <br></br>
            <br></br>
            <button onClick={onClick}>Submit</button>
            <p></p>
         </div>
      </>

   )
}