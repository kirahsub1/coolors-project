import "./Card.css"


const Card = (props) => {
  return (
    <div className="main-container">
        <div className="container">
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Card