import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './positionSection.css'

export default function PositionSection(props) {
  return (
    <div className="cardContainer">
    <div className='positionCard-container'>
    <div className="svg-container">
    <FontAwesomeIcon icon= {props.data.icon} className='apple-icon'/>
        <p className="sectionHeading">{props.data.title}</p>
    </div>
    <div className="para-container">
    <p className="section-para">{props.data.description}</p>
    </div>
    </div>
    </div>
  )
}
