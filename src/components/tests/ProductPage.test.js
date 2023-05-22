import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import {act} from "react-dom/test-utils"

import ProductPage from "../ProductPage"
import products from "../helpers/products"

describe("ProductPage tests", () => {
  it("Renders without crashing", () => {
    render(<ProductPage productList={[]} onAddItem={() => {}}/>)
  })

  it("Renders a list of products", () => {
    const {container} = render(<ProductPage productList={products} onAddItem={() => {}}/>)
    expect(container.querySelectorAll(".ProductPage-cardflexbox").length).toBe(products.length)
  })

  it("Calls the onAddItem callback", async () => {
    userEvent.setup()
    const testCb = jest.fn()
    render(<ProductPage productList={products.slice(0, 1)} onAddItem={testCb}/>)
    const button = screen.getByRole("button", {name: "Add to bag"})

    await act(async () => userEvent.click(button))
    expect(testCb).toHaveBeenCalled()
  })

  it("Can adjust item amount", async () => {
    userEvent.setup()
    render(<ProductPage productList={products.slice(0, 1)} onAddItem={() => {}}/>)
    const input = screen.getByRole("textbox")

    await act(async () => userEvent.type(input, "2"))
    expect(input.value).toBe("12")
  })
})
