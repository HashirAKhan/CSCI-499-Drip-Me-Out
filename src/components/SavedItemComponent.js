import "../css/saveditemcomponent.css"

export default function SavedItem(props){
  return(
    <>
      <div id="saved-item">
        <img src={props.img} />
        <h3> {props.itemname} </h3>
      </div>
    </>
  )
}
