import {Link} from "react-router-dom"
import potionPic from "../images/MainPagePotion.png"
import "../styles/HomePage.css"

function HomePage() {
  return (
    <div className="HomePage-container">
      <div className="HomePage-titleflexbox">
        <img className="HomePage-potionpic" src={potionPic} alt="Potion"/>
        <div className="HomePage-titletext">
          <h1>Pete's</h1>
          <h2>Discount Potions</h2>
          <p>"You can't handle our strongest potions!"</p>
        </div>
      </div>
      <div className="HomePage-shoplinkholder">
        <Link to="/shop" className="HomePage-shoplink">Start shopping now!</Link>
      </div>
      <div className="HomePage-infoflexbox">
        <HomePageInfo title="Great for long quests!">
          <p>Pete's potions keep their potency for months on end, and with our low prices you can stock up on as many as you need.</p>
        </HomePageInfo>
        <HomePageInfo title="Guaraneed effective!">
          <p>Finally, magic liquids you can depend on! You won't get caught unprepared with our potions.</p>
        </HomePageInfo>
        <HomePageInfo title="Probably won't explode!">
          <p>All our potions are brewed with Pete's Totally Dependable Secret Family Recipe<sup>tm</sup>.</p>
        </HomePageInfo>
      </div>
    </div>
  )
}

function HomePageInfo({title, children}) {
  return (
    <div className="HomePage-info">
      <h3 className="HomePage-infotitle">{title}</h3>
      {children}
    </div>
  )
}

export default HomePage
