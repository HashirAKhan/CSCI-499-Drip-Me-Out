import Navbar from './Navbar'
import React, { useEffect, useRef, useState } from 'react'
import "../css/viewoutfitpage.css"
import ItemImages from "./ItemImages"
import ItemClick from './ItemClick'
import { useHistory } from 'react-router-dom'

export default function ViewOutfit(props){

  const rendered = useRef(false);

  let user = useRef();

  if (props.user.login){

     user.current = props.user;
  }

  const rendered_value = rendered.current;
  const [itemimages, setItemImages] = useState([]);
  const [itemids, setItemIds] = useState([]);
  const [viewitemimage, setViewItemImage] = useState('');
  const [viewitemid, setViewItemId] = useState('');

  


  return(
    <>

      <Navbar />

      <div id="outfit-names">

      </div>

      <div id="clothing-pieces">

      </div>



      </>
  )
}
