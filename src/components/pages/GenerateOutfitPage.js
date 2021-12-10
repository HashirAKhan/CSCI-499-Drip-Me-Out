import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Button from "../Button.js";
import ItemImages from "../ItemImages";
import SaveItemModal from "../SaveItemModal";
import "../../css/generateoutfitpage.css";

export default function GenerateOutfit() {
  //const rendered_value = rendered.current;

  const [itemimages, setItemImages] = useState([]);
  const [itemids, setItemIds] = useState([]);
  const [itemlabels, setItemLabels] = useState([]);
  const [viewitemimage, setViewItemImage] = useState("");
  const [viewitemid, setViewItemId] = useState("");
  const [show, setShow] = useState(false);


  function onChange(id) {
    setViewItemId(id);
  }

  useEffect(() => {
    setTempField();
    setDropDown();
  }, []);

  //@func: sets the temperature field to the default temperature value
  //       returned by the API response
  function setTempField() {
    let temp_field = document.getElementById("temp-input");
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      if (
        xhr.responseText ===
          "400 Nothing to geocode. Try changing zipcode under profile." ||
        xhr.responseText === "404 city not found"
      ) {
        alert(xhr.responseText);
        return;
      }
      let tempData = JSON.parse(xhr.response);
      temp_field.defaultValue = (tempData["low"] + tempData["high"]) / 2;
    });
    const data = JSON.stringify({ zipcode: localStorage.getItem("zipcode") });
    xhr.open("POST", "http://localhost:8080/zipcode");
    xhr.send(data);
  }

  //@func: sets the drop down menu to default value of the weather condition
  //       returned in the API response
  function setDropDown() {
    var weather_dropdown = document.getElementById("weather-dropdown");
    let xhr = new XMLHttpRequest();
    let rain = ["rain", "drizzle", "thunderstorm", "mist"];
    xhr.addEventListener("load", () => {
      let tempData = JSON.parse(xhr.response);
      console.log(tempData["status"]);
      if (rain.includes(tempData["status"])) {
        weather_dropdown.selectedIndex = 1;
      } else if (tempData["status"] == "clear") {
        weather_dropdown.selectedIndex = 0;
      } else if (tempData["status"] == "snow") {
        weather_dropdown.selectedIndex = 2;
      } else if (tempData["status"] == "clouds") {
        weather_dropdown.selectedIndex = 3;
      } else {
        weather_dropdown.selectedIndex = -1;
      }
    });

    const data = JSON.stringify({ zipcode: localStorage.getItem("zipcode") });
    xhr.open("POST", "http://localhost:8080/zipcode");
    xhr.send(data);
  }

  //@func: sets the item image, item id, and item label array, and sends the users
  //       email and the filter preferences, and filter values to the backend
  function onClick() {
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
      for (let i = 0; i < data.length; i++) {
        const object = data[i];
        item_id_array.push(object["id"]);
        item_image_array.push(`data:image/png;base64,${object["image"]}`);
        item_label_array.push(object["label"]);
      }

      setItemLabels(item_label_array);
      setItemIds(item_id_array);
      setItemImages(item_image_array);

      console.log(xhr.response);
    });

    //sending JSON object with email and checkbox values
    const data = JSON.stringify({
      user: localStorage.getItem("email"),
      temp_checkbox: document.getElementById("temp").checked,
      temp_value: document.getElementById("temp-input").value,
      weather_checkbox: document.getElementById("weather-condition").checked,
      weather_value: document.getElementById("weather-dropdown").value,
      color_checkbox: document.getElementById("color-selection").checked,
      color_value: document.getElementById("color-dropdown").value,
      accessories_checkbox: document.getElementById("accessories-filter").checked,
    });
    console.log(data);
    xhr.open("POST", "http://localhost:8080/generate");
    xhr.send(data);
  }

  // @func: this function opens the modal for saving an outfit
  function onClickSaveOutfit() {
    setShow(true);
  }

  // @func: this function closes modal if the user clicks out of it
  function exitModal() {
    setShow(false);
  }

  return (
    <>
      <Navbar />

      <div id="generate-outfit">
        <div id="filters-container">
          <form>
            <h1> Filter By: </h1>
            <input type="checkbox" id="temp" />
            <input
              type="number"
              id="temp-input"
              for="temp"
              min="-100"
              max="150"
            />{" "}
            °F
            <input type="checkbox" id="weather-condition" />
            <select id="weather-dropdown" for="weather-condition">
              <option value="clear"> Clear </option>
              <option value="rain"> Rain </option>
              <option value="snow"> Snow </option>
              <option value="clouds"> Clouds </option>
            </select>
            <input type="checkbox" id="color-selection" />
            <select id="color-dropdown" for="color-selection">
              <option value="select">Select</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Brown">Brown</option>
              <option value="Gold">Gold</option>
              <option value="Green">Green</option>
              <option value="Grey">Grey</option>
              <option value="Multi">Multi</option>
              <option value="Navy">Navy</option>
              <option value="Neutral">Neutral</option>
              <option value="No Color">No Color</option>
              <option value="Orange">Orange</option>
              <option value="Pink">Pink</option>
              <option value="Purple">Purple</option>
              <option value="Red">Red</option>
              <option value="Silver">Silver</option>
              <option value="White">White</option>
              <option value="Yellow">Yellow</option>
            </select>
            <input type="checkbox" id="accessories-filter" />
            <label for="accessories-filter"> Accessories </label>
          </form>

          <div id="drip-button">
            <button onClick={onClick}>Drip Me Out!</button>
          </div>
        </div>

        <div id="display-div">
          <div id="outfit-display">
            <ItemImages
              itemimages={itemimages}
              itemids={itemids}
              itemlabels={itemlabels}
              onChange={onChange}
            />
          </div>

          <div id="save-button">
            <button onClick={onClickSaveOutfit}> Save Outfit </button>
          </div>
        </div>
      </div>

      <SaveItemModal show={show} onClose={exitModal} outfits={itemids} />
    </>
  );
}
