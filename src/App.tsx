import React, { type FC } from "react"
import "./App.css"
import { Hero, Biscuit, Work, Cool } from "./components"
import { getContent } from "./selectors/content-selector"
import { content } from "./fixtures/content"

export const App: FC = () => {
  const { heroContent, biscuitContent, workContent, coolContent } =
    getContent(content)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
      } else {
        entry.target.classList.remove("is-visible")
      }
    })
  })

  const section = document.querySelectorAll(".is-hidden");
  section.forEach((el) => observer.observe(el));

  return (
    <main className="page-section">
      <Hero {...heroContent} />
      <Biscuit {...biscuitContent} />
      <Work {...workContent} />
      <Cool {...coolContent} />
    </main>
  )
}
