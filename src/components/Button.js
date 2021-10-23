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
        let clothing_image_text = document.getElementById("innerdiv");
        clothing_image_text.style.position = "absolute";
      }
    }
    if (save) {
      let label = document.getElementById("clothing-label").value;
      let color = document.getElementById("clothing-color").value;
      if (document.getElementById("category").value === "select" || document.getElementById("type").value === "select") {
        alert("Category and Type required");
      }
      else if (!document.getElementById("clothing_img")) {
        alert("Image upload required (must press upload)")
      }
      else if (label === "" || color === "") {
        alert("Label and color required")
      }
      else {
        let file = document.getElementById("myFile").files[0]
        const reader = new FileReader();

        reader.addEventListener("load", function () {
          // convert image file to base64 string
          let base64 = reader.result;
          send_data_to_db(base64);
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
        function send_data_to_db(base64) {
          let img = document.getElementById("clothing_img").src;
          let xhr = new XMLHttpRequest();
          xhr.addEventListener("load", () => {
            if (xhr.responseText === "recorded")
            {
              alert("Add unsuccessful. Item has already been added to database");
            }
            else if (xhr.responseText === "added")
            {
              alert("Item added to database");
            }
          });

          xhr.open("POST", "http://localhost:8080/additem");
          let category = document.getElementById("category").value;
          let type = document.getElementById("type").value;
          let email = localStorage.getItem('email');
          let password = localStorage.getItem('password');
          let adding_item = `${type}&${category}&${label}&${color}&${base64}&${email}&${password}`
          xhr.send(adding_item);
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
