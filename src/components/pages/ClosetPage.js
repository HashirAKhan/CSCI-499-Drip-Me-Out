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

  let accessories_checkbox = false;
  let category_checkbox = false;

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

  function checkboxes(){
    if(document.getElementById('accessories-checkbox').checked){
      accessories_checkbox = true
    }
    if(document.getElementById('category-checkbox').checked){
      category_checkbox = true
    }
  }

  function onClickFilter(){
    checkboxes()
      let xhr = new XMLHttpRequest();
    const data = JSON.stringify({
      user: localStorage.getItem("email"),
      accessories_checkbox: accessories_checkbox,
      category_checkbox: category_checkbox,
      category_value: document.getElementById("category").value,
    });
    console.log(data);
    xhr.open("POST", "http://localhost:8080/generate");
    xhr.send(data);
  }

  useEffect(() => {
    // Just added .current to render_valued, have not tested for working functionality yet
    if (!rendered_value.current) {
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        let stop = 0;
        // let counter = 0;

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

        // let leftbox = document.getElementById("leftbox");
        // let height = 240 * (data.length / 2);
        // leftbox.style.height = `${height.toString()}px`;

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
            <div id="accessories">
              <input type="checkbox" id="accessories-checkbox" />
              <label for="accessories"> Accessories </label>
            </div>

            <div class="clothing-fields">
              <input type="checkbox" id="category-checkbox" />
              <label id="category-field" for="clothing-category">
                {" "}
                Category:{" "}
              </label>
              <br />
              {/* <input type="input" id="clothing-category" required /> */}
              <select id="category">
                <option value="select">Select</option>
                <option value="Coats & Jackets">Coats & Jackets</option>
                <option value="Dresses">Dresses</option>
                <option value="Hoodies & Sweatshirts">
                  Hoodies & Sweatshirts
                </option>
                <option value="Jumpsuits & Rompers">
                  Jumpsuits & Rompers
                </option>
                <option value="Pants">Pants</option>
                <option value="Shoes">Shoes</option>
                <option value="Shorts">Shorts</option>
                <option value="Skirts">Skirts</option>
                <option value="Sweaters & Cardigans">
                  Sweaters & Cardigans
                </option>
                <option value="Tops">Tops</option>
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
