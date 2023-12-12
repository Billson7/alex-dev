import React, { ReactElement } from "react"
import "./App.css"
import { Hero, Biscuit, Work, Cool } from "./components"
import { content } from "./fixtures/content"
import type { BasicContent } from "../types"

export const App = (): ReactElement => {
  const heroContent: BasicContent = content.hero
  const biscuitContent: BasicContent = content.biscuit
  const workContent: BasicContent = content.work
  const coolContent: BasicContent = content.cool

  return (
    <main className="page-section">
      <Hero {...heroContent} />
      <Biscuit {...biscuitContent} />
      <Work {...workContent} />
      <Cool {...coolContent} />
    </main>
  )
}
