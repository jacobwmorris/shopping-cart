import "../styles/NavBar.css"
import sackIcon from "../images/sack.svg"
import {Link} from "react-router-dom"
import { useEffect, useRef } from "react"

const bagKeyframes = [
  {filter: "drop-shadow(0 3px 0 black)", transform: "scale(1)"},
  {filter: "drop-shadow(0 0 5px #ff00ea)", transform: "scale(1.3)"}
]

function NavBar({itemCount, onBagToggle}) {
  const iconRef = useRef(null)
  const isFirstRender = iconRef.current === null

  useEffect(() => {
    if (isFirstRender) {
      return
    }

    iconRef.current.animate(bagKeyframes, {duration: 150, iterations: 2, direction: "alternate"})
  }, [itemCount, isFirstRender])

  return (
    <nav className="NavBar-flexbox">
      <div className="NavBar-item NavBar-sitetitle">Pete's</div>
      <Link to="/" className="NavBar-item NavBar-link">Home</Link>
      <Link to="/shop" className="NavBar-item NavBar-link">Shop</Link>
      <button className="NavBar-item NavBar-button" onClick={onBagToggle}>
        <img className="NavBar-icon" src={sackIcon} alt="Items in bag" ref={iconRef}></img>
        <div className="NavBar-itemcounter">{itemCount}</div>
      </button>
    </nav>
  )
}

export default NavBar
