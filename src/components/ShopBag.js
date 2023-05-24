import "../styles/ShopBag.css"

function ShopBag({itemList, onRemoveItem}) {
  const itemsRendered = itemList.map((i) => <ShopBagItem key={i.id} item={i} onRemoveItem={onRemoveItem}/>)
  const totalPrice = itemList.reduce((total, i) => total + i.price, 0)

  return (
    <div className="ShopBag-flexbox">
      <div className="ShopBag-container">
        <button className="ShopBag-hidebutton">Hide</button>
        <table className="ShopBag-table">
          <thead>
            <tr>
              <th className="ShopBag-tabletitle" colSpan="4">Items in bag</th>
            </tr>
          </thead>
          <tbody className="ShopBag-tablebody">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <td></td>
            </tr>
            {itemsRendered.length > 0 ? itemsRendered : <tr><td colSpan="4">No items.</td></tr>}
            <tr>
              <td colSpan="2"><button>Checkout</button></td>
              <td className="ShopBag-totalprice" colSpan="2">Total: ${(totalPrice / 100).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ShopBagItem({item, onRemoveItem}) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>${(item.price / 100).toFixed(2)}</td>
      <td><button onClick={(e) => onRemoveItem(item.id)}>Remove</button></td>
    </tr>
  )
  /* return (
    <li className="ShopBag-itemflexbox">
      <div>{item.amount} x</div>
      <div>{item.name}</div>
      <div>${(item.price / 100).toFixed(2)}</div>
      <button onClick={(e) => onRemoveItem(item.id)}>Remove</button>
    </li>
  ) */
}

export default ShopBag
