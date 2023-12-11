import React from "react"
import { render } from "@testing-library/react"
import { Cool } from "./"

test("renders Cool section correctly", () => {
  const { container } = render(
    <Cool heading="heading" caption="caption" intro="intro" />
  )

  expect(container).toMatchSnapshot()
})
