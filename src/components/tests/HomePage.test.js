import React from "react"

import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

import {BrowserRouter} from "react-router-dom"
import HomePage from "../HomePage"

describe("HomePage tests", () => {
  it("Renders without crashing", () => {
    render(<BrowserRouter><HomePage/></BrowserRouter>)
    expect(screen.getByText("Pete's")).toBeInTheDocument()
  })
})
