import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Button = ({ text, href }) => {
  const history = useHistory();
  const onClick = () => {
    if (href != undefined)
    {
      history.push(`${href}`);
    }
    //console.log('Logged Out')
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
