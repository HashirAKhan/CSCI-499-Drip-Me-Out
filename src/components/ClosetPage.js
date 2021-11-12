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

   function viewedit(){
      if (localStorage.getItem('viewedit') === 'true')
      {
         history.push("/viewedit");
         localStorage.setItem('viewedit', false);
         localStorage.setItem('viewedititemid', viewitemid);
      }
      else 
      {
         alert("No closet item selected");
      }
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

   const [itemlabels, setItemLabels] = useState([]);

   const [viewitemimage, setViewItemImage] = useState('');

   const [viewitemid, setViewItemId] = useState('');

   const [viewitemlabel, setViewItemLabel] = useState('');

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
            let item_label_array = [];
            let temp = JSON.parse(xhr.response);
            let data = temp["closet"];
            for(let i = 0; i < data.length; i++){
              const object = JSON.parse(data[i]);
              item_label_array.push(`${object["label"]}`);
              item_id_array.push(`${object["id"]}`);
            //   item_image_array.push(`data:image/png;base64,${object["image"]}`);
              item_image_array.push(`data:image/png;base64,${object["image"]}`);
              console.log(object)
            }

            let leftbox = document.getElementById("leftbox");
            let height = 240 * (data.length / 2);
            leftbox.style.height = `${height.toString()}px`;

            item_label_array.forEach(itemlabel => setItemLabels(oldArray => [...oldArray, itemlabel]));
            item_id_array.forEach(itemid => setItemIds(oldArray => [...oldArray, itemid]));
            item_image_array.forEach(itemimage => setItemImages(oldArray => [...oldArray, itemimage]));
         });
         xhr.open("POST", "http://localhost:8080/closet");
         const data = JSON.stringify({
           "email" : localStorage.getItem('email'),
         })
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
               <ItemImages itemimages={itemimages} itemlabels={itemlabels} itemids={itemids} onChange={onChange}/>
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
            <div onClick={viewedit} itemid={viewitemid}>
               <a className="closet" id="viewedit">View/Edit</a>
            </div>
         </div>
         <p></p>
      </>
   )
}
