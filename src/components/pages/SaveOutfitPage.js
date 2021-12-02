import { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar'
import "../../css/saveoutfitpage.css"
import SavedItem from '../SavedItemComponent'

export default function SaveOutfit(){


  let outfit_list = []
  const [outfits, setOutfits] = useState([]);
  const rendered = useRef(false);
  const rendered_value = rendered.current;
  //let test = ["outfits":[{"id": "000000", name: "summer outfit"}, {"id": "111111", name: "outfit 1"}]]

  //@func: sets the list of outfits on the frontend

  useEffect(() => {
    if(!rendered_value.current){
      setOutfitList();
    }
  }, []);

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
          //outfits.push(String(object['name']))
          outfit_list.push(object)
          // outfits_ids.push(`${object["id"]}`)
          // console.log(typeof(object.name));
        }
      }

      outfit_list.forEach((outfit) =>
        setOutfits((oldArray) => [...oldArray, outfit])
      );

    });

    const data = JSON.stringify({email: localStorage.getItem("email") });
    //console.log(data)
    xhr.open("POST", "http://localhost:8080/getOutfits");
    xhr.send(data);
    rendered.current = true;

    //console.log("printing array")
    //console.log(outfit_names)
  }

  function fetchOutfit(e){
    let xhr = new XMLHttpRequest();
    const data = JSON.stringify({id: e.target.dataset.value});
    //console.log(data)
    xhr.open("POST", "http://localhost:8080/getOutfits");
    xhr.send(data);
    //console.log(id);
  }

    return(
      <>

      <Navbar/>

      <div id="save-outfit">
        <div id="outfit-list">
          <ul id="outfits">
          {
            outfits.map((outfit) =>
              <li data-value={outfit["id"]} onClick={fetchOutfit}> {outfit["name"]} </li>
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
