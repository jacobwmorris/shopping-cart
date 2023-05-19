
function ShopBag({itemList}) {
  const itemsRendered = itemList.map((i) => <ShopBagItem key={i.id} item={i}/>)
  const totalPrice = itemList.reduce((total, i) => total + i.price, 0)

  return (
    <div>
      <div></div>
      <div>
        <h2>Items in bag</h2>
        <ul>
          {itemsRendered.length > 0 ? itemsRendered : <li>Nothing</li>}
        </ul>
        <div>
          <span>Total: ${totalPrice}</span>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

function ShopBagItem({item}) {
  return (
    <li className="ShopBag-itemflexbox">
      <div>{item.amount} x</div>
      <div>{item.name}</div>
      <div>${item.price}</div>
      <button>Remove</button>
    </li>
  )
}

export default ShopBag