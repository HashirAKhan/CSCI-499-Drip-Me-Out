import '../css/addclothing.css';
import Button from './Button.js';
// import Header from './Header'

const AddClothing = () => {

  return (
    <div className='container'>
      <div id="navbar">
        <a href="/" id="logout">Log Out</a>
      </div>
      <div className='content-container'>
        <div id="clothingform">
           <div id="innerdiv">
             <form id="clothing-form">

               <div class="clothing-fields">
                 <label id="label-field" for="clothing-label"> Clothing Label: </label>
                 <br/>
                 <input type="input" id="clothing-label" required/>
               </div>

               <div class="clothing-fields">
                 <label id="category-field" for="clothing-category"> Category: </label>
                 <br/>
                 <input type="input" id="clothing-category" required/>
               </div>

               <div class="clothing-fields">
                 <label id="type-field" for="clothing-type"> Type: </label>
                 <br/>
                 <input type="input" id="clothing-type" required/>
               </div>

               <div class="clothing-fields">
                 <label id="color-field" for="clothing-color"> Color: </label>
                 <br/>
                 <input type="input" id="clothing-color" required/>
               </div>

             </form>
           </div>
        </div>
        <div id="clothingimage">
           <div id="innerdiv">
              Clothing Image
           </div>
        </div>
      </div>
    </div>
  )
}

export default AddClothing
