import { useEffect, useRef } from "react"
import "../styles/ShopBag.css"

const bgKeyframes = [
  {backgroundColor: "#0000"},
  {backgroundColor: "#0008"}
]

const tableKeyframes = [
  {transform: "translate(-50%, calc(-100% - 24px))"},
  {transform: "translate(-50%, 0)"}
]

function ShopBag({itemList, onRemoveItem, onHideBag}) {
  const itemsRendered = itemList.map((i) => <ShopBagItem key={i.id} item={i} onRemoveItem={onRemoveItem}/>)
  const totalPrice = itemList.reduce((total, i) => total + i.price, 0)
  const background = useRef(null)
  const table = useRef(null)

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: "smooth"})
    const nodeBg = background.current
    nodeBg.animate(bgKeyframes, {duration: 200, iterations: 1}).finished
      .then(() => {
        const nodeTab = table.current
        return nodeTab.animate(tableKeyframes, {duration: 500, easing: "ease-out", iterations: 1}).finished
      })
      .then(() => {
        const nodeTab = table.current
        nodeTab.style.transform = "translate(-50%, 0)"
      })
  }, [])

  return (
    <div className="ShopBag-background" ref={background}>
      <div className="ShopBag-container" ref={table}>
        <button className="ShopBag-hidebutton" onClick={onHideBag}>Hide</button>
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
              <td colSpan="2"><button onClick={(e) => alert("Sorry, magic potions don't actually exist (Don't tell Pete).")}>Checkout</button></td>
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
    <tr className="ShopBag-itemrow">
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>${(item.price / 100).toFixed(2)}</td>
      <td><button onClick={(e) => onRemoveItem(item.id)}>Remove</button></td>
    </tr>
  )
}

export default ShopBag
