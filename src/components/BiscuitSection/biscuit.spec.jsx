import React from "react"
import { render } from "@testing-library/react"
import { Biscuit } from "./"

test("renders Biscuit section correctly", () => {
  const { container } = render(<Biscuit />)

  expect(container).toMatchSnapshot()
})
