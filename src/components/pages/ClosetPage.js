import Navbar from "../Navbar";
import React, { useEffect, useRef, useState } from "react";
import "../../css/closetpage.css";
import ItemImages from "../ItemImages";
import { useHistory } from "react-router-dom";

export default function Closet(props) {
  const history = useHistory();
  function add() {
    history.push("/addclothing");
  }

  function viewedit() {
    if (localStorage.getItem("viewedit") === "true") {
      history.push("/viewedit");
      localStorage.setItem("viewedit", false);
      localStorage.setItem("viewedititemid", viewitemid);
    } else {
      alert("No closet item selected");
    }
  }

  const rendered = useRef(false);

  let user = useRef();

  if (props.user.login) {
    user.current = props.user;
  }

  const rendered_value = rendered.current;

  const [itemimages, setItemImages] = useState([]);

  const [itemids, setItemIds] = useState([]);

  const [itemlabels, setItemLabels] = useState([]);

  const [viewitemimage, setViewItemImage] = useState("");

  const [viewitemid, setViewItemId] = useState("");

  const [viewitemlabel, setViewItemLabel] = useState("");

  function onChange(id, image, itemlabel) {
    setViewItemId(id);
    let div = document.getElementById("toplowerbox");
    let label = document.createElement("p");
    label.style.fontWeight = "lighter";
    label.innerText = itemlabel;
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

    localStorage.setItem("viewedit", true);
    localStorage.setItem("viewedititemid", id);
    localStorage.setItem("viewitemimage", image);
  }

  //@func: function runs when the filter closet button is pressed, and sends the filter data to
  //       the backend, and updates image array, label array, and id array and displays filtered images
  function onClickFilter(){
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      let item_image_array = [];
      let item_id_array = [];
      let item_label_array = [];
      let temp = JSON.parse(xhr.response);

      let data = temp["closet"];

      for(let i = 0; i < data.length; i++){
        const object = JSON.parse(data[i]);
        item_label_array.push(`${object["label"]}`);
        item_id_array.push(`${object["id"]}`);
        item_image_array.push(`data:image/png;base64,${object["image"]}`);
      }

      setItemLabels(item_label_array);
      setItemIds(item_id_array);
      setItemImages(item_image_array);

    });
    const data = JSON.stringify({
      user: localStorage.getItem("email"),
      colors_checkbox: document.getElementById('colors-checkbox').checked,
      colors_value: document.getElementById("color").value,
      category_checkbox: document.getElementById('category-checkbox').checked,
      category_value: document.getElementById("category").value,
    });
    console.log(data);
    xhr.open("POST", "http://localhost:8080/filterCloset");
    xhr.send(data);

  }

  useEffect(() => {
    // Just added .current to render_valued, have not tested for working functionality yet
    if (!rendered_value.current) {
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        let stop = 0;

        let load = document.getElementById("load");
        if (document.getElementById("load")) {
          load.remove();
        }

        let item_image_array = [];
        let item_id_array = [];
        let item_label_array = [];
        let temp = JSON.parse(xhr.response);
        let data = temp["closet"];
        for (let i = 0; i < data.length; i++) {
          const object = JSON.parse(data[i]);
          item_label_array.push(`${object["label"]}`);
          item_id_array.push(`${object["id"]}`);
          item_image_array.push(`data:image/png;base64,${object["image"]}`);
          console.log(object);
        }

        item_label_array.forEach((itemlabel) =>
          setItemLabels((oldArray) => [...oldArray, itemlabel])
        );
        item_id_array.forEach((itemid) =>
          setItemIds((oldArray) => [...oldArray, itemid])
        );
        item_image_array.forEach((itemimage) =>
          setItemImages((oldArray) => [...oldArray, itemimage])
        );
      });
      xhr.open("POST", "http://localhost:8080/closet");
      const data = JSON.stringify({
        email: localStorage.getItem("email"),
      });
      xhr.send(data);
      rendered.current = true;
    }
  }, []);

  return (
    <>
      <Navbar />
      <div id="leftbox">
        <a id="load" href="/#/closet">
          Loading Items...
        </a>
        <ItemImages
          itemimages={itemimages}
          itemlabels={itemlabels}
          itemids={itemids}
          onChange={onChange}
        />
      </div>
      <div onClick={add} id="closetbutton">
        <a className="closet">Add Item</a>
      </div>
      <div id="closetbutton2">
        <a href="/#/saveoutfit" className="closet">
          View Saved Outfits
        </a>
      </div>

        <div id="filters">
            <div id="colors">
              <input type="checkbox" id="colors-checkbox" />
              <label for="color"> Color: </label>

              <select id="color">
                <option value="select">Select</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
                <option value="Gold">Gold</option>
                <option value="Green">Green</option>
                <option value="Grey">Grey</option>
                <option value="Multi">Multi</option>
                <option value="Navy">Navy</option>
                <option value="Neutral">Neutral</option>
                <option value="No Color">No Color</option>
                <option value="Orange">Orange</option>
                <option value="Pink">Pink</option>
                <option value="Purple">Purple</option>
                <option value="Red">Red</option>
                <option value="Silver">Silver</option>
                <option value="White">White</option>
                <option value="Yellow">Yellow</option>
              </select>
            </div>

            <div class="clothing-categories">
              <input type="checkbox" id="category-checkbox" />
              <label id="category-field" for="clothing-category">
                {" "}
                Category:{" "}
              </label>
              <br />
              {/* <input type="input" id="clothing-category" required /> */}
              <select id="category">
                <option value="select">Select</option>
                <option value="Coats">Coats</option>
                <option value="Hoodies/Sweaters/Jackets">Hoodies/Sweaters/Jackets</option>
                <option value="Long Sleeve T-shirt">Long Sleeve T-shirt</option>
                <option value="Short Sleeve T-shirt">Short Sleeve T-shirt</option>
                <option value="Sleeveless Top">Sleeveless Top</option>
                <option value="Pants">Pants</option>
                <option value="Dress">Dress</option>
                <option value="Shorts/Skirt">Shorts/Skirt</option>
                <option value="Close Toed Shoes">Close Toed Shoes</option>
                <option value="Open Toed Shoes">Open Toed Shoes</option>
                <option value="Rain Boots">Rain Boots</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

          <div id="filter-button">
            <button onClick={onClickFilter}>Filter Closet</button>
          </div>

      </div>

      <div id="toplowerbox"></div>
      <div class="rightbox" id="rightlowerbox">
        <div onClick={viewedit} itemid={viewitemid}>
          <a className="closet" id="viewedit">
            View/Edit
          </a>
        </div>
      </div>

      <p></p>
    </>
  );
}
