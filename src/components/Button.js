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
      if (file)
      {
        image_displayed = false;
        if (document.getElementById("clothing_img"))
        {
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
