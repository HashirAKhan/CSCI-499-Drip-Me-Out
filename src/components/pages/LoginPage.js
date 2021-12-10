import "../../css/loginpage.css";
import Button from "../Button.js";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();
  const loginclickadded = useRef(false);

  useEffect(() => {
    if (!loginclickadded.current) {
      document
        .getElementsByClassName("btn")[0]
        .addEventListener("click", onClick);
      loginclickadded.current = true;
    }

    function onClick() {
      let email = document.getElementById("email-login").value;
      let password = document.getElementById("password-login").value;

      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        let response = JSON.parse(xhr.responseText);
        if (response["response"] === "verified") {
          props.loginInfo(email, password);
          history.push("/home");
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("zipcode", response["zipcode"]);
          localStorage.setItem("username", response["username"]);
          localStorage.setItem("isCelsius", response["isCelsius"]); 
        }
        if (response["response"] === "unsuccessful") {
          alert("Your login info is not in our database, please sign up");
        }
      });
      xhr.open("POST", "http://localhost:8080/login");
      const data = { email: `${email}`, password: `${password}` };
      console.log();
      xhr.send(JSON.stringify(data));
    }
  }, []);

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
              <label id="email-field" for="email-login">
                {" "}
                Email:{" "}
              </label>
              <br />
              <input type="email" id="email-login" />
            </div>
            <div class="login-fields">
              <label id="password-field" for="password-login">
                {" "}
                Password:{" "}
              </label>
              <br />
              <input type="password" id="password-login" />
            </div>
            <div id="login-buttons">
              <Button text="Login" />
              <Button text="Sign Up" href="/signup" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
