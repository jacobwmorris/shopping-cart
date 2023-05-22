import {useState} from "react"
import "../styles/ProductPage.css"

function ProductPage({productList, onAddItem}) {
  const productsRendered = productList.map((p) => <ProductCard key={p.id} product={p} onAddItem={onAddItem}/>)

  return (
    <div className="ProductPage-listflexbox">
      {productsRendered}
    </div>
  )
}

function ProductCard({product, onAddItem}) {
  const [amount, setAmount] = useState(1)

  function handleChange(event) {
    if (event.target.value.length === 0) {
      setAmount(0)
      return
    }

    const newAmount = parseInt(event.target.value)
    if (isNaN(newAmount)) {
      setAmount(1)
    }
    else {
      setAmount(newAmount)
    }
  }

  function handleFocusOut(event) {
    if (event.target.value === "" || amount <= 0) {
      setAmount(1)
    }
  }

  return (
    <div className="ProductPage-cardflexbox">
      <h2 className="ProductPage-name">{product.name}</h2>
      <div>
        <img className="ProductPage-potimage" src={product.image} alt={product.name}/>
      </div>
      <p>{product.desc}</p>
      <div className="ProductPage-controls">
        <button
          className="ProductPage-button"
          onClick={(e) => onAddItem(product.id, amount)}
        >Add to bag</button>
        <div>
          <button
            className="ProductPage-button ProductPage-squarebutton"
            onClick={(e) => setAmount(amount === 1 ? amount : amount - 1)}
          >-</button>
          <input
            className="ProductPage-input"
            type="text"
            name="amount"
            value={amount === 0 ? "" : amount}
            onChange={handleChange}
            onBlur={handleFocusOut}
          />
          <button
            className="ProductPage-button ProductPage-squarebutton"
            onClick={(e) => setAmount(amount + 1)}
          >+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
