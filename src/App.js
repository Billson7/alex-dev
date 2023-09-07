import React from "react"
import "./App.css"
import { Hero, Biscuit, Work } from "./components"

export const App = () => (
  <main className="page-section">
    <Hero />
    <Biscuit />
    <Work />
    <section className="section section-cool">
      <div className="flex-row">cool section</div>
    </section>
  </main>
)
