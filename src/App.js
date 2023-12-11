import React from "react"
import "./App.css"
import { Hero, Biscuit, Work, Cool } from "./components"
import { content } from "./fixtures/content"

export const App = () => {
  const heroContent = content.hero
  const biscuitContent = content.biscuit
  const coolContent = content.cool

  return (
    <main className="page-section">
      <Hero {...heroContent} />
      <Biscuit {...biscuitContent} />
      <Work />
      <Cool {...coolContent} />
    </main>
  )
}
