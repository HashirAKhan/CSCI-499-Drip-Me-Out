import "../../css/addclothingpage.css";
import Button from "../Button.js";
import Navbar from "../Navbar";
import { useEffect } from "react";
// import Header from './Header'

const AddClothing = () => {
  useEffect(() => {
    document.getElementById("category").onchange = function category() {
      let category = document.getElementById("category").value;
      let subcategory = document.getElementById("subcategory");
      while (subcategory.firstChild) {
        subcategory.firstChild.remove();
      }

      if (category === "Coats & Jackets") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Coat",
          "coat"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Jacket",
          "jacket"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Parka",
          "parka"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Raincoat",
          "raincoat"
        );
      } else if (category === "Dresses") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Minidress",
          "minidress"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Mididress",
          "mididress"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Maxidress",
          "maxidress"
        );
      } else if (category === "Hoodies & Sweatshirts") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Hoodie",
          "hoodie"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Sweatshirt",
          "sweatshirt"
        );
      } else if (category === "Jumpsuits & Rompers") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Jumpsuit",
          "jumpsuit"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Romper",
          "romper"
        );
      } else if (category === "Pants") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Cargo pants",
          "cargo pants"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Jeans",
          "jeans"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Pants",
          "pants"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Sweatpants",
          "sweatpants"
        );
      } else if (category === "Shoes") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Boots",
          "boots"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Dress shoes",
          "dress shoes"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Flat shoes",
          "flat shoes"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Heels",
          "heels"
        );
        document.getElementById("subcategory").options[5] = new Option(
          "Sandals",
          "sandals"
        );
        document.getElementById("subcategory").options[6] = new Option(
          "Slides & Flip flops",
          "slides & flip flops"
        );
        document.getElementById("subcategory").options[7] = new Option(
          "Sneakers",
          "sneakers"
        );
      } else if (category === "Shorts") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Shorts",
          "shorts"
        );
      } else if (category === "Skirts") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Miniskirt",
          "miniskirt"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Midiskirt",
          "midiskirt"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Maxiskirt",
          "maxiskirt"
        );
      } else if (category === "Sweaters & Cardigans") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Cardigan",
          "cardigan"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Sweater",
          "sweater"
        );
      } else if (category === "Tops") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Tank top",
          "tank top"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Crop top",
          "crop top"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Blouse",
          "blouse"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Bodysuit",
          "bodysuit"
        );
        document.getElementById("subcategory").options[5] = new Option(
          "Button-up shirt",
          "button-up shirt"
        );
        document.getElementById("subcategory").options[6] = new Option(
          "Long-sleeve t-shirt",
          "long-sleeve"
        );
        document.getElementById("subcategory").options[7] = new Option(
          "Short-sleeve t-shirt",
          "short-sleeve"
        );
      }
    };

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
                  <option value="Coats & Jackets">Coats & Jackets</option>
                  <option value="Dresses">Dresses</option>
                  <option value="Hoodies & Sweatshirts">
                    Hoodies & Sweatshirts
                  </option>
                  <option value="Jumpsuits & Rompers">
                    Jumpsuits & Rompers
                  </option>
                  <option value="Pants">Pants</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Shorts">Shorts</option>
                  <option value="Skirts">Skirts</option>
                  <option value="Sweaters & Cardigans">
                    Sweaters & Cardigans
                  </option>
                  <option value="Tops">Tops</option>
                </select>
              </div>

              <div class="clothing-fields">
                <label id="subcategory-field" for="clothing-subcategory">
                  {" "}
                  Sub-Category:{" "}
                </label>
                <br />
                {/* <input type="input" id="clothing-subcategory" required /> */}
                <select onchange="" id="subcategory">
                  <option value="select">Select</option>
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

              <div class="clothing-fields">
                <label id="color2-field" for="clothing-color2">
                  {" "}
                  Secondary Color:{" "}
                </label>
                <br />
                {/* <input type="input" id="clothing-color" required /> */}
                <select id="color2">
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
