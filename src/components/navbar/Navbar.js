import "./navbar.css"
export default function Navbar(){

    return(
      <nav className="navbar">
       <img src={require("../../assets/images/logo.png")} alt=""/>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      
      </nav>
    )
}