import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
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

  function addItem(id, amount) {
    const product = products.find((p) => id === p.id)
    const price = amount * product.price
    const productInBag = itemsInBag.findIndex((p) => id === p.id)

    if (productInBag === -1) {
      setItemsInBag(itemsInBag.concat([{amount, price, ...product}]))
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

  return (
    <BrowserRouter>
      <NavBar onBagToggle={handleBagToggle}/>
      {showBag ? <ShopBag itemList={itemsInBag} onRemoveItem={removeItem}/> : null}
      <Routes>
        <Route path="/" element={<p>(Insert home page here)</p>}/>
        <Route path="/shop/" element={<ProductPage productList={products} onAddItem={addItem}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

/* const sampleBag = [
  {id: 0, name: "sample", amount: 1, price: 3.99},
  {id: 1, name: "sample 2", amount: 2, price: 6.99},
  {id: 2, name: "sample 3", amount: 5, price: 24.99}
] */

export default ShopApp;
