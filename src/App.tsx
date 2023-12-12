import React, { ReactElement } from "react"
import "./App.css"
import { Hero, Biscuit, Work, Cool } from "./components"
import { getContent } from "./content-selector"

export const App = (): ReactElement => {
  const { heroContent, biscuitContent, workContent, coolContent } = getContent()

  return (
    <main className="page-section">
      <Hero {...heroContent} />
      <Biscuit {...biscuitContent} />
      <Work {...workContent} />
      <Cool {...coolContent} />
    </main>
  )
}
