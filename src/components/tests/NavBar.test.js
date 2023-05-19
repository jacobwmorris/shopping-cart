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
})
