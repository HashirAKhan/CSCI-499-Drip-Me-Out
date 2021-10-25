import Navbar from './Navbar'
import Button from './Button.js';
import "../css/generateoutfitpage.css"

export default function GenerateOutfit(){
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
              <select name="weather-dropdown" for="weather-condition">
                <option value="sunny"> Sunny </option>
                <option value="rainy"> Rainy </option>
                <option value="windy"> Windy </option>
                <option value="cloudy"> Cloudy </option>
                <option value="snowy"> Snowy </option>
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
