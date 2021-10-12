import React from 'react'
import '../css/itemimage.css'

export default function ItemImage(props) {  
   return (
      <img id={props.itemid} alt="" src={props.itemimage} onClick={() => {
         props.onChange(props.itemid);
         let div = document.getElementById("toplowerbox");
         let newimg = document.getElementById(props.itemid).cloneNode(true);
         div.appendChild(newimg);
         newimg.style.width = "47%";
         newimg.style.height = "47%";
         newimg.style.borderRadius = "10px";
         newimg.style.margin = "1px 4px 1px 4px";
         newimg.style.padding = "0px";
         newimg.addEventListener('mouseenter', e => {
            newimg.style.bottom = "0px";
            newimg.style.cursor = "default";

         });
         newimg.addEventListener('mouseleave', e => {
            newimg.style.bottom = "0px";
            newimg.style.cursor = "default";
         });
         let p = document.createElement("p");
         div.appendChild(p);
      }}>
      </img>
   )
}
