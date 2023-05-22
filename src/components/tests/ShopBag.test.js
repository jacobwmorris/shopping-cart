import React from "react"

import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

import ShopBag from "../ShopBag"

describe("ShopBag tests", () => {
  it("Displays Nothing for an empty list", () => {
    render(<ShopBag itemList={[]} visible={true}/>)
    expect(screen.getByText("Nothing")).toBeInTheDocument()
  })

  it("Displays a single item", () => {
    render(<ShopBag itemList={[{id: 0, name: "sample", amount: 1, price: 3.99}]} visible={true}/>)
    expect(screen.getByText("sample")).toBeInTheDocument()
  })

  it("Displays multiple items", () => {
    const sampleList = [
      {id: 0, name: "sample", amount: 1, price: 3.99},
      {id: 1, name: "sample 2", amount: 2, price: 6.99},
      {id: 2, name: "sample 3", amount: 5, price: 24.99}
    ]

    const {container} = render(<ShopBag itemList={sampleList} visible={true}/>)
    expect(container.querySelectorAll(".ShopBag-itemflexbox").length).toBe(3)
  })
})
