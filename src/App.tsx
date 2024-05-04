import React, { type FC } from "react"
import "./App.css"
import { Hero, Biscuit, Work, Cool } from "./components"
import { getContent } from "./selectors/content-selector"
import { content } from "./fixtures/content"

export const App: FC = () => {
  const { heroContent, biscuitContent, workContent, coolContent } =
    getContent(content)

  return (
    <main className="page-section">
      <Hero {...heroContent} />
      <Biscuit {...biscuitContent} />
      <Work {...workContent} />
      <Cool {...coolContent} />
    </main>
  )
}
