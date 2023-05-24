import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import "../styles/ShopApp.css"
import NavBar from "./NavBar"
import products from "./helpers/products"
import ProductPage from "./ProductPage"
import ShopBag from "./ShopBag"

function ShopApp() {
  const [showBag, setShowBag] = useState(true)
  const [itemsInBag, setItemsInBag] = useState([])

  function handleBagToggle() {
    setShowBag(!showBag)
  }

  function handleBagExit() {
    setShowBag(false)
  }

  function addItem(id, amount) {
    const product = products.find((p) => id === p.id)
    const price = amount * product.price
    const productInBag = itemsInBag.findIndex((p) => id === p.id)

    if (productInBag === -1) {
      setItemsInBag(itemsInBag.concat([{...product, amount, price}]))
    }
    else {
      const newList = itemsInBag.slice()
      newList[productInBag].amount += amount
      newList[productInBag].price += price
      setItemsInBag(newList)
    }
  }

  function removeItem(id) {
    const itemIndex = itemsInBag.findIndex((p) => id === p.id)
    const newList = itemsInBag.slice()

    if (itemIndex !== -1) {
      newList.splice(itemIndex, 1)
      setItemsInBag(newList)
    }
  }

  const itemCount = itemsInBag.reduce((total, i) => total + i.amount, 0)

  return (
    <BrowserRouter>
      <NavBar itemCount={itemCount} onBagToggle={handleBagToggle}/>
      <main class="ShopApp-pagebody">
        {showBag ? <ShopBag itemList={itemsInBag} onRemoveItem={removeItem} onHideBag={handleBagExit}/> : null}
        <Routes>
          <Route path="/" element={<p>(Insert home page here)</p>}/>
          <Route path="/shop/" element={<ProductPage productList={products} onAddItem={addItem}/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default ShopApp;
