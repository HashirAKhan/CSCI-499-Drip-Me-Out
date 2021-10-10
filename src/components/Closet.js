import Navbar from './Navbar'
import { useEffect, useRef } from 'react'
import "../css/closet.css"

export default function Closet() {
   const rendered = useRef(false);
   const rendered_value = rendered.current;
   useEffect(() => {
      if (!rendered_value) {
         document.body.style.background = "url(https://i.ibb.co/6mxrnnY/rack.jpg)"
         document.body.style.backgroundSize = "cover"
         document.body.style.backgroundAttachment = "fixed"
         document.body.style.backgroundPosition = "center"

         let xhr = new XMLHttpRequest();
         xhr.addEventListener("load", () => {
            let stop = 0;
            let counter = 0;
            let div = document.getElementById('leftbox');
            let innerdiv = document.createElement("div");
            let subdiv = div.appendChild(innerdiv);

            let load = document.getElementById("load");
            load.remove();

            for (let i = 0; i < xhr.responseText.length; i++) {
               if (xhr.responseText[i] === "*") {
                  let image = new Image();
                  let base64image = xhr.responseText.substring(stop, i);
                  image.src = `data:image/png;base64,${base64image}`;

                  let img = subdiv.appendChild(image);
                  img.id = `img${counter}`;
                  img.style.width = "47%";
                  img.style.height = "47%";
                  img.style.borderRadius = "10px";
                  img.style.backgroundColor = "#fff";
                  img.style.padding = "1px";
                  img.style.margin = "1px 4px 1px 4px";
                  counter++;
                  stop = i + 1;
               }
            }
            subdiv.style.width = "400px";
            subdiv.style.maxWidth = "100%";
            subdiv.style.maxHeight = "100%";
            subdiv.style.height = "400px";

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
            <a id="load" href="/closet">Loading Items...</a>
         </div>
         <div id="closetbutton">
            <a href="/addclothingpage" className="closet">Add Item</a>
         </div>
         <div id="closetbutton2">
            <a href="/outfits" className="closet">View Saved Outfits</a>
         </div>
         {/* <div id="rightbox">
            text
         </div> */}
      </>
   )
}
