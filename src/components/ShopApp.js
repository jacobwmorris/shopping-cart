import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import products from "./helpers/products"
import ProductPage from "./ProductPage"

function ShopApp() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<p>(Insert home page here)</p>}/>
        <Route path="/shop/" element={<ProductPage productList={products}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default ShopApp;
