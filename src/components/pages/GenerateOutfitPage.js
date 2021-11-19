import { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar'
import Button from '../Button.js';
import ItemImages from "../ItemImages"
import "../../css/generateoutfitpage.css"

export default function GenerateOutfit(){

  //const rendered_value = rendered.current;

  const [itemimages, setItemImages] = useState([]);

  const [itemids, setItemIds] = useState([]);

  const [itemlabels, setItemLabels] = useState([]);

  const [viewitemimage, setViewItemImage] = useState('');

  const [viewitemid, setViewItemId] = useState('');

  function onChange(id) {
     setViewItemId(id);
  }

  useEffect(() => {
     //https://i.ibb.co/h8RZwhY/base.jpg
     //https://i.ibb.co/KVTT444/globe.jpg
     document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
     document.body.style.backgroundSize = "cover"
     document.body.style.backgroundAttachment = "fixed"
     document.body.style.backgroundPosition = "center"
     setTempField();
     setDropDown();
     // return () => {
     //    document.body.style.background = "url('../closet_image.jpg')"
     // }
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
      let rain = ['rain','drizzle','thunderstorm', 'mist'];
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

    function onClick(){
      let item_image_array = [];
      let item_id_array = [];
      let item_label_array = [];
      let temp = parseInt(document.getElementById("temp-input").value);
      let condition = document.getElementById("weather-dropdown").value;
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        //Code to display generated outfit goes here

        let temp = JSON.parse(xhr.response);
        let data = temp["outfit"];
        for(let i = 0; i < data.length; i++){
          const object = data[i];
          item_id_array.push(object["id"]);
          item_image_array.push(`data:image/png;base64,${object["image"]}`);
          item_label_array.push(object["label"]);
        }

        // item_id_array.forEach(itemid => setItemIds(oldArray => [...oldArray, itemid]));
        //
        // item_image_array.forEach(itemimage => setItemImages(oldArray => [...oldArray, itemimage]));
        setItemLabels(item_label_array)
        setItemIds(item_id_array);
        setItemImages(item_image_array);

        console.log(xhr.response)
      });
      const data = JSON.stringify({
        "user": localStorage.getItem('email'),
        "temp": temp,
        "condition": condition
      });
      console.log(data);
      xhr.open("POST", "http://localhost:8080/generate");
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
                <button onClick={onClick}>Drip Me Out!</button>
              </div>

            </div>

            <div id="display-div">
              <div id="outfit-display">
                <ItemImages itemimages={itemimages} itemids={itemids} itemlabels={itemlabels} onChange={onChange}/>
              </div>

              <div id ="save-button">
                <button> Save Outfit </button> 
              </div>

            </div>

          </div>
      </>
    )

  }
