import '../css/addclothing.css';
// import Header from './Header'
import ClothingForm from './ClothingForm'
import ClothingImage from './ClothingImage'

const AddClothing = () => {

  return (
    <div className='container'>
      <div id="navbar">
        <a href="/" id="logout">Log Out</a>
      </div>
      <div className='content-container'>
        <ClothingForm />
        <ClothingImage />
      </div>
    </div>
  )
}

export default AddClothing
