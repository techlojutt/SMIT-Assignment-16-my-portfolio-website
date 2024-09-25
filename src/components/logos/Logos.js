import { logoImgsData } from "../../constants/logo"
import "./logo.css"
export default function Logos(props) {
  return (
    <div>
       <img src={props.src} alt ='' className='logo-imgs'/> 
    </div>
  )
}
