import { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar'
import "../../css/saveoutfitpage.css"
import SavedItem from '../SavedItemComponent'

export default function SaveOutfit(){

  useEffect(() => {

    setOutfitList();
  }, []);

  let outfits = []
  let outfits_ids = []
  let test = ['test', 'outfit 1']
  //let test = ["outfits":[{"id": "000000", name: "summer outfit"}, {"id": "111111", name: "outfit 1"}]]

  //@func: sets the list of outfits on the frontend
  function setOutfitList(){

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      let outfitList = JSON.parse(xhr.response);
      //console.log(outfitList)
      //will create an outfits list and populate it with the
      //outfit names
      let saved_outfits = outfitList["outfits"]
      if (saved_outfits.length != 0){
        for (let i = 0; i < saved_outfits.length; i++) {
          const object = JSON.parse(saved_outfits[i]);
          //console.log(String(object['name']))
          outfits.push(String(object['name']))
          outfits_ids.push(`${object["id"]}`)
          //console.log(object);
        }
      }

      console.log(outfits)
      console.log(outfits_ids)
    });

    const data = JSON.stringify({email: localStorage.getItem("email") });
    //console.log(data)
    xhr.open("POST", "http://localhost:8080/getOutfits");
    xhr.send(data);

    //console.log("printing array")
    //console.log(outfit_names)
  }

    return(
      <>

      <Navbar/>

      <div id="save-outfit">
        <div id="outfit-list">
          <ul id="outfits">
          {
            test.map((outfit) =>
              <li> {outfit} </li>
            )
          }
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
