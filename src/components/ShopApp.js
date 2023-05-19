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

  return (
    <BrowserRouter>
      <NavBar onBagToggle={handleBagToggle}/>
      {showBag ? <ShopBag itemList={itemsInBag}/> : null}
      <Routes>
        <Route path="/" element={<p>(Insert home page here)</p>}/>
        <Route path="/shop/" element={<ProductPage productList={products}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const sampleBag = [
  {id: 0, name: "sample", amount: 1, price: 3.99},
  {id: 1, name: "sample 2", amount: 2, price: 6.99},
  {id: 2, name: "sample 3", amount: 5, price: 24.99}
]

export default ShopApp;
