import React from 'react'
import '../css/itemimage.css'

export default function ItemImage(props) {  
   return (
      <img id={props.itemid} alt="" src={props.itemimage} onClick={() => {
         let prevImg = document.getElementById("view");
         let prevLabel = document.getElementById("label");
         let prevEmptyText = document.getElementById("emptytext");
         if (prevImg && prevLabel)
         {
            prevImg.remove();
            prevLabel.remove();
            prevEmptyText.remove();
         }
         props.onChange(props.itemid);
         let div = document.getElementById("toplowerbox");
         let label = document.createElement("p");
         label.style.fontWeight = "lighter";
         label.innerText = props.itemlabel;
         label.id = "label";
         div.appendChild(label);
         let newimg = document.getElementById(props.itemid).cloneNode(true);
         div.appendChild(newimg);
         newimg.id = "view"
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
         p.id = "emptytext";
         div.appendChild(p);

         localStorage.setItem('viewedit', true);
         localStorage.setItem('viewedititemid', props.itemid);
         localStorage.setItem('viewitemimage', props.itemimage)
         console.log(props.itemimage + "*")
      }}>
      </img>
   )
}
