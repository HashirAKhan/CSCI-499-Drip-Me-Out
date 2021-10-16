import '../css/signuppage.css';
import Button from './Button.js';

export default function SignUp() {
   return (
      <>
        <div id="login-container">
           <div id="title">
              <h1>Create an Account</h1>
           </div>

           <br/>

           <div id="signup">
              <form id="signup-form">

                <div class="signup-fields">
                  <label id="firstname-field" for="firstname-signup"> First Name: </label>
                  <br/>
                  <input type="password" id="firstname-signup" required/>
                </div>

                <div class="signup-fields">
                  <label id="lastname-field" for="lastname-signup"> Last Name: </label>
                  <br/>
                  <input type="password" id="firstname-signup" required/>
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


                <div id="signup-button">
                  <a href="/home"><Button text = "Sign Up" /></a>
                </div>

              </form>
           </div>
        </div>
      </>
   )
}
