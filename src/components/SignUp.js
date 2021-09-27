import '../css/signup.css';
import Button from './Button.js';
import { useEffect } from 'react'

export default function SignUp() {

    useEffect(() => {
       document.body.style.background = "url(https://bit.ly/3kFNwhI)"
       document.body.style.backgroundSize = "cover"
       document.body.style.backgroundAttachment = "fixed"
       document.body.style.backgroundPosition = "center"
       return () => {
          document.body.style.background = "url('../closet_image.jpg')"
       }
    }, []);

   return (
      <>
        <div id="signup-container">
           <div id="title">
              <h1>Drip Me Out</h1>
           </div>

           <br/>

           <div id="signup">
              <form id="signup-form" name = "Create an Account">

                <div id="form-title">
                   <h1>Create an Account</h1>
                </div>

                <div class="signup-fields">
                  <label id="firstname-field" for="firstname-signup"> First Name: </label>
                  <br/>
                  <input type="text" id="firstname-signup" required/>
                </div>

                <div class="signup-fields">
                  <label id="lastname-field" for="lastname-signup"> Last Name: </label>
                  <br/>
                  <input type="text" id="lastname-signup" required/>
                </div>

                <div class="signup-fields">
                  <label id="email-field" for="email-login"> Email: </label>
                  <br/>
                  <input type="email" id="email-login" required/>
                </div>

                <div class="signup-fields">
                  <label id="password-field" for="password-signup"> Password: </label>
                  <br/>
                  <input type="password" id="password-signup" required/>
                </div>

                <div class="signup-fields">
                  <label id="confirm-password-field" for="confirm-password-signup"> Verify Password: </label>
                  <br/>
                  <input type="password" id="confirm-password-signup" required/>
                </div>

                <div class="signup-fields">
                  <label id="zip-field" for="zip-signup"> Zip Code: </label>
                  <br/>
                  <input id="zip-signup" type="text" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" required/>
                </div>


                <div id="signup-button">
                  <Button text = "Sign Up" url="/home" />
                </div>

              </form>
           </div>
        </div>
      </>
   )
}
