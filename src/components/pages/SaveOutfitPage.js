import { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar'
import "../../css/saveoutfitpage.css"
import SavedItem from '../SavedItemComponent'

export default function SaveOutfit(){

  return(
    <>

    <Navbar/>

    <div id="save-outfit">
      <div id="outfit-list">
        <ul id="outfits">
          <li> Outfit 1 </li>
          <li> Outfit 2 </li>
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
  )
}
