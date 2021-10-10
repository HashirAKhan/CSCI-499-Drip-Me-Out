import "../css/weather.css"
import Navbar from "./Navbar"
import { useEffect } from 'react'


export default function Weather() {
   useEffect(() => {
      document.body.style.background = "url(https://i.ibb.co/KVTT444/globe.jpg)"
      document.body.style.backgroundSize = "cover"
      document.body.style.backgroundAttachment = "fixed"
      document.body.style.backgroundPosition = "center"
      return () => {
         document.body.style.background = "url('../closet_image.jpg')"
      }
   }, [])

   function onClick(){
      let input = document.getElementById("userinput").value;

      let p = document.querySelector("p");
      let input_element = document.getElementById("userinput");
      let button = document.querySelector("button");
      let br = document.querySelector("br");
      br.remove();
      br = document.querySelector("br");
      br.remove();
      if (p && input_element && button)
      {
         button.remove();
         p.remove();
         input_element.remove();
         let weather = document.createElement("p");

         let xhr = new XMLHttpRequest();
         xhr.addEventListener("load", () => {
            weather.innerText = xhr.responseText;
         });
         xhr.open("POST", "http://localhost:8080/zipcode");
         xhr.send(input);

         //weather.innerText = "The weather is sunny with a low of 89 and high of 93.";
         
         let div = document.getElementById("body");
         div.appendChild(weather);
         //document.
         let create_p = document.createElement("p");
         div.appendChild(create_p);
      }
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