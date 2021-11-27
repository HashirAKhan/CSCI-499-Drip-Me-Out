import Navbar from "../Navbar";
import Button from "../Button";
import "../../css/customizepage.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function CustomizePage() {
  let history = useHistory();

  useEffect(() => {
    let shoelayer = document.getElementById("shoelayer");
    if (localStorage.getItem("shoelayer") != "" && shoelayer != null) {
      let xdiv = document.getElementById("xdiv");
      while (shoelayer.lastChild) {
        shoelayer.removeChild(shoelayer.lastChild);
        if (shoelayer.lastChild === shoelayer.firstChild) {
          break;
        }
      }
      // Insert img node here as a child of xdiv and query db for image
    }
    // Add if statements for toplayer and bottomlayer
  }, []);

  function removeShoeLayer() {
    let shoelayer = document.getElementById("shoelayer");
    shoelayer.remove();
  }

  function selectTopLayer1() {
    history.push("/layer/top");
  }

  function selectBottomLayer1() {
    history.push("/layer/bottom");
  }

  function selectShoeLayer() {
    let shoelayer = document.getElementById("shoelayer");
    if (shoelayer === null) {
      return;
    }
    history.push("/layer/shoe");
  }
  return (
    <>
      <Navbar />
      <div id="page">
        <div id="main">
          <div class="item" id="toplayer" onClick={selectTopLayer1}>
            <p class="select">Click to select</p>
            <p class="layer">Top layer 1</p>
          </div>
          <div class="item" id="bottomlayer" onClick={selectBottomLayer1}>
            <p class="select">Click to select</p>
            <p class="layer">Bottom layer 1</p>
          </div>
          <div class="item" id="shoelayer" onClick={selectShoeLayer}>
            <div id="xdiv" onClick={removeShoeLayer}>
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
