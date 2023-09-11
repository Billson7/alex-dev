import React from "react"
import { render } from "@testing-library/react"
import { Hero } from "./"

test("renders site correctly", () => {
  const { container } = render(<Hero />)

  expect(container).toMatchSnapshot()
})
