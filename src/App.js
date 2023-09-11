import React from "react"
import "./App.css"
import { Hero, Biscuit, Work, Cool } from "./components"
import { Content } from "./fixtures/content"

export const App = () => {
  // ---------- to go into a selector as it gets bigger -------
  const { content } = Content.data
  const heroContent = content.hero
  // ----------------------------------------------------------

  return (
    <main className="page-section">
      <Hero {...heroContent} />
      <Biscuit />
      <Work />
      <Cool />
    </main>
  )
}
