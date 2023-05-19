import energyPotion from "../../images/EnergyPotion.png"
import speedPotion from "../../images/SpeedPotion.png"
import strengthPotion from "../../images/StrengthPotion.png"
import invisPotion from "../../images/InvisPotion.png"
import healthPotion from "../../images/HealthPotion.png"
import lovePotion from "../../images/LovePotion.png"
import luckPotion from "../../images/LuckPotion.png"
import waterPotion from "../../images/WaterPotion.png"
import alcoholPotion from "../../images/AlcoholPotion.png"
import sharkPotion from "../../images/SharkPotion.png"

function Product(id, name, desc, price, image) {
    return {id, name, desc, price, image}
}

const products = [
    Product(0, "Energy Potion", "The famous Ye Olde Ruddy Bull brew.", 1.99, energyPotion),
    Product(1, "Speed potion", "Running behind? Don't forget one of these!", 4.99, speedPotion),
    Product(2, "Strength potion", "Make your friends think you work out!", 4.99, strengthPotion),
    Product(3, "Invisibility potion", "Great for social anxiety.", 14.99, invisPotion),
    Product(4, "Health potion", "The cure for what ails ya.", 9.99, healthPotion),
    Product(5, "Love potion", "Become irresistable!", 14.99, lovePotion),
    Product(6, "Luck potion", "Don't let your poker buddies know you have this.", 24.99, luckPotion),
    Product(7, "Hydration potion", 'For it is written: "Hydrate lest thou die-drate" (Definitely not just water).', 1.99, waterPotion),
    Product(8, "Befuddlement potion", 'Often used "recreationally" (Definitely not just whiskey).', 14.99, alcoholPotion),
    Product(9, "Shark repellant potion", "Hey, better safe than sorry!", 4.99, sharkPotion)
]

export default products
