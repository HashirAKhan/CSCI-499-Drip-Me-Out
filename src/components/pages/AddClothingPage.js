import "../../css/addclothingpage.css";
import Button from "../Button.js";
import Navbar from "../Navbar";
import { useEffect } from "react";
// import Header from './Header'

const AddClothing = () => {
  useEffect(() => {
    document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <div id="clothingform">
          <div id="innerdiv">
            <form id="clothing-form">
              <div class="clothing-fields">
                <label id="label-field" for="clothing-label">
                  {" "}
                  Clothing Label:{" "}
                </label>
                <br />
                <input type="input" id="clothing-label" required />
              </div>

              <div class="clothing-fields">
                <label id="category-field" for="clothing-category">
                  {" "}
                  Category:{" "}
                </label>
                <br />
                {/* <input type="input" id="clothing-category" required /> */}
                <select id="category">
                  <option value="select">Select</option>
                  <option value="Coats">Coats</option>
                  <option value="Hoodies/Sweaters/Jackets">Hoodies/Sweaters/Jackets</option>
                  <option value="Long Sleeve T-shirt">Long Sleeve T-shirt</option>
                  <option value="Short Sleeve T-shirt">Short Sleeve T-shirt</option>
                  <option value="Sleeveless Top">Sleeveless Top</option>
                  <option value="Pants">Pants</option>
                  <option value="Dress">Dress</option>
                  <option value="Shorts/Skirt">Shorts/Skirt</option>
                  <option value="Close Toed Shoes">Close Toed Shoes</option>
                  <option value="Open Toed Shoes">Open Toed Shoes</option>
                  <option value="Rain Boots">Rain Boots</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div class="clothing-fields">
                <label id="color-field" for="clothing-color">
                  {" "}
                  Color:{" "}
                </label>
                <br />
                {/* <input type="input" id="clothing-color" required /> */}
                <select id="color">
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
              </div>

              <div>
                <Button text="Save" save={true} />
              </div>
            </form>
          </div>
        </div>
        <div id="clothingimage">
          {/* <div id="innerdiv">
            Clothing Image
           </div> */}
          <div id="image"></div>
          <div id="upload">
            <input accept="image/*" type="file" id="myFile" name="filename" />
            <Button text="Upload Image" image={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClothing;
