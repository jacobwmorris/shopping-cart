import "../styles/ProductPage.css"

function ProductPage({productList}) {
  const productsRendered = productList.map((p) => <ProductCard key={p.id} product={p}/>)

  return (
    <div className="ProductPage-listflexbox">
      {productsRendered}
    </div>
  )
}

function ProductCard({product}) {
  return (
    <div className="ProductPage-cardflexbox">
      <h2 className="ProductPage-name">{product.name}</h2>
      <div>
        <img className="ProductPage-potimage" src={product.image} alt={product.name}/>
      </div>
      <p>{product.desc}</p>
      <div className="ProductPage-controls">
        <button className="ProductPage-button">Add to bag</button>
        <div>
          <button className="ProductPage-button ProductPage-squarebutton">-</button>
          <input className="ProductPage-input" type="text" name="amount" defaultValue="1"/>
          <button className="ProductPage-button ProductPage-squarebutton">+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
