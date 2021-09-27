import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Button = ({ text, url }) => {
  const onClick = () => {
    console.log('Logged Out')
  }

  return (
    <Link to={url}>
      <button
        onClick={onClick}
        className='btn'
      >
        {text}
      </button>
    </Link>
  )
}

Button.propTypes = {
text: PropTypes.string,
url: PropTypes.string,
}

export default Button
