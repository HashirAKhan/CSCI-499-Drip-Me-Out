import '../css/loginpage.css';
import Button from './Button.js';
import { useEffect } from 'react'

export default function Login(props) {
  useEffect(() => {
    document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.backgroundPosition = "center"
    return () => {
       document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
    }
 }, [])

  return (
    <>
      <div id="login-container">
        <div id="title">
          <h1>Drip Me Out</h1>
        </div>
        <br />
        <div id="login">
          <form id="login-form">
            <div class="login-fields">
              <label id="email-field" for="email-login"> Email: </label>
              <br />
              <input type="email" id="email-login" />
            </div>
            <div class="login-fields">
              <label id="password-field" for="password-login"> Password: </label>
              <br />
              <input type="password" id="password-login" />
            </div>
            <div id="login-buttons">
              <Button text="Login" href="/home" />
              <Button text="Sign Up" href="/signup" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
