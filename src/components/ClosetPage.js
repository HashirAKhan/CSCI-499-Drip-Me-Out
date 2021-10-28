import Navbar from './Navbar'
import React, { useEffect, useRef, useState } from 'react'
import "../css/closetpage.css"
import ItemImages from "./ItemImages"
import ItemClick from './ItemClick'
import { useHistory } from 'react-router-dom'

export default function Closet(props) {
   const history = useHistory();
   function add(){
      history.push("/addclothing");
   }

   const rendered = useRef(false);

   let user = useRef();

   if (props.user.login)
   {
      user.current = props.user;
   }

   const rendered_value = rendered.current;

   const [itemimages, setItemImages] = useState([]);

   const [itemids, setItemIds] = useState([]);

   const [viewitemimage, setViewItemImage] = useState('');

   const [viewitemid, setViewItemId] = useState('');

   function onChange(id) {
      setViewItemId(id);
   }

   useEffect(() => {

      // Just added .current to render_valued, have not tested for working functionality yet
      if (!(rendered_value.current)) {
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
            if (document.getElementById("load"))
            {
               load.remove();
            }

            let item_image_array = [];
            let item_id_array = [];
            console.log("test");
            let temp = JSON.parse(xhr.response);
            let data = temp["closet"];
            for(let i = 0; i < data.length; i++){
              const object = data[i];
              const json = JSON.parse(object[1]);
              console.log(json);
              item_id_array.push(`${json["id"]}`);
              item_image_array.push(`data:image/png;base64,${object[0]}`);
            }

            item_id_array.forEach(itemid => setItemIds(oldArray => [...oldArray, itemid]));

            item_image_array.forEach(itemimage => setItemImages(oldArray => [...oldArray, itemimage]));
         });
         xhr.open("POST", "http://localhost:8080/closet");
         const data = JSON.stringify({
           "email" : localStorage.getItem('email'),
         })
         console.log(data);
         xhr.send(data);
         rendered.current = true;
      }

   }, [])

   return (
      <>
         <Navbar />
         <div id="leftbox">
            <div id="innerdiv">
               <a id="load" href="/#/closet">Loading Items...</a>
               <ItemImages itemimages={itemimages} itemids={itemids} onChange={onChange}/>
            </div>
         </div>
         <div onClick={add} id="closetbutton">
            <a className="closet">Add Item</a>
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
