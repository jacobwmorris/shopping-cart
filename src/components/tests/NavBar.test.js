import React from "react"

import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import {act} from "react-dom/test-utils"

import { BrowserRouter } from "react-router-dom"
import NavBar from "../NavBar"

describe("NavBar tests", () => {
  it("Renders without crashing", () => {
    render(<BrowserRouter><NavBar/></BrowserRouter>)
  })

  it("Adds a style to the currently selected link", async () => {
    const user = userEvent.setup()
    render(<BrowserRouter><NavBar/></BrowserRouter>)

    const link = screen.getByRole("link", {name: "Shop"})
    await act(() => user.click(link))

    expect(link).toHaveClass("NavBar-current")
  })
})
