import Navbar from "../Navbar";
import Button from "../Button";
import "../../css/customizepage.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function CustomizePage() {
  let history = useHistory();
  function removeShoeLayer() {
    let shoelayer = document.getElementById("shoelayer");
    shoelayer.remove();
  }

  function selectTopLayer1() {
    history.push("/toplayer1");
  }

  function selectBottomLayer1() {
    history.push("/bottomlayer1");
  }

  function selectShoeLayer() {
    let shoelayer = document.getElementById("shoelayer");
    if (shoelayer === null) {
      return;
    }
    history.push("/shoelayer");
  }
  return (
    <>
      <Navbar />
      <div id="page">
        <div id="main">
          <div class="item" onClick={selectTopLayer1}>
            <p class="select">Click to select</p>
            <p class="layer">Top layer 1</p>
          </div>
          <div class="item" onClick={selectBottomLayer1}>
            <p class="select">Click to select</p>
            <p class="layer">Bottom layer 1</p>
          </div>
          <div id="shoelayer" class="item" onClick={selectShoeLayer}>
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
