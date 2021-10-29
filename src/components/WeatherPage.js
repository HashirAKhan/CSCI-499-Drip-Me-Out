import "../css/weatherpage.css"
import Navbar from "./Navbar"
import { useEffect } from 'react'


export default function Weather() {
   useEffect(() => {
      //https://i.ibb.co/h8RZwhY/base.jpg
      //https://i.ibb.co/KVTT444/globe.jpg
      document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
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
            console.log(xhr.response)
            let weatherData = JSON.parse(xhr.response)
            let weatherText = `The weather is ${weatherData["status"]} with a low of ${weatherData["low"]} and high of ${weatherData["high"]}.`
            weather.innerText = weatherText;
         });
         const data = JSON.stringify({
            "zipcode":input,
            "email": localStorage.getItem('email')
         });
         xhr.open("POST", "http://localhost:8080/zipcode");
         xhr.send(data);

         let div = document.getElementById("body");
         div.appendChild(weather);

         div.style.marginTop = "0";

         let load = document.createElement("p");
         load.innerText = "Loading outfit...";
         load.style.fontSize = "smaller"; 
         load.style.color = "white";
         div.appendChild(load);
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
