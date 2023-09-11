import React from "react"
import "./App.css"
import { Hero, Biscuit, Work, Cool } from "./components"

export const App = () => (
  <main className="page-section">
    <Hero />
    <Biscuit />
    <Work />
    <Cool />
  </main>
)
