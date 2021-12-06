import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Button = ({ text, href, image, save, save_two, customize }) => {
  useEffect(() => {
    let button = document.querySelector("button");
    button.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }, []);
  const history = useHistory();

  let image_displayed;
  const onClick = () => {
    if (text === "Save Outfit") {
      saveOutfit();
    } else if (text === "Change") {
      changeProfile();
    } else if (customize) {
      history.push("/customize");
    } else if (href != undefined) {
      history.push(`${href}`);
    } else if (save_two) {
      let label = document.getElementById("clothing-label").value;
      if (label === "") {
        alert("Label required");
      } else if (document.getElementById("category").value === "select") {
        alert("Category required");
      }
      // else if (document.getElementById("type").value === "select") {
      //   alert("Type required");
      // }
      else if (document.getElementById("color").value === "select") {
        alert("Color required");
      } else if (!document.getElementById("clothing_img")) {
        alert("Image upload required");
      } else {
        let base64 = "";
        let file = document.getElementById("myFile").files[0];
        // console.log(file);
        if (file === undefined) {
          sendDataToDb("", false);
        }
        const reader = new FileReader();

        reader.addEventListener(
          "load",
          function () {
            // convert image file to base64 string
            base64 = reader.result;
            sendDataToDb(base64, true);
          },
          false
        );

        if (file) {
          reader.readAsDataURL(file);
        }
        function sendDataToDb(base64, upload) {
          let img = localStorage.getItem("viewitemimage");
          console.log(img);
          if (!upload) {
            base64 = img;
          }
          let xhr = new XMLHttpRequest();
          xhr.addEventListener("load", () => {
            if (xhr.responseText === "recorded") {
              alert("Item has not been edited");
            } else if (xhr.responseText === "edited") {
              alert("Item edited in database");
            }
          });

          xhr.open("POST", "http://localhost:8080/editItem");

          const data = JSON.stringify({
            category: document.getElementById("category").value,
            color: document.getElementById("color").value,
            label: label,
            email: localStorage.getItem("email"),
            image: base64,
            id: `${localStorage.getItem("viewedititemid")}`,
          });
          // console.log(data);
          xhr.send(data);
        }
      }
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
        let url = URL.createObjectURL(file);
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
      } else if (document.getElementById("category").value === "select") {
        alert("Category required");
      }
      // else if (document.getElementById("type").value === "select") {
      //   alert("Type required");
      // }
      else if (document.getElementById("color").value === "select") {
        alert("Color required");
      } else if (!document.getElementById("clothing_img")) {
        alert("Image upload required");
      } else {
        let file = document.getElementById("myFile").files[0];
        const reader = new FileReader();

        reader.addEventListener(
          "load",
          function () {
            // convert image file to base64 string
            let base64 = reader.result;
            sendDataToDb(base64);
          },
          false
        );

        if (file) {
          reader.readAsDataURL(file);
        }
        function sendDataToDb(base64) {
          let img = document.getElementById("clothing_img").src;
          let xhr = new XMLHttpRequest();
          xhr.addEventListener("load", () => {
            if (xhr.responseText === "recorded") {
              alert("Add unsuccessful. Item is already in your closet");
            } else if (xhr.responseText === "added") {
              alert("Item added to closet");
            }
          });

          xhr.open("POST", "http://localhost:8080/additem");

          const data = JSON.stringify({
            category: document.getElementById("category").value,
            // "type" : document.getElementById("type").value,
            color: document.getElementById("color").value,
            label: label,
            email: localStorage.getItem("email"),
            image: base64,
          });
          xhr.send(data);
        }
      }
    }
  };

  function saveOutfit() {
    const items = document.getElementsByTagName("img");
    let outfit = [];
    for (let i = 0; i < items.length; i++) {
      outfit.push(items[i].id);
    }
    if (items.length > 1) {
      let xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        if (xhr.responseText === "saved") {
          alert("Outfit saved");
        } else {
          alert("Outfit not saved");
        }
      });
      xhr.open("POST", "http://localhost:8080/saveOutfit");
      const data = JSON.stringify({
        name: "Outfit",
        outfit: outfit,
        user: localStorage.getItem("email"),
      });
      xhr.send(data);
    } else {
      alert("Select more items to save outfit");
    }
  }

  function changeProfile() {
    const inputs = document.getElementsByTagName("input");
    let data = {};
    for (let i = 0; i < inputs.length; i++) {
      data[inputs[i].id] = inputs[i].value;
    }
    localStorage.setItem("zipcode", data["zipcode-profile"]);
    data["email"] = localStorage.getItem("email");
    console.log(data);
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      alert(xhr.responseText);
    });
    xhr.open("POST", "http://localhost:8080/editProfile");
    data = JSON.stringify(data);
    xhr.send(data);
  }

  return (
    <a href={href}>
      <button onClick={onClick} className="btn">
        {text}
      </button>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
