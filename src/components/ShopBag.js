
function ShopBag({itemList, onRemoveItem}) {
  const itemsRendered = itemList.map((i) => <ShopBagItem key={i.id} item={i} onRemoveItem={onRemoveItem}/>)
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
          <span>Total: ${totalPrice / 100}</span>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

function ShopBagItem({item, onRemoveItem}) {
  return (
    <li className="ShopBag-itemflexbox">
      <div>{item.amount} x</div>
      <div>{item.name}</div>
      <div>${item.price / 100}</div>
      <button onClick={(e) => onRemoveItem(item.id)}>Remove</button>
    </li>
  )
}

export default ShopBag
