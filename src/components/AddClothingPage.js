import '../css/addclothingpage.css';
import Button from './Button.js';
import Navbar from './Navbar';
import { useEffect } from 'react';
// import Header from './Header'

const AddClothing = () => {

  useEffect(() => {

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
                <input type="input" id="clothing-category" required />
              </div>

              <div class="clothing-fields">
                <label id="type-field" for="clothing-type"> Type: </label>
                <br />
                <input type="input" id="clothing-type" required />
              </div>

              <div class="clothing-fields">
                <label id="color-field" for="clothing-color"> Color: </label>
                <br />
                <input type="input" id="clothing-color" required />
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
