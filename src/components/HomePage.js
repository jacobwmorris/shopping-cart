import potionPic from "../images/MainPagePotion.png"

function HomePage() {
  return (
    <div>
      <div>
        <img src={potionPic} alt="Potion"/>
        <div>
          <h1>Pete's</h1>
          <h2>Discount Potions</h2>
          <p>"You can't handle our strongest potions!"</p>
        </div>
      </div>
      <div>
        <button>Start shopping now!</button>
      </div>
      <div>
        <HomePageInfo
          title="Great for long quests!"
          text="Pete's potions keep their potency for months on end, and with our low prices you can stock up on as many as you need."
          color="red"
        />
        <HomePageInfo
          title="Guaraneed effective!"
          text="Finally, magic liquids you can depend on! You won't get caught unprepared with our potions."
          color="red"
        />
        <HomePageInfo
          title="Probably won't explode!"
          text={<>All our potions are brewed with Pete's Totally Dependable Secret Family Recipe<sup>tm</sup>.</>}
          color="red"
        />
      </div>
    </div>
  )
}

function HomePageInfo({title, text, color}) {
  const colorClass = {
    red: "HomePage-redinfo",
    green: "HomePage-greeninfo",
    purple: "HomePage-purpleinfo"
  }

  return (
    <div className={colorClass[color]}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default HomePage
