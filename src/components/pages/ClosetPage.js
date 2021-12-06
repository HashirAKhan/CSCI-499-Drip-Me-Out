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
  let subcategory_checkbox = false;

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

  function setSubcategoryDropdown(){
    document.getElementById("category").onchange = function category() {
      let category = document.getElementById("category").value;
      let subcategory = document.getElementById("subcategory");
      while (subcategory.firstChild) {
        subcategory.firstChild.remove();
      }

      if (category === "Coats & Jackets") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Coat",
          "coat"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Jacket",
          "jacket"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Parka",
          "parka"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Raincoat",
          "raincoat"
        );
      } else if (category === "Dresses") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Minidress",
          "minidress"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Mididress",
          "mididress"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Maxidress",
          "maxidress"
        );
      } else if (category === "Hoodies & Sweatshirts") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Hoodie",
          "hoodie"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Sweatshirt",
          "sweatshirt"
        );
      } else if (category === "Jumpsuits & Rompers") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Jumpsuit",
          "jumpsuit"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Romper",
          "romper"
        );
      } else if (category === "Pants") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Cargo pants",
          "cargo pants"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Jeans",
          "jeans"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Pants",
          "pants"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Sweatpants",
          "sweatpants"
        );
      } else if (category === "Shoes") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Boots",
          "boots"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Dress shoes",
          "dress shoes"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Flat shoes",
          "flat shoes"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Heels",
          "heels"
        );
        document.getElementById("subcategory").options[5] = new Option(
          "Sandals",
          "sandals"
        );
        document.getElementById("subcategory").options[6] = new Option(
          "Slides & Flip flops",
          "slides & flip flops"
        );
        document.getElementById("subcategory").options[7] = new Option(
          "Sneakers",
          "sneakers"
        );
      } else if (category === "Shorts") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Shorts",
          "shorts"
        );
      } else if (category === "Skirts") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Miniskirt",
          "miniskirt"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Midiskirt",
          "midiskirt"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Maxiskirt",
          "maxiskirt"
        );
      } else if (category === "Sweaters & Cardigans") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Cardigan",
          "cardigan"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Sweater",
          "sweater"
        );
      } else if (category === "Tops") {
        document.getElementById("subcategory").options[0] = new Option(
          "Select sub-category",
          ""
        );
        document.getElementById("subcategory").options[1] = new Option(
          "Tank top",
          "tank top"
        );
        document.getElementById("subcategory").options[2] = new Option(
          "Crop top",
          "crop top"
        );
        document.getElementById("subcategory").options[3] = new Option(
          "Blouse",
          "blouse"
        );
        document.getElementById("subcategory").options[4] = new Option(
          "Bodysuit",
          "bodysuit"
        );
        document.getElementById("subcategory").options[5] = new Option(
          "Button-up shirt",
          "button-up shirt"
        );
        document.getElementById("subcategory").options[6] = new Option(
          "Long-sleeve t-shirt",
          "long-sleeve"
        );
        document.getElementById("subcategory").options[7] = new Option(
          "Short-sleeve t-shirt",
          "short-sleeve"
        );
      }
    };
  }

  function checkboxes(){
    if(document.getElementById('accessories-checkbox').checked){
      accessories_checkbox = true
    }
    if(document.getElementById('category-checkbox').checked){
      category_checkbox = true
    }
    if(document.getElementById('subcategory-checkbox').checked){
      subcategory_checkbox = true
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
      subcategory_checkbox: subcategory_checkbox,
      subcategory_value: document.getElementById("subcategory").value,
    });
    console.log(data);
    xhr.open("POST", "http://localhost:8080/generate");
    xhr.send(data);
  }

  useEffect(() => {
    setSubcategoryDropdown()
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

          <div class="clothing-fields">
            <input type="checkbox" id="subcategory-checkbox" />
            <label id="subcategory-field" for="clothing-subcategory">
              {" "}
              Sub-Category:{" "}
            </label>
            <br />
            {/* <input type="input" id="clothing-subcategory" required /> */}
            <select onchange="" id="subcategory">
              <option value="select">Select</option>
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
