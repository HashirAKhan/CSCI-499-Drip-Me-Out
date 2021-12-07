import { useEffect, useRef, useState, setState } from "react";
import Navbar from "../Navbar";
import "../../css/saveoutfitpage.css";
import SavedItem from "../SavedItemComponent";

export default function SaveOutfit() {
  let outfit_list = [];
  const [outfits, setOutfits] = useState([]);
  const rendered = useRef(false);
  const rendered_value = rendered.current;

  const [itemimages, setItemImages] = useState([]);
  const [itemids, setItemIds] = useState([]);
  const [itemlabels, setItemLabels] = useState([]);
  const [viewitemimage, setViewItemImage] = useState("");
  const [viewitemid, setViewItemId] = useState("");


  useEffect(() => {

    const outfitListUl = document.getElementById("outfits");
    while (outfitListUl.lastChild) {
      outfitListUl.lastChild.remove();
    }

    setOutfitList();

    console.log("running running");
  }, []);

  function setOutfitList() {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      let outfitList = JSON.parse(xhr.response);
      //console.log(outfitList)
      //will create an outfits list and populate it with the
      //outfit names
      let saved_outfits = outfitList["outfits"];
      if (saved_outfits.length != 0) {
        for (let i = 0; i < saved_outfits.length; i++) {
          const object = JSON.parse(saved_outfits[i]);
          outfit_list.push(object);
        }
      }

      outfit_list.forEach((outfit) =>
        setOutfits((oldArray) => [...oldArray, outfit])
      );

      console.log(outfits);
    });

    const data = JSON.stringify({ email: localStorage.getItem("email") });
    console.log(data);
    xhr.open("POST", "http://localhost:8080/getOutfits");
    xhr.send(data);
    //console.log("running")
    rendered.current = true;
  }

  function fetchOutfit(e) {
    let xhr = new XMLHttpRequest();
    const data = JSON.stringify({ id: e.target.dataset.value });
    console.log(data);
    xhr.open("POST", "http://localhost:8080/getOutfits");
    xhr.send(data);
    //console.log(id);
  }

  function loadOutfitImages(){
    let item_image_array = [];
    let item_id_array = [];
    let item_label_array = [];
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      let temp = JSON.parse(xhr.response);
      let data = temp["items"];
      
    })
  }

  return (
    <>
      <Navbar />

      <div id="save-outfit">
        <div id="outfit-list">
          <ul id="outfits">
            {outfits.map((outfit) => (
              <li
                key={outfit["id"]}
                data-value={outfit["id"]}
                onClick={fetchOutfit}
              >
                {" "}
                {outfit["name"]}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div id="view-saved">
          <ul id="outfits">
            <SavedItem img="https://bit.ly/3c8T4fA" itemname="White T-shirt" />
            <SavedItem img="https://bit.ly/3Cl3svg" itemname="Blue Jeans" />
            <SavedItem img="https://bit.ly/3HlCfwi" itemname="Puffer Jacket" />
          </ul>
        </div>
      </div>
    </>
  );
}
