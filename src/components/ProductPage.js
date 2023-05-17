
function ProductPage({productList}) {
  const productsRendered = productList.map((p) => <ProductCard key={p.id} product={p}/>)

  return (
    <div>
      {productsRendered}
    </div>
  )
}

function ProductCard({product}) {
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        <img src={product.image} alt={product.name}/>
      </div>
      <p>{product.desc}</p>
      <button>Add to bag</button>
      <div>
        <button>-</button>
        <input type="text" name="amount"/>
        <button>+</button>
      </div>
    </div>
  )
}

export default ProductPage
