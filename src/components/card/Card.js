import './card.css';

export default function Card(props) {
  return (
    <div className="card-container">
       <img src={props.img}/>
       <div>
         <p className = "click">CLICK HERE TO VISIT</p>
         <p className = "card-title">{props.title}</p>
       </div>
    </div>
  )
}
