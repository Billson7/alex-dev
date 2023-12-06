import React from "react"
import { render, screen } from "@testing-library/react"
import { Biscuit } from "."

describe("Biscuit section", () => {
  describe("Headings", () => {
    const headings = ["biscuit-heading", "biscuit-caption", "biscuit-intro"]

    test("renders Biscuit section correctly", () => {
      const { container } = render(
        <Biscuit title="title" caption="caption" intro="intro" />
      )

      expect(container).toMatchSnapshot()
    })

    test.each(headings)("renders Biscuit heading correctly - %p", (heading) => {
      render(<Biscuit title="title" caption="caption" intro="intro" />)

      expect(screen.getByTestId(heading)).toBeInTheDocument()
    })
  })

  describe("Images", () => {
    const images = ["biscuit-left", "biscuit-middle", "biscuit-right"]

    test("renders Image row correctly", () => {
      render(<Biscuit title="title" caption="caption" intro="intro" />)

      expect(screen.getByTestId("biscuit-image-row")).toBeInTheDocument()
    })

    test.each(images)("renders Images correctly - %p", (image) => {
      render(<Biscuit title="title" caption="caption" intro="intro" />)

      expect(screen.getByAltText(image)).toBeInTheDocument()
    })
  })
})
