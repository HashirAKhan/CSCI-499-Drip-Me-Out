import { useEffect } from 'react';
import Navbar from './Navbar'
import Button from './Button.js';
import "../css/generateoutfitpage.css"

export default function GenerateOutfit(){

  useEffect(() => {
     //https://i.ibb.co/h8RZwhY/base.jpg
     //https://i.ibb.co/KVTT444/globe.jpg
     document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
     document.body.style.backgroundSize = "cover"
     document.body.style.backgroundAttachment = "fixed"
     document.body.style.backgroundPosition = "center"
     setTempField();
     setDropDown();
     return () => {
        document.body.style.background = "url('../closet_image.jpg')"
     }
  }, []);

    function setTempField(){
      let temp_field = document.getElementById("temp-input");
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        let tempData = JSON.parse(xhr.response)
        temp_field.defaultValue = (tempData["low"] + tempData["high"])/2;
      });
      const data = JSON.stringify({"zipcode":localStorage.getItem('zipcode')})
      xhr.open("POST", "http://localhost:8080/zipcode");
      xhr.send(data);
    }

    function setDropDown(){
      var weather_dropdown = document.getElementById("weather-dropdown");
      let xhr = new XMLHttpRequest();
      let rain = ['rain','drizzle','thunderstorm'];
      xhr.addEventListener("load", () => {
        let tempData = JSON.parse(xhr.response)
        console.log(tempData["status"])
        if (rain.includes(tempData["status"])){
          weather_dropdown.selectedIndex = 1;
        }
        else if(tempData["status"] == "clear"){
          weather_dropdown.selectedIndex = 0;
        }
        else if(tempData["status"] == "snow"){
          weather_dropdown.selectedIndex = 2;
        }
        else if(tempData["status"] == "clouds"){
          weather_dropdown.selectedIndex = 3;
        }
        else{
          weather_dropdown.selectedIndex = -1;
        }
      });

      const data = JSON.stringify({"zipcode":localStorage.getItem('zipcode')})
      xhr.open("POST", "http://localhost:8080/zipcode");
      xhr.send(data);

    }



    return(
      <>

        <Navbar />

          <div id="generate-outfit">

            <div id="filters-container">
              <form>

                <h1> Filter By: </h1>
                <input type="checkbox" id="temp" />
                <input type="number" id="temp-input" for="temp" min="-100" max="150"/> °F


                <input type="checkbox" id="weather-condition" />
                <select id="weather-dropdown" for="weather-condition">
                  <option value="clear"> Clear </option>
                  <option value="rain"> Rain </option>
                  <option value="snow"> Snow </option>
                  <option value="clouds"> Clouds </option>
                </select>

              </form>

              <div id="drip-button">
                <Button text="Drip Me Out!" />
              </div>

            </div>

            <div id="outfit-display">
              <div>
                <span> <img src="https://bit.ly/3pCSazN"/> </span>
                <span> White T-shirt </span>
              </div>

              <div>
                <span> <img src="https://bit.ly/3pCzO1Q"/> </span>
                <span> Black Hoodie </span>
              </div>

              <div>
                <span> <img src="https://bit.ly/3nsWBdK"/> </span>
                <span> Blue Jeans </span>
              </div>

              <div>
                <span> <img src="https://bit.ly/3jxVVTl"/> </span>
                <span> Red Jacket </span>
              </div>

            </div>

          </div>
      </>
    )

  }
