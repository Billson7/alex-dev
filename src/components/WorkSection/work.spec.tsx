import React from "react"
import { render } from "@testing-library/react"
import { Work } from "."

test("renders Work section correctly", () => {
  const { container } = render(<Work heading='heading' caption="caption" intro='intro' />)

  expect(container).toMatchSnapshot()
})
