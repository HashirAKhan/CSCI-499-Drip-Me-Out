import Navbar from "../Navbar";
import ItemImages from "../ItemImages";
import Button from "../Button";
import "../../css/layerpage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Layer() {
  const { layer } = useParams();
  const [itemimages, setItemImages] = useState([]);
  const [itemids, setItemIds] = useState([]);
  const [itemlabels, setItemLabels] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    let bottoms = [];
    let tops = [];
    let dresses = [];
    let shoes = [];

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      const closetJSON = JSON.parse(xhr.responseText);
      for (let i = 0; i < closetJSON.closet.length; i++) {
        const item = JSON.parse(closetJSON.closet[i]);
        const category = item.category;
        if (category === "Coats") {
          tops.push(item);
        } else if (category === "Hoodies/Sweaters/Jackets") {
          tops.push(item);
        } else if (category === "Long Sleeve T-shirt") {
          tops.push(item);
        } else if (category === "Short Sleeve T-shirt") {
          tops.push(item);
        } else if (category === "Sleeveless Top") {
          tops.push(item);
        } else if (category === "Pants") {
          bottoms.push(item);
        } else if (category === "Shorts/Skirt") {
          bottoms.push(item);
        } else if (category === "Open Toed Shoes") {
          shoes.push(item);
        } else if (category === "Close Toed Shoes") {
          shoes.push(item);
        } else if (category === "Rain Boots") {
          shoes.push(item);
        } else if (category === "Dress") {
          dresses.push(item);
        }
      }

      let item_images = [];
      let item_ids = [];
      let item_labels = [];

      if (layer === "shoe") {
        for (let i = 0; i < shoes.length; i++) {
          item_images.push(`data:image/png;base64,${shoes[i].image}`);
          item_ids.push(shoes[i].id);
          item_labels.push(shoes[i].label);
        }
      } else if (layer === "top") {
        for (let i = 0; i < tops.length; i++) {
          item_images.push(`data:image/png;base64,${tops[i].image}`);
          item_ids.push(tops[i].id);
          item_labels.push(tops[i].label);
        }
        for (let i = 0; i < dresses.length; i++) {
          item_images.push(`data:image/png;base64,${dresses[i].image}`);
          item_ids.push(dresses[i].id);
          item_labels.push(dresses[i].label);
        }
      } else if (layer === "bottom") {
        for (let i = 0; i < bottoms.length; i++) {
          item_images.push(`data:image/png;base64,${bottoms[i].image}`);
          item_ids.push(bottoms[i].id);
          item_labels.push(bottoms[i].label);
        }
        for (let i = 0; i < dresses.length; i++) {
          item_images.push(`data:image/png;base64,${dresses[i].image}`);
          item_ids.push(dresses[i].id);
          item_labels.push(dresses[i].label);
        }
      }
      setItemImages(item_images);
      setItemIds(item_ids);
      setItemLabels(item_labels);
    });
    xhr.open("POST", "http://localhost:8080/closet");
    const data = JSON.stringify({
      email: localStorage.getItem("email"),
    });
    xhr.send(data);
  }, []);

  function onChange(id, image, item_label) {
    let div = document.getElementById("right");
    let label = document.createElement("p");
    label.style.fontWeight = "lighter";
    label.innerText = item_label;
    label.id = "label";
    div.appendChild(label);
    let newimg = document.getElementById(id).cloneNode(true);
    div.appendChild(newimg);
    newimg.id = "view";
    newimg.style.width = "47%";
    newimg.style.height = "47%";
    newimg.style.borderRadius = "10px";
    newimg.style.margin = "1px 4px 1px 4px";
    newimg.style.padding = "0px";
    newimg.addEventListener("mouseenter", (e) => {
      newimg.style.bottom = "0px";
      newimg.style.cursor = "default";
    });
    newimg.addEventListener("mouseleave", (e) => {
      newimg.style.bottom = "0px";
      newimg.style.cursor = "default";
    });
    let p = document.createElement("p");
    p.id = "emptytext";
    div.appendChild(p);

    sessionStorage.setItem(`${layer}layer`, id);
    setSelected(true);
  }

  return (
    <div>
      <Navbar />
      <div id="displaydiv" class="body">
        <ItemImages
          itemimages={itemimages}
          itemids={itemids}
          itemlabels={itemlabels}
          onChange={onChange}
        />
      </div>
      <div id="right" class="body"></div>
      <div id="selectdiv">
        <Button text="Select" customize={selected} />
      </div>
    </div>
  );
}
