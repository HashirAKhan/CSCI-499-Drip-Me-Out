import Navbar from "../Navbar";
import Button from "../Button";
import "../../css/customizepage.css";
import React, { useEffect } from "react";

export default function CustomizePage() {
  function remove(xdiv) {
    alert(xdiv);
  }
  useEffect(() => {
    document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
  }, []);
  return (
    <>
      <Navbar />
      <div id="page">
        <div id="main">
          <div class="item">
            <p class="select">Click to select</p>
            <p class="layer">Top layer 1</p>
          </div>
          <div class="item">
            <p class="select">Click to select</p>
            <p class="layer">Bottom layer 1</p>
          </div>
          <div id="shoelayer" class="item">
            <div id="xdiv" onClick={remove(this)}>
              <h1 id="x">x</h1>
            </div>
            <div id="shoediv">
              <p class="select">Click to select</p>
              <p class="layer">Shoes</p>
            </div>
          </div>
        </div>
        <Button text="Save Outfit" />
      </div>
    </>
  );
}
