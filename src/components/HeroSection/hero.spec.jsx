import React from "react"
import { render, screen } from "@testing-library/react"
import { Hero } from "./"

describe("Hero Section", () => {

  test("renders Hero section correctly", () => {
    const { container } = render(<Hero />)
    
    expect(container).toMatchSnapshot()
  })


  test("renders Hero section heading", () => {
    render(<Hero />)
    
    expect(screen.getByTestId('profile-heading')).toBeInTheDocument();
  })

  test("renders Hero section caption", () => {
    render(<Hero />)
    
    expect(screen.getByTestId('profile-caption')).toBeInTheDocument();
  })

  test("renders Hero section intro", () => {
    render(<Hero />)
    
    expect(screen.getByTestId('profile-caption')).toBeInTheDocument();
  })

})
