import React from "react";
import "../css/itemimage.css";

export default function ItemImage(props) {
  return (
    <img
      id={props.itemid}
      alt=""
      src={props.itemimage}
      onClick={() => {
        let prevImg = document.getElementById("view");
        let prevLabel = document.getElementById("label");
        let prevEmptyText = document.getElementById("emptytext");
        if (prevImg && prevLabel) {
          prevImg.remove();
          prevLabel.remove();
          prevEmptyText.remove();
        }
        props.onChange(props.itemid, props.itemimage, props.itemlabel);
      }}
    ></img>
  );
}
