import energyPotion from "../../src/images/EnergyPotion.png"
import speedPotion from "../../src/images/SpeedPotion.png"
import strengthPotion from "../../src/images/StrengthPotion.png"
import invisPotion from "../../src/images/InvisPotion.png"
import healthPotion from "../../src/images/HealthPotion.png"
import lovePotion from "../../src/images/LovePotion.png"
import luckPotion from "../../src/images/LuckPotion.png"
import waterPotion from "../../src/images/WaterPotion.png"
import alcoholPotion from "../../src/images/AlcoholPotion.png"
import sharkPotion from "../../src/images/SharkPotion.png"

function Product(id, name, desc, image) {
    return {id, name, desc, image}
}

const products = [
    Product(0, "Energy Potion", "The famous Ye Olde Ruddy Bull brew.", energyPotion),
    Product(1, "Speed potion", "Running behind? Don't forget one of these!", speedPotion),
    Product(2, "Strength potion", "Make your friends think you work out!", strengthPotion),
    Product(3, "Invisibility potion", "Great for social anxiety.", invisPotion),
    Product(4, "Health potion", "The cure for what ails ya.", healthPotion),
    Product(5, "Love potion", "Become irresistable!", lovePotion),
    Product(6, "Luck potion", "Don't let your poker buddies know you have this.", luckPotion),
    Product(7, "Hydration potion", 'For it is written: "Hydrate lest thou die-drate" (Definitely not just water).', waterPotion),
    Product(8, "Befuddlement potion", 'Often used "recreationally" (Definitely not just whiskey).', alcoholPotion),
    Product(9, "Shark repellant potion", "Hey, better safe than sorry!", sharkPotion)
]

export default products
