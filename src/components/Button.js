import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Button = ({ text, href, image, save }) => {
  const history = useHistory();

  let image_displayed;
  const onClick = () => {
    if (href != undefined) {
      history.push(`${href}`);
    }
    if (image) {

      let file = document.getElementById("myFile").files[0];
      if (file) {
        image_displayed = false;
        if (document.getElementById("clothing_img")) {
          document.getElementById("clothing_img").remove();
        }
      }
      if (!image_displayed) {
        let image_div = document.getElementById("image");
        let url = URL.createObjectURL(file)
        let img = new Image();
        img.src = url;
        img.id = "clothing_img";
        // img.style.position = "relative";
        // img.style.marginBottom = "80%";
        image_div.appendChild(img);
        image_displayed = true;
        // let clothing_image_text = document.getElementById("innerdiv");
        // clothing_image_text.style.position = "absolute";
      }
    }
    if (save) {
      let label = document.getElementById("clothing-label").value;
      if (label === "") {
        alert("Label required");
      }
      else if (document.getElementById("category").value === "select") {
        alert("Category required");
      }
      // else if (document.getElementById("type").value === "select") {
      //   alert("Type required");
      // }
      else if (document.getElementById("color").value === "select") {
        alert("Color required");
      }
      else if (!document.getElementById("clothing_img")) {
        alert("Image upload required (must press upload)");
      }
      else {
        let file = document.getElementById("myFile").files[0]
        const reader = new FileReader();

        reader.addEventListener("load", function () {
          // convert image file to base64 string
          let base64 = reader.result;
          sendDataToDb(base64);
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
        function sendDataToDb(base64) {
          let img = document.getElementById("clothing_img").src;
          let xhr = new XMLHttpRequest();
          xhr.addEventListener("load", () => {
            if (xhr.responseText === "recorded")
            {
              alert("Add unsuccessful. Item is already in your closet");
            }
            else if (xhr.responseText === "added")
            {
              alert("Item added to closet");
            }
          });

          xhr.open("POST", "http://localhost:8080/additem");

          const data = JSON.stringify({
            "category" : document.getElementById("category").value,
            // "type" : document.getElementById("type").value,
            "color" : document.getElementById("color").value,
            "label" : label,
            "email" : localStorage.getItem('email'),
            "image" : base64
          })
          console.log(data);
          // xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(data);
        }

      }
    }
  }

  return (
    <a href={href}>
      <button
        onClick={onClick}
        className='btn'
      >
        {text}
      </button>
    </a>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string
}

export default Button
