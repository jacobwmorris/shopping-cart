import "../styles/NavBar.css"
import sackIcon from "../images/sack.svg"
import {Link} from "react-router-dom"

function NavBar({itemCount, onBagToggle}) {
  return (
    <nav className="NavBar-flexbox">
      <div className="NavBar-item NavBar-sitetitle">Pete's</div>
      <Link to="/" className="NavBar-item NavBar-link">Home</Link>
      <Link to="/shop" className="NavBar-item NavBar-link">Shop</Link>
      <button className="NavBar-item NavBar-button" onClick={onBagToggle}>
        <img className="NavBar-icon" src={sackIcon} alt="Items in bag"></img>
        <div className="NavBar-itemcounter">{itemCount}</div>
      </button>
    </nav>
  )
}

export default NavBar
