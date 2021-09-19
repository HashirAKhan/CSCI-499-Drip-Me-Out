import PropTypes from 'prop-types'

const Button = ({ text }) => {
  const onClick = () => {
    console.log('Logged Out')
  }

  return (
    <button
      onClick={onClick}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.propTypes = {
text: PropTypes.string,
}

export default Button
