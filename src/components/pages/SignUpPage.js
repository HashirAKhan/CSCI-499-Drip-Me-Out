import '../../css/signuppage.css';
import Button from '../Button.js';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'

export default function SignUp(props) {
  const clickadded = useRef(false);

  const history = useHistory();

  const [signuphref, setSignUpHref] = useState(undefined)
  const [signedup, setSignedUp] = useState(false);
  const [signedemail, setSignedEmail] = useState(undefined);
  const [signedpassword, setSignedPassword] = useState(undefined);

  useEffect(() => {
    if (!(clickadded.current)) {
      document.getElementsByClassName("btn")[0].addEventListener("click", onClick);
      clickadded.current = true;
    }
    if (signedemail != undefined && signedpassword != undefined)
    {
      this.props.email(signedemail);
      this.props.password(signedpassword);
    }

  }, [])

  function onClick() {
    let first = document.getElementById("firstname-signup").value;
    let last = document.getElementById("lastname-signup").value;
    let username = `${first} ${last}`;
    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-signup").value;
    let zipcode = document.getElementById("zipcode-signup").value;
    let login_info_encoded = `email=${email}&password=${password}`;



      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        if (xhr.responseText === "verified")
        {
          console.log(xhr.responseText);
          setSignedUp(true);
          alert("Account already in database... press ok to redirect to login");
          history.push("/");
        }
        else if (xhr.responseText === "signedup")
        {
          console.log(xhr.responseText);
          setSignedEmail(email);
          setSignedPassword(password);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('username', username);
          localStorage.setItem('zipcode', zipcode);
          localStorage.setItem('isCelsius', false)
          history.push("/home");
        }
      });
      xhr.open("POST", "http://localhost:8080/signup");
      const data = JSON.stringify({"username": username, "email": email , "password": password, "zipcode": zipcode, "isCelsius": false});
      xhr.send(data);

  }

  return (
    <>
      <div id="login-container">
        <div id="title">
          <h1>Create an Account</h1>
        </div>

        <br />

        <div id="signup">
          <form id="signup-form">

            <div class="signup-fields">
              <label id="firstname-field" for="firstname-signup"> First Name: </label>
              <br />
              <input type="text" id="firstname-signup" required />
            </div>

            <div class="signup-fields">
              <label id="lastname-field" for="lastname-signup"> Last Name: </label>
              <br />
              <input type="text" id="lastname-signup" required />
            </div>

            <div class="signup-fields">
              <label id="email-field" for="email-login"> Email: </label>
              <br />
              <input type="email" id="email-login" required />
            </div>

            <div class="signup-fields">
              <label id="password-field" for="password-signup"> Password: </label>
              <br />
              <input type="password" id="password-signup" required />
            </div>

            <div class="signup-fields">
              <label id="zipcode-field" for="zipcode-signup"> Zipcode: </label>
              <br />
              <input type="number" id="zipcode-signup" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" required />
            </div>


            <div id="signup-button">
              {/* <a href="/home"> */}
              <Button text="Sign Up" />
              {/* </a> */}
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
