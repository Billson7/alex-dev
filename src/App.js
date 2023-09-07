import React from "react"
import "./App.css"
import { Hero } from "./components"

export const App = () => (
  <main className="page-section">
    <Hero />
    <section className="section section-biscuit">
      <div className="flex-row">biscuit section</div>
    </section>
    <section className="section section-work">
      <div className="flex-row">work section</div>
    </section>
    <section className="section section-cool">
      <div className="flex-row">cool section</div>
    </section>
  </main>
)
