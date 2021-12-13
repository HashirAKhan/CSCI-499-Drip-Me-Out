import Navbar from "../Navbar";
import Button from "../Button";
import SaveItemModal from "../SaveItemModal";
import "../../css/customizepage.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function CustomizePage() {
  const [show, setShow] = useState(false);
  const [itemids, setItemIds] = useState([]);

  let history = useHistory();

  function exitModal() {
    setShow(false);
  }

  useEffect(() => {
    const button = document.getElementsByClassName("btn")[0];
    button.addEventListener("click", () => {
      setShow(true);
      const items = document.getElementsByTagName("img");
      let outfit = [];
      for (let i = 0; i < items.length; i++) {
        outfit.push(items[i].id);
      }
      if (items.length > 1) {
        setItemIds(outfit);
      }
    });
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      displayImages();
    });
    xhr.open("POST", "http://localhost:8080/getItemsById");
    const data = JSON.stringify({
      email: localStorage.getItem("email"),
      toplayer: sessionStorage.getItem("toplayer"),
      bottomlayer: sessionStorage.getItem("bottomlayer"),
      shoelayer: sessionStorage.getItem("shoelayer"),
    });
    xhr.send(data);
    function displayImages() {
      const viewLayersJSON = JSON.parse(xhr.responseText);
      const layers = viewLayersJSON["view"];
      layers.forEach((layer) => {
        layer = JSON.parse(layer);
        const layerDiv = document.getElementById(`${layer.layer}layer`);
        if (layerDiv != null && layerDiv.id === "shoelayer") {
          let xdiv = document.getElementById("xdiv");
          while (layerDiv.lastChild != xdiv) {
            layerDiv.removeChild(layerDiv.lastChild);
            if (layerDiv.lastChild === layerDiv.firstChild) {
              break;
            }
          }
        } else {
          if (layerDiv != null) {
            while (layerDiv.lastChild) {
              layerDiv.lastChild.remove();
            }
          }
        }
        if (layerDiv === null) {
          return;
        }
        const layerImg = document.createElement("img");
        layerImg.src = `data:image/png;base64,${layer.image}`;
        layerImg.id = layer.id;
        layerImg.style.maxWidth = "100%";
        layerImg.style.maxHeight = "100%";
        layerImg.style.margin = "-1px -4px -1px -4px";
        layerDiv.appendChild(layerImg);
        if (layer.layer === "shoe") {
          const xdiv = document.getElementById("xdiv").cloneNode(true);
          xdiv.style.position = "absolute";
          xdiv.style.top = "-5px";
          layerDiv.appendChild(xdiv);
          layerDiv.firstChild.remove();
          xdiv.addEventListener("click", removeShoeLayer);
        }
      });
    }
  }, []);

  function removeShoeLayer() {
    let shoelayer = document.getElementById("shoelayer");
    shoelayer.remove();
    console.log("hello");
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
      <SaveItemModal show={show} onClose={exitModal} outfits={itemids} />
    </>
  );
}
