import '../css/addclothingpage.css';
import Button from './Button.js';
import Navbar from './Navbar';
import { useEffect } from 'react';
// import Header from './Header'

const AddClothing = () => {

  useEffect(() => {

    document.getElementById("category").onchange = function category() {
      let category = document.getElementById("category").value;
      let type = document.getElementById("type");
      if (category === "Bottoms") {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        document.getElementById("6") ? document.getElementById("6").remove() : void 0 ;
        document.getElementById("7") ? document.getElementById("7").remove() : void 0 ;
        document.getElementById("8") ? document.getElementById("8").remove() : void 0 ;
        document.getElementById("9") ? document.getElementById("9").remove() : void 0 ;
        document.getElementById("10") ? document.getElementById("10").remove() : void 0 ;
        let option1 = document.createElement("option");
        option1.id = "1";
        option1.value = "Cargo Pants";
        option1.text = option1.value;
        type.appendChild(option1);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Jeans";
        option2.text = option2.value;
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Pants";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Shorts";
        option4.text = option4.value;
        type.appendChild(option4);
        let option5 = document.createElement("option");
        option5.id = "5";
        option5.value = "Skirt";
        option5.text = option5.value;
        type.appendChild(option5);
        let option6 = document.createElement("option");
        option6.id = "6";
        option6.value = "Sweatpants";
        option6.text = option6.value;
        type.appendChild(option6);
      }
      else if (category === "Coats & Jackets") {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        document.getElementById("6") ? document.getElementById("6").remove() : void 0 ;
        document.getElementById("7") ? document.getElementById("7").remove() : void 0 ;
        document.getElementById("8") ? document.getElementById("8").remove() : void 0 ;
        document.getElementById("9") ? document.getElementById("9").remove() : void 0 ;
        document.getElementById("10") ? document.getElementById("10").remove() : void 0 ;
        let option1 = document.createElement("option");
        option1.id = "1";
        option1.value = "Coat";
        option1.text = option1.value;
        type.appendChild(option1);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Jacket";
        option2.text = option2.value;
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Parka";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Raincoat";
        option4.text = option4.value;
        type.appendChild(option4);
      }
      else if (category === "Dresses & Jumpsuits & Rompers") {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        document.getElementById("6") ? document.getElementById("6").remove() : void 0 ;
        document.getElementById("7") ? document.getElementById("7").remove() : void 0 ;
        document.getElementById("8") ? document.getElementById("8").remove() : void 0 ;
        document.getElementById("9") ? document.getElementById("9").remove() : void 0 ;
        document.getElementById("10") ? document.getElementById("10").remove() : void 0 ;
        let option1 = document.createElement("option");
        option1.id = "1";
        option1.value = "Dress";
        option1.text = option1.value;
        type.appendChild(option1);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Jumpsuit";
        option2.text = option2.value;
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Romper";
        option3.text = option3.value;
        type.appendChild(option3);
      }
      else if (category === "Shoes") {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        document.getElementById("6") ? document.getElementById("6").remove() : void 0 ;
        document.getElementById("7") ? document.getElementById("7").remove() : void 0 ;
        document.getElementById("8") ? document.getElementById("8").remove() : void 0 ;
        document.getElementById("9") ? document.getElementById("9").remove() : void 0 ;
        document.getElementById("10") ? document.getElementById("10").remove() : void 0 ;
        let option1 = document.createElement("option");
        option1.id = "1";
        option1.value = "Boots";
        option1.text = option1.value;
        type.appendChild(option1);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Dress Shoes";
        option2.text = option2.value;
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Flat Shoes";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Heels";
        option4.text = option4.value;
        type.appendChild(option4);
        let option5 = document.createElement("option");
        option5.id = "5";
        option5.value = "Loafers";
        option5.text = option5.value;
        type.appendChild(option5);
        let option6 = document.createElement("option");
        option6.id = "6";
        option6.value = "Sandals";
        option6.text = option6.value;
        type.appendChild(option6);
        let option7 = document.createElement("option");
        option7.id = "7";
        option7.value = "Slides & Flip Flops";
        option7.text = option7.value;
        type.appendChild(option7);
        let option8 = document.createElement("option");
        option8.id = "8";
        option8.value = "Sneakers";
        option8.text = option8.value;
        type.appendChild(option8);
      }
      else if (category === "Tops") {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        document.getElementById("6") ? document.getElementById("6").remove() : void 0 ;
        document.getElementById("7") ? document.getElementById("7").remove() : void 0 ;
        document.getElementById("8") ? document.getElementById("8").remove() : void 0 ;
        document.getElementById("9") ? document.getElementById("9").remove() : void 0 ;
        document.getElementById("10") ? document.getElementById("10").remove() : void 0 ;
        let option1 = document.createElement("option");
        option1.id = "1";
        option1.value = "Cami & Tank Top";
        option1.text = option1.value;
        type.appendChild(option1);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Crop Top";
        option2.text = option2.value;
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Blouse";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Bodysuit";
        option4.text = option4.value;
        type.appendChild(option4);
        let option5 = document.createElement("option");
        option5.id = "5";
        option5.value = "Button-up Shirt";
        option5.text = option5.value;
        type.appendChild(option5);
        let option6 = document.createElement("option");
        option6.id = "6";
        option6.value = "Long Sleeve T-shirt";
        option6.text = option6.value;
        type.appendChild(option6);
        let option7 = document.createElement("option");
        option7.id = "7";
        option7.value = "Short Sleeve T-shirt";
        option7.text = option7.value;
        type.appendChild(option7);
      }
      else if (category === "Warm Tops") {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        document.getElementById("6") ? document.getElementById("6").remove() : void 0 ;
        document.getElementById("7") ? document.getElementById("7").remove() : void 0 ;
        document.getElementById("8") ? document.getElementById("8").remove() : void 0 ;
        document.getElementById("9") ? document.getElementById("9").remove() : void 0 ;
        document.getElementById("10") ? document.getElementById("10").remove() : void 0 ;
        let option1 = document.createElement("option");
        option1.id = "1";
        option1.value = "Cardigan";
        option1.text = option1.value;
        type.appendChild(option1);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Hoodie";
        option2.text = option2.value;
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Sweater";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Sweatshirt";
        option4.text = option4.value;
        type.appendChild(option4);
      }
    };


    document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundPosition = "center"
    return () => {
      document.body.style.background = "url('../closet_image.jpg')"
    }
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <div className='content-container'>
        <div id="clothingform">
          <div id="innerdiv">
            <form id="clothing-form">

              <div class="clothing-fields">
                <label id="label-field" for="clothing-label"> Clothing Label: </label>
                <br />
                <input type="input" id="clothing-label" required />
              </div>

              <div class="clothing-fields">
                <label id="category-field" for="clothing-category"> Category: </label>
                <br />
                {/* <input type="input" id="clothing-category" required /> */}
                <select id="category">
                  <option value="select">Select</option>
                  <option value="Bottoms">Bottoms</option>
                  <option value="Dresses & Jumpsuits & Rompers">Dresses & Jumpsuits & Rompers</option>
                  <option value="Coats & Jackets">Coats & Jackets</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Tops">Tops</option>
                  <option value="Warm Tops">Warm Tops</option>
                </select>
              </div>

              <div class="clothing-fields">
                <label id="type-field" for="clothing-type"> Type: </label>
                <br />
                {/* <input type="input" id="clothing-type" required /> */}
                <select onchange="" id="type">
                  <option value="select">Select</option>
                </select>
              </div>

              <div class="clothing-fields">
                <label id="color-field" for="clothing-color"> Color: </label>
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
          <div id="image">

          </div>
          <div id="upload">
            <input accept="image/*" type="file" id="myFile" name="filename" />
            <Button text="Upload Image" image={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddClothing
