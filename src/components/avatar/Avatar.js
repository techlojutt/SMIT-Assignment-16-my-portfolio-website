import "./avatar.css";

export default function Avatar() {
  return (
    <div className ='img-container'>
    <div className='avatar-container'>
        <img src={require("../../assets/images/Avatar.png")} style={{width:'213px'}} alt="User Avatar" />
    </div>
    </div>
  )
}
