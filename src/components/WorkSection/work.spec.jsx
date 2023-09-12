import React from "react"
import { render } from "@testing-library/react"
import { Work } from "./"

test("renders Work section correctly", () => {
  const { container } = render(<Work />)

  expect(container).toMatchSnapshot()
})
