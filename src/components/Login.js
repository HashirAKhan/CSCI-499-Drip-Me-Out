import '../css/login.css';
import Button from './Button.js';

export default function Login() {
   return (
      <>
        <div id="login-container">
           <div id="title">
              <h1>Drip Me Out</h1>
           </div>

           <br/>

           <div id="login">
              <form id="login-form">
                <div class="login-fields">
                  <label id="email-field" for="email-login"> Email: </label>
                  <br/>
                  <input type="email" id="email-login"/>
                </div>

                <div class="login-fields">
                  <label id="password-field" for="password-login"> Password: </label>
                  <br/>
                  <input type="password" id="password-login"/>
                </div>

                <div id="login-buttons">
                  <Button text = "Login" />
                  <Button text = "Sign Up" /> 
                </div>

              </form>
           </div>
        </div>
      </>
   )
}
