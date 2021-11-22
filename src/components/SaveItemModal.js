import React from 'react';
import "../css/saveitemmodal.css";

export default function SaveItemModal(props){
  if(!props.show){
    return null
  }

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
          <button id = "save-button" onClick={props.onClick}> Save! </button>
        </div>

      </div>
    </div>
  )
}
