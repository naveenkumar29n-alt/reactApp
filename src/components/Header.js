import { Link } from "react-router";

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;