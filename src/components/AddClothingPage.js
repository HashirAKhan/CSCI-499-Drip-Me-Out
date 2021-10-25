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

      if (category === "Bottom")
      {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        let option5 = document.createElement("option");
        option5.id = "1";
        option5.value = "Shorts";
        option5.text = option5.value;
        type.appendChild(option5);
        let option6 = document.createElement("option");
        option6.id = "2";
        option6.value = "Long pants";
        option6.text = option6.value;
        type.appendChild(option6);
        let option7 = document.createElement("option");
        option7.id = "3";
        option7.value = "Skirt";
        option7.text = option7.value;
        type.appendChild(option7);
      }
      else if (category === "Top") {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        let option = document.createElement("option");
        option.id = "1";
        option.value = "Short Sleeve T-shirt";
        option.text = option.value;
        type.appendChild(option);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Coat";
        option2.text = "Coat";
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Sweater";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Long Sleeve T-shirt";
        option4.text = option4.value;
        type.appendChild(option4);
      }
      else if (category === "Footwear")
      {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        let option = document.createElement("option");
        option.id = "1";
        option.value = "Sneakers";
        option.text = option.value;
        type.appendChild(option);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Slippers";
        option2.text = "Slippers";
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Flip-Flops";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Boots";
        option4.text = option4.value;
        type.appendChild(option4);
        let option5 = document.createElement("option");
        option5.id = "5";
        option5.value = "Formal Shoes";
        option5.text = option5.value;
        type.appendChild(option5);
      }
      else if (category === "Accessory")
      {
        document.getElementById("1") ? document.getElementById("1").remove() : void 0 ;
        document.getElementById("2") ? document.getElementById("2").remove() : void 0 ;
        document.getElementById("3") ? document.getElementById("3").remove() : void 0 ;
        document.getElementById("4") ? document.getElementById("4").remove() : void 0 ;
        document.getElementById("5") ? document.getElementById("5").remove() : void 0 ;
        let option = document.createElement("option");
        option.id = "1";
        option.value = "Hat";
        option.text = option.value;
        type.appendChild(option);
        let option2 = document.createElement("option");
        option2.id = "2";
        option2.value = "Earrings";
        option2.text = option2.value;
        type.appendChild(option2);
        let option3 = document.createElement("option");
        option3.id = "3";
        option3.value = "Rings";
        option3.text = option3.value;
        type.appendChild(option3);
        let option4 = document.createElement("option");
        option4.id = "4";
        option4.value = "Scarf";
        option4.text = option4.value;
        type.appendChild(option4);
        let option5 = document.createElement("option");
        option5.id = "5";
        option5.value = "Gloves";
        option5.text = option5.value;
        type.appendChild(option5);
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
                  <option value="Top">Top</option>
                  <option value="Bottom">Bottom</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Accessory">Accessory</option>
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
