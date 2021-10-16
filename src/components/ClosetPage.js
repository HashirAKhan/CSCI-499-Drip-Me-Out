import Navbar from './Navbar'
import React, { useEffect, useRef, useState } from 'react'
import "../css/closetpage.css"
import ItemImages from "./ItemImages"
import ItemClick from './ItemClick'

export default function Closet() {
   const rendered = useRef(false);
   const rendered_value = rendered.current;

   const [itemimages, setItemImages] = useState([]);

   const [itemids, setItemIds] = useState([]);

   const [viewitemimage, setViewItemImage] = useState('');

   const [viewitemid, setViewItemId] = useState('');

   function onChange(id) {
      setViewItemId(id);
   }

   useEffect(() => {

      if (!rendered_value) {
         //https://i.ibb.co/6mxrnnY/rack.jpg
         //https://i.ibb.co/h8RZwhY/base.jpg
         document.body.style.background = "url(https://i.ibb.co/h8RZwhY/base.jpg)"
         document.body.style.backgroundSize = "cover"
         document.body.style.backgroundAttachment = "fixed"
         document.body.style.backgroundPosition = "center"

         let xhr = new XMLHttpRequest();
         xhr.addEventListener("load", () => {
            let stop = 0;
            // let counter = 0;

            let load = document.getElementById("load");
            load.remove();

            let item_image_array = [];
            let item_id_array = [];

            for (let i = 0; i < xhr.responseText.length; i++) {
               if (xhr.responseText[i] === "*") {
                  let base64image = xhr.responseText.substring(stop, i - 10);

                  let item_id = xhr.responseText.substring(i - 10, i);

                  item_id_array.push(`${item_id}`);

                  item_image_array.push(`data:image/png;base64,${base64image}`);
                  // counter++;
                  stop = i + 1;
               }
            }

            item_id_array.forEach(itemid => setItemIds(oldArray => [...oldArray, itemid]));

            item_image_array.forEach(itemimage => setItemImages(oldArray => [...oldArray, itemimage]));
         });
         xhr.open("POST", "http://localhost:8080/closet");
         xhr.send();
         rendered.current = true;
      }

   }, [])

   return (
      <>
         <Navbar />
         <div id="leftbox">
            <div id="innerdiv">
               <a id="load" href="/closet">Loading Items...</a>
               <ItemImages itemimages={itemimages} itemids={itemids} onChange={onChange}/>
            </div>
         </div>
         <div id="closetbutton">
            <a href="/addclothingpage" className="closet">Add Item</a>
         </div>
         <div id="closetbutton2">
            <a href="/outfits" className="closet">View Saved Outfits</a>
         </div>
         <div id="toplowerbox">
            <ItemClick viewitemid={viewitemid} viewitemimage={viewitemimage}/>
         </div>
         <div class="rightbox" id="rightlowerbox">
            <a href="/viewedit" className="closet" id="viewedit">View/Edit</a>
         </div>
         <p></p>
      </>
   )
}
