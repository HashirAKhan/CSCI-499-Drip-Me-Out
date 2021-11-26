import React from 'react';
import "../css/saveitemmodal.css";

export default function SaveItemModal(props){

  function onClick(){

    props.onClose()
    alert("Your outfit has been saved!");

    let xhr = new XMLHttpRequest();

    const data = JSON.stringify({
      user: localStorage.getItem("email"),
      name: document.getElementById("outfit-name").value,
      outfit: props.outfits,
    });

    console.log(data)

    xhr.open("POST", "http://localhost:8080/saveOutfit");
    xhr.send(data);
  }

  if(!props.show){
    return null
  }

  else{
    return(
      <div id = "modal" onClick={props.onClose}>
        <div id = "modal-content" onClick={e => e.stopPropagation()}>

          <div id = "modal-header">
            <h3 id="modal-title"> Save Outfit </h3>
          </div>

          <div id = "modal-body">
            <input id = "outfit-name" type="text" placeholder="Name your outfit"/>
          </div>

          <div id = "modal-footer">
            <button id = "save-button" onClick={onClick}> Save! </button>
          </div>

        </div>
      </div>
    )
  }
}
