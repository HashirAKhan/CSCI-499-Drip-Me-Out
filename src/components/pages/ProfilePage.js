import { useEffect } from "react";
import Navbar from "../Navbar";
import Button from "../Button.js";
import "../../css/profilepage.css";

const Profile = () => {
  return (
    <>
    <Navbar />
      <div id="profile-container">
        <div id="title">
          <h1>Your Profile</h1>
        </div>

        <br />

        <div id="profile">
          <form id="profile-form">

            <div class="profile-fields">
              <label id="firstname-field" for="firstname-profile"> First Name: </label>
              <br />
              <input type="text" id="firstname-profile" required />
            </div>

            <div class="profile-fields">
              <label id="lastname-field" for="lastname-profile"> Last Name: </label>
              <br />
              <input type="text" id="lastname-profile" required />
            </div>

            <div class="profile-fields">
              <label id="zipcode-field" for="zipcode-profile"> Zipcode: </label>
              <br />
              <input type="number" id="zipcode-profile" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" required />
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
